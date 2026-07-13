"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import accessories from "@/data/accessories";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";

// Comprehensive categories matched with the Home Page
const categories = [
  {
    name: "All Accessories",
    subcategories: [],
  },
  {
    name: "Battery",
    subcategories: ["Sony", "Fujifilm", "Canon", "Nikon"],
  },
  {
    name: "Charger",
    subcategories: ["Sony", "Fujifilm", "Canon", "Nikon"],
  },
  {
    name: "Lens Cap",
    subcategories: ["Sony", "Fujifilm", "Canon", "Nikon"],
  },
  {
    name: "Lens Hood",
    subcategories: ["Sony", "Fujifilm", "Canon", "Nikon"],
  },
  {
    name: "Camera Body Cap",
    subcategories: ["Sony", "Fujifilm", "Canon", "Nikon"],
  },
  {
    name: "Leas Rear Cap",
    subcategories: ["Sony", "Fujifilm", "Canon", "Nikon"],
  },
  {
    name: "Tripod",
    subcategories: [],
  },
  {
    name: "Microphone",
    subcategories: [],
  },
  {
    name: "Lightning Solution",
    subcategories: [],
  },
  {
    name: "Action Camera Accessories",
    subcategories: [],
  },
  {
    name: "Sd Card",
    subcategories: [],
  },
  {
    name: "Micro Sd Card",
    subcategories: [],
  },
  {
    name: "Harddisk & SSD",
    subcategories: [],
  },
  {
    name: "All Cable",
    subcategories: [],
  },
  {
    name: "Gimbal",
    subcategories: [],
  },
  {
    name: "Pen Drive",
    subcategories: [],
  },
  {
    name: "Filter",
    subcategories: [],
  },
];

