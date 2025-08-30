"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";

interface Product {
  title: string;
  image: string;
}

interface ProductSliderProps {
  products: Product[];
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Create an extended array with duplicated items for smooth infinite scroll
  const extendedProducts = [...products, ...products, ...products];

  // Modified auto-slide effect
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          // When we reach the end of the first set, reset to the beginning without animation
          if (nextIndex >= products.length) {
            return 0;
          }
          return nextIndex;
        });
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isPaused, products.length]);

  // Modified navigation functions
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative max-w-6xl mx-auto overflow-hidden px-4"
           onMouseEnter={() => setIsPaused(true)}
           onMouseLeave={() => setIsPaused(false)}>
        {/* Main Slider */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${(currentIndex * 50)}%)`,
            width: `${(products.length * 10)}%`,
          }}
        >
          {products.map((product, idx) => (
            <div 
              key={`${product.title}-${idx}`}
              className="relative h-[400px] flex-shrink-0 w-full px-2 overflow-hidden cursor-pointer group"
              onClick={() => {
                setCurrentIndex(idx);
                setModalOpen(true);
              }}
            >
              <div className="relative w-full h-full bg-white border border-gray-200 rounded-lg">
                <div className="relative w-full h-[85%]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 400px) 100vw, 400px"
                    quality={90}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-[15%] bg-gray-50 border-t border-gray-200 flex items-center justify-center px-4">
                  <h4 className="text-base font-medium text-gray-900 text-center line-clamp-2">
                    {product.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full h-10 w-10 p-0 border border-gray-200"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full h-10 w-10 p-0 border border-gray-200"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Modal View */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-5xl h-[80vh] p-0">
          <DialogTitle asChild>
            <VisuallyHidden>
              Product Image Gallery
            </VisuallyHidden>
          </DialogTitle>
          
          <div className="relative h-full">
            {/* Close button */}
            <Button
              variant="ghost"
              className="absolute right-2 top-2 z-50"
              onClick={() => setModalOpen(false)}
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Modal Image */}
            <div className="relative w-full h-full bg-gray-100">
              <Image
                src={products[currentIndex].image}
                alt={products[currentIndex].title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 1024px) 100vw, 1920px"
                priority
                quality={100}
                unoptimized={true}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
                <h4 className="text-xl font-semibold text-center">
                  {products[currentIndex].title}
                </h4>
              </div>
            </div>

            {/* Modal Navigation Arrows */}
            <Button
              variant="ghost"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
} 