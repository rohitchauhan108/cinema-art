import React from "react";
import { FaCameraRetro } from "react-icons/fa";

function HeroSection() {
  return (
    <div className="pt-20 lg:pt-25">
      {" "}
      {/* Replaced large margin with responsive padding */}
      <section className="relative min-h-[85vh] lg:h-screen flex items-center bg-[url('/hero-img.webp')] bg-cover bg-[center_20%] bg-no-repeat">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full py-16 lg:py-0">
          <div className="max-w-2xl text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md font-serif">
              <span>Capture. Create. Reserve.</span>
              <FaCameraRetro className="inline-block ml-5 -rotate-10 text-4xl" />
            </h1>
            <p className="text-base sm:text-xl text-gray-200 font-light leading-relaxed mb-8 drop-shadow">
              Everything you need for photography — from professional cameras
              and lenses to essential accessories, vibrant color printing, and
              beautiful photo framing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/collections">
                <button className="bg-white cursor-pointer text-black font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg text-center">
                  Explore Collection
                </button>
              </a>
              <a href="/contact">
                <button className="border border-white/80 text-white cursor-pointer font-medium px-8 py-3 rounded-full hover:bg-white/10 transition backdrop-blur-sm text-center">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
