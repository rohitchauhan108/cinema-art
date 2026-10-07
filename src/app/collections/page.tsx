'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { accessories, cameraIcons, lensIcons as lenses } from '@/data/collections'
import { GiFlowerStar } from "react-icons/gi";
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const tileColors = [
  'bg-[#f1eee6]',
  'bg-[#cbd8d1]',
  'bg-[#d9bcb1]',
  'bg-[#c9d8df]',
  'bg-[#e4d99c]',
  'bg-[#d4d0c4]',
]

const categoryPrefixes = {
  cameras: '/camera-icons/',
  lenses: '/lens-icons/',
  accessories: '/accessories-icons/',
} as const

const normalizeCatalog = <T extends { img?: string; name?: string }>(items: T[], category: keyof typeof categoryPrefixes) => {
  const prefix = categoryPrefixes[category]
  const seen = new Set<string>()

  return items.filter((item, index) => {
    const img = item.img?.toLowerCase() || ''
    const key = item.img || `${item.name || 'catalog-item'}-${index}`

    if (!img.startsWith(prefix.toLowerCase())) return false
    if (seen.has(key)) return false

    seen.add(key)
    return true
  })
}

// Cameras categories

const camera_cat = [
  "Mirrorless Cameras",
  "Action Cameras",
  "Point & Shoot Cameras",
  "DSLR Cameras",
  "Film Cameras",
  "Instant Cameras"
];

// Lense categories 

const lens_cat: string[] = [

]

// accessories categories

const accessories_cat = [
  "Battery",
  "Charger",
  "Lens Cap",
  "Microphone",
  "Tripod",
  "Harddisk & SSD"
]

const categoryCatalog = [
  { id: 'cameras', label: 'Cameras', categories: camera_cat },
  { id: 'lenses', label: 'Lenses', categories: lens_cat },
  { id: 'accessories', label: 'Accessories', categories: accessories_cat },
] as const

