export function About() {
    return (
        <section className="relative ">
            {/*divider */}
            <div
                className="absolute -top-16 left-0 right-0 overflow-hidden rotate-180 fill-gray-600 transform-skew-y-8">
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
                <div className="absolute left-1/2 top-1/4 -translate-x-1/2 -translate-y-1/2">
      <span
          className="select-none uppercase font-extrabold tracking-widest text-gray-900/5 text-[7rem] md:text-[7rem] leading-none">
        TPI CNC
      </span>
                </div>
            </div>
            <div className="overflow-hidden bg-gray-600 pt-20">
                <div className="mx-auto max-w-6xl px-10 py-16 pb-36 mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/40">
                        <div className="md:px-14">
                            <h2 className="font-semibold text-white">SERVICE</h2>
                            <p className="mt-2 text-white">
                                Expert on-site technicians deliver comprehensive maintenance, emergency repairs, and precision calibrations.
                            </p>
                        </div>

                        <div className="md:px-14">
                            <h2 className="font-semibold text-white">SUPPLY</h2>
                            <p className="mt-2 text-white">
                                Reliable, fast fulfillment of genuine parts, tooling, consumables, and accessories ensures consistent quality and minimized downtime.
                            </p>
                        </div>

                        <div className="md:px-14">
                            <h2 className="font-semibold text-white">SUPPORT</h2>
                            <p className="mt-2 text-white">
                                Responsive, knowledgeable assistance with diagnostics, integration, and workflow optimization.
                            </p>
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