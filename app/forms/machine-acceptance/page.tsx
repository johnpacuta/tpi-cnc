
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ContentSection from "../../components/about/ContentSection";

export default function Forms() {
  const [formData, setFormData] = useState({
    machineModel: '',
    poNumber: '',
    companyName: '',
    streetAddress: '',
    postalCode: '',
    provinceState: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    additionalNotes: '',
    customerName: '',
    customerTitle: '',
    customerDate: '',
    tpiName: '',
    tpiTitle: '',
    tpiDate: ''
  });

  // All required STRING fields (checkboxes are not included here)
  const requiredKeys: (keyof typeof formData)[] = [
    'machineModel',
    'poNumber',
    'companyName',
    'streetAddress',
    'postalCode',
    'provinceState',
    'contactName',
    'contactPhone',
    'contactEmail',
    'customerName',
    'customerTitle',
    'customerDate',
  ];

  const RequiredMark = () => (
    <span className="ml-2 text-red-600 font-bold">
      * <span className="font-normal">(Required)</span>
    </span>
  );

  const [customerSignatureDataUrl, setCustomerSignatureDataUrl] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isDrawingRef = useRef(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const getCanvasPoint = (e: PointerEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: ((e.clientX - rect.left) / rect.width) * canvas.width,
      y: ((e.clientY - rect.top) / rect.height) * canvas.height,
    };
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setCustomerSignatureDataUrl('');
  };

  const syncSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    setCustomerSignatureDataUrl(canvas.toDataURL('image/png'));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set a consistent internal resolution for the PDF image
    canvas.width = 900;
    canvas.height = 250;

    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#111';

    const onPointerDown = (e: PointerEvent) => {
      isDrawingRef.current = true;
      canvas.setPointerCapture(e.pointerId);
      const p = getCanvasPoint(e, canvas);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDrawingRef.current) return;
      const p = getCanvasPoint(e, canvas);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    };

    const onPointerUp = () => {
      if (!isDrawingRef.current) return;
      isDrawingRef.current = false;
      syncSignature();
    };

    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    canvas.addEventListener('pointerleave', onPointerUp);

    return () => {
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      canvas.removeEventListener('pointerleave', onPointerUp);
    };
  }, []);

  const signatureIsEmpty = useMemo(() => !customerSignatureDataUrl, [customerSignatureDataUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const missing = requiredKeys.filter((k) => {
      const val = formData[k];
      return val.trim().length === 0;
    });

    if (missing.length > 0) {
      alert(`Please complete all required fields:\n\n${missing.join('\n')}`);
      return;
    }

    if (!customerSignatureDataUrl) {
      alert('Please provide a penned signature before submitting.');
      return;
    }

    const fd = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      fd.set(key, String(value ?? ''));
    }
    fd.set('customerSignature', customerSignatureDataUrl);

    const res = await fetch('/api/forms/machine-acceptance', {
      method: 'POST',
      body: fd,
    });

    let result: any = null;
    try {
      result = await res.json();
    } catch {
      // ignore non-json responses
    }

    if (res.ok && result?.success) {
      alert('Form submitted successfully!');
    } else {
      alert('Sorry—there was a problem submitting the form. Please try again.');
    }
  };

  return (
    <main className="min-h-screen pt-20 py-4">
      <ContentSection
        title="Machine Installation Acceptance Form"
        subtitle="TPI CNC Machine Tool Installation Checklist"
      >
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {/* Introduction */}
            <div className="mb-8 text-gray-700">
              <p className="mb-4"><strong>Greetings,</strong></p>
              <p className="mb-4">
                We at <strong>TPI CNC</strong> look forward to serving your company for many years through support and service of your machine investments. Our factory-trained staff of sales, service, and applications personnel are always ready to assist you with any questions you may have regarding your recent purchase.
              </p>
              <p className="mb-4">
                Enclosed you will find a Machine Installation Acceptance check-off list to aid you in finalizing the delivery and installation of your machine. Unless special arrangements have been agreed upon, all machine installation items must be complete before a factory representative will start installation.
              </p>
              <p className="mb-4">
                If you have any questions or concerns regarding the following machine installation items, please feel free to contact TPI CNC directly. Thank you for your business,
              </p>
              <p className="text-center font-bold mb-8">THE STAFF AT TPI CNC</p>
            </div>

            <div className="bg-gray-200 border-2 border-gray-800 p-4 text-center font-bold mb-8">
              TPI CNC MACHINE INSTALLATION ACCEPTANCE CHECKLIST
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Machine Information */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  Machine Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Machine Model/Type:<RequiredMark /></label>
                    <input
                      type="text"
                      name="machineModel"
                      value={formData.machineModel}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Purchase Order Number:<RequiredMark /></label>
                      <input
                        type="text"
                        name="poNumber"
                        value={formData.poNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Company Name:<RequiredMark /></label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Street Address:<RequiredMark /></label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Postal Code / ZIP:<RequiredMark /></label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Province / State:<RequiredMark /></label>
                      <input
                        type="text"
                        name="provinceState"
                        value={formData.provinceState}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Primary Contact Name:<RequiredMark /></label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Contact Phone:<RequiredMark /></label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Contact Email:<RequiredMark /></label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* Additional Notes */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  Additional Notes
                </h2>
                <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleInputChange}
                    rows={5}
                    placeholder="Any additional information, special requirements, or concerns..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </section>

              {/* Important Notice */}
              <div className="bg-red-50 border-l-4 border-red-500 p-6">
                <p className="font-bold mb-2">Warranty Period:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>The warranty period for the machine will commence on the
                    date this document is signed by the customer and will continue for a period of one
                    year from this date.</li>
                  </ul>
              </div>

              {/* Signature Section */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  Authorization
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Customer Signature */}
                  <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
                    <h3 className="text-lg font-bold text-center mb-4">Customer Authorization</h3>

                    <div className="space-y-4">
                      <div>
                        <label className="block font-semibold mb-2">Name:<RequiredMark /></label>
                        <input
                            type="text"
                            name="customerName"
                            value={formData.customerName}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">Title:<RequiredMark /></label>
                        <input
                            type="text"
                            name="customerTitle"
                            value={formData.customerTitle}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">Date:<RequiredMark /></label>
                        <input
                            type="date"
                            name="customerDate"
                            value={formData.customerDate}
                            onChange={handleInputChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block font-semibold mb-2">Signature (draw):<RequiredMark /></label>
                        <div className="border border-gray-300 rounded-lg bg-white">
                          <canvas
                              ref={canvasRef}
                              className="w-full h-32 touch-none"
                          />
                        </div>

                        <div className="flex items-center justify-between mt-2">
                          <button
                              type="button"
                              onClick={clearSignature}
                              className="text-sm underline text-gray-600 hover:text-gray-900"
                          >
                            Clear signature
                          </button>

                          <span className="text-xs text-gray-500">
                            {signatureIsEmpty ? 'No signature yet' : 'Signature captured'}
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </section>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg"
                >
                  Submit Machine Installation Acceptance Form
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="mt-12 pt-6 border-t border-gray-300 text-center text-gray-600">
              <p className="font-bold mb-2">TPI CNC</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}