export default function Page() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'cameras' | 'lenses' | 'accessories'>('all')
  const reducedMotion = useReducedMotion()

  const playClickSound = () => {
    try {
      const AudioCtor = window.AudioContext ?? (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!AudioCtor) return

      const ctx = new AudioCtor()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'triangle'
      osc.frequency.setValueAtTime(140, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.05)
      gain.gain.setValueAtTime(0.2, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.05)
    } catch {
      // Ignore if audio context is blocked
    }
  }

  // Get the correct array based on active category
  const getCurrentData = () => {
    const normalizedCameras = normalizeCatalog(cameraIcons || [], 'cameras')
    const normalizedLenses = normalizeCatalog(lenses || [], 'lenses')
    const normalizedAccessories = normalizeCatalog(accessories || [], 'accessories')

    switch (activeCategory) {
      case 'cameras':
        return normalizedCameras
      case 'lenses':
        return normalizedLenses
      case 'accessories':
        return normalizedAccessories
      case 'all':
      default:
        return [...normalizedCameras, ...normalizedLenses, ...normalizedAccessories]
    }
  }

  const currentItems = getCurrentData()
  const activeCategoryGroup = activeCategory === 'all'
    ? undefined
    : categoryCatalog.find((group) => group.id === activeCategory)

  const handleCategoryChange = (category: 'all' | 'cameras' | 'lenses' | 'accessories') => {
    playClickSound()
    setActiveCategory(category)
  }

  return (
    <>
    <Navbar />
    <main className="min-h-screen px-4 py-10 text-[#171916] md:px-10 md:py-16 selection:bg-[#171916] selection:text-[#f1eee6]">
      <div className="mx-auto max-w-7xl pt-20">
        
        {/* Catalog Header & Image Cards Selector */}
        <header className="mb-10 border-b border-black/15 pb-8">
          <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
                <p className="font-space text-xs uppercase tracking-widest text-black/65">Catalog Index / Gear Series</p>
              </div>
              <h1 className="text-4xl font-light tracking-tight md:text-6xl uppercase">
                {activeCategory === 'all' ? 'OUR COLLECTION' : `${activeCategory} COLLECTION`}
              </h1>
            </div>

            {activeCategory && (
              <div className="flex flex-col gap-2 md:items-end">
                <p className="font-space text-xs tracking-wide text-black/60">
                  Showing all <span className="font-semibold text-black">{currentItems.length}</span> items
                </p>
              </div>
            )}
          </div>

          {/* Three Image Cards Selector (Cameras + Lenses + Accessories) */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">

            {/* Cameras Card */}
            <div
              onClick={() => handleCategoryChange('cameras')}
              className={`group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                activeCategory === 'cameras' 
                  ? 'scale-105 border-black bg-[#f1eee6] shadow-lg' 
                  : 'border-black/10 bg-white/50 opacity-80 hover:bg-[#f1eee6]/50 hover:opacity-100'
              }`}
            >
              <div className="relative my-2 flex h-28 w-full items-center justify-center">
                {cameraIcons?.[0]?.img && (
                  <Image
                    src={cameraIcons[0].img}
                    alt="Cameras"
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              <span className="mt-2 text-sm font-medium tracking-wide uppercase">CAMERAS</span>
            </div>

            {/* Lenses Card */}
            <div
              onClick={() => handleCategoryChange('lenses')}
              className={`group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                activeCategory === 'lenses' 
                  ? 'scale-105 border-black bg-[#cbd8d1] shadow-lg' 
                  : 'border-black/10 bg-white/50 opacity-80 hover:bg-[#cbd8d1]/50 hover:opacity-100'
              }`}
            >
              <div className="relative my-2 flex h-28 w-full items-center justify-center">
                {lenses?.[0]?.img && (
                  <Image
                    src={lenses[0].img}
                    alt="Lenses"
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              <span className="mt-2 text-sm font-medium tracking-wide uppercase">LENSES</span>
            </div>

            {/* Accessories Card */}
            <div
              onClick={() => handleCategoryChange('accessories')}
              className={`group relative flex cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                activeCategory === 'accessories' 
                  ? 'scale-105 border-black bg-[#d9bcb1] shadow-lg' 
                  : 'border-black/10 bg-white/50 opacity-80 hover:bg-[#d9bcb1]/50 hover:opacity-100'
              }`}
            >
              <div className="relative my-2 flex h-28 w-full items-center justify-center">
                {accessories?.[0]?.img && (
                  <Image
                    src={accessories[0].img}
                    alt="Accessories"
                    fill
                    sizes="(max-width: 768px) 100vw, 250px"
                    className="object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                )}
              </div>
              <span className="mt-2 text-sm font-medium tracking-wide uppercase">ACCESSORIES</span>
            </div>

          </div>
        </header>

        {activeCategoryGroup && activeCategoryGroup.categories.length > 0 && (
          <section
            aria-label={`${activeCategoryGroup.label} subcategories`}
            className={`mx-auto mb-8 max-w-7xl border-b border-black/15 pb-5 ${reducedMotion ? 'overflow-x-auto no-scrollbar' : 'overflow-hidden'}`}
          >
            <h2 className="mb-3 text-center font-space text-[15px] font-semibold uppercase tracking-widest text-black">
              {activeCategoryGroup.label}
            </h2>
            <motion.div
              className={`flex w-max ${reducedMotion ? 'mx-auto' : ''}`}
              animate={reducedMotion ? { x: 0 } : { x: ['0%', '-50%'] }}
              transition={{ ease: 'linear', duration: 18, repeat: Infinity }}
            >
              {Array.from({ length: reducedMotion ? 1 : 2 }, (_, repeatIndex) => (
                <div
                  key={`${activeCategoryGroup.id}-${repeatIndex}`}
                  aria-hidden={repeatIndex > 0}
                  className="shrink-0 px-4"
                >
                  <ul className="flex w-max flex-nowrap items-center justify-center gap-x-3 whitespace-nowrap">
                    {activeCategoryGroup.categories.map((category, index) => (
                      <li key={category} className="flex shrink-0 items-center gap-3">
                        <span className="flex items-center gap-2 font-space text-lg font-semibold uppercase tracking-wide text-black/70"><GiFlowerStar className='text-[#FF0000]'/>{category}</span>
                        {index < activeCategoryGroup.categories.length - 1 && (
                          <span aria-hidden="true" className="text-black/25">/</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </section>
        )}

        <section
          aria-label="catalog grid"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {currentItems.map((item, index) => (
            <div
              key={item.id || index}
              className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/10 p-5 transition-all duration-300 hover:shadow-xl ${tileColors[index % tileColors.length]}`}
            >
              {/* Product Image Display */}
              <div className="relative h-52 w-full my-4 flex items-center justify-center">
                <Image
                  src={item.img}
                  alt={item.name || `product ${index + 1}`}
                  fill
                  loading={index === 0 ? 'eager' : 'lazy'}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-contain transition-transform duration-500 group-hover:scale-105 hover:-rotate-5"
                />
              </div>
            </div>
          ))}
        </section>

      </div>
    </main>
    <Footer />
    </>
  )
}