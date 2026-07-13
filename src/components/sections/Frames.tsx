"use client";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";
import Link from "next/link"; // Using Next.js Link component (swap to 'a' tag if not using Next.js)

function Frames() {
  const premiumEase = [0.16, 1, 0.3, 1] as const;

  // Clean, high-contrast text shadow targeting character paths directly
  const microShadow = {
    textShadow:
      "0px 1px 4px rgba(0, 0, 0, 0.8), 0px 2px 10px rgba(0, 0, 0, 0.5)",
  };

  return (
    <section className="bg-background py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Minimal High-End Header */}
        <div className="w-full text-center mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: premiumEase }}
            className="font-syncopate text-2xl md:text-5xl font-bold text-[#111] tracking-tight"
          >
            OUR COLLECTION
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
            className="font-space mt-4 text-gray-600 max-w-xl mx-auto px-6 text-xs md:text-base"
          ></motion.p>
        </div>

        {/* Clean, Equal Split Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1: Cameras */}
          <div className="group relative block bg-zinc-900 rounded-3xl overflow-hidden aspect-4/5 sm:aspect-4/3 md:aspect-square">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <img
                src="cameracollection.png"
                alt="Professional mirrorless camera setup"
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 filter"
              />
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] tracking-widest font-medium py-1.5 px-3.5 rounded-full uppercase">
              Cameras
            </div>

            {/* Bottom Content Area - Starts at black/50, animates to black/70 on hover */}
            <motion.div 
              initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(0px)" }}
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 h-auto flex flex-col justify-end rounded-xl"
            >
              <h3
                style={microShadow}
                className="text-2xl sm:text-3xl font-light text-white tracking-wide mb-3"
              >
                Cameras
              </h3>

              {/* Animated Reveal Description */}
              <p
                style={microShadow}
                className="text-zinc-200 text-sm leading-relaxed max-w-sm transition-all duration-500 ease-out opacity-100 md:opacity-0 md:h-0 md:group-hover:opacity-100 md:group-hover:h-auto md:group-hover:mb-4 overflow-hidden"
              >
                High-resolution full-frame mirrorless models and cinematic
                workhorses built for visual storytellers.
              </p>

              {/* Connected Explore Section Link */}
              <Link
                href="/products"
                className="flex items-center gap-2 text-white font-medium text-sm tracking-wide mt-2 w-fit cursor-pointer"
              >
                <span
                  style={microShadow}
                  className="border-b border-white/40 pb-0.5 transition-colors duration-300 group-hover:border-white"
                >
                  Explore Cameras
                </span>
                <div className="w-7 h-7 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-white group-hover:text-black shadow-lg">
                  <GoArrowUpRight className="text-base transition-transform duration-500 ease-out group-hover:rotate-45" />
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Card 2: Frames */}
          <div className="group relative block bg-zinc-900 rounded-3xl overflow-hidden aspect-4/5 sm:aspect-4/3 md:aspect-square">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
              <img
                src="framescollection.png"
                alt="Modern minimalist art gallery frames on white wall"
                className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-105 filter"
              />
            </div>

            {/* Floating Top Badge */}
            <div className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] tracking-widest font-medium py-1.5 px-3.5 rounded-full uppercase">
              Frames
            </div>

            {/* Bottom Content Area - Starts at black/50, animates to black/70 on hover */}
            <motion.div 
              initial={{ backgroundColor: "rgba(0, 0, 0, 0.5)", backdropFilter: "blur(0px)" }}
              whileHover={{ backgroundColor: "rgba(0, 0, 0, 0.7)", backdropFilter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: premiumEase }}
              className="absolute bottom-0 inset-x-0 p-6 sm:p-8 z-10 h-auto flex flex-col justify-end rounded-xl"
            >
              <h3
                style={microShadow}
                className="text-2xl sm:text-3xl font-light text-white tracking-wide mb-3"
              >
                Frames
              </h3>

              {/* Animated Reveal Description */}
              <p
                style={microShadow}
                className="text-zinc-200 text-sm leading-relaxed max-w-sm transition-all duration-500 ease-out opacity-100  md:h-0 md:group-hover:h-auto md:group-hover:mb-4 overflow-hidden"
              >
                Museum-quality, custom-crafted framing structures designed to
                turn your digital files into physical landmarks.
              </p>

              {/* Connected Explore Section Link */}
              <Link
                href="/services"
                className="flex items-center gap-2 text-white font-medium text-sm tracking-wide mt-2 w-fit cursor-pointer"
              >
                <span
                  style={microShadow}
                  className="border-b border-white/40 pb-0.5 transition-colors duration-300 group-hover:border-white"
                >
                  Explore Frames
                </span>
                <div className="w-7 h-7 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-500 ease-out group-hover:bg-white group-hover:text-black shadow-lg">
                  <GoArrowUpRight className="text-base transition-transform duration-500 ease-out group-hover:rotate-45" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Frames;