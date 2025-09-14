import {Hero} from "@/components/home/Hero"
import {About} from "@/components/home/About"
import Services from "../components/home/Services2"
// import { FeaturedProducts } from "@/components/home/FeaturedProducts"
import ContactForm from "@/components/shared/ContactForm"
import Partners from "@/components/home/Partners"

export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
            <Services/>
            <Partners/>
            {/* <FeaturedProducts /> */}

            <section className="bg-brand-white pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <section className={``}>
                            <div className="container mx-auto px-6 w-[100%]">
                                <div className="text-center p-8 md:p-12">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="h-[2px] w-12 bg-brand-blue"></div>
                                        <div className="mx-4">
              <span className="inline-block px-4 py-1 bg-brand-blue text-white text-sm font-medium rounded-full">
                TPI CNC
              </span>
                                        </div>
                                        <div className="h-[2px] w-12 bg-brand-blue"></div>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 relative inline-block">
                                        Contact Us
                                        <div
                                            className="absolute -bottom-2 left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-accent/90 to-transparent"></div>
                                    </h2>
                                </div>
                            </div>
                        </section>

                        <div
                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"/>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="rounded-2xl overflow-hidden shadow-lg h-[500px]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5927.072956063186!2d-82.9126876!3d42.0316751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b200eb2599605%3A0x7004d2ee0f664884!2s222%20Woodland%20Dr%2C%20Harrow%2C%20ON%20N0R%201G0!5e0!3m2!1sen!2sca!4v1736020766336!5m2!1sen!2sca"
                            width="100%"
                            height="100%"
                            style={{border: 0}}
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
            </section>
        </main>
    )
}