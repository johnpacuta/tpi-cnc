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

  const page1 = pdfDoc.addPage([612, 792]); // US Letter: 8.5x11 at 72dpi
  const margin = 50;

  let y = 792 - margin;

  const drawText = (text: string, opts?: { bold?: boolean; size?: number }) => {
    const size = opts?.size ?? 11;
    const useFont = opts?.bold ? fontBold : font;
    page1.drawText(text, { x: margin, y, size, font: useFont, color: rgb(0, 0, 0) });
    y -= size + 6;
  };

  // Title
  page1.drawText('TPI CNC Pre-Installation Form', {
    x: margin,
    y,
    size: 18,
    font: fontBold,
    color: rgb(0, 0, 0),
  });
  y -= 28;

  drawText(`Submitted: ${new Date().toLocaleString()}`, { size: 10 });
  y -= 8;

  drawText('Form Data', { bold: true, size: 12 });
  y -= 6;

  const keys = Object.keys(fields)
    .filter((k) => k !== 'customerSignature')
    .sort();

  for (const key of keys) {
    const value = fields[key] ?? '';
    // simple wrapping-ish: just truncate long lines to keep it safe
    const line = `${key}: ${value}`.slice(0, 160);
    drawText(line, { size: 10 });
    if (y < margin + 140) break; // avoid running into bottom/signature area
  }

  // Signature box
  y -= 8;
  drawText('Customer Signature (penned):', { bold: true, size: 11 });

  const sigX = margin;
  const sigY = margin + 40;
  const sigW = 320;
  const sigH = 90;

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

  // Page 2: TPI Authorization (blank fields)
  const page2 = pdfDoc.addPage([612, 792]);
  let y2 = 792 - margin;

  const draw2 = (text: string, opts?: { bold?: boolean; size?: number }) => {
    const size = opts?.size ?? 11;
    const useFont = opts?.bold ? fontBold : font;
    page2.drawText(text, { x: margin, y: y2, size, font: useFont, color: rgb(0, 0, 0) });
    y2 -= size + 10;
  };

  draw2("TPI Authorization (to be completed by TPI after submission)", { bold: true, size: 14 });
  y2 -= 4;
  draw2(
    'This section is intentionally left blank on the website form. TPI will complete it after the customer submission is received.',
    { size: 11 }
  );
  y2 -= 14;

  const line = '______________________________________________';
  draw2('TPI Representative Name (Print):', { bold: true, size: 11 });
  draw2(line, { size: 11 });

  draw2('Title:', { bold: true, size: 11 });
  draw2(line, { size: 11 });

  draw2('Date:', { bold: true, size: 11 });
  draw2(line, { size: 11 });

  draw2('Signature (penned):', { bold: true, size: 11 });
  draw2(line, { size: 11 });

  const pdfBytes = await pdfDoc.save();
  return Buffer.from(pdfBytes);
}

export async function submitPreInstallationForm(formData: FormData) {
  try {
    const fields = formDataToObject(formData);

    const pdfBuffer = await buildPdfBuffer(fields);
    const filename = `pre-installation-${Date.now()}.pdf`;

    await sgMail.send({
      to: 'john@tpicnc.com',
      from: process.env.SENDFROM_EMAIL!,
      subject: `Pre-Installation Form Submission - ${fields.companyName || fields.contactName || 'New Submission'}`,
      text: 'A new Pre-Installation form was submitted. The completed form is attached as a PDF.',
      replyTo: fields.contactEmail ? { email: fields.contactEmail } : undefined,
      attachments: [
        {
          content: pdfBuffer.toString('base64'),
          filename,
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