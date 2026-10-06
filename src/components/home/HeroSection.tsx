import React from 'react'

function HeroSection() {
  return (
    <div className="mt-25">
      <section className="relative lg:h-screen flex items-center bg-[url('/hero-img.webp')] bg-cover lg:bg-[center_20%] bg-center bg-no-repeat">
        {/* Dark gradient overlay to make text pop against the background image */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="max-w-2xl text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4 drop-shadow-md font-serif">
              Capture. Create. Preserve.
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 font-light leading-relaxed mb-8 drop-shadow">
              Everything you need for photography — from <br className="hidden lg:block"/> professional cameras and lenses to essential <br className="hidden lg:block"/> accessories, vibrant color printing, and <br className="hidden lg:block"/> beautiful photo framing.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition shadow-lg">
                Explore Collection
              </button>
              <button className="border border-white/80 text-white font-medium px-8 py-3 rounded-full hover:bg-white/10 transition backdrop-blur-sm">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection