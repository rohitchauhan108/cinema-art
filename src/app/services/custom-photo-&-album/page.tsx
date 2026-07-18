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

export default function Page() {
  return (
    <>
      <Navbar />

      {/* 1. HERO SECTION WITH IMAGES ON THE RIGHT */}
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
            Customised Photo Albums & Photo Books
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
                Customised photo's<span className="text-[#FF0000]">///</span>
              </motion.h1>

              <motion.h1 
                variants={fadeInLeft}
                className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black leading-none tracking-tighter uppercase text-[#111] md:ml-[5vw]"
              >
                 & albums  <span className="text-[#FF0000]">///</span>
              </motion.h1>

              <motion.h1
                variants={fadeInLeft}
                className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black leading-none tracking-tighter uppercase text-transparent md:ml-[10vw]"
                style={{ WebkitTextStroke: "2px #111" }}
              >
                  books
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="mt-12 md:mt-20 max-w-2xl border-l-2 border-[#FF0000] pl-6 md:pl-10 md:ml-[5vw]"
            >
              <p className="font-space text-sm md:text-base leading-relaxed text-gray-800 uppercase font-medium">
                CinemaArt Studio architects physical archives for visual legacies.
                We craft custom heirloom photo books and bespoke albums utilizing 
                heavyweight archival papers, handcrafted flat-lay spines, and ultra-premium 
                cover textiles built to outlast generations.
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
            {/* Main Image - Open Premium Layflat Photo Album */}
            <motion.div 
              variants={scaleIn}
              className="col-span-8 h-full bg-gray-100 rounded-sm overflow-hidden relative group border border-gray-200"
            >
              <img 
                src="https://images.pexels.com/photos/8057039/pexels-photo-8057039.jpeg" 
                alt="Open premium handcrafted layflat photo album showcasing seamless panorama prints across pages"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Side Grid Stack */}
            <div className="col-span-4 flex flex-col gap-4 h-full justify-between">
              {/* Top Side - Bookbinding Details */}
              <motion.div 
                variants={scaleIn}
                className="h-[48%] bg-gray-100 rounded-sm overflow-hidden border border-gray-200"
              >
                <img 
                  src="https://images.pexels.com/photos/35481573/pexels-photo-35481573.png" 
                  alt="Close-up of premium leather bound book spine and hand-stitched detailing"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
              {/* Bottom Side - Minimalist Stack of Photo Books */}
              <motion.div 
                variants={scaleIn}
                className="h-[48%] bg-gray-100 rounded-sm overflow-hidden border border-gray-200"
              >
                <img 
                  src="https://media.istockphoto.com/id/2216640727/photo/family-sharing-photo-album-and-cherishing-memories.jpg?b=1&s=612x612&w=0&k=20&c=z7rufwOziqjYSREAWX7J_EYokrQxVVZQhOS9Fib-wXk=" 
                  alt="Sleek minimalist stack of modern cloth-bound custom photo books on a clean workspace"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. GLOSSY FINISH / CHROMATIC INTENSITY SECTION */}
      <section className="py-24 px-6 md:px-16 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-4">// 01 / THE CORE</span>
            <h2 className="font-syncopate text-3xl md:text-4xl font-black uppercase text-zinc-950 mb-6">Chromatic Depth</h2>
            <p className="font-space text-sm md:text-base text-zinc-600 leading-relaxed uppercase">
              Select between ultra-vivid high-gloss inner sheets or deep satin lustres. Our album pages feature high-fidelity paper stocks optimized for dense shadows, absolute black points, and dynamic ranges that replicate digital gallery files perfectly.
            </p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInRight}
            className="h-80 bg-zinc-200 overflow-hidden relative border border-zinc-300"
          >
            {/* Visualizing dynamic rich color layout inside a premium album book */}
            <img 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800" 
              alt="Vivid color abstractions printing perfectly inside a dynamic portfolio photo book layout" 
              className="w-full h-full object-cover mix-blend-multiply opacity-90 hover:scale-105 transition-transform duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. PRINT & PAPER SECTION */}
      <section className="py-24 px-6 md:px-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
            className="order-2 md:order-1 h-80 bg-zinc-100 overflow-hidden border border-zinc-200"
          >
            {/* Fine Art Layflat Book Paper Details */}
            <img 
              src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?q=80&w=800" 
              alt="Inspecting high-end heavyweight cotton rag page textures before custom book compilation" 
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
            <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-4">// 02 / THE MEDIUM</span>
            <h2 className="font-syncopate text-3xl md:text-4xl font-black uppercase text-zinc-950 mb-6">Archival Giclée Pages</h2>
            <p className="font-space text-sm md:text-base text-zinc-600 leading-relaxed uppercase">
              No cheap cardstock or digital press paper. Every page is a verified museum-tier cotton rag or alpha-cellulose substrate printed via a 12-color pigment system, offering an uncompromised tactical experience upon every flip.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. LUXURY BINDING & MATERIALS SECTION */}
      <section className="py-24 px-6 md:px-16 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInLeft}
          >
            <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-4">// 03 / THE ENCLOSURE</span>
            <h2 className="font-syncopate text-3xl md:text-4xl font-black uppercase text-white mb-6">Bespoke Bookbinding</h2>
            <p className="font-space text-sm md:text-base text-zinc-400 leading-relaxed uppercase">
              Enclosed in custom-milled hardwoods, top-grain leathers, or heavy Japanese book cloths. Every spine is bound using true layflat structural geometry, allowing panoramic images to cross seamlessly over pages without gutter loss.
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
              {/* Luxury Custom Presentation Box or Album casing */}
              <img 
                src="https://media.istockphoto.com/id/1140122157/photo/bookbinding-hands-folding.jpg?b=1&s=612x612&w=0&k=20&c=hwmL7BcqPE0-LnW_INtEubCl61UStnhrD498GIT6AC4=" 
                alt="A premium custom handcrafted display container holding luxury editorial photo books" 
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. LAB PHILOSOPHY SECTION */}
      <section className="py-28 px-6 md:px-16 bg-white text-zinc-950 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <span className="font-space text-xs font-bold tracking-widest text-[#FF0000] uppercase block mb-6">// 04 / VISION</span>
          <h2 className="font-syncopate text-4xl md:text-6xl font-black uppercase tracking-tight mb-8">
            Tangible Narratives.
          </h2>
          <p className="font-space text-base md:text-lg text-zinc-600 leading-loose uppercase max-w-2xl">
            Digital files disappear in clouds. Our mission is pure physical permanence. We translate high-resolution data into structural, striking fine-art print artifacts built to withstand time.
          </p>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}