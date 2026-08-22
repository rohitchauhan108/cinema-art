"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const principles = [
  {
    title: "QUALITY OVER QUANTITY",
    description: "We only offer reliable gear and services that truly improve your photos, videos, and daily work, instead of selling clutter you do not need.",
  },
  {
    title: "GUIDANCE FIRST",
    description: "Every creator works differently. We help you choose the right cameras, lenses, audio, and support gear for your exact needs, not just specs.",
  },
  {
    title: "THE FINAL TOUCH",
    description: "From color matching to high-end framing and printing, we care just as much about how your final work looks after you press the shutter.",
  },
];

const capabilities = [
  "Top cameras, lenses, microphones, and support gear",
  "Trusted guidance for Fujifilm, Sony, Canon, and DJI",
  "Hybrid photo and video setups for studios and teams",
  "Fine art printing, display prep, and custom framing",
  "Practical advice for vlogging, portraits, and client shoots",
];

const whoWeServe = [
  {
    title: "CONTENT CREATORS",
    description: "Easy-to-use gear for daily videos, reels, shorts, podcasts, and fast projects.",
  },
  {
    title: "WORKING PROFESSIONALS",
    description: "High-performance cameras and lenses for commercial, portrait, event, and studio work.",
  },
  {
    title: "FILMMAKERS",
    description: "Balanced kits focused on great picture quality, clear audio, and steady movement.",
  },
  {
    title: "COLLECTORS & BUYERS",
    description: "Special services for fine art prints, professional framing, and gallery displays.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-[#FF0000] selection:text-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
           <span className="font-space tracking-[0.6em] text-[10px] font-bold text-gray-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
             ABOUT CINEMAART
           </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h1 className="text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-[#111] leading-none tracking-tighter uppercase">
              IMAGE <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-[#111] leading-none tracking-tighter uppercase md:ml-[5vw]">
              CRAFT <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-transparent leading-none tracking-tighter uppercase md:ml-[10vw]" style={{ WebkitTextStroke: '2px #111' }}>
              PROCESS
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 md:mt-20 max-w-2xl border-l-2 border-[#FF0000] pl-6 md:pl-10 md:ml-[20vw]"
          >
            <p className="font-space text-sm md:text-base leading-relaxed text-gray-800 uppercase font-medium">
              Cinema Art Studio combines great camera gear, expert advice, and professional finishing services in one place. We are here for photographers, filmmakers, and studios who want a true partner, not just a store.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CALLOUTS (RAW STYLE) */}
      <section className="border-y border-[#111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111]">
          <div className="relative p-10 md:p-20 hover:text-white transition-colors duration-500 group cursor-default overflow-hidden">
            <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <div className="relative z-10">
              <p className="font-space text-[10px] font-bold tracking-[0.2em] mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">01 // POSITION</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-500">SHOP AND ADVISORY COMBINED</h2>
              <p className="font-space text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                We bridge the gap between selling high-end gear and offering expert advice so you can move from choosing equipment to creating your final piece with confidence.
              </p>
            </div>
          </div>
          <div className="relative p-10 md:p-20 hover:text-white transition-colors duration-500 group cursor-default overflow-hidden">
            <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <div className="relative z-10">
              <p className="font-space text-[10px] font-bold tracking-[0.2em] mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">02 // DIFFERENCE</p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-500">REAL EXPERTISE WITH EVERY PURCHASE</h2>
              <p className="font-space text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                We care about finding you the right lens or camera sensor, and we care just as much about how your final prints and framing look in the real world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY (BRUTALIST GRID) */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/3">
               <h2 className="text-4xl md:text-6xl font-black text-[#111] leading-[0.9] uppercase sticky top-32">
                 STUDIO<br/>MINDSET<br/><span className="text-[#FF0000]">INSIDE</span><br/>RETAIL
               </h2>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-12 font-space text-sm md:text-base leading-relaxed text-gray-800">
              <p className="text-xl md:text-2xl font-bold text-[#111]">
                The world of creative media has changed. Today, creators rarely shoot photos alone.
              </p>
              <p>
                You need hybrid systems that handle both photo and video, workflows that save time, sharp autofocus, clean audio, and lightweight kits that look great across social media, client sites, and print. CinemaArt Studio was built for this exact modern setup.
              </p>
              <p>
                We understand how creators work: you want gear that is easy to carry, advice that makes sense, and printing options that do your work justice. That is why we bring together top camera brands, helpful creator tools, and fine art printing under one roof.
              </p>
              <div className="p-8 border-2 border-[#111] bg-[#111] text-white">
                <p className="font-bold text-lg">
                  We believe good gear should never feel confusing, and customer service should always be clear. Our goal is to help you buy the right equipment, create better work, and share it proudly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#111] text-white py-20 md:py-32 px-6 md:px-16 border-t-8 border-[#FF0000]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
             <div className="w-12 h-1 bg-[#FF0000]" />
             <h2 className="text-2xl md:text-4xl font-bold">OUR PRINCIPLES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {principles.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-space text-6xl font-black text-white/10 mb-4">0{i+1}</span>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-[#FF0000]">{item.title}</h3>
                <p className="font-space text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO & SERVE */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black text-[#111] mb-12 uppercase">
              CAPABILITIES <span className="text-[#FF0000]">///</span>
            </h2>
            <div className="flex flex-col gap-6 font-space text-sm font-medium text-gray-800 uppercase">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-4 pb-6 border-b border-[#111]">
                  <span className="text-[#FF0000] font-bold">[{i+1}]</span>
                  <p>{cap}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-black text-[#111] mb-12 uppercase">
              WHO WE SERVE <span className="text-[#FF0000]">///</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {whoWeServe.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <h3 className="text-sm font-bold text-[#111] mb-3 border-b-2 border-[#111] inline-block pb-1 self-start">{item.title}</h3>
                  <p className="font-space text-xs leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-16 border-t border-[#111] bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#111] uppercase leading-tight mb-8">
            EXPLORE THE <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>STUDIO</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <Link href="/products" className="relative overflow-hidden group bg-[#111] text-white px-8 py-4 font-space text-sm font-bold flex items-center justify-center gap-3">
              <span className="relative z-10 flex items-center gap-2">START EXPLORING <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}