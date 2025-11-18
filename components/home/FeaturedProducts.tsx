'use client'

import { ArrowRight } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import Link from 'next/link'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/navigation'

const featuredProducts = [
  {
    id: 1,
    name: 'CNC Milling Machine X2000',
    description: 'Revolutionary 5-axis milling machine delivering unmatched precision',
    image: '/products/cnc-mill.jpg',
    slug: 'cnc-milling-machine-x2000'
  },
  {
    id: 2,
    name: 'Industrial Lathe Pro',
    description: 'Heavy-duty lathe with advanced control systems',
    image: '/products/lathe.jpg',
    slug: 'industrial-lathe-pro'
  },
  {
    id: 3,
    name: 'Automated Tool Changer',
    description: '24-position tool changer with rapid exchange system',
    image: '/products/robot-arm.jpg',
    slug: 'automated-tool-changer'
  }
]

export function FeaturedProducts() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-primary/10 to-white">
      {/* Enhanced industrial pattern overlay */}
      <div className="absolute inset-0">
        {/* Primary pattern */}
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          transform: 'scale(1.5)'
        }} />
        {/* Secondary geometric pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
        }} />
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Enhanced top decoration */}
      <div className="absolute top-0 left-0 right-0">
        <div className="h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
        <div className="h-px bg-gradient-to-r from-accent via-primary to-secondary opacity-50 transform -translate-y-1" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block relative">
            {/* Industrial frame for title */}
            <div className="absolute inset-0 border-2 border-primary/20" />
            <div className="absolute left-0 top-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute left-0 bottom-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute right-0 bottom-0 w-4 h-4 border-b-2 border-r-2 border-primary" />
            
            <h2 className="relative px-12 py-6">
              <span className="block text-5xl font-bold text-primary tracking-tight sm:text-6xl">
                Featured Products
              </span>
              <span className="mt-4 block text-xl text-gray-600 font-medium tracking-wide">
                Industry-Leading Machinery
              </span>
              
              {/* Accent line */}
              <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
            </h2>
          </div>
        </div>

        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="py-8"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id}>
                <Link href={`/products/${product.slug}`}>
                  <div className="group bg-white rounded-none overflow-hidden transition-all duration-300 h-[500px] flex flex-col shadow-lg hover:shadow-2xl">
                    {/* Industrial frame effect */}
                    <div className="absolute inset-0 border-2 border-secondary/20 pointer-events-none" />
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary" />
                    <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary" />
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary" />
                    
                    <div className="relative h-64 flex-shrink-0 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Technical overlay pattern */}
                      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                           style={{ 
                             backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")` 
                           }} />
                    </div>

                    <div className="p-6 bg-white flex flex-col flex-grow relative">
                      {/* Left accent bar with gradient */}
                      <div className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-primary via-secondary to-accent" />
                      
                      <div className="pl-6 flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 line-clamp-3">
                          {product.description}
                        </p>
                      </div>

                      <div className="flex justify-end items-center mt-6 pt-4 border-t border-secondary/20 flex-shrink-0">
                        <span className="inline-flex items-center gap-2 text-primary font-semibold px-4 py-2 hover:bg-black/5 group relative">
                          <span className="relative z-10">View Details</span>
                          <ArrowRight className="w-5 h-5 text-primary transform group-hover:translate-x-1 transition-transform" />
                          {/* Button highlight effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Enhanced bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="h-px bg-gradient-to-r from-secondary via-accent to-primary opacity-50 transform translate-y-1" />
        <div className="h-1 bg-gradient-to-r from-accent via-secondary to-primary" />
      </div>
    </section>
  )
} 