import {Button} from "@/components/ui/button";
import Link from "next/link";

export function About() {
    return (
        <section className="relative ">
            {/*divider */}
            <div
                className="absolute -top-16 left-0 right-0 overflow-hidden rotate-180 fill-black transform-skew-y-8">
                <svg
                    className="block w-full h-16"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0,0 L1200,0 L0,120 L0,0 Z"></path>
                </svg>
            </div>
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                    maskImage:
                        "radial-gradient(ellipse at center, black 40%, transparent 100%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 40%, transparent 100%)",
                }}
            >
                <div className="absolute left-1/2 top-24 sm:top-24 md:top-1/4 -translate-x-1/2 -translate-y-1/2">
                    <img
                        src="/logos/tpinbg.png"
                        alt="Company logo"
                        className="w-100 h-auto opacity-30"
                    />
                </div>
            </div>
            <div className="overflow-hidden bg-black pt-20">
                <div className="mx-auto max-w-6xl px-10 pb-36 mt-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/40">
                        <div className="md:px-14 pb-10">
                            <h2 className="text-white">SERVICE</h2>
                            <p className="mt-2 text-white">
                                Manufacturer-certified technicians deliver 24/7 technical support, expert emergency repairs, and precision calibrations.
                            </p>
                            <br></br>
                            {/* CTA Button */}
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="
                px-8 py-6
                text-base font-bold
                shadow-xl hover:shadow-lg
                transform scale-100 hover:scale-105
                transition-all duration-200
                border-2 border-white
                text-white hover:text-black
                bg-black hover:bg-white
                rounded-md
                whitespace-nowrap
                "
                            >
                                <Link href="/service">
                                    Learn More
                                </Link>
                            </Button>
                        </div>

                        <div className="md:px-14 pb-10">
                            <h2 className="text-white">SUPPORT</h2>
                            <p className="mt-2 text-white">
                                Rare part sourcing, high-quality consumables, custom 3D-printed components, and personalized maintenance packages.
                            </p>
                            <br></br>
                            {/* CTA Button */}
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="
                px-8 py-6
                text-base font-bold
                shadow-xl hover:shadow-lg
                transform scale-100 hover:scale-105
                transition-all duration-200
                border-2 border-white
                text-white hover:text-black
                bg-black hover:bg-white
                rounded-md
                whitespace-nowrap
                "
                            >
                                <Link href="/#">
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                        <div className="md:px-14 pb-10">
                            <h2 className="text-white">SUPPLY</h2>
                            <p className="mt-2 text-white">
                                An extensive range of precision machines, advanced technology from world class builders to maximize your productivity.
                            </p>
                            <br></br>
                            {/* CTA Button */}
                            <Button
                                asChild
                                variant="outline"
                                size="lg"
                                className="
                px-8 py-6
                text-base font-bold
                shadow-xl hover:shadow-lg
                transform scale-100 hover:scale-105
                transition-all duration-200
                border-2 border-white
                text-white hover:text-black
                bg-black hover:bg-white
                rounded-md
                whitespace-nowrap
                "
                            >
                                <Link href="/#">
                                    Learn More
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 overflow-hidden rotate-180 fill-white transform-skew-y-8">
                <svg
                    className="block w-full h-16"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M0,0 L1200,0 L1200,120 L0,0 Z"></path>
                </svg>
            </div>
        </section>

    )
} 