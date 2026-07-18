"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa6";

interface SlideItem {
  id: number;
  frameImg: string;
  cameraImg: string;
}

const SLIDES_DATA: SlideItem[] = [
  {
    id: 1,
    frameImg: "/frames1.jpg",
    cameraImg: "/cameras1.jpg",
  },
  {
    id: 2,
    frameImg: "/frames2.jpg",
    cameraImg: "/cameras2.jpg",
  },
  {
    id: 3,
    frameImg: "/frames3.jpg",
    cameraImg: "/cameras3.jpg",
  },
];

const AUTOPLAY_DELAY = 4000;

export default function CleanFullWidthSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES_DATA.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES_DATA.length) % SLIDES_DATA.length);
  }, []);

  const handleImageError = (slideId: number, position: "top" | "bottom") => {
    setErrors((prev) => ({
      ...prev,
      [`${slideId}-${position}`]: true,
    }));
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <div className="relative w-screen overflow-hidden bg-gray-950 select-none left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      
      {/* Main Container Window */}
      <div
        className="group relative w-full h-[700px] overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full cursor-pointer bg-black/30 text-white backdrop-blur-md border border-white/10 hover:bg-white hover:text-gray-900 active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center shadow-2xl"
          aria-label="Previous slide"
        >
          <FaCaretLeft className="text-xl" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-4 rounded-full cursor-pointer bg-black/30 text-white backdrop-blur-md border border-white/10 hover:bg-white hover:text-gray-900 active:scale-95 opacity-0 group-hover:opacity-100 transition-all duration-300 hidden md:flex items-center justify-center shadow-2xl"
          aria-label="Next slide"
        >
          <FaCaretRight className="text-xl" />
        </button>

        {/* Sliding Track */}
        <div
          className="flex h-full w-full transform-gpu will-change-transform transition-transform duration-1000"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {SLIDES_DATA.map((slide) => {
            const hasTopError = errors[`${slide.id}-top`];
            const hasBottomError = errors[`${slide.id}-bottom`];

            return (
              <div key={slide.id} className="w-full h-full shrink-0 flex flex-col">
                
                {/* TOP PANEL: Frames */}
                <div className="relative h-1/2 w-full overflow-hidden bg-gray-900 border-b border-white/5">
                  {hasTopError ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-gray-400 p-4">
                      <span className="text-xl">⚠️</span>
                      <p className="text-xs font-medium mt-2 tracking-wide uppercase">Frames Image Unavailable</p>
                    </div>
                  ) : (
                    <Image
                      src={slide.frameImg}
                      alt="Gallery Presentation Frames"
                      fill
                      priority={slide.id === 1}
                      unoptimized
                      className="object-cover w-full pointer-events-none brightness-[0.95] contrast-[1.02]"
                      onError={() => handleImageError(slide.id, "top")}
                    />
                  )}
                </div>

                {/* BOTTOM PANEL: Cameras */}
                <div className="relative h-1/2 w-full overflow-hidden bg-gray-900">
                  {hasBottomError ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900 text-gray-400 p-4">
                      <span className="text-xl">⚠️</span>
                      <p className="text-xs font-medium mt-2 tracking-wide uppercase">Camera Image Unavailable</p>
                    </div>
                  ) : (
                    <Image
                      src={slide.cameraImg}
                      alt="Gallery Presentation Cameras"
                      fill
                      priority={slide.id === 1}
                      unoptimized
                      className="object-cover pointer-events-none brightness-[0.95] contrast-[1.02]"
                      onError={() => handleImageError(slide.id, "bottom")}
                    />
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none z-10" />

      </div>
    </div>
  );
}