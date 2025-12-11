import ContentSection from "../components/about/ContentSection";
import ContactForm from "@/components/shared/ContactForm";
import {GoogleTagManager} from "@next/third-parties/google";

export default function Contact() {
  return (
    <main className="min-h-screen pt-20 py-4">
        <GoogleTagManager gtmId="G-7385J6MX2L" />
      <ContentSection 
        title="Get In Touch" 
        subtitle="We're here to help with all your industrial equipment service needs"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Have questions about our services? Need a quote for your equipment? 
              Our team is ready to assist you with any inquiries you may have.
            </p>
          </div>
          <ContactForm />
        </div>
      </ContentSection>
    </main>
  );
} 