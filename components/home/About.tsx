export function About() {
  return (
    <section className="relative">
      {/*divider */}
      <div className="absolute -top-16 left-0 right-0 overflow-hidden rotate-180 fill-gray-600 transform-skew-y-8">
        <svg
          className="block w-full h-16"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0,0 L1200,0 L0,120 L0,0 Z"></path>
        </svg>
      </div>
        <div className="overflow-hidden fill-gray-600">
            <div className="mx-auto max-w-6xl px-6 py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Column One</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Add your descriptive text here. Keep it concise and informative.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Column Two</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Provide supporting details, features, or highlights.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900">Column Three</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">
                            Wrap up with a summary, callout, or next steps.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
} 