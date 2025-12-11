import ContentSection from "@/app/components/about/ContentSection";
import {GoogleTagManager} from "@next/third-parties/google";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen py-20">
        <GoogleTagManager gtmId="G-7385J6MX2L" />
      <ContentSection 
        title="Privacy Policy" 
        subtitle="Last updated: Jan 2025"
        className="bg-gray-50 py-8"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              At TPI CNC, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside mt-6 text-gray-700 space-y-3 ml-4">
              <li>Contact information (name, email address, phone number)</li>
              <li>Company information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside mt-6 text-gray-700 space-y-3 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Communicate with you about our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Better understand how users access and use our services</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Information Sharing
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell, trade, or otherwise transfer your personally identifiable information to third parties. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as these parties agree to keep this information confidential.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Data Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside mt-6 text-gray-700 space-y-3 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-6 text-gray-700 space-y-3">
              <p className="flex items-center gap-2">
                <span className="font-semibold">Email:</span> info@tpicnc.com
              </p>
              <p className="flex items-center gap-2">
                <span className="font-semibold">Address:</span> 222 Woodland Dr, Harrow, ON N0R 1G0
              </p>
            </div>
          </section>
        </div>
      </ContentSection>
    </main>
  );
}

