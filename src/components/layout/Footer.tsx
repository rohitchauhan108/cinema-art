"use client";

import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#1a1a1a] px-6 py-20 text-white md:px-12 md:py-32" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="  text-xl md:text-3xl uppercase">Cinema Art</h2>
            <p className="font-space mt-4 md:mt-6 max-w-sm text-gray-400 text-sm md:text-base">
              Elevating the art of photography through premium equipment, custom printing, and expert framing.
            </p>
          </div>

          {/* Location */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <h3 className="  text-sm font-bold tracking-widest">LOCATION</h3>
            </div>
            <address className="font-space not-italic text-gray-400">
              18, Chakrata Rd,<br/> Connaught Place, Dehradun, Uttarakhand 248001<br/>
            </address>
          </div>

          {/* Certification */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Award className="h-5 w-5 text-gray-400" />
              <h3 className="  text-sm font-bold tracking-widest">Brands We Deal With</h3>
            </div>
            <ul className="font-space space-y-2 text-gray-400">
              <li>Sony</li>
              <li>Nikon</li>
              <li>Fujifilm</li>
            </ul>
          </div>

        </div>

        <div className="mt-32 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="font-space text-sm text-gray-500">© 2026 CinemaArt Studio. All rights reserved.</p>
          <div className="font-space mt-4 flex gap-6 text-sm text-gray-500 md:mt-0">
            <a href="https://www.google.co.in/maps/place/CINEMA+ART+STUDIO+-+DSLR+Cameras+%7C+Photo+Store+%7C+Photo+Framing+Store/@30.3264343,78.0336197,17z/data=!3m2!4b1!5s0x390929ec0e670c25:0x252633877a31e141!4m6!3m5!1s0x390929ec11e0fea3:0xc7bd3d977b410651!8m2!3d30.3264343!4d78.0361946!16s%2Fg%2F126300wmr?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D" className="hover:text-[#00E5FF] transition-colors">Google</a>
            <a href="https://www.instagram.com/" className="hover:text-[#00E5FF] transition-colors">Instagram</a>
            <a href="https://www.facebook.com/" className="hover:text-[#00E5FF] transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
