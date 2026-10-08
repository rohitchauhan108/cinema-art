'use client';

import React, { useEffect, useRef, useState } from 'react';

function PrintingServices() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const [activeServiceId, setActiveServiceId] = useState<number | null>(null);

  const printingServices = [
    {
      id: 1,
      title: "Premium Color Printing",
      description: "High-quality digital printing services for various materials and formats.",
      image1: "/printservice/1.webp",
      image2: "/printservice/1.1.webp",
    },
    {
      id: 2,
      title: "Photo Enlargements",
      description: "Professional offset printing for large-scale projects and marketing materials.",
      image1: "/printservice/2.webp",
      image2: "/printservice/2.2.webp",
    },
    {
      id: 3,
      title: "Canvas Printing",
      description: "High-quality digital printing services for various materials and formats.",
      image1: "/printservice/3.webp",
      image2: "/printservice/3.3.webp",
    },
    {
      id: 4,
      title: "Customised Photo Printing",
      description: "Professional offset printing for large-scale projects and marketing materials.",
      image1: "/printservice/4.webp",
      image2: "/printservice/4.4.webp",
    }
  ];

  useEffect(() => {
    const container = servicesRef.current;
    if (!container) return;

    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-printing-service-card]'));
    const observer = new IntersectionObserver(() => {
      const centerTop = window.innerHeight * 0.4;
      const centerBottom = window.innerHeight * 0.6;
      const activeCard = cards
        .filter((card) => {
          const bounds = card.getBoundingClientRect();
          return bounds.top < centerBottom && bounds.bottom > centerTop;
        })
        .sort((first, second) => {
          const firstCenter = first.getBoundingClientRect().top + first.offsetHeight / 2;
          const secondCenter = second.getBoundingClientRect().top + second.offsetHeight / 2;
          return Math.abs(firstCenter - window.innerHeight / 2) - Math.abs(secondCenter - window.innerHeight / 2);
        })[0];

      setActiveServiceId(activeCard ? Number(activeCard.dataset.serviceId) : null);
    }, { rootMargin: '-40% 0px -40% 0px' });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-normal italic leading-[0.9] uppercase text-zinc-900 sm:text-7xl md:text-3xl lg:text-5xl text-center pt-5">Our Printing Services </h2>
        <div aria-hidden="true" className="mx-auto mt-2 mb-10 h-0.5 w-52 bg-[#FF0000] "></div>
        
        {/* Row container for all services */}
        <div ref={servicesRef} className="flex flex-wrap md:flex-nowrap gap-6 justify-center pt-5">
          {printingServices.map((service) => (
            <div 
              key={service.id} 
              data-printing-service-card
              data-service-id={service.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full md:w-1/4 group cursor-pointer border border-gray-100"
            >
              {/* Image Container with Center Circle Reveal Animation */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                {/* Default Image (image2) */}
                <img 
                  src={service.image2} 
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                
                {/* Hover Image (image1) with a smooth circular expansion from the center */}
                <div className={`absolute inset-0 w-full h-full overflow-hidden [clip-path:circle(0%_at_50%_50%)] md:group-hover:[clip-path:circle(100%_at_50%_50%)] ${activeServiceId === service.id ? 'max-md:[clip-path:circle(100%_at_50%_50%)]' : ''} transition-all duration-2000 ease-in-out`}>
                  <img 
                    src={service.image1} 
                    alt={`${service.title} hover`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content / Description */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrintingServices;