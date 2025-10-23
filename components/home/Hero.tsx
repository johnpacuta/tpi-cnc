import { Button } from "@/components/ui/button"
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden mt-16">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="object-cover object-center w-full h-full"
        >
          <source src="/videos/herovideo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="flex flex-col items-start text-left bg-black/40 backdrop-blur-sm border border-white/20 rounded-xl shadow-lg px-8 py-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-shadow-lg">
            <span className="text-white">
            Maximizing Performance
            </span>
            <span className="block mt-2 text-brand-blue">
              Minimizing Downtime
            </span>
          </h1>
          
          <p className="mt-8 text-xl md:text-2xl text-white max-w-2xl leading-relaxed font-medium drop-shadow-lg">
            Supporting your Industry from Industrial Service and Supply to Integration – We’ve Got You Covered
          </p>

          {<div className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button asChild
              size="lg" 
              className="
                px-8 py-7 
                text-base font-bold
                shadow-lg hover:shadow-xl 
                transform hover:scale-105
                transition-all duration-200
                bg-brand-blue hover:bg-brand-blue/90
                rounded-md
                border-2 border-brand-blue/20
                whitespace-nowrap
                text-black hover:text-white
              "
            >
                <Link href="tel:+15195638900">Call Now →</Link>
            </Button>
            <Button asChild
              variant="outline" 
              size="lg"
              className="
                px-8 py-7
                text-base font-bold
                shadow-lg hover:shadow-xl
                transform hover:scale-105
                transition-all duration-200
                border-2 border-white
                text-primary hover:text-white
                hover:bg-white/10
                rounded-md
                whitespace-nowrap
              "
            >
              <Link href="/about">Learn More →</Link>
            </Button>
          </div> }

          {/*/<div className="mt-16 flex gap-8 items-center"> */}
            {/*Optional: Add trust indicators, stats, or partner logos here */}
            {/* Example:
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Trusted by 500+ Companies</span>
            </div>
            */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}