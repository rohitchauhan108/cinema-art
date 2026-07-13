export interface ProductSpec {
  category: string;
  items: { label: string; value: string }[];
}

export interface ProductFeature {
  title: string;
  description: string;
  image?: string;
}

export interface ProductColor {
  name: string;
  images: string[];
}

export interface Product {
  id: string;
  name: string;
  category?: string; // Single category (backward compatibility)
  categories?: string[]; // Multiple categories
  brand: string;
  price: string;
  originalPrice?: string;
  slug: string;
  status: string;
  desc?: string; // Short description for the shop card
  colors: ProductColor[];
  lenses?: string[]; // Optional lens configurations
  overview?: string; // Detailed description for the product page
  keyFeatures?: string[]; // Bullet points for quick scanning
  richFeatures?: ProductFeature[]; // Detailed sections with title/desc
  specs?: ProductSpec[]; // Specifications for accordion
}

const lens = [
  // sony lens
  {
    id: "sel100400mc",
    name: "SEL100400MC",
    category: "Lenses",
    brand: "Sony",
    price: "₹466,990",
    slug: "sel100400mc",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/sel100.png"],
      },
    ],
    overview:
      "Capture distant subjects with exceptional clarity using the Sony FE 100-400mm F4.5 GM OSS lens. Designed for wildlife, sports, aviation, and nature photography, this premium G Master telephoto zoom delivers outstanding sharpness, fast and accurate autofocus, and beautiful background bokeh. Its lightweight design, Optical SteadyShot image stabilization, and weather-resistant construction ensure reliable performance for professionals and enthusiasts alike.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE 100-400mm F4.5-5.6 GM OSS (SEL100400GM)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "100-400mm",
          },
          {
            label: "Maximum Aperture",
            value: "F4.5-5.6",
          },
          {
            label: "Minimum Aperture",
            value: "F32-40",
          },
          {
            label: "Lens Configuration",
            value: "22 elements in 16 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "24°-6°10'",
          },
          {
            label: "Angle of View (APS-C)",
            value: "16°-4°10'",
          },
          {
            label: "Aperture Blades",
            value: "9 (Circular Aperture)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.98 m (Wide) / 1.75 m (Tele)",
          },
          {
            label: "Maximum Magnification",
            value: "0.35×",
          },
          {
            label: "Optical SteadyShot",
            value: "Yes",
          },
          {
            label: "Focus Drive",
            value: "Direct Drive SSM (DDSSM)",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "77 mm",
          },
          {
            label: "Dimensions",
            value: "93.9 × 205 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,395 g (without tripod mount)",
          },
          {
            label: "Weather Sealing",
            value: "Dust and Moisture Resistant",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH151), Front Lens Cap, Rear Lens Cap, Lens Case, Tripod Mount",
          },
        ],
      },
    ],
  },
  {
    id: "sel600f40gm",
    name: "SEL600F40GM",
    category: "Lenses",
    brand: "Sony",
    price: "₹1,377,990",
    slug: "sel600f40gm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/sel600.png"],
      },
    ],
    overview:
      "Capture extraordinary detail from incredible distances with the Sony FE 600mm F4 GM OSS. Built for professional wildlife, sports, and action photography, this flagship G Master super-telephoto lens delivers exceptional sharpness, ultra-fast autofocus, and stunning background bokeh. Its lightweight, well-balanced design, Optical SteadyShot image stabilization, and weather-sealed construction ensure outstanding performance and reliability even in the most demanding shooting environments.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE 100-400mm F4.5-5.6 GM OSS (SEL100400GM)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "100-400mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "150-600mm",
          },
          {
            label: "Lens Configuration",
            value: "22 elements in 16 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "24° - 6°10'",
          },
          {
            label: "Angle of View (APS-C)",
            value: "16° - 4°10'",
          },
          {
            label: "Maximum Aperture",
            value: "F4.5-5.6",
          },
          {
            label: "Minimum Aperture",
            value: "F32-40",
          },
          {
            label: "Aperture Blades",
            value: "9 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Manual",
          },
          {
            label: "Image Stabilization",
            value: "Optical SteadyShot (OSS)",
          },
          {
            label: "Lens Hood Type",
            value: "Round Shape, Bayonet Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.98 m (3.22 ft)",
          },
          {
            label: "Maximum Magnification",
            value: "0.35×",
          },
          {
            label: "Autofocus Drive",
            value: "Dual Linear Motor + Direct Drive SSM (DDSSM)",
          },
          {
            label: "Teleconverter Compatibility (1.4×)",
            value: "SEL14TC",
          },
          {
            label: "Teleconverter Compatibility (2.0×)",
            value: "SEL20TC",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "77 mm",
          },
          {
            label: "Dimensions",
            value: "93.9 × 205 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,395 g (without tripod mount)",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Front Element Coating",
            value: "Fluorine Coating",
          },
          {
            label: "Nano AR Coating",
            value: "Yes",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH151), Front Lens Cap (ALC-F77S), Rear Lens Cap (ALC-R1EM), Lens Case, Removable Tripod Mount",
          },
        ],
      },
    ],
  },
  {
    id: "selc1635g",
    name: "SELC1635G",
    category: "Lenses",
    brand: "Sony",
    price: "₹679,990",
    slug: "sel600f40gm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/selc.png"],
      },
    ],
    overview:
      "Experience exceptional versatility with the Sony FE PZ 16-35mm F4 G, an ultra-lightweight full-frame wide-angle power zoom lens designed for both photography and filmmaking. Delivering outstanding G Lens image quality, smooth electronic zoom, fast and silent autofocus, and intuitive manual controls, it is ideal for landscapes, architecture, vlogging, travel, and professional video production. Its compact, weather-resistant design makes it the perfect companion for creators who need premium performance on the go.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE PZ 16-35mm F4 G (SELP1635G)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "16-35mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "24-52.5mm",
          },
          {
            label: "Lens Configuration",
            value: "13 elements in 12 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "107°-63°",
          },
          {
            label: "Angle of View (APS-C)",
            value: "83°-44°",
          },
          {
            label: "Maximum Aperture",
            value: "F4",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture Blades",
            value: "7 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Powered Zoom",
          },
          {
            label: "Image Stabilization",
            value: "Body-integrated (No Optical OSS)",
          },
          {
            label: "Hood Type",
            value: "Petal Shape, Bayonet Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.28 m (Wide) / 0.24 m (Tele)",
          },
          {
            label: "Maximum Magnification",
            value: "0.23×",
          },
          {
            label: "Focus Drive",
            value: "XD Linear Motors",
          },
          {
            label: "Teleconverter Compatibility (1.4×)",
            value: "Not Compatible",
          },
          {
            label: "Teleconverter Compatibility (2.0×)",
            value: "Not Compatible",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "72 mm",
          },
          {
            label: "Dimensions",
            value: "80.5 × 88.1 mm",
          },
          {
            label: "Weight",
            value: "Approx. 353 g",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Front Element Coating",
            value: "Fluorine Coating",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH172), Front Lens Cap (ALC-F72S), Rear Lens Cap (ALC-R1EM), Soft Case",
          },
        ],
      },
    ],
  },
  {
    id: "sel2870gm",
    name: "SEL2870GM",
    category: "Lenses",
    brand: "Sony",
    price: "₹299,990",
    slug: "sel2870gm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/sel28.png"],
      },
    ],
    overview:
      "Elevate your photography and filmmaking with the Sony FE 28-70mm F2 GM, the world's first G Master standard zoom lens with a constant F2 aperture. Delivering prime lens-level sharpness, exceptional low-light performance, and stunning background bokeh, it is ideal for portraits, weddings, events, landscapes, and cinematic video. With ultra-fast XD Linear Motor autofocus, advanced optics, and a compact, lightweight design, this professional lens offers uncompromising image quality and creative flexibility in every shot.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE 28-70mm F2 GM (SEL2870GM)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "28-70mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "42-105mm",
          },
          {
            label: "Lens Configuration",
            value: "20 elements in 14 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "75°-34°",
          },
          {
            label: "Angle of View (APS-C)",
            value: "54°-23°",
          },
          {
            label: "Maximum Aperture",
            value: "F2",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture Blades",
            value: "11 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Manual",
          },
          {
            label: "Image Stabilization",
            value: "Body-integrated (No Optical OSS)",
          },
          {
            label: "Hood Type",
            value: "Petal Shape, Bayonet Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.38 m (1.25 ft)",
          },
          {
            label: "Maximum Magnification",
            value: "0.23×",
          },
          {
            label: "Focus Drive",
            value: "Four XD (Extreme Dynamic) Linear Motors",
          },
          {
            label: "Focus Breathing Compensation",
            value: "Supported (Compatible Cameras)",
          },
          {
            label: "Linear Response MF",
            value: "Yes",
          },
          {
            label: "Teleconverter Compatibility (1.4×)",
            value: "Not Compatible",
          },
          {
            label: "Teleconverter Compatibility (2.0×)",
            value: "Not Compatible",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "86 mm",
          },
          {
            label: "Dimensions",
            value: "92.9 × 139.8 mm",
          },
          {
            label: "Weight",
            value: "Approx. 918 g",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Front Element Coating",
            value: "Fluorine Coating",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH182), Front Lens Cap (ALC-F86S), Rear Lens Cap (ALC-R1EM), Soft Case",
          },
        ],
      },
    ],
  },
  {
    id: "sel1224gm",
    name: "SEL1224GM",
    category: "Lenses",
    brand: "Sony",
    price: "₹299,990",
    slug: "sel1224gm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/sel12.png"],
      },
    ],
    overview:
      "Push the boundaries of wide-angle photography with the Sony FE 12-24mm F2.8 GM. This premium G Master ultra-wide zoom lens combines a constant F2.8 aperture with exceptional edge-to-edge sharpness, fast and precise autofocus, and outstanding optical performance. Ideal for landscapes, architecture, interiors, astrophotography, and cinematic video, its lightweight, weather-sealed design ensures professional reliability in any shooting environment.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE 12-24mm F2.8 GM (SEL1224GM)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "12-24mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "18-36mm",
          },
          {
            label: "Lens Configuration",
            value: "17 elements in 14 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "122°-84°",
          },
          {
            label: "Angle of View (APS-C)",
            value: "99°-61°",
          },
          {
            label: "Maximum Aperture",
            value: "F2.8",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture Blades",
            value: "9 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Manual",
          },
          {
            label: "Image Stabilization",
            value: "Body-integrated (No Optical OSS)",
          },
          {
            label: "Lens Hood Type",
            value: "Petal Shape, Fixed Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.28 m (0.92 ft)",
          },
          {
            label: "Maximum Magnification",
            value: "0.14×",
          },
          {
            label: "Focus Drive",
            value: "Four XD (Extreme Dynamic) Linear Motors",
          },
          {
            label: "Linear Response MF",
            value: "Yes",
          },
          {
            label: "Focus Hold Button",
            value: "Yes (Customizable)",
          },
          {
            label: "Teleconverter Compatibility (1.4×)",
            value: "Not Compatible",
          },
          {
            label: "Teleconverter Compatibility (2.0×)",
            value: "Not Compatible",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "Rear Gel Filter Holder (No Front Filter Thread)",
          },
          {
            label: "Dimensions",
            value: "97.6 × 137 mm",
          },
          {
            label: "Weight",
            value: "Approx. 847 g",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Front Element Coating",
            value: "Fluorine Coating",
          },
          {
            label: "Lens Coating",
            value: "Nano AR Coating II",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Front Lens Cap, Rear Lens Cap (ALC-R1EM), Soft Carrying Case, Filter Template",
          },
        ],
      },
    ],
  },
  {
    id: "selp18110g",
    name: "SELP18110G",
    category: "Lenses",
    brand: "Sony",
    price: "₹286,990",
    slug: "selp18110g",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/selp18.png"],
      },
    ],
    overview:
      "The Sony E PZ 18-110mm F4 G OSS is a professional APS-C power zoom lens designed for 4K filmmaking and broadcast-quality video production. Featuring a versatile 18-110mm focal range, constant F4 aperture, Smooth Motion Optics (SMO), and Optical SteadyShot image stabilization, it delivers sharp, cinematic footage with precise, quiet autofocus and seamless zoom control. Its robust, weather-resistant design makes it an ideal choice for documentaries, events, commercials, and professional video creators.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "E PZ 18-110mm F4 G OSS (SELP18110G)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "APS-C",
          },
          {
            label: "Focal Length",
            value: "18-110mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "27-165mm",
          },
          {
            label: "Lens Configuration",
            value: "18 elements in 15 groups",
          },
          {
            label: "Angle of View (APS-C)",
            value: "76°-14°30'",
          },
          {
            label: "Maximum Aperture",
            value: "F4",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture Blades",
            value: "7 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Manual and Powered Zoom",
          },
          {
            label: "Image Stabilization",
            value: "Optical SteadyShot (OSS)",
          },
          {
            label: "Lens Hood Type",
            value: "Petal Shape, Bayonet Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.4 m (Wide) – 0.95 m (Tele) (AF/MF); 0.95 m (Full MF)",
          },
          {
            label: "Maximum Magnification",
            value: "0.122×",
          },
          {
            label: "Focus System",
            value: "Internal Focus",
          },
          {
            label: "Focus Breathing Compensation",
            value: "SMO (Smooth Motion Optics) Design",
          },
          {
            label: "Linear Response MF",
            value: "Yes",
          },
          {
            label: "Power Zoom",
            value: "Yes",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "95 mm",
          },
          {
            label: "Dimensions",
            value: "110 × 167.5 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,105 g (without tripod mount)",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Tripod Mount",
            value: "Removable",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH148), Front Lens Cap, Rear Lens Cap (ALC-R1EM), Soft Case, Removable Tripod Mount",
          },
        ],
      },
    ],
  },
  {
    id: "sel1635gm2",
    name: "SEL1635GM2",
    category: "Lenses",
    brand: "Sony",
    price: "₹243,990",
    slug: "sel1635gm2",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/sel16.png"],
      },
    ],
    overview:
      "Capture extraordinary detail from incredible distances with the Sony FE 600mm F4 GM OSS. Built for professional wildlife, sports, and action photography, this flagship G Master super-telephoto lens delivers exceptional sharpness, ultra-fast autofocus, and stunning background bokeh. Its lightweight, well-balanced design, Optical SteadyShot image stabilization, and weather-sealed construction ensure outstanding performance and reliability even in the most demanding shooting environments.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE 100-400mm F4.5-5.6 GM OSS (SEL100400GM)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "100-400mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "150-600mm",
          },
          {
            label: "Lens Configuration",
            value: "22 elements in 16 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "24° - 6°10'",
          },
          {
            label: "Angle of View (APS-C)",
            value: "16° - 4°10'",
          },
          {
            label: "Maximum Aperture",
            value: "F4.5-5.6",
          },
          {
            label: "Minimum Aperture",
            value: "F32-40",
          },
          {
            label: "Aperture Blades",
            value: "9 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Manual",
          },
          {
            label: "Image Stabilization",
            value: "Optical SteadyShot (OSS)",
          },
          {
            label: "Lens Hood Type",
            value: "Round Shape, Bayonet Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.98 m (3.22 ft)",
          },
          {
            label: "Maximum Magnification",
            value: "0.35×",
          },
          {
            label: "Autofocus Drive",
            value: "Dual Linear Motor + Direct Drive SSM (DDSSM)",
          },
          {
            label: "Teleconverter Compatibility (1.4×)",
            value: "SEL14TC",
          },
          {
            label: "Teleconverter Compatibility (2.0×)",
            value: "SEL20TC",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "77 mm",
          },
          {
            label: "Dimensions",
            value: "93.9 × 205 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,395 g (without tripod mount)",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Front Element Coating",
            value: "Fluorine Coating",
          },
          {
            label: "Nano AR Coating",
            value: "Yes",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH151), Front Lens Cap (ALC-F77S), Rear Lens Cap (ALC-R1EM), Lens Case, Removable Tripod Mount",
          },
        ],
      },
    ],
  },
  {
    id: "sel400800g",
    name: "SEL400800G",
    category: "Lenses",
    brand: "Sony",
    price: "₹270,490",
    slug: "sel400800g",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/sel600.png"],
      },
    ],
    overview:
      "Reach farther than ever with the Sony FE 400-800mm F6.3-8 G OSS, Sony's first Alpha lens to offer an 800mm super-telephoto zoom range. Designed for wildlife, birding, sports, aviation, and nature photography, it delivers outstanding image quality, fast and precise autofocus, Optical SteadyShot image stabilization, and an internal zoom mechanism for enhanced balance and handling. Its durable, weather-resistant G Lens design ensures dependable performance in demanding outdoor environments.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE 400-800mm F6.3-8 G OSS (SEL400800G)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "400-800mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "600-1200mm",
          },
          {
            label: "Lens Configuration",
            value: "27 elements in 19 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "6°10' - 3°10'",
          },
          {
            label: "Angle of View (APS-C)",
            value: "4°10' - 2°",
          },
          {
            label: "Maximum Aperture",
            value: "F6.3-8",
          },
          {
            label: "Minimum Aperture",
            value: "F36-45",
          },
          {
            label: "Aperture Blades",
            value: "11 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Manual (Internal Zoom)",
          },
          {
            label: "Image Stabilization",
            value: "Optical SteadyShot (OSS)",
          },
          {
            label: "Lens Hood Type",
            value: "Round Shape, Bayonet Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "1.7 m (Wide) – 3.5 m (Tele)",
          },
          {
            label: "Maximum Magnification",
            value: "0.23×",
          },
          {
            label: "Focus Drive",
            value: "Dual Linear Motors",
          },
          {
            label: "Focus Range Limiter",
            value: "FULL / 10m–NEAR / ∞–8m",
          },
          {
            label: "Focus Hold Button",
            value: "Yes (Customizable)",
          },
          {
            label: "Linear Response MF",
            value: "Yes",
          },
          {
            label: "Teleconverter Compatibility (1.4×)",
            value: "SEL14TC",
          },
          {
            label: "Teleconverter Compatibility (2.0×)",
            value: "SEL20TC",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "105 mm",
          },
          {
            label: "Dimensions",
            value: "119.8 × 346 mm",
          },
          {
            label: "Weight",
            value: "Approx. 2,475 g",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Tripod Mount",
            value: "Fixed Rotating Tripod Collar",
          },
          {
            label: "Front Element Coating",
            value: "Fluorine Coating",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH181), Front Lens Cap (ALC-F105S), Rear Lens Cap (ALC-R1EM), Lens Strap",
          },
        ],
      },
    ],
  },
  {
    id: "sel70200gm2",
    name: "SEL70200GM2",
    category: "Lenses",
    brand: "Sony",
    price: "₹249,990",
    slug: "sel70200gm2",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/sony/lens/sel70.png"],
      },
    ],
    overview:
      "The Sony FE 70-200mm F2.8 GM OSS II is a flagship G Master telephoto zoom lens designed for professional photographers and filmmakers. Featuring a constant F2.8 aperture, exceptional edge-to-edge sharpness, beautiful background bokeh, and ultra-fast autofocus powered by four XD Linear Motors, it excels in sports, wildlife, portraits, weddings, and video production. Its lightweight, weather-resistant design with Optical SteadyShot image stabilization delivers outstanding performance and reliability in every shooting scenario.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "FE 70-200mm F2.8 GM OSS II (SEL70200GM2)",
          },
          {
            label: "Lens Mount",
            value: "Sony E-mount",
          },
          {
            label: "Format",
            value: "35mm Full Frame",
          },
          {
            label: "Focal Length",
            value: "70-200mm",
          },
          {
            label: "35mm Equivalent (APS-C)",
            value: "105-300mm",
          },
          {
            label: "Lens Configuration",
            value: "17 elements in 14 groups",
          },
          {
            label: "Angle of View (35mm)",
            value: "34°-12°30'",
          },
          {
            label: "Angle of View (APS-C)",
            value: "23°-8°",
          },
          {
            label: "Maximum Aperture",
            value: "F2.8",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture Blades",
            value: "11 (Circular Aperture)",
          },
          {
            label: "Zoom System",
            value: "Manual",
          },
          {
            label: "Image Stabilization",
            value: "Optical SteadyShot (OSS)",
          },
          {
            label: "Lens Hood Type",
            value: "Round Shape, Bayonet Type",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.4 m (Wide) – 0.82 m (Tele)",
          },
          {
            label: "Maximum Magnification",
            value: "0.30×",
          },
          {
            label: "Focus Drive",
            value: "Four XD (Extreme Dynamic) Linear Motors",
          },
          {
            label: "Focus Hold Button",
            value: "Yes (3, Customizable)",
          },
          {
            label: "Focus Range Limiter",
            value: "FULL / 3m–∞",
          },
          {
            label: "Linear Response MF",
            value: "Yes",
          },
          {
            label: "Teleconverter Compatibility (1.4×)",
            value: "SEL14TC",
          },
          {
            label: "Teleconverter Compatibility (2.0×)",
            value: "SEL20TC",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "77 mm",
          },
          {
            label: "Dimensions",
            value: "88 × 200 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,045 g (without tripod mount)",
          },
          {
            label: "Weather Resistance",
            value: "Dust and Moisture Resistant",
          },
          {
            label: "Front Element Coating",
            value: "Fluorine Coating",
          },
          {
            label: "Lens Coating",
            value: "Nano AR Coating II",
          },
          {
            label: "Tripod Mount",
            value: "Removable Rotating Tripod Collar",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Lens Hood (ALC-SH167), Front Lens Cap (ALC-F77S), Rear Lens Cap (ALC-R1EM), Soft Case, Removable Tripod Mount",
          },
        ],
      },
    ],
  },

  //   nikkon

  {
    id: "nikkor-z-35mm-f-1.2-s",
    name: "NIKKOR Z 35mm f/1.2 S",
    category: "Lenses",
    brand: "Nikon",
    price: "₹2,57,995",
    slug: "nikkor-z-35mm-f-1.2-s",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/nikon/lens/z_35mmf1_2-1.png"],
      },
    ],
    overview:
      "The NIKKOR Z 35mm f/1.2 S sets a new standard for wide-angle creativity. Engineered for photographers and filmmakers, it boasts an advanced 15-group, 17-element optical design and the short flange back of the Z mount, delivering breathtaking depth, edge-to-edge sharpness and the signature velvety bokeh.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "NIKKOR Z 35mm f/1.2 S",
          },
          {
            label: "Display SKU",
            value: "JMA111DA",
          },
          {
            label: "Lens Mount",
            value: "Nikon Z Mount",
          },
          {
            label: "Format",
            value: "Full-frame / FX-format (35mm)",
          },
          {
            label: "Lens Type",
            value: "Prime, Wide Angle",
          },
          {
            label: "Focal Length",
            value: "35mm",
          },
          {
            label: "Maximum Aperture",
            value: "f/1.2",
          },
          {
            label: "Minimum Aperture",
            value: "f/16",
          },
          {
            label: "Lens Configuration",
            value:
              "17 elements in 15 groups (3 ED elements, 1 aspherical ED element, 3 aspherical elements, with Meso-amorphous, Nano Crystal and ARNEO Coatings)",
          },
          {
            label: "Angle of View",
            value: "FX: 63° | DX: 44°",
          },
          {
            label: "Aperture Blades",
            value: "11 (Rounded Diaphragm)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Autofocus",
            value: "Yes",
          },
          {
            label: "Internal Focusing",
            value: "Yes",
          },
          {
            label: "Minimum Focus Distance",
            value: "0.3 m (0.99 ft)",
          },
          {
            label: "Maximum Reproduction Ratio",
            value: "0.2×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "82 mm (P = 0.75 mm)",
          },
          {
            label: "Dimensions",
            value: "Approx. 90 × 150 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,060 g",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "LC-82B Front Lens Cap, LF-N1 Rear Lens Cap, HB-110 Lens Hood, CL-C2 Lens Case",
          },
        ],
      },
    ],
  },
  {
    id: "nikkor-z-50mm-f-1.2-s",
    name: "NIKKOR Z 50MM F/1.2 S",
    category: "Lenses",
    brand: "Nikon",
    price: "₹1,88,995",
    slug: "nikkor-z-50mm-f-1.2-s",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/nikon/lens/18-v2-z-mount.png"],
      },
    ],
    overview:
      "All the detail. All the sharpness. Hone your creative vision with the sharpest, fastest 50mm prime we've ever created. Extraordinary rendering power across the entire frame. Vast f/1.2 maximum aperture. Breakthrough autofocus. Liberating distortion and glare control. Weatherproof build. All empowered by Nikon's revolutionary Z Mount, a system that shines with fast lenses. Dream it, and the NIKKOR Z 50mm f/1.2 S will do it.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "NIKKOR Z 50mm f/1.2 S",
          },
          {
            label: "Display SKU",
            value: "JMA003DA",
          },
          {
            label: "Lens Mount",
            value: "Nikon Z Mount",
          },
          {
            label: "Format",
            value: "Full-frame / FX-format (Compatible with DX-format)",
          },
          {
            label: "Lens Type",
            value: "Prime, Standard",
          },
          {
            label: "Lens Category",
            value: "People & Events, Travel & Landscape, Video",
          },
          {
            label: "Focal Length",
            value: "50mm",
          },
          {
            label: "Maximum Aperture",
            value: "f/1.2",
          },
          {
            label: "Minimum Aperture",
            value: "f/16",
          },
          {
            label: "Lens Configuration",
            value: "17 elements in 15 groups (2 ED elements)",
          },
          {
            label: "Aspherical ED Elements",
            value: "3",
          },
          {
            label: "Maximum Angle of View",
            value: "FX: 47° | DX: 31°30′",
          },
          {
            label: "Diaphragm Blades",
            value: "9 (Rounded Diaphragm)",
          },
          {
            label: "Nano Crystal Coat",
            value: "Yes",
          },
          {
            label: "ARNEO Coat",
            value: "Yes",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Autofocus",
            value: "Yes",
          },
          {
            label: "Focus Mode",
            value: "Autofocus / Manual Focus",
          },
          {
            label: "Internal Focusing",
            value: "Yes",
          },
          {
            label: "AF Actuator",
            value: "2 STM (Stepping Motors)",
          },
          {
            label: "Minimum Focus Distance",
            value: "0.45 m (1.48 ft.)",
          },
          {
            label: "Maximum Reproduction Ratio",
            value: "0.15×",
          },
          {
            label: "Vibration Reduction (VR)",
            value: "No",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "82 mm",
          },
          {
            label: "Filter Type",
            value: "Screw-in",
          },
          {
            label: "Dimensions",
            value: "Approx. 89.5 × 150 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,090 g",
          },
          {
            label: "Compatible Formats",
            value: "Full-frame / FX-format & APS-C / DX-format",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value: "Front Lens Cap, Rear Lens Cap, Lens Hood, Lens Case",
          },
        ],
      },
    ],
  },
  {
    id: "nikkor-z-85mm-f-1.2-s",
    name: "NIKKOR Z 85mm f/1.2 S",
    category: "Lenses",
    brand: "Nikon",
    price: "₹2,68,295",
    slug: "nikkor-z-85mm-f-1.2-s",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/nikon/lens/nikkorz_85mm.png"],
      },
    ],
    overview:
      "The NIKKOR Z 85mm f/1.2 S is a superb and fast prime lens that renders details and textures with realism. Let your subject stand out with a natural bokeh background, created with the lens’s fast maximum aperture, 11 diaphragm blades’ lens construction, and the Z mount’s large diameter.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "NIKKOR Z 85mm f/1.2 S",
          },
          {
            label: "Lens Mount",
            value: "Nikon Z Mount",
          },
          {
            label: "Format",
            value: "Full-frame / FX-format (35mm)",
          },
          {
            label: "Lens Type",
            value: "Prime, Telephoto",
          },
          {
            label: "Focal Length",
            value: "85mm",
          },
          {
            label: "Maximum Aperture",
            value: "f/1.2",
          },
          {
            label: "Minimum Aperture",
            value: "f/16",
          },
          {
            label: "Lens Configuration",
            value:
              "15 elements in 10 groups (1 ED element, 2 aspherical elements, Nano Crystal Coat)",
          },
          {
            label: "Maximum Angle of View",
            value: "FX: 28°30′ | DX: 18°50′",
          },
          {
            label: "Diaphragm Blades",
            value: "11 (Rounded Diaphragm)",
          },
          {
            label: "Lens Coating",
            value: "Nano Crystal Coat",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Autofocus",
            value: "Yes",
          },
          {
            label: "Minimum Focus Distance",
            value: "0.85 m (2.79 ft)",
          },
          {
            label: "Maximum Reproduction Ratio",
            value: "0.11×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "82 mm (P = 0.75 mm)",
          },
          {
            label: "Dimensions",
            value: "Approx. 102.5 × 141.5 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,160 g",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "LC-82B Front Lens Cap, LF-N1 Rear Lens Cap, HB-106 Lens Hood, CL-C2 Lens Case",
          },
        ],
      },
    ],
  },
  {
    id: "nikkor-z-35mm-f-1.8-s",
    name: "NIKKOR Z 35MM F/1.8 S",
    category: "Lenses",
    brand: "Nikon",
    price: "₹69,595",
    slug: "nikkor-z-35mm-f-1.8-s",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/nikon/lens/jma102da_-_nikkor_z_35mm.png"],
      },
    ],
    overview:
      "A wider world of possibilities. 35mm prime. A desert-island lens for many. Wide enough to nail the view. Shallow enough to draw out subjects. Fast enough to make the impossible possible. And so sharp...just utter unwavering sharpness. In reimagining this classic lens for the new Z system, we may very well have perfected it.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "NIKKOR Z 35mm f/1.8 S",
          },
          {
            label: "Display SKU",
            value: "JMA102DA",
          },
          {
            label: "Lens Mount",
            value: "Nikon Z Mount",
          },
          {
            label: "Format",
            value: "Full-frame / FX-format (Compatible with DX-format)",
          },
          {
            label: "Lens Type",
            value: "Prime, Standard",
          },
          {
            label: "Lens Category",
            value:
              "Travel & Landscape, People & Events, Sports & Action, Video",
          },
          {
            label: "Focal Length",
            value: "35mm",
          },
          {
            label: "Maximum Aperture",
            value: "f/1.8",
          },
          {
            label: "Minimum Aperture",
            value: "f/16",
          },
          {
            label: "Lens Configuration",
            value:
              "11 elements in 9 groups (2 ED elements, 3 aspherical elements)",
          },
          {
            label: "Maximum Angle of View",
            value: "FX: 63° | DX: 44°",
          },
          {
            label: "Diaphragm Blades",
            value: "9 (Rounded Diaphragm)",
          },
          {
            label: "Nano Crystal Coat",
            value: "Yes",
          },
          {
            label: "E-type Electromagnetic Diaphragm",
            value: "Yes",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Autofocus",
            value: "Yes",
          },
          {
            label: "Focus Mode",
            value: "Autofocus / Manual Focus",
          },
          {
            label: "AF Actuator",
            value: "STM (Stepping Motor)",
          },
          {
            label: "Rear Focusing",
            value: "Yes",
          },
          {
            label: "Minimum Focus Distance",
            value: "0.25 m (0.82 ft.)",
          },
          {
            label: "Maximum Reproduction Ratio",
            value: "0.19×",
          },
          {
            label: "Vibration Reduction (VR)",
            value: "No",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "62 mm",
          },
          {
            label: "Filter Type",
            value: "Screw-in",
          },
          {
            label: "Dimensions",
            value: "Approx. 73 × 86 mm",
          },
          {
            label: "Weight",
            value: "Approx. 370 g",
          },
          {
            label: "Compatible Formats",
            value: "Full-frame / FX-format & APS-C / DX-format",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "LC-62B Front Lens Cap, LF-N1 Rear Lens Cap, HB-89 Lens Hood, CL-C1 Lens Case",
          },
        ],
      },
    ],
  },
  {
    id: "nikkor-z-85mm-f/1.2-s",
    name: "NIKKOR Z 85MM F/1.8 S",
    category: "Lenses",
    brand: "Nikon",
    price: "₹61,295",
    slug: "nikkor-z-50mm-f/1.2-s",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/nikon/lens/nikkor_z_85mm.png"],
      },
    ],
    overview:
      "Captivating Portraits. Breathtaking Details. Elevated by advancements of the revolutionary Z mount, the NIKKOR Z 85mm f/1.8 S is a premium S-Line lens that blends optical ingenuity and artistic nuance. Flattering perspective. Breathtaking resolution. Stunning bokeh. Unwavering focus and lifelike accuracy compensation. This is an 85mm prime lens that will thrill and inspire those who shoot portraits, headshots, fashion, weddings, tight video shots, street photography or any situation that highlights the human form.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "NIKKOR Z 85mm f/1.8 S",
          },
          {
            label: "Display SKU",
            value: "JMA301DA",
          },
          {
            label: "Lens Mount",
            value: "Nikon Z Mount",
          },
          {
            label: "Format",
            value: "Full-frame / FX-format (Compatible with DX-format)",
          },
          {
            label: "Lens Type",
            value: "Prime, Telephoto",
          },
          {
            label: "Lens Category",
            value: "People & Events, Video",
          },
          {
            label: "Focal Length",
            value: "85mm",
          },
          {
            label: "Maximum Aperture",
            value: "f/1.8",
          },
          {
            label: "Minimum Aperture",
            value: "f/16",
          },
          {
            label: "Lens Configuration",
            value: "12 elements in 8 groups (2 ED elements, Nano Crystal Coat)",
          },
          {
            label: "Maximum Angle of View",
            value: "FX: 28°30′ | DX: 18°50′",
          },
          {
            label: "Diaphragm Blades",
            value: "9 (Rounded Diaphragm)",
          },
          {
            label: "Nano Crystal Coat",
            value: "Yes",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Autofocus",
            value: "Yes",
          },
          {
            label: "Focus Mode",
            value: "Autofocus / Manual Focus",
          },
          {
            label: "Internal Focusing",
            value: "Yes",
          },
          {
            label: "AF Actuator",
            value: "STM (Stepping Motor)",
          },
          {
            label: "Minimum Focus Distance",
            value: "0.8 m (2.62 ft.)",
          },
          {
            label: "Maximum Reproduction Ratio",
            value: "0.12×",
          },
          {
            label: "Vibration Reduction (VR)",
            value: "No",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "67 mm",
          },
          {
            label: "Filter Type",
            value: "Screw-in",
          },
          {
            label: "Dimensions",
            value: "Approx. 75 × 99 mm",
          },
          {
            label: "Weight",
            value: "Approx. 470 g",
          },
          {
            label: "Compatible Formats",
            value: "Full-frame / FX-format & APS-C / DX-format",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "LC-67B Front Lens Cap, LF-N1 Rear Lens Cap, HB-91 Lens Hood, CL-C1 Lens Case",
          },
        ],
      },
    ],
  },
  {
    id: "nikkor-z-135mm-f/1.2-s-plena",
    name: "NIKKOR Z 135mm f/1.8 S Plena",
    category: "Lenses",
    brand: "Nikon",
    price: "₹2,42,995",
    slug: "nikkor-z-135mm-f/1.2-s-plena",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/products/nikon/lens/nikkor135mm.png"],
      },
    ],
    overview:
      "The NIKKOR Z 135mm f/1.8 S Plena takes centre stage in the world of bokeh, rendering expansive, round bokeh that envelops the entire frame, even at f/1.8. Inspired by the fullness and radiance of high tide, it delivers the highest rendering performance of the S-Line lenses, ensuring impeccable rendering from subtle skin textures to intricate hair details. With advanced Meso Amorphous and ARNEO coatings, it conquers challenging backlight conditions, illuminating scenes with clarity and contrast. Designed with versatility in mind, its robust build make it the perfect tool for creative expression in a wide range of scenarios.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "NIKKOR Z 135mm f/1.8 S Plena",
          },
          {
            label: "Lens Mount",
            value: "Nikon Z Mount",
          },
          {
            label: "Format",
            value: "Full-frame / FX-format (35mm)",
          },
          {
            label: "Lens Type",
            value: "Prime, Telephoto",
          },
          {
            label: "Focal Length",
            value: "135mm",
          },
          {
            label: "Maximum Aperture",
            value: "f/1.8",
          },
          {
            label: "Minimum Aperture",
            value: "f/16",
          },
          {
            label: "Lens Configuration",
            value:
              "16 elements in 14 groups (4 ED elements, 1 Aspherical element, 1 SR element, Meso-amorphous Coat, ARNEO Coat)",
          },
          {
            label: "Angle of View",
            value: "FX: 18°10′ | DX: 12°",
          },
          {
            label: "Diaphragm Blades",
            value: "11 (Rounded Diaphragm)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Autofocus",
            value: "Yes",
          },
          {
            label: "Internal Focusing",
            value: "Yes",
          },
          {
            label: "Minimum Focus Distance",
            value: "0.82 m (2.69 ft.)",
          },
          {
            label: "Maximum Reproduction Ratio",
            value: "0.2×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Filter Diameter",
            value: "82 mm (P = 0.75 mm)",
          },
          {
            label: "Dimensions",
            value: "Approx. 98 × 139.5 mm",
          },
          {
            label: "Weight",
            value: "Approx. 995 g",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "LC-82B Front Lens Cap, LF-N1 Rear Lens Cap, HB-108 Lens Hood, CL-C2 Lens Case",
          },
        ],
      },
    ],
  },

  // fujifilm

  {
    id: "fujifilm-xF23mmf2.8-rwr",
    name: "Fujifilm XF23mmF 2.8 RWR",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹41,999",
    slug: "fujifilm-xF23mmf2.8-rwr",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/XF23mmF/1.png",
          "/products/fujifilms X series/lenses/XF23mmF/2.png",
          "/products/fujifilms X series/lenses/XF23mmF/3.png",
          "/products/fujifilms X series/lenses/XF23mmF/4.png",
          "/products/fujifilms X series/lenses/XF23mmF/5.png",
          "/products/fujifilms X series/lenses/XF23mmF/6.png",
          "/products/fujifilms X series/lenses/XF23mmF/7.png",
          "/products/fujifilms X series/lenses/XF23mmF/8.png",
          "/products/fujifilms X series/lenses/XF23mmF/9.png",
        ],
      },
    ],
    overview:
      "Inspired by the iconic 23mm focal length that defined the first X Series camera, the XF23mmF2.8 R WR delivers a natural field of view in a compact, interchangeable design. With weather resistance, smooth autofocus, and high-resolution performance, it’s lightweight, discreet, and a pleasure to use for everyday photography.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Name",
            value: "XF23mmF2.8 R WR",
          },
          {
            label: "Lens Configuration",
            value: "8 elements in 6 groups (includes 2 aspherical elements)",
          },
          {
            label: "Focal Length (35mm Equivalent)",
            value: "23mm (35mm format equivalent)",
          },
          {
            label: "Angle of View",
            value: "63.4°",
          },
          {
            label: "Maximum Aperture",
            value: "F2.8",
          },
          {
            label: "Minimum Aperture",
            value: "F16",
          },
          {
            label: "Aperture Control",
            value:
              "11 diaphragm blades (rounded aperture), 1/3 EV steps (16 stops)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.2 m (from focal plane)",
          },
          {
            label: "Maximum Magnification",
            value: "0.15×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value: "Φ61.8 mm × 23 mm (from lens mount flange)",
          },
          {
            label: "Weight",
            value:
              "Approx. 90 g (excluding caps, hoods and tripod collar foot)",
          },
          {
            label: "Filter Diameter",
            value: "Φ39 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Front lens cap FLCP-39 II, Rear lens cap RLCP-001, Lens hood LH-X27, Lens hood cap LHCP-27, Lens wrapping cloth",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xc50-230mmf4.5-6.7-oisii",
    name: "Fujifilm XC50-230mmF4.5-6.7 OISII",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹27,499",
    slug: "fujifilm-xc50-230mmf4.5-6.7-oisii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/XC50/1.png",
          "/products/fujifilms X series/lenses/XC50/2.png",
          "/products/fujifilms X series/lenses/XC50/3.png",
        ],
      },
    ],
    overview:
      "The XC50-230mm F4.5–6.7 OIS II is a lightweight telephoto zoom featuring advanced optics for clear, detailed images across long distances. With fast, silent autofocus and approximately 3.5-stop optical image stabilization, it delivers sharp, steady results for both stills and video when shooting handheld.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Number",
            value: "XC50-230mmF4.5-6.7 OIS II",
          },
          {
            label: "Release Date",
            value: "June 25, 2015",
          },
          {
            label: "Lens Configuration",
            value:
              "13 elements in 10 groups (1 aspherical lens, 1 anomalous dispersion lens)",
          },
          {
            label: "Focal Length",
            value: "50–230 mm (35mm equivalent: 76–350 mm)",
          },
          {
            label: "Angle of View",
            value: "31.7° – 7.1°",
          },
          {
            label: "Maximum Aperture",
            value: "F4.5 – F6.7",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture",
            value: "7-blade circular diaphragm, 1/3-step adjustment (15 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Shortest Shooting Distance",
            value: "Standard: 1.1 m – ∞ | Macro: 1.1 m – 3 m",
          },
          {
            label: "Maximum Magnification",
            value: "0.2× (tele end)",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value:
              "Ø69.5 mm × 111 mm (wide end) / 177 mm (tele end), measured from tip to mount reference plane",
          },
          {
            label: "Weight",
            value: "Approx. 375 g (excluding lens cap and hood)",
          },
          {
            label: "Filter Size",
            value: "Ø58 mm",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xc35mmf2",
    name: "Fujifilm-XC35mmF2",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹53,000",
    slug: "fujifilm-xc35mmf2",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/XC3/1.png",
          "/products/fujifilms X series/lenses/XC3/2.png",
        ],
      },
    ],
    overview:
      "The FUJINON XC35mmF2 offers a classic 52mm equivalent view in an ultra-compact, lightweight 130g design. With a refined optical structure for sharp, crisp images, fast and near-silent autofocus, and smooth, creamy bokeh, it combines excellent portability with high-performance everyday shooting.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Number",
            value: "XC35mmF2",
          },
          {
            label: "Release Date",
            value: "February 27, 2020",
          },
          {
            label: "Lens Configuration",
            value: "9 elements in 6 groups (2 aspherical lenses)",
          },
          {
            label: "Focal Length",
            value: "35 mm (35mm equivalent: 53 mm)",
          },
          {
            label: "Angle of View",
            value: "44.2°",
          },
          {
            label: "Maximum Aperture",
            value: "F2",
          },
          {
            label: "Minimum Aperture",
            value: "F16",
          },
          {
            label: "Aperture",
            value: "9-blade circular diaphragm, 1/3-step adjustment (19 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Shortest Shooting Distance",
            value: "35 cm – ∞",
          },
          {
            label: "Maximum Magnification",
            value: "0.14×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value:
              "φ58.4 mm × 46.5 mm (from the tip to the mount reference surface)",
          },
          {
            label: "Weight",
            value: "Approx. 130 g (excluding lens cap)",
          },
          {
            label: "Filter Size",
            value: "φ43 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "In The Box",
            value: "Lens cap FLCP-43",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf16-55mm-f2-8-r-lm-wr-ii",
    name: "Fujifilm XF16-55mmF2.8 R LM WRII",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹106,499",
    slug: "fujifilm-xf16-55mm-f2-8-r-lm-wr-ii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/XF16/1.png",
          "/products/fujifilms X series/lenses/XF16/2.png",
        ],
      },
    ],
    overview:
      "We reintroduce our flagship standard zoom with the FUJINON XF16-55mmF2.8 R LM WR II—now more compact, lightweight, and technologically advanced. Designed to deliver prime-level image quality with enhanced video capabilities, this versatile F2.8 zoom sets a new benchmark for uncompromising performance across every shooting scenario.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Number",
            value: "XF16-55mmF2.8 R LM WR II",
          },
          {
            label: "Lens Configuration",
            value:
              "16 elements in 11 groups (4 aspherical, 3 ED, 1 Super ED element)",
          },
          {
            label: "Focal Length",
            value: "16–55 mm (35mm equivalent: 24–84 mm)",
          },
          {
            label: "Angle of View",
            value: "83.2° – 29°",
          },
          {
            label: "Maximum Aperture",
            value: "F2.8",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture",
            value: "11-blade rounded diaphragm, 1/3 EV steps (19 stops)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.3 m (measured from focal plane)",
          },
          {
            label: "Maximum Magnification",
            value: "0.21× (Tele)",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value: "Wide: φ78.3 mm × 95 mm | Tele: φ78.3 mm × 122 mm",
          },
          {
            label: "Weight",
            value: "Approx. 410 g (excluding cap and hood)",
          },
          {
            label: "Filter Size",
            value: "Ø72 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "In The Box",
            value:
              "Front lens cap FLCP-72 II, Rear lens cap RLCP-001, Lens hood, Lens wrapping cloth",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf55-200mm-f3-5-4-8-r-lm-ois",
    name: "Fujifilm XF55-200mmF3.5-4.8 R LM v",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹54,499",
    slug: "fujifilm-xf55-200mm-f3-5-4-8-r-lm-ois",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/XF55/1.png",
          "/products/fujifilms X series/lenses/XF55/2.png",
          "/products/fujifilms X series/lenses/XF55/3.png",
          "/products/fujifilms X series/lenses/XF55/4.png",
          "/products/fujifilms X series/lenses/XF55/5.png",
          "/products/fujifilms X series/lenses/XF55/6.png",
          "/products/fujifilms X series/lenses/XF55/7.png",
        ],
      },
    ],
    overview:
      "Highly Portable Telephoto Zoom Built with an optical design that offers a large maximum aperture, and a linear motor that delivers high-speed AF performance, while featuring the image stabilization function that allows the use of shutter speeds 5.0 stops slower.  This is a lens you can trust even in the toughest of shooting conditions. Using high-performance glass lens elements throughout.  Containing two ED lens elements, including one Super ED lens element that boasts performance equivalent to that of fluorite lens, to control chromatic aberration, which typically occurs in long focal lengths.Sharp and crisp image description across its entire zoom range.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Number",
            value: "XF55-200mmF3.5-4.8 R LM OIS",
          },
          {
            label: "Release Date",
            value: "May 25, 2013",
          },
          {
            label: "Lens Configuration",
            value:
              "14 elements in 10 groups (1 aspherical lens, 2 anomalous dispersion lenses)",
          },
          {
            label: "Focal Length",
            value: "55–200 mm (35mm equivalent: 84–305 mm)",
          },
          {
            label: "Angle of View",
            value: "29° – 8.1°",
          },
          {
            label: "Maximum Aperture",
            value: "F3.5 – F4.8",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture",
            value: "7-blade circular diaphragm, 1/3-step adjustment (17 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value:
              "Standard: 1.1 m – ∞ (entire zoom range) | Macro: 1.1 m – 3 m (entire zoom range)",
          },
          {
            label: "Maximum Magnification",
            value: "0.18× (tele end)",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Dimensions",
            value: "Wide: Ø75 mm × 118 mm | Tele: Ø75 mm × 177 mm",
          },
          {
            label: "Weight",
            value: "Approx. 580 g (excluding lens cap and hood)",
          },
          {
            label: "Filter Size",
            value: "Ø62 mm",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf18mm-f2-r",
    name: "Fujifilm XF18mmF2 R",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹53,000",
    slug: "fujifilm-xf18mm-f2-r",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/XF55/1.png",
          "/products/fujifilms X series/lenses/XF55/2.png",
        ],
      },
    ],
    overview:
      "This highly portable, easy-to-handle wide-angle lens has a field of view equivalent to 27mm in the 35mm film format so it’s perfect for landscapes, general snapshots, and by virtue of the 18cm minimum focusing distance, close-ups. The outstanding sharpness, combined with the maximum aperture of F2 for silky bokeh also makes it suitable for portraiture; the lens’ small size means your subjects won’t feel intimidated.Compact and lightweight “Pancake” type.Using glass-mold aspheric lenses at the 5th and 7th elements is effective in increasing the maximum aperture (5th element) and reducing the overall thickness of the lens (7th element).The final element, positioned as closely to the sensor as possible, makes the incidence angle of light reaching the sensor smaller and reduces vignetting and color shading while helping to keep the lens’s overall size small.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Number",
            value: "XF18mmF2 R",
          },
          {
            label: "Release Date",
            value: "February 18, 2012",
          },
          {
            label: "Lens Configuration",
            value: "8 elements in 7 groups (2 aspherical lenses)",
          },
          {
            label: "Focal Length",
            value: "18 mm (35mm equivalent: 27 mm)",
          },
          {
            label: "Angle of View",
            value: "76.5°",
          },
          {
            label: "Maximum Aperture",
            value: "F2.0",
          },
          {
            label: "Minimum Aperture",
            value: "F16",
          },
          {
            label: "Aperture",
            value: "7-blade circular diaphragm, 1/3-step adjustment (19 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "Standard: 0.8 m – ∞ | Macro: 18 cm – 2.0 m",
          },
          {
            label: "Maximum Magnification",
            value: "0.14×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value:
              "Ø64.5 mm × 33.7 mm (from the tip to the mount reference surface)",
          },
          {
            label: "Weight",
            value: "Approx. 116 g (excluding lens cap and hood)",
          },
          {
            label: "Filter Size",
            value: "Ø52 mm",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf18-120mm-f4-lm-pz-wr",
    name: "Fujifilm XF18-120mmF4 LM PZ WR",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹83,500",
    slug: "fujifilm-xf18-120mm-f4-lm-pz-wr",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/120mmF4/1.png",
          "/products/fujifilms X series/lenses/120mmF4/2.png",
          "/products/fujifilms X series/lenses/120mmF4/3.png",
          "/products/fujifilms X series/lenses/120mmF4/4.png",
          "/products/fujifilms X series/lenses/120mmF4/5.png",
          "/products/fujifilms X series/lenses/120mmF4/6.png",
        ],
      },
    ],
    overview:
      "Compact, lightweight, and versatile, this lens is tailor-made for motion production professionals and enthusiasts alike. XF18-120mmF4 LM PZ WR features a variable power zoom, smooth manual focus, and stepless aperture adjustments to ensure a seamless recording experience.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Type",
            value: "XF18-120mmF4 LM PZ WR",
          },
          {
            label: "Lens Configuration",
            value:
              "15 elements in 12 groups (3 aspherical elements, 3 ED elements)",
          },
          {
            label: "Focal Length",
            value: "18–120 mm (35mm equivalent: 27–183 mm)",
          },
          {
            label: "Angle of View",
            value: "76.5° – 13.5°",
          },
          {
            label: "Maximum Aperture",
            value: "F4",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture",
            value: "7-blade rounded diaphragm, 1/3 EV steps (16 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.6 m (measured from focal plane)",
          },
          {
            label: "Maximum Magnification",
            value: "0.2×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value: "Ø77.3 mm × 123.5 mm",
          },
          {
            label: "Weight",
            value: "Approx. 460 g",
          },
          {
            label: "Filter Size",
            value: "Ø72 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Front lens cap FLCP-72 II, Rear lens cap RLCP-001, Lens hood, Lens wrapping cloth",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf150-600mm-f5-6-8-r-lm-ois-wr",
    name: "Fujifilm XF150-600mmF5.6-8 R LM OIS WR",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹165,999",
    slug: "fujifilm-xf150-600mm-f5-6-8-r-lm-ois-wr",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/600mmF5.6/1.png",
          "/products/fujifilms X series/lenses/600mmF5.6/2.png",
          "/products/fujifilms X series/lenses/600mmF5.6/3.png",
          "/products/fujifilms X series/lenses/600mmF5.6/4.png",
          "/products/fujifilms X series/lenses/600mmF5.6/5.png",
          "/products/fujifilms X series/lenses/600mmF5.6/6.png",
        ],
      },
    ],
    overview:
      "Have limitless creative options to make the perfect image from the sidelines of a stadium or the open fields of nature with XF150-600mmF5.6-8 R LM OIS WR, a small and light super-telephoto zoom lens with high-speed autofocus and an equivalent focal range of 229mm to 914mm.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Type",
            value: "XF150-600mmF5.6-8 R LM OIS WR",
          },
          {
            label: "Lens Configuration",
            value:
              "24 elements in 17 groups (3 ED elements, 4 Super ED elements)",
          },
          {
            label: "Focal Length",
            value: "150–600 mm (35mm equivalent: 229–914 mm)",
          },
          {
            label: "Angle of View",
            value: "10.8° – 2.7°",
          },
          {
            label: "Maximum Aperture",
            value: "F5.6 – F8",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture",
            value: "9-blade rounded diaphragm, 1/3 EV steps (13 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "2.4 m (measured from focal plane)",
          },
          {
            label: "Maximum Magnification",
            value: "0.24× (Tele)",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value: "Ø99 mm × 314.5 mm",
          },
          {
            label: "Weight",
            value: "Approx. 1,605 g",
          },
          {
            label: "Filter Size",
            value: "Ø82 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Front lens cap FLCP-82, Rear lens cap RLCP-001, Lens hood, Lens pouch, Tripod collar foot, Shoulder strap",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf56mm-f1-2-r-wr",
    name: "Fujifilm XF56mmF1.2 R WR",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹54,499",
    slug: "fujifilm-xf56mm-f1-2-r-wr",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/XF56mmF1.2/1.png",
          "/products/fujifilms X series/lenses/XF56mmF1.2/2.png",
          "/products/fujifilms X series/lenses/XF56mmF1.2/3.png",
          "/products/fujifilms X series/lenses/XF56mmF1.2/4.png",
          "/products/fujifilms X series/lenses/XF56mmF1.2/5.png",
          "/products/fujifilms X series/lenses/XF56mmF1.2/6.png",
          "/products/fujifilms X series/lenses/XF56mmF1.2/7.png",
          "/products/fujifilms X series/lenses/XF56mmF1.2/8.png",
        ],
      },
    ],
    overview:
      "The high-resolution stage is set and XF56mmF1.2 R WR is ready to perform. Its fast maximum aperture delivers precise control over depth-of-field and beautiful bokeh effects, while its optical construction produces high-resolution, aberration-free results packed with detail and color. Harness the versatility of the latest X-Trans sensors and unleash your creativity.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Type",
            value: "FUJINON XF56mmF1.2 R WR",
          },
          {
            label: "Lens Configuration",
            value:
              "13 elements in 8 groups (2 aspherical elements, 1 ED element)",
          },
          {
            label: "Focal Length",
            value: "56 mm (35mm equivalent: 85 mm)",
          },
          {
            label: "Angle of View",
            value: "28.5°",
          },
          {
            label: "Maximum Aperture",
            value: "F1.2",
          },
          {
            label: "Minimum Aperture",
            value: "F16",
          },
          {
            label: "Aperture",
            value:
              "11-blade rounded diaphragm, 1/3 EV steps (23 steps, 1/2 EV for the final stop to maximum aperture)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.5 m (measured from focal plane)",
          },
          {
            label: "Maximum Magnification",
            value: "0.14×",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "External Dimensions",
            value: "Ø79.4 mm × 76 mm",
          },
          {
            label: "Weight",
            value: "Approx. 445 g",
          },
          {
            label: "Filter Size",
            value: "Ø67 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "Included Accessories",
            value:
              "Front lens cap FLCP-67 II, Rear lens cap RLCP-001, Lens hood, Lens wrapping cloth",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf100-400mm-f4-5-5-6-r-lm-ois-wr",
    name: "Fujifilm XF100-400mmF4.5-5.6 R LM OIS WR",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹156,999",
    slug: "fujifilm-xf100-400mm-f4-5-5-6-r-lm-ois-wr",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/400mmF4/1.png",
          "/products/fujifilms X series/lenses/400mmF4/2.png",
          "/products/fujifilms X series/lenses/400mmF4/3.png",
          "/products/fujifilms X series/lenses/400mmF4/4.png",
          "/products/fujifilms X series/lenses/400mmF4/5.png",
          "/products/fujifilms X series/lenses/400mmF4/6.png",
          "/products/fujifilms X series/lenses/400mmF4/7.png",
        ],
      },
    ],
    overview:
      " The FUJINON XF100-400mmF4.5-5.6 R LM OIS WR is a super-telephoto zoom lens that covers a 35mm focal length equivalent of 152-609mm. The high-performance optical construction of 21 elements in 14 groups includes five ED lenses and one Super ED lens to help reduce chromatic aberration that often occurs in telephoto lenses. As a result, it delivers the highest image quality in its class. The lens has been designed for handheld shooting with a 5.0-stop* image stabilization system and weighs less than 1.4kg. Linear motor for fast autofocusing makes it perfect for shooting fast-moving subjects including aircraft and motorsports. The lens is also both water and dust-resistant and can operate in temperatures as low as -10°C, so it’s suitable for use in a wide range of outdoor shooting conditions. A fluorine coating has also been applied to the front lens element to repel water and dirt, further improving the toughness of the lens.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Number",
            value: "XF100-400mmF4.5-5.6 R LM OIS WR",
          },
          {
            label: "Release Date",
            value: "February 18, 2016",
          },
          {
            label: "Lens Configuration",
            value:
              "21 elements in 14 groups (6 ED elements, including 1 Super ED element)",
          },
          {
            label: "Focal Length",
            value: "100–400 mm (35mm equivalent: 152–609 mm)",
          },
          {
            label: "Angle of View",
            value: "16.2° – 4.1°",
          },
          {
            label: "Maximum Aperture",
            value: "F4.5 (Wide) – F5.6 (Tele)",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture",
            value: "9-blade circular diaphragm, 1/3-step adjustment (15 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "1.75 m – ∞ (entire zoom range)",
          },
          {
            label: "Maximum Magnification",
            value: "0.19× (tele end)",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Dimensions",
            value: "Wide: Ø94.8 mm × 210.5 mm | Tele: Ø94.8 mm × 270 mm",
          },
          {
            label: "Weight",
            value:
              "Approx. 1,375 g (excluding lens cap, hood, and tripod mount)",
          },
          {
            label: "Filter Size",
            value: "Ø77 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "In The Box",
            value:
              "Lens cap FLCP-77, Rear lens cap RLCP-001, Lens hood, Lens wrapping cloth",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-xf70-300mm-f4-5-5-6-r-lm-ois-wr",
    name: "Fujifilm XF70-300mmF4-5.6 R LM OIS WR",
    category: "Lenses",
    brand: "Fujifilm",
    price: "₹72,499",
    slug: "fujifilm-xf70-300mm-f4-5-5-6-r-lm-ois-wr",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/lenses/300mmF4/1.png",
          "/products/fujifilms X series/lenses/300mmF4/2.png",
          "/products/fujifilms X series/lenses/300mmF4/3.png",
          "/products/fujifilms X series/lenses/300mmF4/4.png",
          "/products/fujifilms X series/lenses/300mmF4/5.png",
          "/products/fujifilms X series/lenses/300mmF4/6.png",
          "/products/fujifilms X series/lenses/300mmF4/7.png",
        ],
      },
    ],
    overview:
      "Compact, lightweight, and weather-resistant, XF70-300mmF4-5.6 R LM makes it easy to make super-telephoto images on your greatest adventures and create images that show the true excitement and awe of your experience. With a huge focal range, state-of-the-art autofocus, advanced image stabilization, and close focusing performance equivalent to half-macro, XF70-300mm ensures you’re always ready to make images, whether your subject’s in the undergrowth beneath your feet, or in a tree on the distant horizon.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          {
            label: "Model Number",
            value: "XF70-300mmF4-5.6 R LM OIS WR",
          },
          {
            label: "Release Date",
            value: "March 18, 2021",
          },
          {
            label: "Lens Configuration",
            value: "17 elements in 12 groups (1 aspherical lens, 2 ED lenses)",
          },
          {
            label: "Focal Length",
            value: "70–300 mm (35mm equivalent: 107–457 mm)",
          },
          {
            label: "Angle of View",
            value: "22.9° – 5.4°",
          },
          {
            label: "Maximum Aperture",
            value: "F4–F5.6",
          },
          {
            label: "Minimum Aperture",
            value: "F22",
          },
          {
            label: "Aperture",
            value: "9-blade circular diaphragm, 1/3-step adjustment (16 steps)",
          },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Minimum Focus Distance",
            value: "0.83 m",
          },
          {
            label: "Maximum Magnification",
            value: "0.33× (wide end)",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Dimensions",
            value: "Wide: Ø75 mm × 132.5 mm | Tele: Ø75 mm × 205.5 mm",
          },
          {
            label: "Weight",
            value: "Approx. 580 g (excluding lens cap and hood)",
          },
          {
            label: "Filter Size",
            value: "Ø67 mm",
          },
        ],
      },
      {
        category: "Accessories",
        items: [
          {
            label: "In The Box",
            value:
              "Lens front cap, Lens rear cap, Lens hood, Lens wrapping cloth",
          },
        ],
      },
    ],
  },

  // canon

  {
    id: "rf16-28mm",
    name: "RF16-28mm F2.8 IS STM Lens",
    category: "Lenses",
    brand: "Canon",
    price: "$999",
    slug: "rf16-28mm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf16-28mm/lens1.webp",
          "/products/canon/lenses/rf16-28mm/lens2.webp",
          "/products/canon/lenses/rf16-28mm/lens3.webp",
          "/products/canon/lenses/rf16-28mm/lens4.webp",
          "/products/canon/lenses/rf16-28mm/lens5.webp",
        ],
      },
    ],
    overview:
      "The RF16-28mm F2.8 IS STM lens is perfect for both still and video content creators who desire high image quality and constant aperture at a more affordable price point than traditional L-series products.  This lens is now the smallest, lightest RF zoom lens with image quality equivalent to a Canon L-series specification.  For still image creators this light and compact lens weighing in at just over one pound will be a “take anywhere” kind of lens. Offering a fast f/2.8 aperture throughout the zoom range, photographers can work in low light situations or take creative control and blur the foreground and background with wide apertures not possible entry-level wide-angle lenses. Pairing this lens with the current RF28-70mm F2.8 IS STM gives you incredible zoom range coverage while maintaining high image quality.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount (Metal Mount)" },
          {
            label: "Focal Length",
            value: "16-28mm (25.6-44.8mm equivalent on APS-C)",
          },
          { label: "Maximum Aperture", value: "f/2.8" },
          { label: "Minimum Aperture", value: "f/22" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-series (Full-Frame & APS-C)",
          },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "16 elements in 13 groups" },
          {
            label: "Special Elements",
            value: "4 UD Elements, 2 Aspherical Elements",
          },
          { label: "Lens Coating", value: "Super Spectra Coating (SSC)" },
          { label: "Aperture Blades", value: "9" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "STM (Stepping Motor)" },
          {
            label: "Minimum Focus Distance",
            value: "0.25 m (16mm), 0.20 m (28mm)",
          },
          {
            label: "Maximum Magnification",
            value: "0.11× (16mm), 0.26× (28mm)",
          },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Optical IS" },
          {
            label: "Stabilization Performance",
            value:
              "5.5 stops (Lens IS), Up to 8.0 stops with Coordinated IS & IBIS",
          },
        ],
      },
      {
        category: "Viewing Angle",
        items: [
          { label: "Angle of View (Diagonal)", value: "108°10′ – 75°" },
          { label: "Field of View (16mm)", value: "Approx. 318.2 × 212.1 mm" },
          { label: "Field of View (28mm)", value: "Approx. 138.3 × 92.2 mm" },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Combined Control Ring (User-selectable)",
          },
          { label: "AF/MF Switch", value: "AF / CONTROL / MF Switch" },
          { label: "Manual Focus Ring", value: "Not Provided" },
          { label: "Lens Function Button", value: "Not Provided" },
          { label: "Distance Scale", value: "Not Provided" },
          { label: "Distance Limiter Switch", value: "Not Provided" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
    ],
  },
  {
    id: "rf28-70mm",
    name: "RF28-70mm F2.8 IS STM",
    category: "Lenses",
    brand: "Canon",
    price: "$1,149",
    slug: "rf28-70mm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf28-70mm/lens1.webp",
          "/products/canon/lenses/rf28-70mm/lens2.webp",
          "/products/canon/lenses/rf28-70mm/lens3.webp",
          "/products/canon/lenses/rf28-70mm/lens4.webp",
          "/products/canon/lenses/rf28-70mm/lens5.webp",
        ],
      },
    ],
    overview:
      "The RF28-70mm F2.8 IS STM lens is great for both still and video content creators who may have a smaller budget but want high quality.  This lens is now the smallest, lightest, RF zoom lens with extremely high image quality (equal to that of an L-series lens). For still image creators this light and compact lens weighing in at just over one pound will be a “take anywhere” kind of lens. Offering a fast f/2.8 aperture throughout the zoom range, photographers can work in low light situations or take creative control and blur the foreground and background with wide apertures not available on standard kit lenses.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount" },
          { label: "Focal Length", value: "28-70mm" },
          { label: "Maximum Aperture", value: "f/2.8" },
          { label: "Minimum Aperture", value: "f/22" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-series (APS-C & Full-Frame)",
          },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "15 elements in 12 groups" },
          {
            label: "Special Elements",
            value: "2 UD Elements, 2 Aspherical Elements",
          },
          { label: "Lens Coating", value: "Super Spectra Coating (SSC)" },
          { label: "Aperture Blades", value: "9" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "Leadscrew Type STM" },
          {
            label: "Minimum Focus Distance",
            value: "0.27 m (AF), 0.24 m (MF) at 28mm",
          },
          { label: "Maximum Magnification", value: "0.24× at 70mm" },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Optical IS" },
          {
            label: "Stabilization Performance",
            value:
              "5.5 stops (Lens IS), Up to 7.5 stops with Coordinated IS & IBIS",
          },
        ],
      },
      {
        category: "Viewing Angle",
        items: [
          { label: "Angle of View (Diagonal)", value: "75° – 34°" },
          {
            label: "Field of View (AF)",
            value: "Approx. 219.6 × 146.4 mm (28mm) to 141.6 × 94.4 mm (70mm)",
          },
          {
            label: "Field of View (MF)",
            value: "Approx. 182.2 × 121.5 mm (28mm) to 141.6 × 94.4 mm (70mm)",
          },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Dual-function Manual Focus Ring / Control Ring",
          },
          { label: "Manual Focus Ring", value: "Electronic Ring System" },
          { label: "AF/MF Switch", value: "AF / Control / MF Switch" },
          { label: "Aperture Ring", value: "Not Provided" },
          { label: "Lens Function Button", value: "Not Provided" },
          {
            label: "External Distance Scale",
            value: "Displayed in EVF / Live View",
          },
          { label: "Distance Limiter Switch", value: "None" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
    ],
  },
  {
    id: "rf14-35mm",
    name: "RF14-35mm F4 L IS USM",
    category: "Lenses",
    brand: "Canon",
    price: "$1,299",
    slug: "rf14-35mm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf14-35mm/lens1.webp",
          "/products/canon/lenses/rf14-35mm/lens2.webp",
          "/products/canon/lenses/rf14-35mm/lens3.webp",
          "/products/canon/lenses/rf14-35mm/lens4.webp",
          "/products/canon/lenses/rf14-35mm/lens5.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 14-35mm F4 L IS USM is a compact L-series ultra-wide zoom lens designed for EOS R cameras. Featuring a constant f/4 aperture, up to 5.5-stop Optical Image Stabilization (up to 7 stops with compatible IBIS cameras), and exceptional image quality, it's ideal for landscapes, architecture, travel, video, vlogging, and creative wide-angle photography.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount (Metal Mount)" },
          { label: "Focal Length", value: "14-35mm" },
          { label: "Maximum Aperture", value: "f/4" },
          { label: "Minimum Aperture", value: "f/22" },
          { label: "Compatible Cameras", value: "Canon EOS R-Series Cameras" },
          { label: "Weight", value: "540 g" },
          { label: "Dimensions", value: "84.1 × 99.8 mm" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "16 elements in 12 groups" },
          {
            label: "Special Elements",
            value:
              "3 UD Elements, 3 Aspherical Elements (including 1 UD Aspherical)",
          },
          { label: "Lens Coatings", value: "SSC, SWC, ASC, Fluorine Coating" },
          { label: "Aperture Blades", value: "9 (Circular)" },
          { label: "Filter Size", value: "77 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "Nano USM (Rear Focusing)" },
          { label: "Minimum Focus Distance", value: "0.20 m (7.9 in.)" },
          { label: "Maximum Magnification", value: "0.38× at 35mm" },
          { label: "Full-Time Manual Focus", value: "Yes (One-Shot AF)" },
          { label: "Image Stabilization", value: "Optical IS" },
          {
            label: "Stabilization Performance",
            value:
              "5.5 stops Optical IS, Up to 7 stops with Coordinated IS (EOS R5/R6)",
          },
        ],
      },
      {
        category: "Viewing Angle",
        items: [
          { label: "Angle of View (Diagonal)", value: "114° – 63°" },
          {
            label: "Maximum Magnification Area",
            value: "Approx. 94 × 63 mm at 35mm",
          },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Yes (Click-stops, User Customizable)",
          },
          { label: "Lens Switches", value: "AF/MF, Image Stabilizer ON/OFF" },
          { label: "IS Mode Selection", value: "Automatic Panning Detection" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon EW-83P" },
          { label: "Lens Cap", value: "Canon E-77 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1219" },
          { label: "Teleconverter Compatibility", value: "Not Compatible" },
          { label: "Extension Tube Compatibility", value: "Not Compatible" },
          {
            label: "Close-up Lens Compatibility",
            value: "Canon 500D (77mm), Canon 250D Not Compatible",
          },
          {
            label: "Gelatin Filter Holder",
            value: "Compatible (77mm Adapter Required)",
          },
        ],
      },
    ],
  },
  {
    id: "rf100mm",
    name: "RF100mm F2.8 L Macro IS USM",
    category: "Lenses",
    brand: "Canon",
    price: "$1,349",
    slug: "rf100mm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf100mm/lens1.webp",
          "/products/canon/lenses/rf100mm/lens2.webp",
          "/products/canon/lenses/rf100mm/lens3.webp",
          "/products/canon/lenses/rf100mm/lens4.webp",
          "/products/canon/lenses/rf100mm/lens5.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 100mm F2.8 L Macro IS USM is a premium macro lens offering up to 1.4x magnification with autofocus for exceptional close-up photography. Featuring a bright f/2.8 aperture, advanced Hybrid IS, fast autofocus, and a unique SA Control Ring for creative soft-focus effects, it's perfect for macro, portraits, and artistic photography.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount" },
          { label: "Focal Length", value: "100mm" },
          { label: "Maximum Aperture", value: "f/2.8" },
          { label: "Minimum Aperture", value: "f/32" },
          { label: "Compatible Cameras", value: "Canon EOS R-Series Cameras" },
          { label: "Weight", value: "730 g" },
          { label: "Dimensions", value: "81.5 × 148 mm" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "17 elements in 13 groups" },
          { label: "SA Control", value: "Spherical Aberration Control Ring" },
          {
            label: "Lens Coatings",
            value: "Super Spectra Coating, Fluorine Coating",
          },
          { label: "Aperture Blades", value: "9" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Minimum Focus Distance", value: "0.26 m (10.2 in.)" },
          { label: "Maximum Magnification", value: "1.4×" },
          { label: "Angle of View (Diagonal)", value: "24°00′" },
          { label: "Image Stabilization", value: "Optical IS with Hybrid IS" },
          {
            label: "Stabilization Performance",
            value:
              "5 stops Optical IS, Up to 8 stops with Coordinated IS & IBIS",
          },
          { label: "IS Mode Selection", value: "Automatic Panning Detection" },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          { label: "Dust & Weather Resistant", value: "Yes" },
          {
            label: "Weather Sealing",
            value:
              "Rubber seals on lens mount, focus ring, control ring, SA control ring, and switches",
          },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon ET-73C" },
          { label: "Lens Cap", value: "Canon E-67 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon Lens Pouch LP1222" },
          { label: "Tripod Mount", value: "Tripod Mount Ring E(B) (Optional)" },
        ],
      },
    ],
  },
  {
    id: "rf35mm",
    name: "RF35mm F1.4 L VCM",
    category: "Lenses",
    brand: "Canon",
    price: "$1,549",
    slug: "rf35mm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf35mm/lens1.webp",
          "/products/canon/lenses/rf35mm/lens2.webp",
          "/products/canon/lenses/rf35mm/lens3.webp",
          "/products/canon/lenses/rf35mm/lens4.webp",
          "/products/canon/lenses/rf35mm/lens5.webp",
          "/products/canon/lenses/rf35mm/lens6.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 35mm F1.4 L VCM is a premium L-series wide-angle prime lens designed for both photography and video. Featuring a fast f/1.4 aperture, silent VCM and Nano USM autofocus, a dedicated manual iris ring, and minimal focus breathing, it's ideal for street photography, weddings, filmmaking, and content creation.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount" },
          { label: "Focal Length", value: "35mm" },
          { label: "Maximum Aperture", value: "f/1.4" },
          { label: "Minimum Aperture", value: "f/16" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-Series (APS-C & Full-Frame)",
          },
          { label: "Weight", value: "555 g" },
          { label: "Dimensions", value: "76.5 × 99.3 mm" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "14 elements in 11 groups" },
          {
            label: "Special Elements",
            value: "2 UD Elements, 2 Aspherical Elements",
          },
          {
            label: "Lens Coatings",
            value:
              "Air Sphere Coating (ASC), Super Spectra Coating (SSC), Fluorine Coating",
          },
          { label: "Aperture Blades", value: "11" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Focusing System",
            value: "Nano USM + Voice Coil Motor (VCM)",
          },
          { label: "Minimum Focus Distance", value: "0.28 m (11.0 in.)" },
          { label: "Maximum Magnification", value: "0.18×" },
          { label: "Angle of View (Diagonal)", value: "63°" },
          {
            label: "Field of View at Minimum Focus",
            value: "Approx. 195 × 130 mm",
          },
          { label: "Full-Time Manual Focus", value: "Yes" },
          {
            label: "Image Stabilization",
            value: "Up to 7.0 stops hand-held shake correction",
          },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Dual-function Manual Focus / Control Ring",
          },
          { label: "Manual Focus Ring", value: "Electronic Ring System" },
          { label: "AF/MF Switch", value: "Provided" },
          { label: "Iris Ring", value: "Provided" },
          { label: "Lens Function Button", value: "Provided" },
          { label: "Distance Scale", value: "Displayed in EVF / Live View" },
          { label: "Distance Limiter Switch", value: "None" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon EW-73F" },
          { label: "Lens Cap", value: "Canon E-67 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1219" },
          { label: "Extension Tube Compatibility", value: "Not Compatible" },
          { label: "Close-up Lens Compatibility", value: "Not Compatible" },
          { label: "RF Extender Compatibility", value: "Not Compatible" },
          { label: "Rear Gelatin Filter Holder", value: "Compatible" },
        ],
      },
    ],
  },
  {
    id: "rf20mm-f1.4-l-vcm",
    name: "RF20mm F1.4 L VCM",
    category: "Lenses",
    brand: "Canon",
    price: "$1,899",
    slug: "rf20mm-f1.4-l-vcm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf20mm/lens1.webp",
          "/products/canon/lenses/rf20mm/lens2.webp",
          "/products/canon/lenses/rf20mm/lens3.webp",
          "/products/canon/lenses/rf20mm/lens4.webp",
          "/products/canon/lenses/rf20mm/lens5.webp",
          "/products/canon/lenses/rf20mm/lens6.webp",
          "/products/canon/lenses/rf20mm/lens7.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 20mm F1.4 L VCM is a professional L-series ultra-wide prime lens built for both photography and video. Featuring a fast f/1.4 aperture, silent VCM autofocus, a dedicated manual iris ring, and minimal focus breathing, it's ideal for landscapes, architecture, street photography, filmmaking, and creative low-light shooting.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount (Metal Mount)" },
          { label: "Focal Length", value: "20mm" },
          { label: "Maximum Aperture", value: "f/1.4" },
          { label: "Minimum Aperture", value: "f/16" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-Series (APS-C & Full-Frame)",
          },
          { label: "Weight", value: "519 g" },
          { label: "Dimensions", value: "76.5 × 99.3 mm" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "15 elements in 11 groups" },
          {
            label: "Special Elements",
            value:
              "1 Super UD Element, 2 UD Elements, 1 BR Lens, 2 Aspherical Elements",
          },
          {
            label: "Lens Coatings",
            value:
              "Super Spectra Coating (SSC), Sub-Wavelength Structure Coating (SWC), Air Sphere Coating (ASC), Fluorine Coating",
          },
          { label: "Aperture Blades", value: "11" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "Voice Coil Motor (VCM)" },
          { label: "Minimum Focus Distance", value: "0.20 m (7.9 in.)" },
          { label: "Maximum Magnification", value: "0.19×" },
          { label: "Angle of View (Diagonal)", value: "94°" },
          {
            label: "Field of View at Minimum Focus",
            value: "Approx. 184 × 122 mm",
          },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Not Available" },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Front Control Ring with Click Stops (Customizable)",
          },
          { label: "Manual Focus Ring", value: "Electronic Ring System" },
          { label: "AF/MF Switch", value: "Provided" },
          { label: "Iris Ring", value: "Provided" },
          { label: "Lens Function Button", value: "Provided" },
          { label: "Distance Scale", value: "Displayed in EVF / LCD" },
          { label: "Distance Limiter Switch", value: "None" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon EW-73H" },
          { label: "Lens Cap", value: "Canon E-67 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1219" },
          { label: "Extension Tube Compatibility", value: "Not Compatible" },
          { label: "Close-up Lens Compatibility", value: "Not Compatible" },
          { label: "RF Extender Compatibility", value: "Not Compatible" },
          {
            label: "Rear Gelatin Filter Holder",
            value: "Included (Accepts User-Cut Gel/Polyester Filters)",
          },
        ],
      },
    ],
  },
  {
    id: "rf75-300mm-f4-5.6",
    name: "RF75-300mm F4-5.6",
    category: "Lenses",
    brand: "Canon",
    price: "$219.99",
    slug: "rf75-300mm-f4-5.6",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf75/lens1.webp",
          "/products/canon/lenses/rf75/lens2.webp",
          "/products/canon/lenses/rf75/lens3.webp",
          "/products/canon/lenses/rf75/lens4.webp",
          "/products/canon/lenses/rf75/lens5.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 75-300mm F4-5.6 is a lightweight telephoto zoom lens designed to bring distant subjects closer with ease. Its versatile 75-300mm zoom range makes it ideal for sports, wildlife, travel, and outdoor photography, while delivering beautiful background blur and professional-looking compressed perspective.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount" },
          { label: "Focal Length", value: "75-300mm" },
          { label: "Maximum Aperture", value: "f/4 (75mm) – f/5.6 (300mm)" },
          { label: "Minimum Aperture", value: "f/32 (75mm) – f/45 (300mm)" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-Series Mirrorless (APS-C & Full-Frame)",
          },
          { label: "Weight", value: "507 g" },
          { label: "Dimensions", value: "71.2 × 146.1 mm" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "13 elements in 9 groups" },
          { label: "Special Elements", value: "None" },
          { label: "Lens Coating", value: "Super Spectra Coating (SSC)" },
          { label: "Aperture Blades", value: "7" },
          { label: "Filter Size", value: "58 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "DC Motor (Gear Type)" },
          { label: "Minimum Focus Distance", value: "1.5 m (4.9 ft.)" },
          { label: "Maximum Magnification", value: "0.25× at 300mm" },
          { label: "Angle of View (Diagonal)", value: "32°11′ – 8°15′" },
          {
            label: "Field of View at Maximum Magnification",
            value: "Approx. 139 × 94 mm",
          },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Not Available" },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          { label: "Control Ring", value: "Not Provided" },
          { label: "Manual Focus Ring", value: "Provided" },
          { label: "AF/MF Switch", value: "Provided" },
          { label: "Iris Ring", value: "Not Provided" },
          { label: "Lens Function Button", value: "Not Provided" },
          { label: "Distance Scale", value: "Not Provided" },
          { label: "Distance Limiter Switch", value: "Not Provided" },
          { label: "Tripod Collar", value: "Not Provided" },
          { label: "Dust & Weather Resistant", value: "No" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon ET-60 (Sold Separately)" },
          { label: "Lens Cap", value: "Canon E-58 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1019 (Sold Separately)" },
          { label: "RF Extender Compatibility", value: "Not Compatible" },
          {
            label: "Close-up Lens Compatibility",
            value: "Compatible with Canon 250D / 500D (58mm)",
          },
        ],
      },
    ],
  },
  {
    id: "rf85mm-f1.4-l-vcm",
    name: "RF85mm F1.4 L VCM",
    category: "Lenses",
    brand: "Canon",
    price: "$879.99",
    slug: "rf85mm-f1.4-l-vcm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/rf85mm/lens1.webp",
          "/products/canon/lenses/rf85mm/lens2.webp",
          "/products/canon/lenses/rf85mm/lens3.webp",
          "/products/canon/lenses/rf85mm/lens4.webp",
          "/products/canon/lenses/rf85mm/lens5.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 85mm F1.4 L VCM is a premium L-series portrait lens designed for both photography and video. Featuring a fast f/1.4 aperture, silent VCM autofocus, a dedicated manual iris ring, and minimal focus breathing, it delivers stunning portraits, beautiful bokeh, and exceptional performance for filmmaking and low-light shooting.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount" },
          { label: "Focal Length", value: "85mm" },
          { label: "Maximum Aperture", value: "f/1.4" },
          { label: "Minimum Aperture", value: "f/16" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-Series (APS-C & Full-Frame)",
          },
          { label: "Weight", value: "Approx. 636 g (22.43 oz)" },
          { label: "Dimensions", value: "76.5 × 99.3 mm" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "14 elements in 10 groups" },
          {
            label: "Special Elements",
            value: "1 UD Element, 1 Aspherical Element",
          },
          {
            label: "Lens Coatings",
            value:
              "Air Sphere Coating (ASC), Super Spectra Coating (SSC), Fluorine Coating",
          },
          { label: "Aperture Blades", value: "11" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "Voice Coil Motor (VCM)" },
          { label: "Minimum Focus Distance", value: "0.75 m (2.46 ft.)" },
          { label: "Maximum Magnification", value: "0.12×" },
          { label: "Angle of View (Diagonal)", value: "28°30′" },
          {
            label: "Field of View at Minimum Focus",
            value: "Approx. 283 × 190 mm",
          },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Not Available" },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          { label: "Control Ring", value: "Provided" },
          { label: "Manual Focus Ring", value: "Electronic Ring System" },
          { label: "AF/MF Switch", value: "Provided" },
          { label: "Iris Ring", value: "Provided" },
          { label: "Lens Function Button", value: "Provided" },
          { label: "Distance Scale", value: "Displayed in EVF / Live View" },
          { label: "Distance Limiter Switch", value: "None" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon ET-73C" },
          { label: "Lens Cap", value: "Canon E-67 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1219" },
          { label: "Extension Tube Compatibility", value: "Not Compatible" },
          { label: "Close-up Lens Compatibility", value: "Not Compatible" },
          { label: "RF Extender Compatibility", value: "Not Compatible" },
          { label: "Rear Gelatin Filter Holder", value: "Not Compatible" },
        ],
      },
    ],
  },
  {
    id: "refurbished-rf28-70mm-f2.8-is-stm",
    name: "Refurbished RF28-70mm F2.8 IS STM",
    category: "Lenses",
    brand: "Canon",
    price: "$879.99",
    slug: "refurbished-rf28-70mm-f2.8-is-stm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/refurbished-rf28/lens1.webp",
          "/products/canon/lenses/refurbished-rf28/lens2.webp",
          "/products/canon/lenses/refurbished-rf28/lens3.webp",
          "/products/canon/lenses/refurbished-rf28/lens4.webp",
          "/products/canon/lenses/refurbished-rf28/lens5.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 28-70mm F2.8 IS STM is a compact, lightweight standard zoom lens offering a constant f/2.8 aperture and outstanding image quality. Ideal for photography and video, it excels in low-light conditions while providing beautiful background blur, making it a versatile everyday lens for travel, portraits, and content creation.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount" },
          { label: "Focal Length", value: "28-70mm" },
          { label: "Maximum Aperture", value: "f/2.8" },
          { label: "Minimum Aperture", value: "f/22" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-Series (APS-C & Full-Frame)",
          },
          { label: "Weight", value: "495 g" },
          { label: "Dimensions", value: "76.5 × 92.2 mm (Retracted)" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "15 elements in 12 groups" },
          {
            label: "Special Elements",
            value: "2 UD Elements, 2 Aspherical Elements",
          },
          { label: "Lens Coating", value: "Super Spectra Coating (SSC)" },
          { label: "Aperture Blades", value: "9" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "Leadscrew Type STM" },
          {
            label: "Minimum Focus Distance",
            value: "0.27 m (AF), 0.24 m (MF) at 28mm",
          },
          { label: "Maximum Magnification", value: "0.24× at 70mm" },
          { label: "Angle of View (Diagonal)", value: "75° – 34°" },
          {
            label: "Field of View (AF)",
            value: "Approx. 219.6 × 146.4 mm (28mm) to 141.6 × 94.4 mm (70mm)",
          },
          {
            label: "Field of View (MF)",
            value: "Approx. 182.2 × 121.5 mm (28mm) to 141.6 × 94.4 mm (70mm)",
          },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Optical IS" },
          {
            label: "Stabilization Performance",
            value:
              "5.5 stops Optical IS, Up to 7.5 stops with Coordinated IS & IBIS",
          },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Dual-function Manual Focus Ring / Control Ring",
          },
          { label: "Manual Focus Ring", value: "Electronic Ring System" },
          { label: "AF/MF Switch", value: "AF / Control / MF Switch" },
          { label: "Aperture Ring", value: "Not Provided" },
          { label: "Lens Function Button", value: "Not Provided" },
          { label: "Distance Scale", value: "Displayed in EVF / Live View" },
          { label: "Distance Limiter Switch", value: "None" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon EW-73D (Sold Separately)" },
          { label: "Lens Cap", value: "Canon E-67 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1116 (Sold Separately)" },
          { label: "Extension Tube Compatibility", value: "Not Compatible" },
          { label: "Close-up Lens Compatibility", value: "Not Compatible" },
          { label: "RF Extender Compatibility", value: "Not Compatible" },
          { label: "Rear Gelatin Filter Holder", value: "Not Compatible" },
        ],
      },
    ],
  },
  {
    id: "refurbished-rf16-28mm-f2.8-is-stm",
    name: "Refurbished RF16-28mm F2.8 IS STM",
    category: "Lenses",
    brand: "Canon",
    price: "$879.99",
    slug: "refurbished-rf16-28mm-f2.8-is-stm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/refurbished-rf16/lens1.webp",
          "/products/canon/lenses/refurbished-rf16/lens2.webp",
          "/products/canon/lenses/refurbished-rf16/lens3.webp",
          "/products/canon/lenses/refurbished-rf16/lens4.webp",
          "/products/canon/lenses/refurbished-rf16/lens5.webp",
          "/products/canon/lenses/refurbished-rf16/lens6.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 16-28mm F2.8 IS STM is a compact ultra-wide zoom lens featuring a constant f/2.8 aperture and exceptional image quality. Lightweight and versatile, it's ideal for landscapes, architecture, travel, vlogging, and video production, delivering excellent low-light performance and creative wide-angle perspectives.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount (Metal Mount)" },
          {
            label: "Focal Length",
            value: "16-28mm (25.6-44.8mm equivalent on APS-C)",
          },
          { label: "Maximum Aperture", value: "f/2.8" },
          { label: "Minimum Aperture", value: "f/22" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-Series (Full-Frame & APS-C)",
          },
          { label: "Weight", value: "445 g" },
          { label: "Dimensions", value: "76.5 × 91 mm (Retracted)" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "16 elements in 13 groups" },
          {
            label: "Special Elements",
            value: "4 UD Elements, 2 Aspherical Elements",
          },
          { label: "Lens Coating", value: "Super Spectra Coating (SSC)" },
          { label: "Aperture Blades", value: "9" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          { label: "Focusing System", value: "STM (Stepping Motor)" },
          {
            label: "Minimum Focus Distance",
            value: "0.25 m (16mm), 0.20 m (28mm)",
          },
          {
            label: "Maximum Magnification",
            value: "0.11× (16mm), 0.26× (28mm)",
          },
          { label: "Angle of View (Diagonal)", value: "108°10′ – 75°" },
          { label: "Field of View (16mm)", value: "Approx. 318.2 × 212.1 mm" },
          { label: "Field of View (28mm)", value: "Approx. 138.3 × 92.2 mm" },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Optical IS" },
          {
            label: "Stabilization Performance",
            value:
              "5.5 stops Optical IS, Up to 8.0 stops with Coordinated IS & IBIS",
          },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Combined Control Ring (User-selectable)",
          },
          { label: "Manual Focus Ring", value: "Not Provided" },
          { label: "AF/MF Switch", value: "AF / Control / MF Switch" },
          { label: "Iris Ring", value: "Not Provided" },
          { label: "Lens Function Button", value: "Not Provided" },
          { label: "Distance Scale", value: "Not Provided" },
          { label: "Distance Limiter Switch", value: "Not Provided" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon EW-73E (Sold Separately)" },
          { label: "Lens Cap", value: "Canon E-67 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1116 (Sold Separately)" },
          { label: "Extension Tube Compatibility", value: "Not Compatible" },
          { label: "Close-up Lens Compatibility", value: "Not Compatible" },
          { label: "RF Extender Compatibility", value: "Not Compatible" },
          { label: "Rear Gelatin Filter Holder", value: "Not Compatible" },
        ],
      },
    ],
  },
  {
    id: "refurbished-rf24mm-f1.4-l-vcm",
    name: "Refurbished RF24mm F1.4 L VCM",
    category: "Lenses",
    brand: "Canon",
    price: "$1,259",
    slug: "refurbished-rf24mm-f1.4-l-vcm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/refurbished-rf24mm/lens1.webp",
          "/products/canon/lenses/refurbished-rf24mm/lens2.webp",
          "/products/canon/lenses/refurbished-rf24mm/lens3.webp",
          "/products/canon/lenses/refurbished-rf24mm/lens4.webp",
          "/products/canon/lenses/refurbished-rf24mm/lens5.webp",
          "/products/canon/lenses/refurbished-rf24mm/lens6.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 24mm F1.4 L VCM is a professional hybrid L-series wide-angle prime lens built for photography and video. Featuring a fast f/1.4 aperture, silent VCM and Nano USM autofocus, a dedicated manual iris ring, and minimal focus breathing, it's perfect for landscapes, street photography, filmmaking, vlogging, and low-light creative work.",
    specs: [
      {
        category: "Lens Specifications",
        items: [
          { label: "Lens Mount", value: "Canon RF Mount (Metal Mount)" },
          { label: "Focal Length", value: "24mm" },
          { label: "Maximum Aperture", value: "f/1.4" },
          { label: "Minimum Aperture", value: "f/16" },
          {
            label: "Compatible Cameras",
            value: "Canon EOS R-Series (APS-C & Full-Frame)",
          },
          { label: "Weight", value: "525 g" },
          { label: "Dimensions", value: "76.5 × 99.3 mm" },
        ],
      },
      {
        category: "Optical Design",
        items: [
          { label: "Lens Construction", value: "15 elements in 11 groups" },
          {
            label: "Special Elements",
            value: "2 UD Elements, 1 Aspherical Element",
          },
          {
            label: "Lens Coatings",
            value:
              "Air Sphere Coating (ASC), Super Spectra Coating (SSC), Fluorine Coating",
          },
          { label: "Aperture Blades", value: "11" },
          { label: "Filter Size", value: "67 mm" },
        ],
      },
      {
        category: "Focus & Performance",
        items: [
          {
            label: "Focusing System",
            value: "Nano USM + Voice Coil Motor (VCM)",
          },
          { label: "Minimum Focus Distance", value: "0.24 m (9.4 in.)" },
          { label: "Maximum Magnification", value: "0.17×" },
          { label: "Angle of View (Diagonal)", value: "84°" },
          {
            label: "Field of View at Minimum Focus",
            value: "Approx. 210 × 140 mm",
          },
          { label: "Full-Time Manual Focus", value: "Yes" },
          { label: "Image Stabilization", value: "Not Available" },
        ],
      },
      {
        category: "Controls & Build",
        items: [
          {
            label: "Control Ring",
            value: "Dual-function Manual Focus Ring / Control Ring",
          },
          { label: "Manual Focus Ring", value: "Electronic Ring System" },
          { label: "AF/MF Switch", value: "AF / Control / MF Switch" },
          { label: "Iris Ring", value: "Provided" },
          { label: "Lens Function Button", value: "Provided" },
          { label: "Distance Scale", value: "Not Provided" },
          { label: "Distance Limiter Switch", value: "Not Provided" },
          { label: "Dust & Weather Resistant", value: "Yes" },
        ],
      },
      {
        category: "Included Accessories",
        items: [
          { label: "Lens Hood", value: "Canon EW-73G" },
          { label: "Lens Cap", value: "Canon E-67 II" },
          { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
          { label: "Lens Case", value: "Canon LP1219" },
          { label: "Extension Tube Compatibility", value: "Not Compatible" },
          { label: "Close-up Lens Compatibility", value: "Not Compatible" },
          { label: "RF Extender Compatibility", value: "Not Compatible" },
          { label: "Rear Gelatin Filter Holder", value: "Compatible" },
        ],
      },
    ],
  },
  {
    id: "refurbished-rf50mm-f1.4-l-vcm",
    name: "Refurbished RF50mm F1.4 L VCM",
    category: "Lenses",
    brand: "Canon",
    price: "$1,259",
    slug: "refurbished-rf50mm-f1.4-l-vcm",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/lenses/refurbished-rf50mm/lens1.webp",
          "/products/canon/lenses/refurbished-rf50mm/lens2.webp",
          "/products/canon/lenses/refurbished-rf50mm/lens3.webp",
          "/products/canon/lenses/refurbished-rf50mm/lens4.webp",
          "/products/canon/lenses/refurbished-rf50mm/lens5.webp",
          "/products/canon/lenses/refurbished-rf50mm/lens6.webp",
        ],
      },
    ],
    overview:
      "The Canon RF 50mm F1.4 L VCM is a premium hybrid L-series standard prime lens designed for both photography and video. Featuring a fast f/1.4 aperture, silent VCM and Nano USM autofocus, a dedicated manual iris ring, and minimal focus breathing, it delivers exceptional image quality for portraits, everyday shooting, filmmaking, and low-light creative work.",
    specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Canon RF Mount (Metal Mount)" },
      { label: "Focal Length", value: "50mm" },
      { label: "Maximum Aperture", value: "f/1.4" },
      { label: "Minimum Aperture", value: "f/16" },
      { label: "Compatible Cameras", value: "Canon EOS R-Series (APS-C & Full-Frame)" },
      { label: "Weight", value: "590 g" },
      { label: "Dimensions", value: "76.5 × 99.3 mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "14 elements in 11 groups" },
      { label: "Special Elements", value: "1 UD Element, 2 Aspherical Elements" },
      { label: "Lens Coatings", value: "Air Sphere Coating (ASC), Super Spectra Coating (SSC), Fluorine Coating" },
      { label: "Aperture Blades", value: "11" },
      { label: "Filter Size", value: "67 mm" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Focusing System", value: "Nano USM + Voice Coil Motor (VCM)" },
      { label: "Minimum Focus Distance", value: "0.40 m (15.7 in.)" },
      { label: "Maximum Magnification", value: "0.15×" },
      { label: "Angle of View (Diagonal)", value: "46°" },
      { label: "Field of View at Minimum Focus", value: "Approx. 230 × 154 mm" },
      { label: "Full-Time Manual Focus", value: "Yes" },
      { label: "Image Stabilization", value: "Not Available" },
    ],
  },
  {
    category: "Controls & Build",
    items: [
      { label: "Control Ring", value: "Dual-function Manual Focus Ring / Control Ring" },
      { label: "Manual Focus Ring", value: "Electronic Ring System" },
      { label: "AF/MF Switch", value: "AF / Control / MF Switch" },
      { label: "Iris Ring", value: "Provided" },
      { label: "Lens Function Button", value: "Provided" },
      { label: "Distance Scale", value: "Not Provided" },
      { label: "Distance Limiter Switch", value: "Not Provided" },
      { label: "Dust & Weather Resistant", value: "Yes" },
    ],
  },
  {
    category: "Included Accessories",
    items: [
      { label: "Lens Hood", value: "Canon ES-73" },
      { label: "Lens Cap", value: "Canon E-67 II" },
      { label: "Lens Dust Cap", value: "Canon RF Lens Dust Cap" },
      { label: "Lens Case", value: "Canon LP1219" },
      { label: "Extension Tube Compatibility", value: "Not Compatible" },
      { label: "Close-up Lens Compatibility", value: "Not Compatible" },
      { label: "RF Extender Compatibility", value: "Not Compatible" },
      { label: "Rear Gelatin Filter Holder", value: "Not Compatible" },
    ],
  },
]
  },

  // Samyang Lens [sony]

  {
    id: "14mm-f2.8-af-full-frame-wide-angle",
    name: "14mm F2.8 AF Full Frame Wide Angle",
    category: "Samyang Lens",
    brand: "Sony",
    price: "₹53,286.82",
    slug: "14mm-f2.8-af-full-frame-wide-angle",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/sony/Samyang-Lens/14mm-f2.8-af-full-frame-wide-angle/lens1.jpg",
          "/products/sony/Samyang-Lens/14mm-f2.8-af-full-frame-wide-angle/lens2.jpg",
          "/products/sony/Samyang-Lens/14mm-f2.8-af-full-frame-wide-angle/lens3.jpg",
          "/products/sony/Samyang-Lens/14mm-f2.8-af-full-frame-wide-angle/lens4.jpg",
          "/products/sony/Samyang-Lens/14mm-f2.8-af-full-frame-wide-angle/lens5.jpg",
          "/products/sony/Samyang-Lens/14mm-f2.8-af-full-frame-wide-angle/lens6.jpg",
        ],
      },
    ],
    overview:
      "The Samyang AF 14mm F2.8 FE is a compact ultra-wide-angle lens designed for Sony full-frame E-mount cameras. Featuring a bright f/2.8 aperture, fast and quiet autofocus, and advanced optical elements with Ultra Multi Coating, it delivers sharp, high-contrast images with minimal distortion—making it ideal for landscapes, architecture, astrophotography, and interior photography.",
   specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Sony E Mount" },
      { label: "Focal Length", value: "14mm" },
      { label: "Maximum Aperture", value: "f/2.8" },
      { label: "Minimum Aperture", value: "f/22" },
      { label: "Compatible Cameras", value: "Sony Full-Frame & APS-C E-Mount Cameras" },
      { label: "Weight", value: "450 g" },
      { label: "Dimensions", value: "86 × 97.5 mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "14 elements in 10 groups" },
      { label: "Special Elements", value: "3 Aspherical Elements, 2 ED Elements" },
      { label: "Lens Coating", value: "UMC (Ultra Multi Coating)" },
      { label: "Aperture Blades", value: "7" },
      { label: "Filter Size", value: "Not Supported" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Minimum Focus Distance", value: "0.20 m (0.66 ft.)" },
      { label: "Maximum Magnification", value: "0.12×" },
      { label: "Angle of View (Full Frame)", value: "113.9°" },
      { label: "Angle of View (APS-C)", value: "89.8°" },
    ],
  },
]
  },

  // nikon

  {
    id: "14mm-f2.8-af-weather-sealed-wide-angle-nikon-f",
    name: "14mm F2.8 AF Weather Sealed Wide Angle (Nikon F)",
    category: "Samyang Lens",
    brand: "Nikon",
    price: "₹49,716.22",
    slug: "14mm-f2.8-af-weather-sealed-wide-angle-nikon-f",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/nikon/Samyang-Lens/14mm-f2.8-af-weather-sealed-wide/lens1.jpg",
          "/products/nikon/Samyang-Lens/14mm-f2.8-af-weather-sealed-wide/lens2.jpg",
          "/products/nikon/Samyang-Lens/14mm-f2.8-af-weather-sealed-wide/lens3.jpg",
        ],
      },
    ],
    overview:
      "The 14mm F2.8 AF lens is designed for high-resolution, well-corrected imagery with the most advanced Nikon Full Frame image sensor cameras.  It can also be used on APS-C Nikon models where it will provide a 21mm equivalent focal length.",
  specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Nikon F Mount" },
      { label: "Focal Length", value: "14mm" },
      { label: "Maximum Aperture", value: "f/2.8" },
      { label: "Minimum Aperture", value: "f/22" },
      { label: "Compatible Cameras", value: "Nikon F-Mount Full-Frame & APS-C DSLR Cameras" },
      { label: "Weight", value: "523 g" },
      { label: "Dimensions", value: "90.5 × 93.1 mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "15 elements in 10 groups" },
      { label: "Special Elements", value: "2 Aspherical Elements, 1 ED Element, 4 HR Elements" },
      { label: "Lens Coating", value: "UMC (Ultra Multi Coating)" },
      { label: "Aperture Blades", value: "7" },
      { label: "Filter Size", value: "Not Supported" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Focusing System", value: "Linear Stepping Motor" },
      { label: "Minimum Focus Distance", value: "0.20 m (0.66 ft.)" },
      { label: "Maximum Magnification", value: "0.15×" },
      { label: "Angle of View (Full Frame)", value: "116.6°" },
      { label: "Angle of View (APS-C)", value: "92.8°" },
    ],
  },
  {
    category: "Controls & Build",
    items: [
      { label: "AF/MF Switch", value: "Yes" },
      { label: "Weather Sealing", value: "Yes" },
    ],
  },
]
  },

  // canon

  {
    id: "14mm-f2.8-af-weather-sealed-wide-angle-canon-ef",
    name: "14mm F2.8 AF Weather Sealed Wide Angle (Canon EF)",
    category: "Samyang Lens",
    brand: "canon",
    price: "₹49,716.22",
    slug: "14mm-f2.8-af-weather-sealed-wide-angle-nikon-f",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/Samyang-Lens/14mm-f2.8-af-weather-sealed-wide/lens1.jpg",
          "/products/canon/Samyang-Lens/14mm-f2.8-af-weather-sealed-wide/lens2.jpg",
          "/products/canon/Samyang-Lens/14mm-f2.8-af-weather-sealed-wide/lens3.jpg",
        ],
      },
    ],
    overview:
      "The 14mm F2.8 AF Full Frame Ultra-Wide for Canon EF-Mount is not only Samyang's first auto focus lens engineered for Canon, but it also is their first model to offer weather sealing. Built for the rigors of professional use and uncompromised optical performance, it easily meets or exceeds the performance characteristics of other professional/'luxury' ultra-wides.",
  specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Canon EF Mount" },
      { label: "Focal Length", value: "14mm" },
      { label: "Maximum Aperture", value: "f/2.8" },
      { label: "Minimum Aperture", value: "f/22" },
      { label: "Compatible Cameras", value: "Canon EF-Mount Full-Frame & APS-C DSLR Cameras" },
      { label: "Weight", value: "536 g" },
      { label: "Dimensions", value: "90.5 × 95.6 mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "15 elements in 10 groups" },
      { label: "Special Elements", value: "2 Aspherical Elements, 1 ED Element, 4 HR Elements" },
      { label: "Lens Coating", value: "UMC (Ultra Multi Coating)" },
      { label: "Aperture Blades", value: "7" },
      { label: "Filter Size", value: "Not Supported" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Minimum Focus Distance", value: "0.20 m (0.65 ft.)" },
      { label: "Maximum Magnification", value: "0.15×" },
      { label: "Angle of View (Full Frame)", value: "116.6°" },
      { label: "Angle of View (APS-C)", value: "92.8°" },
    ],
  },
]
  },

  // fujifilm

  {
    id: "14mm-f2.8-af-compact-ultra-wide-angle-aps-c-fuji-x",
    name: "12mm F2.0 AF Compact Ultra Wide Angle APS-C (Fuji X)",
    category: "Samyang Lens",
    brand: "Fujifilm",
    price: "₹36,756.24",
    slug: "14mm-f2.8-af-compact-ultra-wide-angle-aps-c-fuji-x",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Samyang-Lens/14mm-f2.8-af-compact-ultra-wide/lens1.jpg",
          "/products/fujifilms X series/Samyang-Lens/14mm-f2.8-af-compact-ultra-wide/lens2.jpg",
          "/products/fujifilms X series/Samyang-Lens/14mm-f2.8-af-compact-ultra-wide/lens3.jpg",
          "/products/fujifilms X series/Samyang-Lens/14mm-f2.8-af-compact-ultra-wide/lens4.jpg",
          "/products/fujifilms X series/Samyang-Lens/14mm-f2.8-af-compact-ultra-wide/lens5.jpg",
        ],
      },
    ],
    overview:
      "At 7.51oz in weight, 2.33” in length, this compact, rugged, yet lightweight autofocusing lens offers the best combination of value and performance than ever before. What’s more, it provides a rectilinear 99.1°angle of view, and with the added protection of weather sealing, and a Rear Protector Glass, it allows for lots more versatility.",
  specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Fujifilm X Mount" },
      { label: "Focal Length", value: "12mm" },
      { label: "Maximum Aperture", value: "f/2.0" },
      { label: "Minimum Aperture", value: "f/22" },
      { label: "Compatible Cameras", value: "Fujifilm X-Mount APS-C Mirrorless Cameras" },
      { label: "Weight", value: "213 g" },
      { label: "Dimensions", value: "70 × 59.2 mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "12 elements in 10 groups" },
      { label: "Special Elements", value: "1 Aspherical Element, 1 Hybrid Aspherical Element, 3 ED Elements" },
      { label: "Lens Coating", value: "UMC (Ultra Multi Coating)" },
      { label: "Aperture Blades", value: "7" },
      { label: "Filter Size", value: "62 mm" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Focusing System", value: "Linear STM Autofocus Motor" },
      { label: "Minimum Focus Distance", value: "190 mm (7.48 in.)" },
      { label: "Maximum Magnification", value: "0.09×" },
      { label: "Angle of View", value: "99.1° (APS-C)" },
    ],
  },
  {
    category: "Controls & Build",
    items: [
      { label: "Weather Sealing", value: "Yes" },
    ],
  },
]
  },

  // sigma lense[canon]

  {
    id: "contemporary-16mm-f1.4-dc-dn",
    name: "CONTEMPORARY 16mm F1.4 DC DN",
    category: "Sigma Lens",
    brand: "Fujifilm",
    price: "₹35,499",
    slug: "contemporary-16mm-f1.4-dc-dn",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/canon/sigma-lense/lens1.png",
        ],
      },
    ],
    overview:
      "The Sigma 16mm F1.4 DC DN | Contemporary is a fast ultra-wide prime lens designed for APS-C mirrorless cameras. Featuring a bright f/1.4 aperture, fast and quiet stepping motor autofocus, and outstanding optical performance, it's ideal for landscapes, astrophotography, street photography, vlogging, and low-light shooting while maintaining a compact, lightweight design.",
  specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Fujifilm X Mount" },
      { label: "Focal Length", value: "12mm" },
      { label: "Maximum Aperture", value: "f/2.0" },
      { label: "Minimum Aperture", value: "f/22" },
      { label: "Compatible Cameras", value: "Fujifilm X-Mount APS-C Mirrorless Cameras" },
      { label: "Weight", value: "213 g" },
      { label: "Dimensions", value: "70 × 59.2 mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "12 elements in 10 groups" },
      { label: "Special Elements", value: "1 Aspherical Element, 1 Hybrid Aspherical Element, 3 ED Elements" },
      { label: "Lens Coating", value: "UMC (Ultra Multi Coating)" },
      { label: "Aperture Blades", value: "7" },
      { label: "Filter Size", value: "62 mm" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Focusing System", value: "Linear STM Autofocus Motor" },
      { label: "Minimum Focus Distance", value: "190 mm (7.48 in.)" },
      { label: "Maximum Magnification", value: "0.09×" },
      { label: "Angle of View", value: "99.1° (APS-C)" },
    ],
  },
  {
    category: "Controls & Build",
    items: [
      { label: "Weather Sealing", value: "Yes" },
    ],
  },
]
  },

  // fujifilm
  
  {
    id: "contemporary-12mm-f1.4-dc",
    name: "CONTEMPORARY 12mm F1.4 DC",
    category: "Sigma Lens",
    brand: "Fujifilm",
    price: "₹53,000",
    slug: "contemporary-12mm-f1.4-dc",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/sigma-lense/lens1.png",
          "/products/fujifilms X series/sigma-lense/lens2.png",
          "/products/fujifilms X series/sigma-lense/lens3.png",
          "/products/fujifilms X series/sigma-lense/lens4.png",
        ],
      },
    ],
    overview:
      "The Sigma 12mm F1.4 DC DN | Contemporary is an ultra-wide prime lens designed for APS-C mirrorless cameras. Featuring a bright f/1.4 aperture, outstanding optical performance, and a compact, lightweight design, it's ideal for landscapes, astrophotography, architecture, travel, vlogging, and creative low-light photography and video.",
 specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Canon RF, Fujifilm X, Sony E" },
      { label: "Camera Type", value: "Mirrorless" },
      { label: "Sensor Format", value: "APS-C" },
      { label: "Maximum Aperture", value: "f/1.4" },
      { label: "Minimum Aperture", value: "f/16" },
      { label: "Edition Number", value: "C025" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "14 elements in 12 groups" },
      { label: "Special Elements", value: "2 SLD Elements, 3 Aspherical Elements" },
      { label: "Aperture Blades", value: "9 (Rounded Diaphragm)" },
      { label: "Filter Size", value: "62 mm" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Minimum Focus Distance", value: "17.2 cm (6.8 in.)" },
      { label: "Maximum Magnification", value: "1:8.4" },
      { label: "Angle of View", value: "99.6° (Fujifilm X / Sony E), 96.4° (Canon RF)" },
    ],
  },
  {
    category: "Dimensions & Weight",
    items: [
      { label: "Dimensions", value: "68.0–69.0 × 67.4–69.7 mm (Mount Dependent)" },
      { label: "Weight", value: "225–250 g (Mount Dependent)" },
    ],
  },
  {
    category: "Included Accessories",
    items: [
      { label: "Lens Hood", value: "LH652-01" },
      { label: "Lens Pouch", value: "Included" },
      { label: "Front Lens Cap", value: "LCF-62 IV" },
      { label: "Rear Lens Cap", value: "LCR III" },
    ],
  },
]
  },

  // nikon

   {
    id: "contemporary-30mm-f1.4-dc-dn",
    name: "CONTEMPORARY 30mm F1.4 DC DN",
    category: "Sigma Lens",
    brand: "Nikon",
    price: "₹26,999",
    slug: "contemporary-30mm-f1.4-dc-dn",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/nikon/sigma-lens/lens1.png",
        ],
      },
    ],
    overview:
      "The Sigma 30mm F1.4 DC DN | Contemporary is a fast standard prime lens designed for APS-C mirrorless cameras. Featuring a bright f/1.4 aperture, fast and quiet autofocus, and exceptional optical performance, it delivers sharp images with beautiful background blur, making it ideal for portraits, street photography, everyday shooting, video, and low-light photography.",
specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "L-Mount, Canon EF-M, Canon RF, Fujifilm X, Micro Four Thirds, Nikon Z, Sony E" },
      { label: "Camera Type", value: "Mirrorless" },
      { label: "Sensor Format", value: "APS-C" },
      { label: "Maximum Aperture", value: "f/1.4" },
      { label: "Minimum Aperture", value: "f/16" },
      { label: "Edition Number", value: "C016" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "9 elements in 7 groups" },
      { label: "Aperture Blades", value: "9 (Rounded Diaphragm)" },
      { label: "Filter Size", value: "52 mm" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Minimum Focus Distance", value: "30 cm (11.8 in.)" },
      { label: "Maximum Magnification", value: "1:7" },
      { label: "Angle of View", value: "50.7° (L-Mount, Fujifilm X, Nikon Z, Sony E), 48.2° (Canon EF-M/RF), 39.6° (Micro Four Thirds)" },
    ],
  },
  {
    category: "Dimensions & Weight",
    items: [
      { label: "Dimensions", value: "64.8–70.0 × 71.3–75.3 mm (Mount Dependent)" },
      { label: "Weight", value: "260–285 g (Mount Dependent)" },
    ],
  },
  {
    category: "Included Accessories",
    items: [
      { label: "Lens Hood", value: "LH586-01" },
      { label: "Front Lens Cap", value: "LCF-52mm III" },
      { label: "Rear Lens Cap", value: "LCR II" },
    ],
  },
]
  },

  // sony

  {
    id: "art-14mm-f1.4-dg",
    name: "ART 14mm F1.4 DG",
    category: "Sigma Lens",
    brand: "Sony",
    price: "₹1,29,400",
    slug: "art-14mm-f1.4-dg",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/sony/sigma-lens/lens1.png",
        ],
      },
    ],
    overview:
      "The Sigma 14mm F1.4 DG DN | Art is a professional ultra-wide-angle prime lens designed for full-frame mirrorless cameras. Featuring a bright f/1.4 aperture, exceptional edge-to-edge sharpness, and advanced optical construction, it is perfect for astrophotography, landscapes, architecture, and night photography. With fast autofocus, dust and splash-resistant design, and creative controls, it delivers outstanding performance for demanding photographers.",
specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "L-Mount, Sony E-Mount" },
      { label: "Camera Type", value: "Mirrorless" },
      { label: "Sensor Format", value: "Full-Frame" },
      { label: "Maximum Aperture", value: "f/1.4" },
      { label: "Minimum Aperture", value: "f/16" },
      { label: "Edition Number", value: "A023" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "19 elements in 15 groups" },
      { label: "Special Elements", value: "3 FLD Elements, 1 SLD Element, 4 Aspherical Elements" },
      { label: "Aperture Blades", value: "11 (Rounded Diaphragm)" },
      { label: "Filter Size", value: "Not Supported" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Minimum Focus Distance", value: "30 cm (11.9 in.)" },
      { label: "Maximum Magnification", value: "1:11.9" },
      { label: "Angle of View", value: "114.2°" },
    ],
  },
  {
    category: "Dimensions & Weight",
    items: [
      { label: "Dimensions (L-Mount)", value: "101.4 × 149.9 mm" },
      { label: "Dimensions (Sony E-Mount)", value: "101.4 × 151.9 mm" },
      { label: "Weight (L-Mount)", value: "1,170 g" },
      { label: "Weight (Sony E-Mount)", value: "1,160 g" },
    ],
  },
  {
    category: "Included Accessories",
    items: [
      { label: "Lens Cap", value: "Cover Lens Cap LC1014-02" },
      { label: "Rear Lens Cap", value: "LCR III" },
      { label: "Tripod Socket", value: "TS-141" },
      { label: "Protective Cover", value: "PT-42" },
    ],
  },
]
  },

  // Meike Lens [nikon]

  {
    id: "meike-56mm-f1.7-air-aps-c-auto-focus-z-mount",
    name: "MEIKE 56mm f1.7 Air APS-C Auto Focus Z Mount Portrait Lens for Nikon Mirrorless Cameras",
    category: "Meike Lens",
    brand: "Nikon",
    price: "$159.00",
    slug: "meike-56mm-f1.7-air-aps-c-auto-focus-z-mount",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/nikon/meike-lens/lens1.png",
          "/products/nikon/meike-lens/lens2.png",
          "/products/nikon/meike-lens/lens3.png",
          "/products/nikon/meike-lens/lens4.png",
          "/products/nikon/meike-lens/lens5.png",
          "/products/nikon/meike-lens/lens6.png",
          "/products/nikon/meike-lens/lens7.png",
          "/products/nikon/meike-lens/lens8.png",
          "/products/nikon/meike-lens/lens9.png",
        ],
      },
    ],
    overview:
      "The MEIKE 56mm F1.7 Air is a compact portrait prime lens designed for APS-C mirrorless cameras. Featuring a bright f/1.7 aperture, fast autofocus with a quiet stepping motor, and a lightweight design, it delivers beautiful background blur and sharp image quality, making it ideal for portraits, street photography, everyday shooting, and creative low-light photography.",
specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Sony E-Mount" },
      { label: "Camera Type", value: "Mirrorless" },
      { label: "Focal Length", value: "56mm" },
      { label: "Maximum Aperture", value: "f/1.7" },
      { label: "Minimum Aperture", value: "f/16" },
      { label: "Filter Size", value: "52mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "11 elements in 7 groups" },
      { label: "Aperture Blades", value: "9" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Minimum Focus Distance", value: "0.55m" },
      { label: "Angle of View", value: "23.2° (APS-C)" },
    ],
  },
  {
    category: "Dimensions & Weight",
    items: [
      { label: "Dimensions", value: "Φ66.5mm × 59.2mm" },
      { label: "Weight", value: "Approx. 190g" },
    ],
  },
]
  },

  // sony

  {
    id: "meike-56mm-f1.7-air-aps-c-auto-focus-e-mount",
    name: "MEIKE 56mm f1.7 Air APS-C Auto Focus E Mount Portrait Lens for Sony",
    category: "Meike Lens",
    brand: "Sony",
    price: "$159.00",
    slug: "meike-56mm-f1.7-air-aps-c-auto-focus-e-mount",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/products/sony/sigma-lens/lens1.png",
          "/products/sony/meike-lens/lens2.png",
          "/products/sony/meike-lens/lens3.png",
          "/products/sony/meike-lens/lens4.png",
          "/products/sony/meike-lens/lens5.png",
          "/products/sony/meike-lens/lens6.png",
          "/products/sony/meike-lens/lens7.png",
          "/products/sony/meike-lens/lens8.png",
          "/products/sony/meike-lens/lens9.png",
        ],
      },
    ],
    overview:
      "The MEIKE 56mm F1.7 Air APS-C Autofocus Lens is a compact portrait prime lens for Sony E-mount APS-C mirrorless cameras. Featuring a bright f/1.7 aperture, fast and quiet STM autofocus, and a lightweight design, it delivers sharp images with smooth, creamy bokeh—making it ideal for portraits, street photography, video, and low-light shooting.",
specs: [
  {
    category: "Lens Specifications",
    items: [
      { label: "Lens Mount", value: "Sony E-Mount" },
      { label: "Camera Type", value: "Mirrorless" },
      { label: "Focal Length", value: "56mm" },
      { label: "Maximum Aperture", value: "f/1.7" },
      { label: "Minimum Aperture", value: "f/16" },
      { label: "Filter Size", value: "52mm" },
    ],
  },
  {
    category: "Optical Design",
    items: [
      { label: "Lens Construction", value: "11 Elements in 7 Groups" },
      { label: "Aperture Blades", value: "9" },
    ],
  },
  {
    category: "Focus & Performance",
    items: [
      { label: "Minimum Focus Distance", value: "0.55m" },
      { label: "Angle of View", value: "23.2° × 15.6° × 27.8° (APS-C)" },
    ],
  },
  {
    category: "Dimensions & Weight",
    items: [
      { label: "Dimensions", value: "Φ66.5 × 59.2mm" },
      { label: "Weight", value: "Approx. 190g" },
    ],
  },
]
  },
];
export default lens;
