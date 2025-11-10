export function Values() {
    return (
        <section
            className="relative rounded-xl bg-black text-white mx-auto max-w-6xl md:pl-14 md:pr-10 py-10 px-5 mb-5 shadow-2xl shadow-black/50">
            {/* content */}
            <div className="grid grid-cols-1 md:grid-cols-2 items-start">
                <div className="hidden md:flex justify-center self-center">
                    <img
                        src="/images/Gears.png"
                        alt="Gears of TPI CNC"
                        className="w-3/4 h-auto"
                    />
                </div>

                <div className="space-y-6">
                    <h1 className="text-5xl text-brand-blue flex items-start space-x-4 pl-16 pr-4">Our Values</h1>
                    <p className="mt-2 text-xl pl-16 pr-4">
                        We focus on what matters most to our customers and our craft.
                    </p>
                    <div className="flex items-start space-x-2">
                        <div className="p-2 pr-4 rounded-full">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
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

                    <div className="flex items-start space-x-2">
                        <div className="p-2 pr-6 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" overflow="visible">
                                <path xmlns="http://www.w3.org/2000/svg" d="M10.258,2.014C9.468,1.989,8.693,2.292,8.164,2.918L21.518,14.13c1.669,1.402,4.143,1.176,5.545-0.493l-3.039-2.546 l0.863-0.986l-7.316-6.119l-6.53-1.848C10.782,2.045,10.52,2.025,10.258,2.014z M4.799,6.951C4.095,7.793,4.049,8.979,4.552,9.95 c1.771,3.419,2.916,6.079,2.916,6.079l2.265,1.93l-1.511,1.739c0,0-1.925,0.262-2.67,1.15S4.895,23.64,4.895,23.64l5.052,4.23 l5.659-6.709l3.039,2.546c1.402-1.669,1.176-4.184-0.493-5.586l1.684-2.013l-4.025-3.368l-1.684,2.013L4.799,6.951z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">Technical Excellence</h2>
                            <p className="text-sm">Maintaining the highest standards in technical
                                expertise</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-2">
                        <div className="p-2 pr-4 rounded-full">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
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

                    <div className="flex items-start space-x-2">
                        <div className="p-2 pr-6 rounded-full">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" overflow="visible">
                                <path xmlns="http://www.w3.org/2000/svg" d="M 9 3 A 2 2 0 0 0 7 5 L 7 10 L 4.7285156 10 A 2 2 0 0 0 3 9 A 2 2 0 0 0 1 11 A 2 2 0 0 0 3 13 A 2 2 0 0 0 4.7304688 12 L 7 12 L 7 18 L 4.7304688 18 A 2 2 0 0 0 3 17 A 2 2 0 0 0 1 19 A 2 2 0 0 0 3 21 A 2 2 0 0 0 4.7285156 20 L 7 20 L 7 25 A 2 2 0 0 0 9 27 A 2 2 0 0 0 10.226562 26.576172 L 10.289062 26.529297 A 2 2 0 0 0 10.296875 26.521484 L 23.060547 16.691406 A 2 2 0 0 0 23.728516 16 L 25.269531 16 A 2 2 0 0 0 27 17 A 2 2 0 0 0 29 15 A 2 2 0 0 0 27 13 A 2 2 0 0 0 25.271484 14 L 23.730469 14 A 2 2 0 0 0 23.070312 13.310547 L 10.320312 3.5019531 A 2 2 0 0 0 9 3 z M 12 8 C 12.552 8 13 8.448 13 9 L 13 10 L 14 10 C 14.552 10 15 10.448 15 11 C 15 11.552 14.552 12 14 12 L 13 12 L 13 13 C 13 13.552 12.552 14 12 14 C 11.448 14 11 13.552 11 13 L 11 12 L 10 12 C 9.448 12 9 11.552 9 11 C 9 10.448 9.448 10 10 10 L 11 10 L 11 9 C 11 8.448 11.448 8 12 8 z M 10 18 L 14 18 C 14.552 18 15 18.448 15 19 C 15 19.552 14.552 20 14 20 L 10 20 C 9.448 20 9 19.552 9 19 C 9 18.448 9.448 18 10 18 z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">Continuous Innovation</h2>
                            <p className="text-sm">Staying ahead with the latest industry
                                advancements</p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-2">
                        <div className="p-2 pr-4 rounded-full">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                            </svg>
                        </div>
                        <div>
                            <h2 className="mb-1">The Next Generation</h2>
                            <p className="text-sm">Investing in our apprentices with skills, support, and hands-on
                                experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}