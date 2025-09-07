import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { Services } from "@/components/home/Services"
// import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import ContactForm from "@/components/shared/ContactForm"
import Partners from "@/components/home/Partners"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
        <Partners />
      {/* <FeaturedProducts /> */}
      
      <section className="bg-brand-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <div className="absolute inset-0 border-2 border-brand-blue/20" />
              <div className="absolute left-0 top-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute left-0 bottom-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute right-0 bottom-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
              
              <h2 className="relative px-12 py-6">
                <span className="block text-5xl font-bold text-brand-blue tracking-tight sm:text-6xl">
                  Contact Us
                </span>
                <span className="mt-4 block text-xl text-gray-600 font-medium tracking-wide">
                  Let's Start a Conversation
                </span>
                
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg h-[500px]">
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

            <div>
              <ContactForm 
                title="" 
                subtitle="Ready to improve your industrial equipment performance? Get in touch with us today."
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}