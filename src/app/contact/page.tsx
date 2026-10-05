"use client";
import React, { useState, type ChangeEvent, type FormEvent } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import {
  Camera,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUpRight,
  Send,
  CheckCircle2,
  ShieldCheck,
  Award,
  Navigation,
} from "lucide-react";

export default function CinemaArtContactApp() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormState((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "General Inquiry",
        message: "",
      });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-background text-[#111] selection:bg-[#FF0000] selection:text-white antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-36 pb-20 md:px-12 md:pt-48 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Top Banner Tag */}
          <div className="mb-8 flex flex-wrap items-center gap-3 font-space text-[10px] font-bold tracking-[0.3em] text-black/55 md:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#FF0000]" />
            DEHRADUN / UTTARAKHAND
            <span className="ml-auto hidden border border-black/15 bg-white/60 px-3 py-1 text-[9px] tracking-[0.2em] md:block">
              PREMIER CAMERA & PHOTO STUDIO
            </span>
          </div>

          {/* Main Title Grid */}
          <div className="grid gap-12 border-y border-black/15 py-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16 md:py-16">
            <div>
              <p className="mb-4 font-space text-xs font-bold tracking-[0.24em] text-[#FF0000]">
                CONTACT
              </p>
              <h1 className="max-w-3xl text-4xl font-normal md:text-6xl tracking-tight">
                Let&apos;s make
                <span className="text-[#FF0000]"> a frame.</span>
              </h1>
              <p className="mt-7 max-w-lg font-space text-sm leading-7 text-black/60 md:text-base">
                Cameras, optics, professional lighting, and creators who breathe
                visual storytelling. Drop by our flagship studio in Connaught
                Place or talk to our experts.
              </p>
            </div>

            <div className="flex flex-col justify-end gap-8">
              <a
                href="https://www.google.com/maps/search/?api=1&query=82GP%2BGCH%2C%20Connaught%20Place%2C%20Dehradun%2C%20Uttarakhand%20248001"
                target="_blank"
                rel="noreferrer"
                className="group block border-t border-black/15 pt-5 transition-colors hover:border-[#FF0000]"
              >
                <span className="mb-3 flex items-center justify-between font-space text-[10px] font-bold tracking-[0.25em] text-black/50">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[#FF0000]" /> FIND THE STORE
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-[#FF0000]" />
                </span>
                <address className="max-w-sm font-space text-lg font-medium not-italic leading-7 text-black/85 transition-colors group-hover:text-[#FF0000] md:text-xl">
                  82GP+GCH, Connaught Place,
                  <br />
                  Dehradun, Uttarakhand 248001
                </address>
              </a>

              <a
                href="tel:+919837243388"
                className="group block border-t border-black/15 pt-5 transition-colors hover:border-[#FF0000]"
              >
                <span className="mb-3 flex items-center justify-between font-space text-[10px] font-bold tracking-[0.25em] text-black/50">
                  <span className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[#FF0000]" /> CALL THE STUDIO
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-[#FF0000]" />
                </span>
                <span className="font-space text-2xl font-bold tracking-wider text-black transition-colors group-hover:text-[#FF0000] md:text-2xl">
                  +91 98372 43388
                </span>
              </a>

              <a
                href="mailto:cinemaart@rediffmail.com"
                className="group block border-t border-black/15 pt-5 transition-colors hover:border-[#FF0000]"
              >
                <span className="mb-3 flex items-center justify-between font-space text-[10px] font-bold tracking-[0.25em] text-black/50">
                  <span className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-[#FF0000]" /> EMAIL US
                  </span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 text-[#FF0000]" />
                </span>
                <span className="font-space text-2xl font-bold tracking-wider text-black transition-colors group-hover:text-[#FF0000] md:text-2xl">
                  cinemaart@rediffmail.com
                </span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Enhanced About Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 border-y border-black/15 bg-white/50">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="font-space text-xs font-bold tracking-[0.3em] text-[#FF0000]">
              WHO WE ARE
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl tracking-tight">
              About <span className="text-[#FF0000]">Cinema Art</span>
            </h2>
            <p className="mt-6 font-space text-base leading-8 text-black/65">
              Cinema Art is a leading authorized dealer for Nikon, Canon, Sony,
              Fujifilm, Panasonic, DJI, RODE, Moza, Godox, and more, committed
              to catering to all your photography and videography requirements.
            </p>
            <p className="mt-4 font-space text-base leading-8 text-black/65">
              Our unwavering commitment to customer satisfaction through
              superlative service and genuine guidance has made us the most
              preferred camera and photo store in Dehradun.
            </p>
          </div>

          <div className="lg:col-span-7 grid gap-6 sm:grid-cols-2">
            <div className="border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-block rounded bg-[#FF0000]/10 p-3 text-[#FF0000]">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-space text-base font-bold text-[#111]">
                100% Authorized Gear
              </h3>
              <p className="mt-2 font-space text-sm leading-6 text-black/60">
                Official dealer partnerships guaranteeing genuine manufacturer
                warranties on every body and lens.
              </p>
            </div>

            <div className="border border-black/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-block rounded bg-[#FF0000]/10 p-3 text-[#FF0000]">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="font-space text-base font-bold text-[#111]">
                Expert Creator Guidance
              </h3>
              <p className="mt-2 font-space text-sm leading-6 text-black/60">
                Tailored advice from experienced professionals who understand
                lighting, audio, and visual workflows.
              </p>
            </div>

            <div className="sm:col-span-2 border border-black/10 bg-white p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 font-space text-xs font-bold tracking-[0.2em] text-black/70">
                <Camera className="h-5 w-5 text-[#FF0000]" />
                YOUR PREFERRED DESTINATION FOR CREator SHOPPING IN UTTARAKHAND
              </div>
              <a
                href="tel:+919837243388"
                className="shrink-0 rounded-sm bg-[#111] px-5 py-3 font-space text-xs font-bold tracking-widest text-white transition-colors hover:bg-[#FF0000]"
              >
                VISIT TODAY
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form & Map Section */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Interactive Form */}
          <div className="relative rounded-sm border border-black/10 bg-white p-6 shadow-sm md:p-10 lg:col-span-7 lg:p-12">
            <div className="mb-8">
              <span className="font-space text-xs font-bold tracking-[0.3em] text-[#FF0000]">
                INQUIRIES & ORDERS
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl">Send us a message</h2>
              <p className="mt-2 font-space text-sm leading-6 text-black/60">
                Looking for specific gear availability, lens rentals, or studio
                setup? Let us know.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-sm border border-emerald-700/25 bg-background px-6 py-16 text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700/10 text-emerald-700">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-[#111]">
                  Message Dispatched!
                </h3>
                <p className="mx-auto mb-6 max-w-md font-space text-sm leading-6 text-black/60">
                  Thank you for reaching out to Cinema Art. One of our camera
                  specialists will get back to you shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#171916] px-6 py-3 font-space text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#30332f]"
                >
                  Send Another Inquiry
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block font-space text-xs tracking-wider text-black/60"
                    >
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      name="name"
                      id="contact-name"
                      value={formState.name}
                      onChange={handleChange}
                      autoComplete="name"
                      placeholder="Your name"
                      className="w-full rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm text-[#111] transition-colors placeholder:text-black/35 focus:border-[#FF0000] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block font-space text-xs tracking-wider text-black/60"
                    >
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      name="email"
                      id="contact-email"
                      value={formState.email}
                      onChange={handleChange}
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="w-full rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm text-[#111] transition-colors placeholder:text-black/35 focus:border-[#FF0000] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="mb-2 block font-space text-xs tracking-wider text-black/60"
                    >
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      id="contact-phone"
                      value={formState.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      placeholder="+91 98765 43210"
                      className="w-full rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm text-[#111] transition-colors placeholder:text-black/35 focus:border-[#FF0000] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-2 block font-space text-xs tracking-wider text-black/60"
                    >
                      SUBJECT / GEAR INTEREST
                    </label>
                    <select
                      name="subject"
                      id="contact-subject"
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full cursor-pointer rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm text-[#111] transition-colors focus:border-[#FF0000] focus:outline-none"
                    >
                      <option value="General Inquiry">
                        General Store Inquiry
                      </option>
                      <option value="Camera Purchase">
                        Camera Body / Lens Purchase
                      </option>
                      <option value="Studio Lighting">
                        Lighting & Audio Gear (Godox/Rode)
                      </option>
                      <option value="Maintenance & Support">
                        Service & Repair Support
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block font-space text-xs tracking-wider text-black/60"
                  >
                    YOUR MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    name="message"
                    id="contact-message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us what you're looking for (e.g. Sony FX3 availability, Fujifilm GFX lens testing)..."
                    className="w-full resize-y rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm text-[#111] transition-colors placeholder:text-black/35 focus:border-[#FF0000] focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm bg-[#FF0000] py-4 font-space text-xs font-bold tracking-[0.2em] text-white transition-colors hover:bg-[#d90000] disabled:cursor-wait disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      DISPATCHING MESSAGE...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> SEND INQUIRY TO STUDIO
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Location & Hours details */}
          <div className="lg:col-span-5 space-y-8">
            {/* Map Interactive Box */}
            <div className="overflow-hidden rounded-sm border border-black/10 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-black/10 bg-[#f1eee6] px-6 py-4">
                <span className="flex items-center gap-2 font-space text-xs font-bold tracking-widest text-[#FF0000]">
                  <Navigation className="w-3.5 h-3.5" /> CONNAUGHT PLACE,
                  DEHRADUN
                </span>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=82GP%2BGCH%2C%20Connaught%20Place%2C%20Dehradun%2C%20Uttarakhand%20248001"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 font-space text-xs text-black/55 underline transition-colors hover:text-[#FF0000]"
                >
                  Open Maps <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div className="relative h-64 w-full bg-[#f1eee6]">
                <iframe
                  title="Cinema Art Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.025595511246!2d78.0321889!3d30.316495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE4JzU5LjQiTiA3OMKwMDInMjUuOCJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Studio Hours Card */}
            <div className="space-y-4 rounded-sm border border-black/10 bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded bg-[#FF0000]/10 p-2 text-[#FF0000]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-space text-xs font-bold tracking-widest text-black/50">
                    STORE HOURS
                  </h3>
                  <p className="text-lg font-bold text-[#111]">
                    Open 7 Days a Week
                  </p>
                </div>
              </div>
              <div className="space-y-2 border-t border-black/10 pt-4 font-space text-sm">
                <div className="flex justify-between">
                  <span className="text-black/55">Monday — Saturday:</span>
                  <span className="font-medium text-[#111]">
                    10:00 AM – 8:00 PM
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/55">Sunday:</span>
                  <span className="font-medium text-[#111]">
                    11:00 AM – 6:00 PM
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Email */}
            <div className="space-y-4 rounded-sm border border-black/10 bg-white p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="rounded bg-[#FF0000]/10 p-2 text-[#FF0000]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-space text-xs font-bold tracking-widest text-black/50">
                    DIRECT EMAIL
                  </h3>
                  <a
                    href="mailto:cinemaart@rediffmail.com"
                    className="text-base font-bold text-[#111] transition-colors hover:text-[#FF0000]"
                  >
                    cinemaart@rediffmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