export default function AccessoriesPage() {
  const [activeCategory, setActiveCategory] = useState("All Accessories");
  const [activeBrand, setActiveBrand] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredaccessories = accessories.filter((item) => {
    // Support both single category and multiple categories
    const accessoriesCategories = item.category ? [item.category] : [];
    const matchesCategory =
      activeCategory === "All Accessories"
        ? true
        : accessoriesCategories.some(
            (cat) => cat.toLowerCase() === activeCategory.toLowerCase(),
          );

    const matchesBrand =
      selectedBrands.length === 0 ||
      selectedBrands.some(
        (brand) => brand.toLowerCase() === (item.brand ?? "").toLowerCase(),
      );

    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.brand ?? "").toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesBrand && matchesSearch;
  });

  // Fixed TypeScript reference down here to use lowercase 'filteredaccessories'
  const getPrimaryCategory = (item: (typeof filteredaccessories)[0]) => {
    return item.category || "Unknown";
  };

  const [openCategory, setOpenCategory] = useState("All Accessories");
  const toggleBrand = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  useEffect(() => {
    const el = document.getElementById("accessories");

    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120, // adjust for your navbar height
        behavior: "smooth",
      });
    }
  }, [activeCategory, selectedBrands]);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-40 pb-24">
        <div className="max-w-350 mx-auto px-6 md:px-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 border-b border-gray-300 pb-8"
          >
            <h1 className="font-syncopate text-4xl md:text-6xl font-bold text-[#111] uppercase tracking-tighter">
              Accessories <br />{" "}
              <span className="text-gray-400">Collection</span>
            </h1>
            <p className="font-space mt-4 text-gray-600 max-w-xl">
              Complete your setup with premium camera accessories designed for
              enhanced performance, protection, and convenience.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Mobile Filter Toggle */}
            <button
              className="lg:hidden w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 font-syncopate text-xs tracking-widest text-[#111]"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              <SlidersHorizontal className="w-4 h-4" />
              {isMobileFilterOpen ? "HIDE FILTERS" : "SHOW FILTERS"}
            </button>

            {/* Sidebar Filters */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`w-full lg:w-64 shrink-0 ${isMobileFilterOpen ? "block" : "hidden lg:block"}`}
            >
              <div className="sticky top-32 space-y-10 bg-background lg:bg-transparent pb-6 lg:pb-0 z-10">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search gear..."
                    className="w-full bg-white/50 border border-gray-300 rounded-none py-2.5 pl-10 pr-4 text-sm font-space focus:outline-none focus:border-[#111] transition-colors"
                  />
                </div>

                {/* Categories */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <SlidersHorizontal className="w-4 h-4 text-[#111]" />
                    <h3 className="font-syncopate text-sm font-bold tracking-widest text-[#111]">
                      CATEGORIES
                    </h3>
                  </div>
                  <ul className="space-y-3 font-space text-sm text-gray-600">
                    {categories.map((cat) => (
                      <li
                        key={cat.name}
                        className="border-b border-gray-200 pb-2"
                      >
                        <button
                          onClick={() => {
                            setActiveCategory(cat.name);
                            setActiveBrand("");

                            if (cat.name === "All Accessories") {
                              setSelectedBrands([]);
                            }

                            // Only open the clicked category.
                            // Never close the currently open one.
                            if (cat.subcategories.length > 0) {
                              setOpenCategory(cat.name);
                            }
                          }}
                          className="w-full flex cursor-pointer items-center justify-between py-2 text-left hover:text-black transition-colors"
                        >
                          <span>{cat.name}</span>

                          {cat.subcategories.length > 0 && (
                            <ChevronDown
                              size={16}
                              className={`transition-transform duration-300 ${
                                openCategory === cat.name ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </button>

                        <AnimatePresence>
                          {openCategory === cat.name && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden ml-4"
                            >
                              {cat.subcategories.map((sub) => (
                                <li key={sub} className="py-2">
                                  <label className="flex items-center gap-3 cursor-pointer py-1">
                                    <input
                                      type="checkbox"
                                      checked={selectedBrands.includes(sub)}
                                      onChange={() => {
                                        setActiveCategory(cat.name);
                                        toggleBrand(sub);
                                      }}
                                      className="w-5 h-5 accent-black"
                                    />
                                    <span className="text-sm text-gray-600">
                                      {sub}
                                    </span>
                                  </label>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.aside>

            {/* accessories Grid */}
            <div id="accessories" className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredaccessories.length > 0 ? (
                  filteredaccessories.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index }}
                      className="group relative bg-white rounded-sm border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
                    >
                      {/* Image Backdrop Container */}
                      <div className="relative h-60 w-full bg-[#F5F5F5] flex items-center justify-center p-8 overflow-hidden">
                        {/* Subtle Overlay */}
                        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        {/* Top Badges */}
                        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                          {item.brand && (
                            <span className="bg-[#111] text-white text-[9px] font-syncopate px-2.5 py-1 uppercase tracking-[0.2em] font-bold">
                              {item.brand}
                            </span>
                          )}

                          {item.status !== "In Stock" && (
                            <span
                              className={`hidden text-[9px] font-syncopate px-2.5 py-1 uppercase tracking-[0.2em] font-bold ${
                                item.status === "Pre-order"
                                  ? "bg-blue-600 text-white"
                                  : "bg-orange-500 text-white"
                              }`}
                            >
                              {item.status}
                            </span>
                          )}
                        </div>

                        <img
                          src={item.colors[0].images[0]}
                          alt={item.name}
                          className={`max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl ${getPrimaryCategory(item) === "Action Cameras" || getPrimaryCategory(item) === "360 Cameras" ? "p-4" : ""}`}
                        />

                        {/* Hover Action Button */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 w-3/4">
                          <Link
                            href={`/accessories/${item.slug}`}
                            className="block w-full text-center bg-[#111] text-white font-syncopate text-[10px] uppercase tracking-widest py-3 hover:bg-black transition-colors shadow-lg"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="pt-5 pb-5 px-5 flex flex-col flex-1 bg-white z-10 relative border-t border-gray-100">
                        <p className="text-[9px] text-gray-400 font-syncopate mb-1 uppercase tracking-[0.2em]">
                          {getPrimaryCategory(item)}
                        </p>
                        <h3 className="font-space text-lg font-bold text-[#111] mb-1 line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-space mb-4 line-clamp-2 min-h-8">
                          {item.overview}
                        </p>

                        <div className="mt-auto flex items-end justify-between">
                          <Link
                            href={`/accessories/${item.slug}`}
                            className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#111] group-hover:bg-[#111] group-hover:text-white transition-colors ml-auto"
                          >
                            <ArrowUpRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
                    <Search className="w-12 h-12 mb-4 opacity-20" />
                    <p className="font-space text-lg">
                      No accessories found matching your filters.
                    </p>
                    <button
                      onClick={() => {
                        setActiveCategory("All Accessories");
                        setActiveBrand("");
                        setSearchQuery("");
                        setSelectedBrands([]); // Clear selected brands
                      }}
                      className="mt-4 text-[#111] font-syncopate text-xs tracking-widest border-b border-[#111] pb-1 hover:text-[#FF0000] hover:border-[#FF0000] transition-colors"
                    >
                      Clear Filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
