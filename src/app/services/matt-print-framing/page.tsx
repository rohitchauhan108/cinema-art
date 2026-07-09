"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Animation Presets
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export default function MattPrintFramingPage() {
  return (
    <>
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden bg-white">
        {/* Vertical Text */}
        <motion.div 
          initial={{ opacity: 0, y: "-40%" }}
          animate={{ opacity: 1, y: "-50%" }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute left-2 md:left-4 top-1/2 z-20 pointer-events-none hidden md:block"
          style={{ transform: "translateY(-50%)" }}
        >
          <span
            className="font-space tracking-[0.6em] text-[10px] font-bold text-gray-800"
            style={{
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
            }}
          >
            Fine Art Printing & Framing
          </span>
        </motion.div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="flex flex-col"
            >
              <motion.h1 
                variants={fadeInLeft}
                className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black leading-none tracking-tighter uppercase text-[#111]"
              >
                Velvet <span className="text-[#FF0000]">///</span>
              </motion.h1>

              <motion.h1 
                variants={fadeInLeft}
                className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black leading-none tracking-tighter uppercase text-[#111] md:ml-[5vw]"
              >
                Matt <span className="text-[#FF0000]">///</span>
              </motion.h1>

              <motion.h1
                variants={fadeInLeft}
                className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black leading-none tracking-tighter uppercase text-transparent md:ml-[10vw]"
                style={{ WebkitTextStroke: "2px #111" }}
              >
                Absorb
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="mt-12 md:mt-20 max-w-2xl border-l-2 border-[#FF0000] pl-6 md:pl-10 md:ml-[5vw]"
            >
              <p className="font-space text-sm md:text-base leading-relaxed text-gray-800 uppercase font-medium">
                Engineered for zero glare and deep light absorption. Our ultra-matte 
                framing setups bring out an organic tactile density meant for high-end 
                art galleries, deep-tonal black & whites, and intimate exhibition spacing.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Hero Images */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-5 grid grid-cols-12 gap-4 relative h-[450px] md:h-[550px] w-full"
          >
            <motion.div 
              variants={scaleIn}
              className="col-span-8 h-full bg-zinc-100 rounded-sm overflow-hidden relative border border-zinc-200"
            >
              <img 
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=800" 
                alt="Matte Texture Base"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <div className="col-span-4 flex flex-col gap-4 h-full justify-between">
              <motion.div 
                variants={scaleIn}
                className="h-[48%] bg-zinc-100 rounded-sm overflow-hidden border border-zinc-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=500" 
                  alt="Deep Shadows Art"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              <motion.div 
                variants={scaleIn}
                className="h-[48%] bg-zinc-100 rounded-sm overflow-hidden border border-zinc-200"
              >
                <img 
                  src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=500" 
                  alt="Paper Stock Texture"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. MATT FINISH SECTION */}
      <section className="py-24 px-6 md:px-16 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-4">// 01 / ABSOLUTE MATTE</span>
            <h2 className="font-syncopate text-3xl md:text-4xl font-black uppercase text-zinc-950 mb-6">Velvet Smooth</h2>
            <p className="font-space text-sm md:text-base text-zinc-600 leading-relaxed uppercase">
              Our absolute matte finish eliminates distracting ambient reflections entirely. Light is evenly dispersed across the substrate surface, preserving intricate skin tones, granular charcoal shadows, and smoky, painterly gradients.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="h-80 bg-zinc-200 overflow-hidden relative border border-zinc-300"
          >
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800" 
              alt="Matte Surface Composition" 
              className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. ULTRA COTTON RAG PRINT SECTION */}
      <section className="py-24 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="order-2 md:order-1 h-80 bg-zinc-100 overflow-hidden border border-zinc-200"
          >
            <img 
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800" 
              alt="Textured Museum Paper" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="order-1 md:order-2 md:pl-12"
          >
            <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-4">// 02 / COTTON RAG</span>
            <h2 className="font-syncopate text-3xl md:text-4xl font-black uppercase text-zinc-950 mb-6">Textured Rag</h2>
            <p className="font-space text-sm md:text-base text-zinc-600 leading-relaxed uppercase">
              Printed exclusively on 310gsm heavy-density cotton cellulose substrates. Raw fiber tooth profiles catch natural atmosphere profiles, producing an organic depth impossible to duplicate on digital displays.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. CONSERVATION FRAMING SECTION */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-4">// 03 / ANTI-REFLECTIVE ARCHITECTURE</span>
            <h2 className="font-syncopate text-3xl md:text-4xl font-black uppercase text-white mb-6">Invisible Glass</h2>
            <p className="font-space text-sm md:text-base text-zinc-400 leading-relaxed uppercase">
              Encased using museum-grade Optium acrylic glazing layers. Completely non-reflective and scratch-resistant coatings allow viewers to experience intense artwork dynamics with absolutely zero glare interface barriers.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            className="h-80 bg-zinc-800 overflow-hidden border border-zinc-700 p-6 flex items-center justify-center"
          >
            <div className="border-[12px] border-white w-full h-full overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?q=80&w=600" 
                alt="Matte Framed Presentation" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. LAB MATTE PHILOSOPHY SECTION */}
      <section className="py-28 px-6 md:px-16 bg-white text-zinc-950 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-6">// 04 / ARTISAN TRADITION</span>
          <h2 className="font-syncopate text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
            Pure Raw Reality.
          </h2>
          <p className="font-space text-base md:text-lg text-zinc-600 leading-loose uppercase max-w-2xl">
            We isolate visual essence from artificial sheen. Our matte lab process strips out high-frequency glare pollution to return artworks back to tangible, authentic pigment purity.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}