import React from 'react';

function Use() {
  const use = [
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
      

      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">Where You Can Use These</h2>
        <div aria-hidden="true" className="mx-auto mt-2 mb-5 h-0.5 w-52 bg-[#FF0000]"></div>
        <p className="text-slate-500 mt-2 text-sm md:text-base">Explore the ideal setups for every creator style</p>
      </div>

      {/* Wave Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 relative z-10 items-start pb-12">
        {use.slice(0,1).map((item, index) => (
          <div 
            key={index} 
            className={`rotate-15 flex flex-col items-center transition-all duration-500 hover:scale-105 ${item.wrapperClass}`}
          >
            <div className="w-full h-64 sm:h-60 shadow-2xl overflow-hidden rounded-[2.5rem] border-4 border-white bg-white">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Centered Heading */}
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-1 mt-4">
              {item.title}
            </h3>
            
            {/* Custom Subheading */}
            <p className="text-xs text-slate-500 text-center mb-4 px-2 h-8 font-medium">
              {item.subtitle}
            </p>
          </div>
        ))}
        {use.slice(1,2).map((item, index) => (
          <div 
            key={index} 
            className={`rotate-0 mt-37 flex flex-col items-center transition-all duration-500 hover:scale-105 ${item.wrapperClass}`}
          >
            {/* Image Container with Custom Curved Border Radius */}
            <div className="w-full h-64 mb-4 sm:h-60 shadow-2xl overflow-hidden rounded-[2.5rem] border-4 border-white bg-white">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Centered Heading */}
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">
              {item.title}
            </h3>
            
            {/* Custom Subheading */}
            <p className="text-xs text-slate-500 text-center mb-4 px-2 h-8 font-medium">
              {item.subtitle}
            </p>

          </div>
        ))}
        {use.slice(2,3).map((item, index) => (
          <div 
            key={index} 
            className={`rotate-0 mt-20 flex flex-col items-center transition-all duration-500 hover:scale-105 ${item.wrapperClass}`}
          >
             {/* Image Container with Custom Curved Border Radius */}
            <div className="w-full mb-4 h-64 sm:h-60 shadow-2xl overflow-hidden rounded-[2.5rem] border-4 border-white bg-white">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Centered Heading */}
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">
              {item.title}
            </h3>
            
            {/* Custom Subheading */}
            <p className="text-xs text-slate-500 text-center mb-4 px-2 h-8 font-medium">
              {item.subtitle}
            </p>

          </div>
        ))}
        {use.slice(3,4).map((item, index) => (
          <div 
            key={index} 
            className={`rotate-345 mt-20 flex flex-col items-center transition-all duration-500 hover:scale-105 ${item.wrapperClass}`}
          >
            {/* Image Container with Custom Curved Border Radius */}
            <div className="w-full mb-4 h-64 sm:h-60 shadow-2xl overflow-hidden rounded-[2.5rem] border-4 border-white bg-white">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
            {/* Centered Heading */}
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight mb-1">
              {item.title}
            </h3>
            
            {/* Custom Subheading */}
            <p className="text-xs text-slate-500 text-center mb-4 px-2 h-8 font-medium">
              {item.subtitle}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}

export default Use;