import {Hero} from "@/components/home/Hero"
import {About} from "@/components/home/About"
import ContactForm from "@/components/shared/ContactForm"

export default function Home() {
    return (
        <main>
            <Hero/>
            <About/>
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
                                    <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
                                        Contact Us
                                        <div
                                            className="absolute left-0 right-0 h-[4px] bg-gradient-to-r from-transparent via-accent/90 to-transparent"></div>
                                    </h2>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="grid-cols-1 items-start">
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