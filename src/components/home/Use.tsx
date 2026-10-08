import React from 'react';

function Use() {
  const destinations = [
    {
      title: "Vlogging",
      subtitle: "Capture everyday moments & cinematic daily life",
      image: "/use/vlogging.webp",
      wrapperClass: "lg:translate-y-12 -rotate-2"
    },
    {
      title: "Student creators",
      subtitle: "Affordable setups for campus life & projects",
      image: "/use/student.webp",
      wrapperClass: "lg:-translate-y-6 rotate-2"
    },
    {
      title: "Moto vloggers",
      subtitle: "High-speed action & immersive helmet mounts",
      image: "/use/moto.webp",
      wrapperClass: "lg:translate-y-12 -rotate-1"
    },
    {
      title: "Professionals",
      subtitle: "Broadcast-grade quality for commercial shoots",
      image: "/use/professionals.webp",
      wrapperClass: "lg:-translate-y-6 rotate-2"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-sky-50/30 to-white overflow-hidden relative">
      
      {/* Background faint travel line style decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center">
        <svg className="w-full h-[500px]" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100 250C300 50 500 350 900 150C1200 0 1350 300 1540 200" stroke="#0056b3" strokeWidth="2" strokeDasharray="8 8" />
        </svg>
      </div>

      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
        <h2 className="text-xl font-normal italic leading-[0.9] uppercase text-zinc-900 sm:text-7xl md:text-3xl lg:text-5xl text-center">Where You Can Use These</h2>
        <div aria-hidden="true" className="mx-auto mt-2 mb-5 h-0.5 w-52 bg-[#FF0000]"></div>
        <p className="text-slate-500 mt-2 text-sm md:text-base">Explore the ideal setups for every creator style</p>
      </div>

      {/* Wave Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10 items-start pb-12">
        {destinations.map((item, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center transition-all duration-500 hover:scale-105 ${item.wrapperClass}`}
          >
            {/* Centered Heading */}
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">
              {item.title}
            </h3>
            
            {/* Custom Subheading */}
            <p className="text-xs text-slate-500 text-center mb-4 px-2 h-8 font-medium">
              {item.subtitle}
            </p>

            {/* Image Container with Custom Curved Border Radius */}
            <div className="w-full h-64 sm:h-60 shadow-2xl overflow-hidden rounded-[2.5rem] border-4 border-white bg-white">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Use;