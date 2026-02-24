
'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import ContentSection from "../../components/about/ContentSection";

export default function Forms() {
  const [formData, setFormData] = useState({
    machineModel: '',
    poNumber: '',
    deliveryDate: '',
    companyName: '',
    streetAddress: '',
    postalCode: '',
    provinceState: '',
    contactName: '',
    contactPhone: '',
    contactEmail: '',
    foundationComplete: false,
    foundationLevel: false,
    doorWidth: '',
    doorHeight: '',
    ceilingHeight: '',
    spaceCleared: false,
    integralSpindle: '',
    requiredVoltage: '',
    requiredAmperage: '',
    electricInstalled: false,
    electricGrounded: false,
    electricTested: false,
    electricianCompany: '',
    electricianPhone: '',
    airRequired: '',
    airInstalled: false,
    airTested: false,
    preferredDeliveryDate: '',
    deliveryTime: '',
    deliveryAccess: false,
    riggingCompany: '',
    riggingContact: '',
    riggingPhone: '',
    liftingEquipment: '',
    liftingCapacity: '',
    coolantPurchased: false,
    coolantOnsite: false,
    coolantType: '',
    tpiInstallation: false,
    tpiTraining: false,
    trainingDays: '',
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
    'deliveryDate',
    'companyName',
    'streetAddress',
    'postalCode',
    'provinceState',
    'contactName',
    'contactPhone',
    'contactEmail',
    'doorWidth',
    'doorHeight',
    'ceilingHeight',
    'integralSpindle',
    'requiredVoltage',
    'requiredAmperage',
    'electricianCompany',
    'electricianPhone',
    'airRequired',
    'preferredDeliveryDate',
    'deliveryTime',
    'riggingCompany',
    'riggingContact',
    'riggingPhone',
    'liftingEquipment',
    'liftingCapacity',
    'coolantType',
    'trainingDays',
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
      return typeof val === 'string' ? val.trim().length === 0 : false;
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
      fd.set(key, typeof value === 'boolean' ? (value ? 'yes' : 'no') : String(value ?? ''));
    }
    fd.set('customerSignature', customerSignatureDataUrl);

    const res = await fetch('/api/forms/pre-installation', {
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
        title="Pre-Installation Form"
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
                Enclosed you will find a pre-installation check-off list to aid you in preparing for delivery and installation of your machine. Unless special arrangements have been agreed upon, all pre-installation items must be complete before a factory representative will start installation.
              </p>
              <p className="mb-4">
                If you have any questions or concerns regarding the following pre-installation items, please feel free to contact TPI CNC directly. Thank you for your business,
              </p>
              <p className="text-center font-bold mb-8">THE STAFF AT TPI CNC</p>
            </div>

            <div className="bg-gray-200 border-2 border-gray-800 p-4 text-center font-bold mb-8">
              TPI CNC PRE-INSTALLATION CHECKLIST
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
                    <div>
                      <label className="block font-semibold mb-2">Expected Delivery Date:<RequiredMark /></label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
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

              {/* 1. Foundation */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  1. FOUNDATION
                </h2>
                <p className="mb-4 text-gray-700">
                  All machine tools require some type of foundation. A strong foundation will enhance the machine's capability to perform as expected. Depending upon your application, you may require extra time to modify the existing foundation.
                </p>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="foundationComplete"
                      checked={formData.foundationComplete}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Foundation has been completed per specifications</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="foundationLevel"
                      checked={formData.foundationLevel}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Foundation has been leveled and is ready for machine placement</span>
                  </label>
                </div>
                <div className="mt-4 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm italic">
                    <strong>Foundation Waiver:</strong> If foundation does not match specifications, customer assumes all responsibility for the accuracy, repeatability, and geometric alignment for this machine.
                  </p>
                </div>
              </section>

              {/* 2. Space Requirements */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  2. SPACE REQUIREMENTS
                </h2>
                <p className="mb-4 text-gray-700">
                  Ample space must be reserved for proper installation and operation of your machine tool. This includes all obstacles that may be encountered when rigging the machine: doors, pipes, cranes, light fixtures, etc.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="block font-semibold mb-2">Door Width (inches):<RequiredMark /></label>
                    <input
                      type="text"
                      name="doorWidth"
                      value={formData.doorWidth}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Door Height (inches):<RequiredMark /></label>
                    <input
                      type="text"
                      name="doorHeight"
                      value={formData.doorHeight}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Ceiling Height (feet):<RequiredMark /></label>
                    <input
                      type="text"
                      name="ceilingHeight"
                      value={formData.ceilingHeight}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="spaceCleared"
                    checked={formData.spaceCleared}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600"
                  />
                  <span>Installation area has been cleared and is ready for machine placement</span>
                </label>
              </section>

              {/* 3. Integral Spindle */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  3. INTEGRAL SPINDLE
                </h2>
                <p className="mb-4 text-gray-700">
                  If your machine is equipped with an integral spindle, special handling instructions must be followed.
                </p>
                <label className="block font-semibold mb-2">Does this machine have an integral spindle?<RequiredMark /></label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="integralSpindle"
                      value="yes"
                      checked={formData.integralSpindle === 'yes'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="integralSpindle"
                      value="no"
                      checked={formData.integralSpindle === 'no'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>No</span>
                  </label>
                </div>
              </section>

              {/* 4. Electrical */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  4. ELECTRICAL
                </h2>
                <p className="mb-4 text-gray-700">
                  Most of our machinery operates on 3 phase/220 VAC. The incoming voltage must be between 200 VAC and 235 VAC, or manufacturer's warranties will be void. If your voltage at the machine site does not meet these requirements, a transformer must be used.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-semibold mb-2">Required Voltage:<RequiredMark /></label>
                    <input
                      type="text"
                      name="requiredVoltage"
                      value={formData.requiredVoltage}
                      onChange={handleInputChange}
                      placeholder="e.g., 220V 3-phase"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Required Amperage:<RequiredMark /></label>
                    <input
                      type="text"
                      name="requiredAmperage"
                      value={formData.requiredAmperage}
                      onChange={handleInputChange}
                      placeholder="e.g., 60A"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="electricInstalled"
                      checked={formData.electricInstalled}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Electrical service has been installed to machine location</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="electricGrounded"
                      checked={formData.electricGrounded}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>True earth ground has been installed</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="electricTested"
                      checked={formData.electricTested}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Electrical service has been tested and verified</span>
                  </label>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold mb-2">Electrician Company Name:<RequiredMark /></label>
                    <input
                      type="text"
                      name="electricianCompany"
                      value={formData.electricianCompany}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Electrician Contact Phone:<RequiredMark /></label>
                    <input
                      type="tel"
                      name="electricianPhone"
                      value={formData.electricianPhone}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </section>

              {/* 5. Air */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  5. AIR
                </h2>
                <p className="mb-4 text-gray-700">
                  If your machine requires air, a minimum of 90 PSI must be available at the installation site. It is recommended that ample moisture removal techniques be used to minimize water in the lines.
                </p>
                <label className="block font-semibold mb-2">Does this machine require compressed air?<RequiredMark /></label>
                <div className="flex space-x-6 mb-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="airRequired"
                      value="yes"
                      checked={formData.airRequired === 'yes'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>Yes</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="airRequired"
                      value="no"
                      checked={formData.airRequired === 'no'}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-blue-600"
                    />
                    <span>No</span>
                  </label>
                </div>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="airInstalled"
                      checked={formData.airInstalled}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Compressed air line has been installed to machine location</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="airTested"
                      checked={formData.airTested}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Air pressure has been tested (minimum 90 PSI required)</span>
                  </label>
                </div>
              </section>

              {/* 6. Delivery */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  6. DELIVERY
                </h2>
                <p className="mb-4 text-gray-700">
                  Please be aware that the trucking company will require you to sign a bill-of-lading. Any damage incurred during shipping must be noted in writing. It is recommended that pictures be taken of any and all damage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block font-semibold mb-2">Preferred Delivery Date:<RequiredMark /></label>
                    <input
                      type="date"
                      name="preferredDeliveryDate"
                      value={formData.preferredDeliveryDate}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Delivery Time Window:<RequiredMark /></label>
                    <input
                      type="text"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      placeholder="e.g., 8:00 AM - 5:00 PM"
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="deliveryAccess"
                    checked={formData.deliveryAccess}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600"
                  />
                  <span>Delivery truck will have clear access to loading dock/facility</span>
                </label>
              </section>

              {/* 7. Rigging */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  7. RIGGING
                </h2>
                <p className="mb-4 text-gray-700">
                  The rigging company is responsible for unloading and final placement of the machine. It is very important that the machine be set on the factory-supplied leveling pads at its final destination.
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block font-semibold mb-2">Rigging Company Name:<RequiredMark /></label>
                    <input
                      type="text"
                      name="riggingCompany"
                      value={formData.riggingCompany}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Rigging Contact Name:<RequiredMark /></label>
                      <input
                        type="text"
                        name="riggingContact"
                        value={formData.riggingContact}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Rigging Contact Phone:<RequiredMark /></label>
                      <input
                        type="tel"
                        name="riggingPhone"
                        value={formData.riggingPhone}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Available Lifting Equipment:<RequiredMark /></label>
                      <input
                        type="text"
                        name="liftingEquipment"
                        value={formData.liftingEquipment}
                        onChange={handleInputChange}
                        placeholder="e.g., crane, forklift"
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Lifting Capacity (tons):<RequiredMark /></label>
                      <input
                        type="text"
                        name="liftingCapacity"
                        value={formData.liftingCapacity}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* 8. Coolant */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  8. COOLANT
                </h2>
                <p className="mb-4 text-gray-700">
                  The customer must have purchased coolant and have it on-site before the completion of install. This is required so that our service engineers can test the coolant system of the machine.
                </p>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="coolantPurchased"
                      checked={formData.coolantPurchased}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Coolant has been purchased</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="coolantOnsite"
                      checked={formData.coolantOnsite}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <span>Coolant will be on-site before installation</span>
                  </label>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Coolant Type/Brand:<RequiredMark /></label>
                  <input
                    type="text"
                    name="coolantType"
                    value={formData.coolantType}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </section>

              {/* Installation & Training */}
              <section>
                <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
                  Installation & Training Responsibilities
                </h2>
                <div className="space-y-3 mb-4">
                  <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        name="tpiInstallation"
                        checked={formData.tpiInstallation}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600"
                    />
                    <span>TPI CNC is responsible for installation</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                        type="checkbox"
                        name="tpiTraining"
                        checked={formData.tpiTraining}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-600"
                    />
                    <span>TPI CNC is responsible for training</span>
                  </label>
                </div>
                <div>
                  <label className="block font-semibold mb-2">Number of training days requested:<RequiredMark /></label>
                  <input
                      type="text"
                      name="trainingDays"
                      value={formData.trainingDays}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
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
                <p className="font-bold mb-2">IMPORTANT:</p>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>When all elements of the pre-installation check-off list have been completed for this machine, please contact TPI CNC to schedule installation.</li>
                  <li>To avoid damage to the machine tool, do not attempt to start up or operate the machine without first contacting TPI CNC.</li>
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
                  Submit Pre-Installation Form
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