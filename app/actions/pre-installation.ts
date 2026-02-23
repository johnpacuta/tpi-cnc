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

  const page1 = pdfDoc.addPage([612, 792]); // letter
  const margin = 50;
  let y = 792 - margin;

  const v = (key: string) => (fields[key] ?? '').toString().trim();
  const yn = (key: string) => {
    const val = v(key).toLowerCase();
    if (val === 'yes' || val === 'true') return 'Yes';
    if (val === 'no' || val === 'false') return 'No';
    return val || 'Not provided';
  };

  const draw = (text: string, opts?: { bold?: boolean; size?: number; color?: { r: number; g: number; b: number } }) => {
    const size = opts?.size ?? 11;
    const useFont = opts?.bold ? fontBold : font;
    const c = opts?.color ?? { r: 0, g: 0, b: 0 };
    page1.drawText(text, { x: margin, y, size, font: useFont, color: rgb(c.r, c.g, c.b) });
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

  draw('TPI CNC Pre-Installation Form', { bold: true, size: 18 });
  draw(`Submitted: ${new Date().toLocaleString()}`, { size: 10, color: { r: 0.25, g: 0.25, b: 0.25 } });
  y -= 4;

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

  section('1. FOUNDATION');
  line('Foundation has been completed per specifications:', yn('foundationComplete'));
  line('Foundation has been leveled and is ready for machine placement:', yn('foundationLevel'));

  draw(
    'Foundation Waiver: If foundation does not match specifications, customer assumes all responsibility for the accuracy, \n'
  + 'repeatability, and geometric alignment for this machine.',
    { size: 9, color: { r: 0.35, g: 0.35, b: 0.35 } }
  );

  section('2. SPACE REQUIREMENTS');
  line('Door Width (inches):', v('doorWidth'));
  line('Door Height (inches):', v('doorHeight'));
  line('Ceiling Height (feet):', v('ceilingHeight'));
  line('Installation area has been cleared and is ready for machine placement:', yn('spaceCleared'));

  section('3. INTEGRAL SPINDLE');
  line('Does this machine have an integral spindle?', v('integralSpindle') || 'Not provided');

  section('4. ELECTRICAL');
  line('Required Voltage:', v('requiredVoltage'));
  line('Required Amperage:', v('requiredAmperage'));
  line('Electrical service has been installed to machine location:', yn('electricInstalled'));
  line('True earth ground has been installed:', yn('electricGrounded'));
  line('Electrical service has been tested and verified:', yn('electricTested'));
  line('Electrician Company Name:', v('electricianCompany'));
  line('Electrician Contact Phone:', v('electricianPhone'));

  section('5. AIR');
  line('Does this machine require compressed air?', v('airRequired') || 'Not provided');
  line('Compressed air line has been installed to machine location:', yn('airInstalled'));
  line('Air pressure has been tested (minimum 90 PSI required):', yn('airTested'));

  section('6. DELIVERY');
  line('Preferred Delivery Date:', v('preferredDeliveryDate'));
  line('Delivery Time Window:', v('deliveryTime'));
  line('Delivery truck will have clear access to loading dock/facility:', yn('deliveryAccess'));

  section('7. RIGGING');
  line('Rigging Company Name:', v('riggingCompany'));
  line('Rigging Contact Name:', v('riggingContact'));
  line('Rigging Contact Phone:', v('riggingPhone'));
  line('Available Lifting Equipment:', v('liftingEquipment'));
  line('Lifting Capacity (tons):', v('liftingCapacity'));

  section('8. COOLANT');
  line('Coolant has been purchased:', yn('coolantPurchased'));
  line('Coolant will be on-site before installation:', yn('coolantOnsite'));
  line('Coolant Type/Brand:', v('coolantType'));

  section('Installation & Training Responsibilities');
  line('TPI CNC is responsible for installation:', yn('tpiInstallation'));
  line('TPI CNC is responsible for training:', yn('tpiTraining'));
  line('Number of training days requested:', v('trainingDays'));

  section('Additional Notes');
  draw(v('additionalNotes') || 'Not provided', { size: 10 });

  section('Authorization');
  draw('Customer Authorization', { bold: true, size: 12, color: { r: 0, g: 0, b: 0 } });
  line('Name (Print):', v('customerName'));
  line('Title:', v('customerTitle'));
  line('Date:', v('customerDate'));

  // --- Signature goes AFTER the fields (no overlap) ---
  const sigW = 320;
  const sigH = 90;

  // Ensure we have room left on the page for the signature label + box
  const requiredSpace = 14 + 8 + sigH + 10; // label + gap + box + padding
  if (y < margin + requiredSpace) {
    // start a fresh page if needed
    const sigPage = pdfDoc.addPage([612, 792]);
    // switch drawing context to the new page
    // (rebind page1 + reset y)
    (page1 as any) = sigPage;
    y = 792 - margin;
  }

  // Label
  page1.drawText('Signature (pen):', {
    x: margin,
    y,
    size: 10,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  y -= 16;

  // Box directly under the label
  const sigX = margin;
  const sigY = y - sigH;

  page1.drawRectangle({
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
    page1.drawImage(sigImg, {
      x: sigX + 8,
      y: sigY + 8,
      width: scaled.width,
      height: scaled.height,
    });
  } else {
    page1.drawText('(No signature provided)', {
      x: sigX + 10,
      y: sigY + sigH / 2 - 5,
      size: 10,
      font,
      color: rgb(0.4, 0.4, 0.4),
    });
  }

  // Move the cursor below the box (in case you add more later)
  y = sigY - 20;

  // Page 2: TPI Authorization (blank fields)
  const page2 = pdfDoc.addPage([612, 792]);
  let y2 = 792 - margin;

  const drawP2 = (text: string, opts?: { bold?: boolean; size?: number }) => {
    const size = opts?.size ?? 11;
    const useFont = opts?.bold ? fontBold : font;
    page2.drawText(text, { x: margin, y: y2, size, font: useFont, color: rgb(0, 0, 0) });
    y2 -= size + 12;
  };

  drawP2('TPI Authorization (to be completed by TPI after submission)', { bold: true, size: 14 });
  drawP2(
    'This section is intentionally left blank on the website form. TPI will complete it after the customer submission is received.',
    { size: 11 }
  );

  const blank = '______________________________________________';
  drawP2('TPI Representative Name:', { bold: true, size: 11 });
  drawP2(blank);
  drawP2('Title:', { bold: true, size: 11 });
  drawP2(blank);
  drawP2('Date:', { bold: true, size: 11 });
  drawP2(blank);
  drawP2('Signature (penned):', { bold: true, size: 11 });
  drawP2(blank);

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function submitPreInstallationForm(formData: FormData) {
  try {
    const fields = formDataToObject(formData);
    const pdfBuffer = await buildPdfBuffer(fields);

    await sgMail.send({
      to: 'john@tpicnc.com',
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