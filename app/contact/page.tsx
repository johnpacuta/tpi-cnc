import ContentSection from "../components/about/ContentSection";
import ContactForm from "@/components/shared/ContactForm";

export default function Contact() {
  return (
    <main className="min-h-screen py-4">
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

          <div className="mt-8 mb-8">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5927.072956063186!2d-82.9126876!3d42.0316751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b200eb2599605%3A0x7004d2ee0f664884!2s222%20Woodland%20Dr%2C%20Harrow%2C%20ON%20N0R%201G0!5e0!3m2!1sen!2sca!4v1736020766336!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <ContactForm />
        </div>
      </ContentSection>
    </main>
  );
} 