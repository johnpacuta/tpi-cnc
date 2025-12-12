import ContentSection from "@/app/components/about/ContentSection";
import {GoogleTagManager} from "@next/third-parties/google";

export default function TermsAndConditions() {
  return (
    <main className="min-h-screen py-4">
        <ContentSection
        title="Terms & Conditions" 
        subtitle="Last updated: March 2024"
        className="bg-gray-50 py-8"
      >
        <div className="max-w-4xl mx-auto space-y-12">
          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Agreement to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using TPI CNC's website and services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access our services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Use of Services
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are intended for business and professional use. You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
            <ul className="list-disc list-inside mt-6 text-gray-700 space-y-3 ml-4">
              <li>You must provide accurate and complete information when using our services</li>
              <li>You are responsible for maintaining the confidentiality of your account</li>
              <li>You agree not to misuse or attempt to circumvent our systems</li>
              <li>You will not engage in any activity that disrupts our services</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Intellectual Property
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The content, features, and functionality of our website and services are owned by TPI CNC and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              TPI CNC shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Modifications
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes indicates your acceptance of such changes.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of Ontario, Canada, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-primary mb-6 border-b pb-4">
              Contact Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              For any questions about these Terms & Conditions, please contact us at:
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