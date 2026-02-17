'use client';

import { useState } from 'react';
import ContentSection from "../components/about/ContentSection";

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Form submitted successfully! We will contact you shortly.');
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
                    <label className="block font-semibold mb-2">Machine Model/Type:</label>
                    <input
                      type="text"
                      name="machineModel"
                      value={formData.machineModel}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Purchase Order Number:</label>
                      <input
                        type="text"
                        name="poNumber"
                        value={formData.poNumber}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Expected Delivery Date:</label>
                      <input
                        type="date"
                        name="deliveryDate"
                        value={formData.deliveryDate}
                        onChange={handleInputChange}
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
                    <label className="block font-semibold mb-2">Company Name:</label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Street Address:</label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Postal Code / ZIP:</label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Province / State:</label>
                      <input
                        type="text"
                        name="provinceState"
                        value={formData.provinceState}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Primary Contact Name:</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Contact Phone:</label>
                      <input
                        type="tel"
                        name="contactPhone"
                        value={formData.contactPhone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Contact Email:</label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
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
                    <label className="block font-semibold mb-2">Door Width (inches):</label>
                    <input
                      type="text"
                      name="doorWidth"
                      value={formData.doorWidth}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Door Height (inches):</label>
                    <input
                      type="text"
                      name="doorHeight"
                      value={formData.doorHeight}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Ceiling Height (feet):</label>
                    <input
                      type="text"
                      name="ceilingHeight"
                      value={formData.ceilingHeight}
                      onChange={handleInputChange}
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
                <label className="block font-semibold mb-2">Does this machine have an integral spindle?</label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="integralSpindle"
                      value="yes"
                      checked={formData.integralSpindle === 'yes'}
                      onChange={handleInputChange}
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
                    <label className="block font-semibold mb-2">Required Voltage:</label>
                    <input
                      type="text"
                      name="requiredVoltage"
                      value={formData.requiredVoltage}
                      onChange={handleInputChange}
                      placeholder="e.g., 220V 3-phase"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Required Amperage:</label>
                    <input
                      type="text"
                      name="requiredAmperage"
                      value={formData.requiredAmperage}
                      onChange={handleInputChange}
                      placeholder="e.g., 60A"
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
                    <label className="block font-semibold mb-2">Electrician Company Name:</label>
                    <input
                      type="text"
                      name="electricianCompany"
                      value={formData.electricianCompany}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Electrician Contact Phone:</label>
                    <input
                      type="tel"
                      name="electricianPhone"
                      value={formData.electricianPhone}
                      onChange={handleInputChange}
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
                <label className="block font-semibold mb-2">Does this machine require compressed air?</label>
                <div className="flex space-x-6 mb-4">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="airRequired"
                      value="yes"
                      checked={formData.airRequired === 'yes'}
                      onChange={handleInputChange}
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
                    <label className="block font-semibold mb-2">Preferred Delivery Date:</label>
                    <input
                      type="date"
                      name="preferredDeliveryDate"
                      value={formData.preferredDeliveryDate}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold mb-2">Delivery Time Window:</label>
                    <input
                      type="text"
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      placeholder="e.g., 8:00 AM - 5:00 PM"
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
                    <label className="block font-semibold mb-2">Rigging Company Name:</label>
                    <input
                      type="text"
                      name="riggingCompany"
                      value={formData.riggingCompany}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Rigging Contact Name:</label>
                      <input
                        type="text"
                        name="riggingContact"
                        value={formData.riggingContact}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Rigging Contact Phone:</label>
                      <input
                        type="tel"
                        name="riggingPhone"
                        value={formData.riggingPhone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold mb-2">Available Lifting Equipment:</label>
                      <input
                        type="text"
                        name="liftingEquipment"
                        value={formData.liftingEquipment}
                        onChange={handleInputChange}
                        placeholder="e.g., crane, forklift"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-2">Lifting Capacity (tons):</label>
                      <input
                        type="text"
                        name="liftingCapacity"
                        value={formData.liftingCapacity}
                        onChange={handleInputChange}
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
                  <label className="block font-semibold mb-2">Coolant Type/Brand:</label>
                  <input
                    type="text"
                    name="coolantType"
                    value={formData.coolantType}
                    onChange={handleInputChange}
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
                  <label className="block font-semibold mb-2">Number of training days requested:</label>
                  <input
                    type="text"
                    name="trainingDays"
                    value={formData.trainingDays}
                    onChange={handleInputChange}
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
                        <label className="block font-semibold mb-2">Name (Print):</label>
                        <input
                          type="text"
                          name="customerName"
                          value={formData.customerName}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2">Title:</label>
                        <input
                          type="text"
                          name="customerTitle"
                          value={formData.customerTitle}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-2">Date:</label>
                        <input
                          type="date"
                          name="customerDate"
                          value={formData.customerDate}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
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
              <p className="text-sm">For questions or assistance, please contact us</p>
            </div>
          </div>
        </div>
      </ContentSection>
    </main>
  );
}
