"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function HeroSection() {
  const slides = [
    {
      img: "/1.webp",
    },
    {
      img: "/2.webp",
    },
    {
      img: "/3.webp",
    },
    {
      img: "/4.webp",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="pt-20 lg:pt-20 w-full font-sans">
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gray-900 shadow-xl">
        
        {/* Background Slides with Fade Transition */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={slide.img}
              alt={`Cinema Art hero slide ${index + 1}`}
              fill
              sizes="100vw"
              preload={index === 0}
              className="object-[cover 10px]"
            />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-[#FF0000] cursor-pointer text-white backdrop-blur-sm border border-white/20 transition shadow-md focus:outline-none"
        >
          <FaChevronLeft className="w-5 h-5" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/30 hover:bg-[#FF0000] cursor-pointer text-white backdrop-blur-sm border border-white/20 transition shadow-md focus:outline-none"
        >
          <FaChevronRight className="w-5 h-5" />
        </button>

      </section>
    </div>
  );
}

export default HeroSection;