import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { Services } from "@/components/home/Services"
// import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import ContactForm from "@/components/shared/ContactForm"


const partners = [
  {
    name: "Renishaw",
    logo: "/logos/partners/renishaw.png",
    url: "https://www.renishaw.com/",
  },
  {
    name: "Mazak",
    logo: "/logos/partners/mazak.svg",
    url: "https://www.mazakusa.com/",
  },
  // Add more partners as needed
]

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* <FeaturedProducts /> */}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              {/* Industrial frame for title */}
              <div className="absolute inset-0 border-2 border-brand-blue/20" />
              <div className="absolute left-0 top-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute left-0 bottom-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute right-0 bottom-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
              
              <h2 className="relative px-12 py-6">
                <span className="block text-5xl font-bold text-brand-blue tracking-tight sm:text-6xl">
                  Trusted Partnerships
                </span>
                
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
              </h2>
            </div>
            <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
              We partner with industry-leading manufacturers to deliver exceptional quality and innovation in manufacturing solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center p-8 rounded-xl border border-gray-200 
                  bg-white shadow-sm hover:shadow-md hover:border-brand-blue/30 
                  transition-all duration-300 ease-in-out"
              >
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full max-w-[200px] h-[80px] object-contain filter group-hover:brightness-110"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-brand-white">
        <div className="max-w-7xl mx-auto px-4">
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