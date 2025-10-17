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
                <div className="mx-auto max-w-6xl px-6 py-16 pb-32 mt-10">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div>
                            <h3 className="text-lg font-semibold text-white">Column One</h3>
                            <p className="mt-2 text-sm leading-6 text-white">
                                Add your descriptive text here. Keep it concise and informative.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Column Two</h3>
                            <p className="mt-2 text-sm leading-6 text-white">
                                Provide supporting details, features, or highlights.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-white">Column Three</h3>
                            <p className="mt-2 text-sm leading-6 text-white">
                                Wrap up with a summary, callout, or next steps.
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