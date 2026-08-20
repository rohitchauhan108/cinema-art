"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const services = [
  {
    id: "01",
    title: "CUSTOMISED PHOTO ALBUMS AND PHOTO BOOKS",
    description:
      "Beautifully bound photo books and albums made to keep your wedding memories, family trips, and personal moments safe for years to come.",
    highlight: true,
  },
  {
    id: "02",
    title: "PHOTO PRINTING & FRAMING",
    description:
      "High-quality photo prints matched with professional framing so your digital photos look great hanging on any wall.",
    highlight: false,
  },
  {
    id: "03",
    title: "PASSPORT PHOTO SERVICE",
    description:
      "Quick and accurate passport, visa, and ID photos that meet all official government size and background rules.",
    highlight: false,
  },
  {
    id: "04",
    title: "CANVA'S PRINTING & FRAMING",
    description:
      "Turn your custom Canva's designs, posters, and graphics into real physical prints with professional quality.",
    highlight: false,
  },
];

const workflowSteps = [
  {
    step: "01",
    title: "SHARE YOUR FILES",
    description:
      "Bring in your digital pictures, album ideas, or Canva's designs to talk about what you need.",
  },
  {
    step: "02",
    title: "PICK YOUR STYLE",
    description:
      "Choose your favorite paper types, book covers, and frame styles.",
  },
  {
    step: "03",
    title: "WE PRINT & BUILD",
    description:
      "We carefully print and assemble your items with sharp colors and strong materials.",
  },
  {
    step: "04",
    title: "READY TO ENJOY",
    description:
      "Pick up your finished photo books, framed art, or prints ready to display.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen selection:bg-[#FF0000] selection:text-white">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col">
            <h1 className="font-syncopate text-[6vw] font-black text-[#111] leading-none uppercase">
              PHOTO <span className="text-[#FF0000]">///</span>
              <br />
              PRINTING <span className="text-[#FF0000]">///</span>
              <br />
              SERVICES
            </h1>
            <p className="mt-8 font-space text-gray-800 uppercase font-medium border-l-2 border-[#FF0000] pl-6">
              Turning digital moments into physical memories.
            </p>
          </div>

          {/* 4-Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://media.istockphoto.com/id/1140122157/photo/bookbinding-hands-folding.jpg?b=1&s=612x612&w=0&k=20&c=hwmL7BcqPE0-LnW_INtEubCl61UStnhrD498GIT6AC4="
              alt=""
              className="w-full aspect-square object-cover"
            />

            <img
              src="https://images.pexels.com/photos/1989747/pexels-photo-1989747.jpeg"
              alt=""
              className="w-full aspect-square object-cover"
            />

            <img
              src="https://images.pexels.com/photos/4291533/pexels-photo-4291533.jpeg"
              alt=""
              className="w-full aspect-square object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=500"
              alt=""
              className="w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICES GRID (BRUTALIST CARDS) */}
      <section className="border-y border-[#111] bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111]">
          {services.map((item, index) => (
            <div
              key={index}
              className={`relative p-10 md:p-20 transition-colors duration-500 group cursor-default overflow-hidden ${
                item.highlight ? "bg-[#111] text-white" : "hover:text-white"
              }`}
            >
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <div className="relative z-10">
                <p
                  className={`font-space text-[10px] font-bold tracking-[0.2em] mb-6 transition-opacity duration-500 ${
                    item.highlight
                      ? "text-[#FF0000] group-hover:text-white"
                      : "opacity-60 group-hover:opacity-100"
                  }`}
                >
                  {item.id} // SERVICE
                </p>
                <h2
                  className={`font-syncopate text-2xl md:text-3xl font-bold mb-6 transition-colors duration-500 ${
                    item.highlight
                      ? "text-[#FF0000] group-hover:text-white"
                      : "group-hover:text-white"
                  }`}
                >
                  {item.title}
                </h2>
                <p
                  className={`font-space text-sm md:text-base leading-relaxed transition-colors duration-500 ${
                    item.highlight
                      ? "text-gray-300 group-hover:text-white/90"
                      : "text-gray-700 group-hover:text-white/90"
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW / PROCESS SECTION */}
      <section className="py-20 md:py-32 px-6 md:px-16 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-1 bg-[#FF0000]" />
            <h2 className="font-syncopate text-2xl md:text-4xl font-bold text-[#111]">
              HOW IT WORKS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col border-2 border-[#111] p-8 bg-white relative group"
              >
                <span className="font-space text-4xl font-black text-[#111]/20 mb-6 group-hover:text-[#FF0000] transition-colors">
                  {step.step}
                </span>
                <h3 className="font-syncopate text-base font-bold text-[#111] mb-4">
                  {step.title}
                </h3>
                <p className="font-space text-xs leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DARK ACCENT STATEMENT SECTION */}
      <section className="bg-white text-[#111] py-20 md:py-32 px-6 md:px-16 border-t-2 border-b-2 border-[#FF0000] mb-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="font-syncopate text-3xl md:text-5xl font-black mb-6 leading-tight">
              WANT TO PRINT YOUR{" "}
              <span className="text-[#FF0000]">FAVORITE</span> PHOTOS?
            </h2>
            <p className="font-space text-sm md:text-base text-gray-400 leading-relaxed">
              Whether you need passport pictures, custom Canva's art framed for
              your room, or a complete wedding photo album, we are here to help
              you get great results.
            </p>
          </div>
          <Link
            href="/contact"
            className="relative overflow-hidden group bg-[#FF0000] text-white px-8 py-5 font-space text-sm font-bold flex items-center justify-center gap-3 shrink-0"
          >
            <span className="relative z-10 flex items-center gap-2">
              CONTACT US{" "}
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
