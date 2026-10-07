"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(Draggable, ScrollTrigger);

const categories = [
  {
    id: "cameras",
    title: "Cameras",
    folder: "/camera-icons",
    images: Array.from({ length: 16 }, (_, index) => {
      const number = index + 1;
      const filename = number === 2 || number === 3 ? `${number}..png` : `${number}.png`;
      return `${number}|${filename}`;
    }),
  },
  {
    id: "lenses",
    title: "Lenses",
    folder: "/lens-icons",
    images: Array.from({ length: 12 }, (_, index) => `${index + 1}|${index + 1}.png`),
  },
  {
    id: "accessories",
    title: "Accessories",
    folder: "/accessories-icons",
    images: Array.from({ length: 14 }, (_, index) => `${index + 2}|${index + 2}.png`),
  },
];

function CategoryGallery({
  category,
  categoryIndex,
}: {
  category: (typeof categories)[number];
  categoryIndex: number;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const items = gsap.utils.toArray<HTMLElement>(".category-item", section);
    let step = 0;
    let firstItemX = 0;

    const updateLayout = () => {
      step = Math.max(window.innerWidth * 0.16, 190);
      firstItemX = window.innerWidth * 0.3;

      items.forEach((item, index) => {
        gsap.set(item, {
          left: `${firstItemX + index * step}px`,
          scale: 0.82 + (index % 4) * 0.08,
          rotation: index % 2 === 0 ? -4 + (index % 3) : 3 - (index % 3),
          xPercent: -50,
          yPercent: -50,
        });
      });

      track.style.width = `${firstItemX + (items.length - 1) * step + window.innerWidth * 0.7}px`;
    };

    updateLayout();

    items.forEach((item, index) => {
      gsap.to(item, {
        y: index % 2 === 0 ? "-=8" : "+=8",
        duration: 3 + (index % 6) * 0.15,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: (index % 8) * 0.08,
      });
    });

    // Calculate total horizontal scroll distance needed
    const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

    // Pin the section and scrub horizontal motion via vertical scroll
    const tween = gsap.to(track, {
      x: getScrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        pin: true,
        scrub: 1,
        end: () => `+=${track.scrollWidth - window.innerWidth}`,
        invalidateOnRefresh: true,
      },
    });

    // Setup Draggable for mouse grabbing/touch sliding
    const draggable = Draggable.create(track, {
      type: "x",
      bounds: {
        minX: window.innerWidth - track.scrollWidth,
        maxX: 0,
      },
      edgeResistance: 0.85,
      dragResistance: 0.05,
      cursor: "grab",
      activeCursor: "grabbing",
      onDragStart() {
        gsap.to(items, {
          scale: (i) => (0.82 + (i % 4) * 0.08) * 0.98,
          duration: 0.2,
        });
      },
      onDragEnd() {
        gsap.to(items, {
          scale: (i) => 0.82 + (i % 4) * 0.08,
          duration: 0.4,
          ease: "power2.out",
        });
      },
      onDrag() {
        // Update ScrollTrigger progress smoothly while dragging
        if (tween.scrollTrigger) {
          const progress = gsap.utils.normalize(0, window.innerWidth - track.scrollWidth, gsap.getProperty(track, "x") as number);
          tween.scrollTrigger.scroll(tween.scrollTrigger.start + progress * (tween.scrollTrigger.end - tween.scrollTrigger.start));
        }
      },
    })[0];

    const handleResize = () => {
      updateLayout();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      tween.kill();
      draggable.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      gsap.killTweensOf(items);
      gsap.killTweensOf(track);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={category.id}
      className="relative h-svh min-h-155 w-full select-none overflow-hidden bg-zinc-50 p-6 text-zinc-900 md:p-12 lg:p-16"
    >
      {/* <header className="relative z-30 flex w-full items-center justify-between">
        <div className="text-[11px] font-medium uppercase tracking-[0.25em] text-zinc-500">
          [ Equipment / 2026 ]
        </div>
        <div className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
          {String(categoryIndex + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
        </div>
      </header> */}

      {/* Title positioned at top-center */}
      <div className="pointer-events-none relative z-30 mx-auto mt-6 text-center max-w-5xl md:mt-8">
        {/* <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-400 md:text-xs">
          Equipment collection
        </p> */}
        <h2 className="text-xl font-normal italic leading-[0.9] uppercase text-zinc-900 sm:text-7xl md:text-3xl lg:text-5xl">
          {category.title}
        </h2>
      </div>

      <div className="inset-0 z-10 cursor-grab overflow-hidden active:cursor-grabbing">
        <div
          ref={trackRef}
          className="absolute left-0 top-0 h-full will-change-transform"
        >
          {category.images.map((image) => {
            const [number, filename] = image.split("|");

            return (
              <div
                className="category-item absolute top-1/2 w-[clamp(140px,17vw,240px)]"
                key={image}
              >
                <div className="relative h-[24vh] min-h-36 max-h-64 w-full">
                  <Image
                    src={`${category.folder}/${filename}`}
                    alt={`${category.title} item ${number}`}
                    fill
                    sizes="(max-width: 640px) 140px, (max-width: 1024px) 17vw, 240px"
                    draggable={false}
                    className="pointer-events-none object-contain drop-shadow-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute inset-x-6 bottom-6 z-30 flex flex-col items-start justify-between gap-4 border-t border-zinc-300 pt-5 md:inset-x-12 md:bottom-12 md:flex-row md:items-end lg:inset-x-16 lg:bottom-16">
        {/* <div className="max-w-xs text-[11px] leading-relaxed tracking-wide text-zinc-500">
          {category.images.length} pieces in this collection
        </div>
        <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          <span>Scroll / Drag to explore</span>
          <span aria-hidden="true">&darr;</span>
        </div> */}
      </div>
    </section>
  );
}

function Category() {
  return (
    <div aria-label="Equipment categories">
      {categories.map((category, index) => (
        <CategoryGallery key={category.id} category={category} categoryIndex={index} />
      ))}
    </div>
  );
}

export default Category;