import React from 'react';

function PrintingServices() {
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
      title: "Photo Engagements",
      description: "Professional offset printing for large-scale projects and marketing materials.",
      image1: "/printservice/2.webp",
      image2: "/printservice/2.2.webp",
    },
    {
      id: 3,
      title: "Canva's Printing",
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

  return (
    <div className="w-full py-10 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Our Printing Services</h2>
        
        {/* Row container for all services */}
        <div className="flex flex-wrap md:flex-nowrap gap-6 justify-center">
          {printingServices.map((service) => (
            <div 
              key={service.id} 
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
                <div className="absolute inset-0 w-full h-full overflow-hidden [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)] transition-all duration-2000 ease-in-out">
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