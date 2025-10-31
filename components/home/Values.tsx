export function Values() {
    return (
        <section
            className="relative rounded-xl bg-black text-white mx-auto max-w-6xl px-10 md:pl-14 md:pr-10 py-10 mb-5 pb-0 shadow-2xl shadow-black/50">
            {/* content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pb-8">
                <div className="flex items-center justify-center h-full">
                    <img
                        src="/images/Gears.png"
                        alt="Gears of TPI CNC"
                        className="h-3/4 w-auto"
                    />
                </div>


                <div className="space-y-6">
                    <h1 className="text-5xl text-brand-blue">Our Values</h1>
                    <p className="mt-2 text-2xl">
                        We focus on what matters most to our customers and our craft.
                    </p>
                    <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">Customer-First Approach</h2>
                            <p className="text-sm">Putting our customers' needs at the forefront of
                                everything we do</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">Technical Excellence</h2>
                            <p className="text-sm">Maintaining the highest standards in technical
                                expertise</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                      clipRule="evenodd"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">Reliability & Trust</h2>
                            <p className="text-sm">Building lasting relationships through dependable
                                service</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">Continuous Innovation</h2>
                            <p className="text-sm">Staying ahead with the latest industry
                                advancements</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="p-2 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">The Next Generation</h2>
                            <p className="text-sm">Investing in our apprentices with the skills, support, and hands-on
                                experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}