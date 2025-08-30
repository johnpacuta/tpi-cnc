export function About() {
  return (
    <section className="relative">
      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>

      <div className="py-20 bg-brand-blue/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block relative mb-12">
              <div className="absolute inset-0 border-2 border-brand-blue/20" />
              <div className="absolute left-0 top-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
              <div className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
              <div className="absolute left-0 bottom-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
              <div className="absolute right-0 bottom-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
              
              <h2 className="relative px-16 py-8">
                <span className="block text-5xl font-bold text-brand-blue tracking-tight sm:text-6xl">
                  What We Do
                </span>
                <span className="mt-6 block text-2xl text-gray-600 font-medium tracking-wide">
                  Customer Focused Industrial Services
                </span>
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
              </h2>
            </div>

            <p className="text-xl leading-relaxed text-gray-600 max-w-3xl mx-auto">
              With over two decades of experience, TPI CNC delivers a customer-first approach 
              to industrial solutions and machining services
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden rotate-180">
        <svg
          className="relative block w-full h-[40px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  )
} 