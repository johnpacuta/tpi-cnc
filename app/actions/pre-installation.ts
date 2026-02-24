'use server';

import sgMail from '@sendgrid/mail';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function formDataToObject(formData: FormData) {
  const fields: Record<string, string> = {};
  for (const [k, v] of formData.entries()) fields[k] = String(v);
  return fields;
}

function dataUrlToBytes(dataUrl?: string) {
  if (!dataUrl) return null;
  const match = dataUrl.match(/^data:(image\/png|image\/jpeg);base64,(.+)$/);
  if (!match) return null;
  return Buffer.from(match[2], 'base64');
}

async function buildPdfBuffer(fields: Record<string, string>) {
  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const margin = 50;

  let page = pdfDoc.addPage([612, 792]); // US Letter
  let y = 792 - margin;

  const v = (key: string) => (fields[key] ?? '').toString().trim();
  const yn = (key: string) => {
    const raw = v(key).toLowerCase();
    if (raw === 'yes' || raw === 'true' || raw === 'on' || raw === '1') return 'Yes';
    if (raw === 'no' || raw === 'false' || raw === 'off' || raw === '0') return 'No';
    return raw ? raw : 'Not provided';
  };

  const ensureSpace = (needed: number) => {
    if (y < margin + needed) {
      page = pdfDoc.addPage([612, 792]);
      y = 792 - margin;
    }
  };

  const draw = (
    text: string,
    opts?: { bold?: boolean; size?: number; color?: { r: number; g: number; b: number } }
  ) => {
    const size = opts?.size ?? 11;
    const useFont = opts?.bold ? fontBold : font;
    const c = opts?.color ?? { r: 0, g: 0, b: 0 };

    ensureSpace(size + 10);

    page.drawText(text, { x: margin, y, size, font: useFont, color: rgb(c.r, c.g, c.b) });
    y -= size + 6;
  };

  const section = (title: string) => {
    y -= 6;
    draw(title, { bold: true, size: 13, color: { r: 0, g: 0.23, b: 0.48 } });
    y -= 2;
  };

  const line = (label: string, value: string) => {
    draw(`${label} ${value || 'Not provided'}`, { size: 10 });
  };

  draw('Pre-Installation Form Submission', { bold: true, size: 16 });
  draw(`Submitted: ${new Date().toLocaleString()}`, { size: 10 });

  section('Machine Information');
  line('Machine Model/Type:', v('machineModel'));
  line('Purchase Order Number:', v('poNumber'));
  line('Expected Delivery Date:', v('deliveryDate'));

  section('Contact Information');
  line('Company Name:', v('companyName'));
  line('Street Address:', v('streetAddress'));
  line('Postal Code / ZIP:', v('postalCode'));
  line('Province / State:', v('provinceState'));
  line('Primary Contact Name:', v('contactName'));
  line('Contact Phone:', v('contactPhone'));
  line('Contact Email:', v('contactEmail'));

  section('1. Foundation');
  line('Foundation completed per specifications:', yn('foundationComplete'));
  line('Foundation leveled and ready for placement:', yn('foundationLevel'));

  section('2. Space Requirements');
  line('Door Width (inches):', v('doorWidth'));
  line('Door Height (inches):', v('doorHeight'));
  line('Ceiling Height (feet):', v('ceilingHeight'));
  line('Installation area cleared and ready:', yn('spaceCleared'));

  section('3. Integral Spindle');
  line('Integral spindle:', yn('integralSpindle'));

  section('4. Electrical');
  line('Required Voltage:', v('requiredVoltage'));
  line('Required Amperage:', v('requiredAmperage'));
  line('Electrical service installed to location:', yn('electricInstalled'));
  line('True earth ground installed:', yn('electricGrounded'));
  line('Electrical service tested and verified:', yn('electricTested'));
  line('Electrician Company Name:', v('electricianCompany'));
  line('Electrician Contact Phone:', v('electricianPhone'));

  section('5. Air');
  line('Compressed air required:', yn('airRequired'));
  line('Air line installed to machine location:', yn('airInstalled'));
  line('Air pressure tested (min 90 PSI):', yn('airTested'));

  section('6. Delivery');
  line('Preferred Delivery Date:', v('preferredDeliveryDate'));
  line('Delivery Time Window:', v('deliveryTime'));
  line('Clear access for delivery truck:', yn('deliveryAccess'));

  section('7. Rigging');
  line('Rigging Company Name:', v('riggingCompany'));
  line('Rigging Contact Name:', v('riggingContact'));
  line('Rigging Contact Phone:', v('riggingPhone'));
  line('Available Lifting Equipment:', v('liftingEquipment'));
  line('Lifting Capacity (tons):', v('liftingCapacity'));

  section('8. Coolant');
  line('Coolant purchased:', yn('coolantPurchased'));
  line('Coolant on-site before installation:', yn('coolantOnsite'));
  line('Coolant Type/Brand:', v('coolantType'));

  section('Installation & Training Responsibilities');
  line('TPI CNC responsible for installation:', yn('tpiInstallation'));
  line('TPI CNC responsible for training:', yn('tpiTraining'));
  line('Training days requested:', v('trainingDays'));

  section('Additional Notes');
  const notes = v('additionalNotes');
  if (notes) {
    // simple wrap so long notes don't run off the page
    const maxChars = 95;
    for (let i = 0; i < notes.length; i += maxChars) {
      line(i === 0 ? 'Notes:' : ' ', notes.slice(i, i + maxChars));
    }
  } else {
    line('Notes:', '');
  }

  section('Authorization');
  draw('Customer Authorization', { bold: true, size: 12 });
  line('Name:', v('customerName'));
  line('Title:', v('customerTitle'));
  line('Date:', v('customerDate'));

  // --- Signature directly after fields (no overlap) ---
  const sigW = 320;
  const sigH = 90;
  ensureSpace(16 + sigH + 30);

  page.drawText('Signature (pen):', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  y -= 16;

  const sigX = margin;
  const sigY = y - sigH;

  page.drawRectangle({
    x: sigX,
    y: sigY,
    width: sigW,
    height: sigH,
    borderColor: rgb(0.6, 0.6, 0.6),
    borderWidth: 1,
  });

  const sigBytes = dataUrlToBytes(fields.customerSignature);
  if (sigBytes) {
    const isPng = (fields.customerSignature || '').startsWith('data:image/png');
    const sigImg = isPng ? await pdfDoc.embedPng(sigBytes) : await pdfDoc.embedJpg(sigBytes);

    const scaled = sigImg.scaleToFit(sigW - 16, sigH - 16);
    page.drawImage(sigImg, {
      x: sigX + 8,
      y: sigY + 8,
      width: scaled.width,
      height: scaled.height,
    });
  } else {
    page.drawText('(No signature provided)', {
      x: sigX + 10,
      y: sigY + sigH / 2 - 5,
      size: 10,
      font,
      color: rgb(0.4, 0.4, 0.4),
    });
  }

  y = sigY - 20;
  
  // Page 2: TPI Authorization
  const page2 = pdfDoc.addPage([612, 792]);
  let y2 = 792 - margin;

  const drawP2 = (text: string, opts?: { bold?: boolean; size?: number }) => {
    const size = opts?.size ?? 11;
    const useFont = opts?.bold ? fontBold : font;
    page2.drawText(text, { x: margin, y: y2, size, font: useFont, color: rgb(0, 0, 0) });
    y2 -= size + 12;
  };

  drawP2('TPI Authorization (to be completed by TPI after submission)', { bold: true, size: 14 });

  const blank = '______________________________________________';
  drawP2('TPI Representative Name:', { bold: true, size: 11 });
  drawP2(blank, { size: 11 });

  drawP2('Title:', { bold: true, size: 11 });
  drawP2(blank, { size: 11 });

  drawP2('Date:', { bold: true, size: 11 });
  drawP2(blank, { size: 11 });

  drawP2('Signature (draw):', { bold: true, size: 11 });
  drawP2(blank, { size: 11 });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function submitPreInstallationForm(formData: FormData) {
  try {
    const fields = formDataToObject(formData);
    const pdfBuffer = await buildPdfBuffer(fields);

    await sgMail.send({
      to: 'admin@tpicnc.com',
      from: process.env.SENDFROM_EMAIL!,
      subject: `Pre-Installation Form Submission - ${fields.companyName || fields.contactName || 'New Submission'}`,
      text: 'A new Pre-Installation form was submitted. The completed form is attached as a PDF.',
      replyTo: fields.contactEmail ? { email: fields.contactEmail } : undefined,
      attachments: [
        {
          content: pdfBuffer.toString('base64'),
          filename: `pre-installation-${Date.now()}.pdf`,
          type: 'application/pdf',
          disposition: 'attachment',
        },
      ],
    } as any);

    return { success: true };
  } catch (error: any) {
    console.error('submitPreInstallationForm error:', error?.message);
    console.error('SendGrid response body:', error?.response?.body);
    return { success: false, error: error?.message ?? 'Failed to submit form' };
  }
}