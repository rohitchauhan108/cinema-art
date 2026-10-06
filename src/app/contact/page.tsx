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
  AlertTriangle,
} from "lucide-react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "a061df5a-0e2b-4f4a-84e4-9c6b07720ce1";

const DEFAULT_SUBJECT = "GENERAL STORE INQUIRY";
const DEFAULT_FORM = {
  name: "",
  email: "",
  phone: "",
  subject: DEFAULT_SUBJECT,
  message: "",
};

export default function CinemaArtContactApp() {
  const [formState, setFormState] = useState(DEFAULT_FORM);
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormState((current) => ({
      ...current,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (honeypot) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        from_name: "Cinema Art Studio — Website Contact Form",
        subject: `[CINEMA ART] ${formState.subject || DEFAULT_SUBJECT}`,
        reply_to: formState.email,
        name: formState.name,
        email: formState.email,
        phone: formState.phone,
        category: formState.subject,
        message: formState.message,
        redirect: "false",
      };

      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.message || "Failed to dispatch the inquiry.");
      }

      setIsSubmitted(true);
      setFormState(DEFAULT_FORM);
    } catch (err) {
      const msg =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending the message.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
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
              <h1 className="max-w-3xl text-4xl font-normal md:text-6xl tracking-tight uppercase">
                CONNECT WITH
                <span className="text-[#FF0000]"> US</span>
              </h1>
              <p className="mt-7 max-w-lg font-space text-sm leading-7 text-black/60 md:text-base uppercase">
                CAMERAS, OPTICS, PROFESSIONAL LIGHTING, AND CREATORS WHO BREATHE
                VISUAL STORYTELLING. DROP BY OUR FLAGSHIP STUDIO IN CONNAUGHT
                PLACE OR TALK TO OUR EXPERTS.
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

      {/* Redesigned About Section — Cinema / Film-Strip Theme */}
      <section className="relative mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28 border-y border-black/15 overflow-hidden">
        {/* Film perforation strip accents (top + bottom) */}
        <div className="pointer-events-none absolute inset-x-0 top-0 flex justify-between px-14 py-1 text-black/10 md:px-28">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={`tp-${i}`} className="h-3 w-5 rounded-sm bg-current" />
          ))}
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between px-14 py-1 text-black/10 md:px-28">
          {Array.from({ length: 22 }).map((_, i) => (
            <span key={`bp-${i}`} className="h-3 w-5 rounded-sm bg-current" />
          ))}
        </div>

        <div className="relative grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left Column — Heading + Narrative */}
          <div className="lg:col-span-6">
            {/* Eyebrow + Label */}
         

            <h2 className="font-syncopate text-4xl font-bold leading-[1.05] tracking-tight text-black md:text-6xl">
              ABOUT
              <br />
              <span className="relative inline-block">
                <span className="relative z-10 text-[#FF0000]">CINEMA ART</span>
                <span className="absolute inset-x-0 bottom-2 z-0 h-3 bg-[#FF0000]/15" />
              </span>
            </h2>

            {/* Divider with label */}
            <div className="my-10 flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="h-px w-10 bg-[#FF0000]" />
                <span className="h-2 w-2 rotate-45 bg-[#FF0000]" />
              </div>
              <p className="font-mono text-[10px] font-bold tracking-[0.3em] text-black/50">
                THE STORY BEHIND THE LENS
              </p>
            </div>

            <p className="font-space text-lg leading-8 text-black/70 md:text-xl uppercase">
              CINEMA ART IS A LEADING AUTHORIZED DEALER FOR <span className="font-semibold text-black">NIKON, CANON, SONY, FUJIFILM, PANASONIC, DJI, RODE, MOZA, GODOX</span>, AND MORE — COMMITTED TO CATERING TO ALL YOUR PHOTOGRAPHY AND VIDEOGRAPHY REQUIREMENTS UNDER ONE ROOF.
            </p>

            <p className="mt-6 font-space text-lg leading-8 text-black/70 md:text-xl uppercase">
              OUR UNWAVERING COMMITMENT TO CUSTOMER SATISFACTION THROUGH SUPERLATIVE SERVICE AND GENUINE GUIDANCE HAS MADE US THE MOST PREFERRED CAMERA AND PHOTO STORE IN <span className="font-semibold text-black">DEHRADUN & ACROSS UTTARAKHAND</span>.
            </p>

           
          </div>

          {/* Right Column — Feature Cards + CTA */}
          <div className="lg:col-span-6 space-y-5">
            {/* Feature Card 01 */}
            <div className="group relative overflow-hidden border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#FF0000]/40 hover:shadow-[0_10px_40px_-12px_rgba(255,0,0,0.15)]">
              {/* corner tick */}
              <div className="absolute left-0 top-0 h-14 w-14 border-l-2 border-t-2 border-[#FF0000]/0 transition-colors duration-300 group-hover:border-[#FF0000]/60" />
              <div className="absolute right-0 bottom-0 h-14 w-14 border-r-2 border-b-2 border-[#FF0000]/0 transition-colors duration-300 group-hover:border-[#FF0000]/60" />

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="relative flex h-16 w-16 items-center justify-center border border-black/10 bg-[#f1eee6] transition-colors duration-300 group-hover:bg-[#FF0000]/10 group-hover:border-[#FF0000]/30">
                    {/* film reel decoration */}
                    <div className="absolute -left-1.5 -top-1.5 grid grid-cols-2 gap-0.5 text-[#FF0000]/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <ShieldCheck className="h-7 w-7 text-[#FF0000] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-black/35">
                      FEATURE · 01
                    </span>
                    <span className="h-px flex-1 bg-black/10" />
                  </div>
                  <h3 className="font-space text-xl font-bold uppercase tracking-wide text-[#111]">
                    100% AUTHORIZED GEAR
                  </h3>
                  <p className="mt-2 font-space text-sm leading-7 text-black/60 md:text-base">
                    OFFICIAL DEALER PARTNERSHIPS GUARANTEEING GENUINE MANUFACTURER WARRANTIES ON EVERY BODY, LENS, AND ACCESSORY — ZERO GREY MARKET, ZERO RISK.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature Card 02 */}
            <div className="group relative overflow-hidden border border-black/10 bg-white p-7 shadow-[0_1px_0_rgba(0,0,0,0.04)] transition-all duration-300 hover:border-[#FF0000]/40 hover:shadow-[0_10px_40px_-12px_rgba(255,0,0,0.15)]">
              <div className="absolute left-0 top-0 h-14 w-14 border-l-2 border-t-2 border-[#FF0000]/0 transition-colors duration-300 group-hover:border-[#FF0000]/60" />
              <div className="absolute right-0 bottom-0 h-14 w-14 border-r-2 border-b-2 border-[#FF0000]/0 transition-colors duration-300 group-hover:border-[#FF0000]/60" />

              <div className="flex gap-6">
                <div className="shrink-0">
                  <div className="relative flex h-16 w-16 items-center justify-center border border-black/10 bg-[#f1eee6] transition-colors duration-300 group-hover:bg-[#FF0000]/10 group-hover:border-[#FF0000]/30">
                    <div className="absolute -left-1.5 -top-1.5 grid grid-cols-2 gap-0.5 text-[#FF0000]/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                      <span className="h-1.5 w-1.5 rounded-full bg-current" />
                    </div>
                    <Award className="h-7 w-7 text-[#FF0000] transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-black/35">
                      FEATURE · 02
                    </span>
                    <span className="h-px flex-1 bg-black/10" />
                  </div>
                  <h3 className="font-space text-xl font-bold uppercase tracking-wide text-[#111]">
                    EXPERT CREATOR GUIDANCE
                  </h3>
                  <p className="mt-2 font-space text-sm leading-7 text-black/60 md:text-base">
                    TAILORED ADVICE FROM WORKING PROFESSIONALS WHO UNDERSTAND LIGHTING, AUDIO, AND VISUAL WORKFLOWS — NOT SALESMEN, ACTUAL SHOOTERS.
                  </p>
                </div>
              </div>
            </div>

            {/* Brand Strip / CTA Bar */}
            <div className="relative overflow-hidden border border-black/10 bg-gradient-to-r from-[#171916] via-[#1c1f1b] to-[#171916] px-6 py-5 md:px-8 md:py-6">
              {/* running marquee-dot pattern */}
              <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '12px 12px',
              }} />

              <div className="relative flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center border border-[#FF0000]/50 bg-[#FF0000]/10">
                    <Camera className="h-6 w-6 text-[#FF0000]" />
                    {/* blinking rec corner */}
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-ping rounded-full bg-[#FF0000] opacity-75" />
                    <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#FF0000]" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] font-bold tracking-[0.35em] text-white/50">
                      UTTARAKHAND · FLAGSHIP
                    </p>
                    <p className="mt-1 font-space text-sm font-bold uppercase tracking-[0.22em] text-white md:text-base">
                      #1 DESTINATION FOR CREATOR SHOPPING
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+919837243388"
                  className="group relative shrink-0 overflow-hidden border border-[#FF0000] bg-[#FF0000] px-6 py-3 font-space text-xs font-bold tracking-[0.25em] text-white transition-all duration-300 hover:border-white hover:bg-transparent hover:text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    VISIT TODAY
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </a>
              </div>
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
              <h2 className="mt-2 text-3xl md:text-4xl uppercase tracking-tight">SEND US A MESSAGE</h2>
              <p className="mt-2 font-space text-sm leading-6 text-black/60 uppercase">
                LOOKING FOR SPECIFIC GEAR AVAILABILITY, LENS RENTALS, OR STUDIO
                SETUP? LET US KNOW.
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
                <h3 className="mb-2 text-2xl font-bold uppercase tracking-wide text-[#111]">
                  MESSAGE DISPATCHED!
                </h3>
                <p className="mx-auto mb-6 max-w-md font-space text-sm leading-6 text-black/60 uppercase">
                  THANK YOU FOR REACHING OUT TO CINEMA ART. ONE OF OUR CAMERA
                  SPECIALISTS WILL GET BACK TO YOU SHORTLY.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-[#171916] px-6 py-3 font-space text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#30332f]"
                >
                  SEND ANOTHER INQUIRY
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
                      placeholder="YOUR FULL NAME"
                      className="w-full rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm uppercase text-[#111] transition-colors placeholder:text-black/35 focus:border-[#FF0000] focus:outline-none"
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
                      placeholder="YOU@EXAMPLE.COM"
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
                      className="w-full rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm uppercase text-[#111] transition-colors placeholder:text-black/35 focus:border-[#FF0000] focus:outline-none"
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
                      className="w-full cursor-pointer rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm uppercase text-[#111] transition-colors focus:border-[#FF0000] focus:outline-none"
                    >
                      <option value="GENERAL STORE INQUIRY">
                        GENERAL STORE INQUIRY
                      </option>
                      <option value="CAMERA BODY / LENS PURCHASE">
                        CAMERA BODY / LENS PURCHASE
                      </option>
                      <option value="LIGHTING & AUDIO GEAR (GODOX/RODE)">
                        LIGHTING & AUDIO GEAR (GODOX/RODE)
                      </option>
                      <option value="SERVICE & REPAIR SUPPORT">
                        SERVICE & REPAIR SUPPORT
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
                    placeholder="TELL US WHAT YOU'RE LOOKING FOR (E.G. SONY FX3 AVAILABILITY, FUJIFILM GFX LENS TESTING)..."
                    className="w-full resize-y rounded-sm border border-black/15 bg-background px-4 py-3 font-space text-sm uppercase text-[#111] transition-colors placeholder:text-black/35 focus:border-[#FF0000] focus:outline-none"
                  ></textarea>
                </div>

                {/* Honeypot anti-spam trap — hidden from real users, bots fill this */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-field-bot">
                    DO NOT FILL THIS FIELD
                  </label>
                  <input
                    id="website-field-bot"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                {submitError && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 rounded-sm border border-[#FF0000]/40 bg-[#FF0000]/5 px-4 py-4"
                  >
                    <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#FF0000]" />
                    <div className="flex-1">
                      <p className="font-space text-xs font-bold uppercase tracking-widest text-[#FF0000]">
                        DISPATCH FAILED
                      </p>
                      <p className="mt-1 font-space text-sm leading-6 text-black/70 uppercase">
                        {submitError}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSubmitError(null)}
                      aria-label="Dismiss error"
                      className="shrink-0 text-black/40 transition-colors hover:text-[#FF0000]"
                    >
                      ×
                    </button>
                  </motion.div>
                )}

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
                <span className="flex items-center gap-2 font-space text-xs font-bold tracking-widest uppercase text-[#FF0000]">
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52386.12523078901!2d77.99699898833008!3d30.30638219269644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929ec11e0fea3%3A0xc7bd3d977b410651!2sCINEMA%20ART%20STUDIO%20-%20DSLR%20Cameras%20%7C%20Photo%20Store%20%7C%20Photo%20Framing%20Store!5e1!3m2!1sen!2sin!4v1791271352093!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
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
                  <h3 className="font-space text-xs font-bold tracking-widest text-black/50 uppercase">
                    STORE HOURS
                  </h3>
                  <p className="text-lg font-bold uppercase text-[#111]">
                    OPEN 7 DAYS A WEEK
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
