'use server';

import sgMail from '@sendgrid/mail';
import PDFDocument from 'pdfkit';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

function formDataToObject(formData: FormData) {
  const obj: Record<string, string> = {};
  for (const [key, value] of formData.entries()) obj[key] = String(value);
  return obj;
}

function dataUrlToBuffer(dataUrl?: string) {
  if (!dataUrl) return null;
  const match = dataUrl.match(/^data:(image\/png|image\/jpeg);base64,(.+)$/);
  if (!match) return null;
  return Buffer.from(match[2], 'base64');
}

async function buildPdfBuffer(fields: Record<string, string>) {
  return await new Promise<Buffer>((resolve, reject) => {
    const doc = new PDFDocument({ size: 'LETTER', margin: 50 });
    const chunks: Buffer[] = [];

    doc.on('data', (chunk) => chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    doc.fontSize(18).text('TPI CNC Pre-Installation Form', { align: 'center' });
    doc.moveDown(0.75);

    doc.fontSize(10).fillColor('#444').text(`Submitted: ${new Date().toLocaleString()}`);
    doc.moveDown(1);

    doc.fillColor('#000');
    doc.fontSize(12).text('Form Data', { underline: true });
    doc.moveDown(0.5);

    const keys = Object.keys(fields)
      .filter((k) => k !== 'customerSignature') // we render this as an image below
      .sort();

    for (const key of keys) {
      const value = fields[key] ?? '';
      doc.font('Helvetica-Bold').text(`${key}: `, { continued: true });
      doc.font('Helvetica').text(value);
    }

    // --- Customer penned signature (image) ---
    doc.moveDown(1);
    doc.font('Helvetica-Bold').text('Customer Signature (penned):');
    doc.moveDown(0.5);

    const sigBuffer = dataUrlToBuffer(fields.customerSignature);
    if (sigBuffer) {
      const x = doc.x;
      const y = doc.y;
      const boxWidth = 320;
      const boxHeight = 90;

      doc
        .rect(x, y, boxWidth, boxHeight)
        .lineWidth(1)
        .strokeColor('#999')
        .stroke();

      doc.image(sigBuffer, x + 8, y + 8, {
        fit: [boxWidth - 16, boxHeight - 16],
        align: undefined,
        valign: 'center',
      });

      doc.moveDown(6);
    } else {
      doc.fillColor('#666').font('Helvetica').text('(No signature provided)');
      doc.fillColor('#000');
    }

    // --- TPI Authorization (added ONLY to the generated PDF after submission) ---
    doc.addPage();

    doc.fontSize(16).text("TPI Authorization (to be completed by TPI after submission)", {
      align: 'center',
    });
    doc.moveDown(1);

    doc.fontSize(11).text(
      'This section is intentionally left blank on the website form. TPI will complete it after the customer submission is received.',
      { align: 'left' }
    );

    doc.moveDown(1.5);
    doc.font('Helvetica-Bold').text('TPI Representative Name (Print):');
    doc.font('Helvetica').text('______________________________________________');
    doc.moveDown(1);

    doc.font('Helvetica-Bold').text('Title:');
    doc.font('Helvetica').text('______________________________________________');
    doc.moveDown(1);

    doc.font('Helvetica-Bold').text('Date:');
    doc.font('Helvetica').text('______________________________________________');
    doc.moveDown(1);

    doc.font('Helvetica-Bold').text('Signature:');
    doc.font('Helvetica').text('______________________________________________');

    doc.end();
  });
}

export async function submitPreInstallationForm(formData: FormData) {
  try {
    const fields = formDataToObject(formData);

    const pdfBuffer = await buildPdfBuffer(fields);
    const filename = `pre-installation-${Date.now()}.pdf`;

    await sgMail.send({
      to: 'john@tpicnc.com',
      from: process.env.SENDFROM_EMAIL!, // must be verified in SendGrid
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
  } catch (error) {
    console.error('Error submitting pre-installation form:', error);
    return { success: false, error: 'Failed to submit form' };
  }
}