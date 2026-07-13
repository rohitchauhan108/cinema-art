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

const accessories = [
  // fujifilm accessories
  //   battery
  {
    id: "fujifilm-li-ion-battery-np-w235",
    name: "FUJIFILM Li-ion Battery NP-W235",
    category: "battery",
    brand: "Fujifilm",
    price: "₹6,299",
    slug: "fujifilm-li-ion-battery-np-w235",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/battery/fujifilm1.webp"],
      },
    ],
    overview:
      "The Fujifilm NP-W235 Li-ion Battery is a high-capacity rechargeable battery designed to deliver extended shooting performance for compatible FUJIFILM X Series and GFX cameras. It provides approximately 1.5× the capacity of the NP-W126S, making it ideal for long photo sessions and video recording. Built for reliability, it ensures consistent power and dependable performance whether you're shooting in the studio or on location.",
    specs: [
      {
        category: "Battery Specifications",
        items: [
          {
            label: "Model Number",
            value: "NP-W235",
          },
          {
            label: "Battery Type",
            value: "Rechargeable Lithium-Ion Battery",
          },
          {
            label: "Brand",
            value: "Fujifilm",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Cameras",
            value: "GFX100S, GFX50S II, X-T4, X-H2S, X-H2, X-T5, X-S20",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Country of Origin",
            value: "China",
          },
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
          {
            label: "Importer",
            value: "FUJIFILM India Private Limited",
          },
          {
            label: "Importer Address",
            value:
              "Business Centre Office No. 521, Level V, Caddie Commercial Tower, Hospitality District, Aerocity, IGI Airport, New Delhi - 110037",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-vertical-battery-grip-vg-gfx100-ii",
    name: "FUJIFILM Vertical Battery Grip VG-GFX100 II",
    category: "battery",
    brand: "Fujifilm",
    price: "₹49,999",
    slug: "fujifilm-vertical-battery-grip-vg-gfx100-ii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/battery/fujifilm2.webp"],
      },
    ],
    overview:
      "This battery grip is dust- and weather-resistant and capable of operating at temperatures as low as -10℃. It can hold two of the large capacity battery “NP-W235.Buttons are placed at accessible places for shooting as easily and comfortably as when the camera is held horizontally.",
    specs: [
      {
        category: "Camera Specifications",
        items: [
          {
            label: "Model Number",
            value: "GFX100 II",
          },
          {
            label: "Brand",
            value: "Fujifilm",
          },
          {
            label: "Camera Series",
            value: "GFX System",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Country of Origin",
            value: "China",
          },
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
          {
            label: "Importer",
            value: "FUJIFILM India Private Limited",
          },
          {
            label: "Importer Address",
            value:
              "Business Centre Office No. 521, Level V, Caddie Commercial Tower, Hospitality District, Aerocity, IGI Airport, New Delhi - 110037",
          },
        ],
      },
    ],
  },

  // lens cap

  {
    id: "fujifilm-lens-rear-cap-rlcp-001",
    name: "FUJIFILM Lens Rear Cap RLCP-001",
    category: "lens cap",
    brand: "Fujifilm",
    price: "₹599",
    slug: "fujifilm-lens-rear-cap-rlcp-001",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/Lens-Cap/LensCap1.webp"],
      },
    ],
    overview:
      "It prevents dust and dirt from adhering to the lens and protects the lens from scratches and dirt.",
    specs: [
      {
        category: "Camera Specifications",
        items: [
          {
            label: "Model Number",
            value: "RLCP-001",
          },
          {
            label: "Brand",
            value: "Fujifilm",
          },
          {
            label: "Camera Series",
            value: "GFX System",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Country of Origin",
            value: "China",
          },
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2- Chome, Minato-Ku, Tokyo - 1068620, Japan",
          },
          {
            label: "Importer",
            value: "FUJIFILM India Private Limited",
          },
          {
            label: "Importer Address",
            value:
              "FUJIFILM India Private Limited Business Centre Office No. 521, Level V, Caddie Commercial Tower, Hospitality District Aerocity, IGI Airport, New Delhi - 110037",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-lens-cap-flcp-58-ii",
    name: "FUJIFILM Lens Cap FLCP-58 II",
    category: "lens cap",
    brand: "Fujifilm",
    price: "₹599",
    slug: "fujifilm-lens-cap-flcp-58-ii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/Lens-Cap/LensCap2.webp"],
      },
    ],
    overview:
      "It prevents dust and dirt from adhering to the lens and protects the lens from scratches and dirt.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          {
            label: "Model Number",
            value: "FLCP-58 II",
          },
          {
            label: "Accessory Type",
            value: "Front Lens Cap",
          },
          {
            label: "Brand",
            value: "Fujifilm",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Models",
            value:
              "GF30mmF3.5 R WR, XF14mmF2.8 R, XF23mmF1.4 R LM WR, XF33mmF1.4 R LM WR, XF18-55mmF2.8-4 R LM OIS, XC16-50mmF3.5-5.6 OIS, XC16-50mmF3.5-5.6 OIS II, XC50-230mmF4.5-6.7 OIS, XC50-230mmF4.5-6.7 OIS II",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Country of Origin",
            value: "China",
          },
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
          {
            label: "Importer",
            value: "FUJIFILM India Private Limited",
          },
          {
            label: "Importer Address",
            value:
              "Business Centre Office No. 521, Level V, Caddie Commercial Tower, Hospitality District, Aerocity, IGI Airport, New Delhi - 110037",
          },
        ],
      },
    ],
  },

  //   microphone

  {
    id: "ecm-w3s",
    name: "ECM-W3S",
    category: "microphone",
    brand: "sony",
    price: "₹32,990",
    slug: "ecm-w3s",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/sony/microphone/microphone1.jpg"],
      },
    ],
    overview:
      "Sony ECM-W3S is a professional wireless microphone system that captures clear and detailed voice audio with minimal noise. Its compact design, digital transmission, and easy camera connectivity make it ideal for vlogging, interviews, content creation, and video production.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          {
            label: "Model Number",
            value: "FLCP-58 II",
          },
          {
            label: "Accessory Type",
            value: "Front Lens Cap",
          },
          {
            label: "Brand",
            value: "Fujifilm",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Models",
            value:
              "GF30mmF3.5 R WR, XF14mmF2.8 R, XF23mmF1.4 R LM WR, XF33mmF1.4 R LM WR, XF18-55mmF2.8-4 R LM OIS, XC16-50mmF3.5-5.6 OIS, XC16-50mmF3.5-5.6 OIS II, XC50-230mmF4.5-6.7 OIS, XC50-230mmF4.5-6.7 OIS II",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Country of Origin",
            value: "China",
          },
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
          {
            label: "Importer",
            value: "FUJIFILM India Private Limited",
          },
          {
            label: "Importer Address",
            value:
              "Business Centre Office No. 521, Level V, Caddie Commercial Tower, Hospitality District, Aerocity, IGI Airport, New Delhi - 110037",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-np-w126s-rechargeable-battery",
    name: "FUJIFILM NP-W126S Rechargeable Battery",
    category: "battery",
    brand: "Fujifilm",
    price: "₹4,999",
    slug: "fujifilm-np-w126s-rechargeable-battery",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://fujifilm-x.b-cdn.net/wp-content/uploads/2018/09/np-w126s_main01.jpg?resize=410%2C410&width=410&height=410&quality=85&sharpen=1",
        ],
      },
    ],
    overview:
      "A compact and reliable rechargeable battery that offers dependable power for everyday photography and video shoots.",
    specs: [
      {
        category: "Battery Specifications",
        items: [
          { label: "Model Number", value: "NP-W126S" },
          { label: "Battery Type", value: "Rechargeable Lithium-Ion" },
          { label: "Brand", value: "Fujifilm" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Compatible Cameras", value: "X-T30, X-T4, X-S10, X-H1" },
        ],
      },
    ],
  },
  {
    id: "fujifilm-bc-w235-battery-charger",
    name: "FUJIFILM BC-W235 Battery Charger",
    category: "battery",
    brand: "Fujifilm",
    price: "₹4,499",
    slug: "fujifilm-bc-w235-battery-charger",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://fujifilmxindia.com/cdn/shop/files/Dual-Battery-Charger-BC-W235.png?v=1772987152&width=600",
        ],
      },
    ],
    overview:
      "A quick and efficient charger designed to keep your camera batteries ready for long shooting days.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "BC-W235" },
          { label: "Accessory Type", value: "Battery Charger" },
          { label: "Brand", value: "Fujifilm" },
        ],
      },
      {
        category: "Compatibility",
        items: [{ label: "Compatible Batteries", value: "NP-W235, NP-W126S" }],
      },
    ],
  },
  {
    id: "fujifilm-lens-cap-flcp-67-ii",
    name: "FUJIFILM Lens Cap FLCP-67 II",
    category: "lens cap",
    brand: "Fujifilm",
    price: "₹799",
    slug: "fujifilm-lens-cap-flcp-67-ii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://fujifilm-x.b-cdn.net/wp-content/uploads/2019/08/flcp-67-ii.jpg?resize=410%2C410&width=410&height=410&quality=85&sharpen=1",
        ],
      },
    ],
    overview:
      "Protects the front element of your lens from dust, scratches, and accidental knocks while maintaining a clean setup.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "FLCP-67 II" },
          { label: "Accessory Type", value: "Front Lens Cap" },
          { label: "Brand", value: "Fujifilm" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Compatible Lenses", value: "XF27mmF2.8, XF35mmF2 R WR" },
        ],
      },
    ],
  },
  {
    id: "fujifilm-rear-lens-cap-rlcp-002",
    name: "FUJIFILM Rear Lens Cap RLCP-002",
    category: "lens cap",
    brand: "Fujifilm",
    price: "₹649",
    slug: "fujifilm-rear-lens-cap-rlcp-002",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://fujifilm-x.b-cdn.net/wp-content/uploads/2018/09/lens-rear-cap-rlcp-002_main01.jpg?resize=410%2C410&width=410&height=410&quality=85&sharpen=1",
        ],
      },
    ],
    overview:
      "A secure rear cap that keeps the lens mount protected and free from dust when the lens is removed.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "RLCP-002" },
          { label: "Accessory Type", value: "Rear Lens Cap" },
          { label: "Brand", value: "Fujifilm" },
        ],
      },
      {
        category: "Compatibility",
        items: [{ label: "Compatible Systems", value: "FUJIFILM X Mount" }],
      },
    ],
  },
  {
    id: "sony-ecm-b1m",
    name: "Sony ECM-B1M",
    category: "microphone",
    brand: "Sony",
    price: "₹19,990",
    slug: "sony-ecm-b1m",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://www.sony-asia.com/image/c48b61a236d7f38f1dc7bdb05e2ac5e4?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
        ],
      },
    ],
    overview:
      "A compact shotgun microphone that delivers focused audio capture for interviews, vlogging, and cinematic video production.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "ECM-B1M" },
          { label: "Accessory Type", value: "Shotgun Microphone" },
          { label: "Brand", value: "Sony" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Compatible Cameras", value: "Alpha Mirrorless Cameras" },
        ],
      },
    ],
  },
  {
    id: "sony-bc-qz1",
    name: "Sony BC-QZ1 Battery Charger",
    category: "Charger",
    brand: "Sony",
    price: "₹6,990",
    slug: "sony-bc-qz1",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://images.unsplash.com/photo-1642884422166-256f19bcbd85?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U29ueSUyMEJDLVFaMSUyMEJhdHRlcnklMjBDaGFyZ2VyfGVufDB8fDB8fHww",
        ],
      },
    ],
    overview:
      "A high-speed charging cradle for the NP-FZ100 battery, capable of fully charging your camera battery safely.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          {
            label: "Model Number",
            value: "BC-QZ1",
          },
          {
            label: "Accessory Type",
            value: "Battery Charger",
          },
          {
            label: "Brand",
            value: "Sony",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Batteries",
            value: "NP-FZ100",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-flcp-62ii",
    name: "Fujifilm FLCP-62 II Front Lens Cap",
    category: "Lens Cap",
    brand: "Fujifilm",
    price: "₹850",
    slug: "fujifilm-flcp-62ii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://tse3.mm.bing.net/th/id/OIP._x-gjtZcifMLh7TDqsGengAAAA?r=0&pid=Api&h=220&P=0",
        ],
      },
    ],
    overview:
      "A premium squeeze-on front cap designed to protect Fujifilm XF lenses with a 62mm filter thread size.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "FLCP-62 II" },
          { label: "Accessory Type", value: "Front Lens Cap" },
          { label: "Brand", value: "Fujifilm" },
        ],
      },
      {
        category: "Compatibility",
        items: [{ label: "Compatible Thread Size", value: "62mm" }],
      },
    ],
  },
  {
    id: "canon-ew-88e",
    name: "Canon EW-88E Lens Hood",
    category: "Lens Hood",
    brand: "Canon",
    price: "₹4,200",
    slug: "canon-ew-88e",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://tse4.mm.bing.net/th/id/OIP.GCGXtS5jefeC2ouuPHpGdgHaHa?r=0&pid=Api&h=220&P=0",
        ],
      },
    ],
    overview:
      "A professional petal-type lens hood engineered specifically to combat glare and protect the front element of Canon RF lenses.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "EW-88E" },
          { label: "Accessory Type", value: "Lens Hood" },
          { label: "Brand", value: "Canon" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Compatible Lenses", value: "RF 24-70mm f/2.8L IS USM" },
        ],
      },
    ],
  },
  {
    id: "nikon-bf-1b",
    name: "Nikon BF-1B Camera Body Cap",
    category: "Camera Body Cap",
    brand: "Nikon",
    price: "₹650",
    slug: "nikon-bf-1b",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://tse2.mm.bing.net/th/id/OIP.IjvhsLhQwwr35oULgiUhVwHaHY?r=0&pid=Api&h=220&P=0",
        ],
      },
    ],
    overview:
      "A robust twist-on protective body cap designed to keep dust, debris, and moisture out of your Nikon mirrorless chamber.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "BF-1B" },
          { label: "Accessory Type", value: "Body Cap" },
          { label: "Brand", value: "Nikon" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Compatible Cameras", value: "Nikon Z-mount Mirrorless" },
        ],
      },
    ],
  },
  {
    id: "sony-alc-r1em",
    name: "Sony E-Mount Lens Rear Cap",
    category: "Leas Rear Cap",
    brand: "Sony",
    price: "₹590",
    slug: "sony-alc-r1em",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://www.sony-asia.com/image/63bf490c89a4f528002d1b8643d10aa4?fmt=pjpeg&wid=1014&hei=396&bgcolor=F1F5F9&bgc=F1F5F9",
        ],
      },
    ],
    overview:
      "A dedicated rear cap designed to safely shield the rear glass element and electronic contacts of your E-mount lenses.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "ALC-R1EM" },
          { label: "Accessory Type", value: "Rear Lens Cap" },
          { label: "Brand", value: "Sony" },
        ],
      },
      {
        category: "Compatibility",
        items: [{ label: "Compatible Lenses", value: "Sony E-mount Lenses" }],
      },
    ],
  },
  {
    id: "fujifilm-tripod-grip-01",
    name: "Fujifilm TG-BT1 Tripod Grip",
    category: "Tripod",
    brand: "Fujifilm",
    price: "₹14,999",
    slug: "fujifilm-tripod-grip-01",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRVQZr_kzts3KtwU2L9_RiuNVpBoMvtGl6Pci6I5rbscrQmlPUgFmNOBpnuju8Qq1jv3ZWp7ekC8dic5gt3DR37KFfZ105sI3U-d00h9yod",
        ],
      },
    ],
    overview:
      "A lightweight mini-tripod grip system with built-in Bluetooth controls tailored seamlessly for modern hybrid vloggers.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "TG-BT1" },
          { label: "Accessory Type", value: "Wireless Tripod Grip" },
          { label: "Brand", value: "Fujifilm" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Compatible Cameras", value: "Fujifilm X-T5, X-S20, X-H2S" },
        ],
      },
    ],
  },
  {
    id: "canon-dm-e1d",
    name: "Canon DM-E1D Stereo Microphone",
    category: "Microphone",
    brand: "Canon",
    price: "₹25,995",
    slug: "canon-dm-e1d",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRnkENlEXmHE5PULp2RobH8-WEWmNhO-CUIJTMhppjQm_247U1o79AIzJHvSnctRin3VEJ34hpDKDg-wYUFcXKIPJV_YkzTuHLD7F-AV4tF9P8sfLD4o2Iahg",
        ],
      },
    ],
    overview:
      "A compact directional stereo microphone that slides effortlessly into the multi-function shoe for crisp digital audio recording.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "DM-E1D" },
          { label: "Accessory Type", value: "Multi-Function Shoe Microphone" },
          { label: "Brand", value: "Canon" },
        ],
      },
      {
        category: "Connectivity",
        items: [
          {
            label: "Power Interface",
            value: "Direct Cableless Digital Shoe Connection",
          },
        ],
      },
    ],
  },
  {
    id: "nikon-sb-5000",
    name: "Nikon SB-5000 Speedlight",
    category: "Lightning Solution",
    brand: "Nikon",
    price: "₹41,450",
    slug: "nikon-sb-5000",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTjtOheaXB2afsNix5gjjZYjW0JbRi2Qk3R0c_iGuFjU8G5a-8H31d6ft9r7lzEslgVp_pILIcNUpldNdU93Tf96kPR_YhDrA",
        ],
      },
    ],
    overview:
      "A flagship creative lighting solution flash unit equipped with an internal cooling setup to handle intensive firing frequencies.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "SB-5000" },
          { label: "Accessory Type", value: "Wireless Speedlight" },
          { label: "Brand", value: "Nikon" },
        ],
      },
      {
        category: "Performance",
        items: [{ label: "Guide Number", value: "34.5 m at 35mm" }],
      },
    ],
  },
  {
    id: "sony-vct-stg1",
    name: "Sony Shooting Grip for Action Cam",
    category: "Action Camera Accessories",
    brand: "Sony",
    price: "₹3,190",
    slug: "sony-vct-stg1",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnk3i-IDhhjH2C7nrZ1H2gdyY3itf77P5sA3Zcwi2WSGPPzJhUneFdPOfr0Rn-G_oIzXmi-PmlzJyP23xHH9B-Tg2CMHvBcl98I5KZvvtSs8BOT3DFoPMWmA",
        ],
      },
    ],
    overview:
      "A travel-friendly conversion grip that functions as an ergonomic selfie stick handle or a mini-tripod layout instantly.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "VCT-STG1" },
          { label: "Accessory Type", value: "Action Mount Grip" },
          { label: "Brand", value: "Sony" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Compatible Models", value: "Sony Action Cam Lineup" },
        ],
      },
    ],
  },
  {
    id: "fujifilm-sdxc-pro-128",
    name: "Fujifilm Elite Pro SDXC 128GB Card",
    category: "Sd Card",
    brand: "",
    price: "₹3,499",
    slug: "fujifilm-sdxc-pro-128",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://m.media-amazon.com/images/I/71Tk8ARHOHL._AC_UY327_FMwebp_QL65_.jpg",
        ],
      },
    ],
    overview:
      "An ultra-reliable SD memory storage solution built explicitly to match swift continuous burst read-writes during raw workflows.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "FJ-SDXC-128G" },
          { label: "Accessory Type", value: "SDXC Memory Card" },
          { label: "Brand", value: "Fujifilm" },
        ],
      },
      {
        category: "Performance",
        items: [{ label: "Speed Class", value: "UHS-II / V60" }],
      },
    ],
  },
  {
    id: "canon-microsd-extreme-64",
    name: "Canon High Endurance microSDXC 64GB",
    category: "Micro Sd Card",
    brand: "",
    price: "₹1,800",
    slug: "canon-microsd-extreme-64",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9pjERbiyhofny9YXSIOBP8VKUKVhzrOhF3ebP_7oCzyFs5ChpqVNVc2l_1XEPbV6Z5PZDcjvkGBC05pxt1tFeBsMRcJ-Q5c5UwaC1e7_iIJO5biCdMkGt",
        ],
      },
    ],
    overview:
      "A durable industrial-grade microSD memory expansion optimal for dash cams, active security layers, and small cameras.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "CN-MSD-64G" },
          { label: "Accessory Type", value: "microSDXC Memory Card" },
          { label: "Brand", value: "Canon" },
        ],
      },
      {
        category: "Performance",
        items: [
          { label: "Durability", value: "Waterproof, X-Ray Proof, Shockproof" },
        ],
      },
    ],
  },
  {
    id: "nikon-media-ssd-1tb",
    name: "Nikon Direct-Stream Portable SSD 1TB",
    category: "Harddisk & SSD",
    // brand: "Nikon",
    price: "₹12,500",
    slug: "nikon-media-ssd-1tb",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTOr_4jPiiO0dXJX8ytLffQ1kyxpPjs5cv4XzzG6BrHB2-QfpFUCg24CLb_gsIgS57TKrxBWaUKL_3jFHGxlb2vA9zI09s5",
        ],
      },
    ],
    overview:
      "A swift, bus-powered pocket-sized external drive calibrated for lightning-fast high bit-rate camera video exports.",
    specs: [
      {
        category: "Accessory Specifications",
        items: [
          { label: "Model Number", value: "NK-SSD-1TB" },
          { label: "Accessory Type", value: "External Solid State Drive" },
          { label: "Brand", value: "Nikon" },
        ],
      },
      {
        category: "Performance",
        items: [{ label: "Transfer Speed", value: "Up to 1050 MB/s" }],
      },
    ],
  },
  {
    id: "vmc-sa1",
    name: "VMC-SA1",
    category: "All Cable",
    brand: "Sony",
    price: "₹11,990",
    slug: "vmc-sa1",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/sony/cable/cable.jpg",
        ],
      },
    ],
    overview:
      "Extend your camera's Multi Interface (MI) Shoe connection with the Sony VMC-SA1 Shoe Audio Extension Cable. Designed for creators using compatible Sony audio accessories such as XLR adapters, this 600mm extension cable offers greater flexibility for mounting microphones and audio equipment while maintaining a secure digital connection for professional-quality sound.",
    specs: [
  {
    category: "Accessory Specifications",
    items: [
      { label: "Model Number", value: "VMC-SA1" },
      { label: "Accessory Type", value: "Shoe Audio Extension Cable" },
      { label: "Brand", value: "Sony" },
      { label: "Cable Length", value: "600 mm (23.6 in)" },
      { label: "Weight", value: "93 g" },
    ],
  },
  {
    category: "Compatibility",
    items: [
      {
        label: "Compatible Devices",
        value: "Sony cameras and accessories with Multi Interface (MI) Shoe",
      },
      {
        label: "Supports",
        value: "Sony XLR adapters and MI Shoe audio accessories",
      },
    ],
  },
  {
    category: "Physical Dimensions",
    items: [
      {
        label: "Camera Side Dimensions",
        value: "32.0 × 24.1 × 22.0 mm",
      },
      {
        label: "Accessory Side Dimensions",
        value: "34.5 × 32.8 × 25.6 mm",
      },
    ],
  },
],
  },
  {
    id: "52mm-nc-filter",
    name: "52MM NC Filter",
    category: "Filter",
    brand: "Nikon",
    price: "₹1390",
    slug: "52mm-nc-filter",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/nikon/filter/filter1.webp",
        ],
      },
    ],
    overview:
      "These filters serve as lens protectors and do not affect color balance. A neutral clear, multi-coated filter that helps to reduce flare and ghosting as well as protecting the front lens surface from the elements. These filters do not affect color balance. Multilayer coating diminishes internal reflections and improves color rendition.",
    specs: [
  {
    category: "Filter Specifications",
    items: [
      { label: "SKU", value: "FTA07701" },
      { label: "Accessory Type", value: "Lens Filter" },
      { label: "Brand", value: "Nikon" },
    ],
  },
  {
    category: "Compatibility",
    items: [
      {
        label: "Compatible Lenses",
        value:
          "NIKKOR Z 28mm f/2.8 (SE), NIKKOR Z 24-50mm f/4-6.3, AF-S DX NIKKOR 55-200mm f/4-5.6G ED VR II, AF-S DX VR Zoom-Nikkor ED 55-200mm f/4-5.6G, AF-S DX Zoom-Nikkor ED 18-55mm f/3.5-5.6G, AF-S DX NIKKOR 18-55mm f/3.5-5.6G VR II",
      },
      {
        label: "Additional Compatible Lenses",
        value:
          "AF-S NIKKOR 800mm f/5.6E FL ED VR, AF-S DX Micro NIKKOR 40mm f/2.8G, AF-S NIKKOR 200mm f/2G ED VR II, AF-S NIKKOR 200-400mm f/4G ED VR II, AF-S NIKKOR 300mm f/2.8G ED VR II, AF-S DX Micro NIKKOR 85mm f/3.5G ED VR",
      },
      {
        label: "More Compatible Lenses",
        value:
          "AF-S DX NIKKOR 35mm f/1.8G, AF NIKKOR 28mm f/2.8D, AF-S VR NIKKOR 200mm f/2G IF-ED, AF-S DX Zoom-NIKKOR 18-55mm f/3.5-5.6G ED II, AF NIKKOR 50mm f/1.4D, AF-S VR Zoom-NIKKOR 200-400mm f/4G IF-ED",
      },
      {
        label: "Other Compatible Lenses",
        value:
          "AF-S NIKKOR 500mm f/4G ED VR, AF-S DX Zoom-NIKKOR 55-200mm f/4-5.6G ED, AF-S NIKKOR 600mm f/4G ED VR, AF-S NIKKOR 400mm f/2.8G ED VR, AF-S VR NIKKOR 300mm f/2.8G IF-ED, AF NIKKOR 50mm f/1.8D, AF NIKKOR 24mm f/2.8D, AF NIKKOR 35mm f/2D",
      },
    ],
  },
],
  },
  {
    id: "dji-rs-3-mini",
    name: "DJI RS 3 Mini, 3-Axis Gimbal Stabilizer for Cameras",
    category: "Gimbal",
    brand: "Dji",
    price: "₹18,987",
    slug: "dji-rs-3-mini",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/gimbal/gimbal1.jpg",
        ],
      },
    ],
    overview:
      "The DJI RS 3 Mini is a compact and lightweight 3-axis gimbal designed for mirrorless cameras, delivering professional-grade stabilization in a travel-friendly form. Weighing just 795g, it supports camera setups up to 2kg, features native vertical shooting, Bluetooth shutter control, and DJI's 3rd-generation stabilization algorithm for smooth, cinematic footage. Ideal for content creators, filmmakers, and vloggers on the go.",
    specs: [
  {
    category: "Gimbal Specifications",
    items: [
      { label: "Model Number", value: "DJI RS 3 Mini" },
      { label: "Product Type", value: "3-Axis Camera Gimbal Stabilizer" },
      { label: "Brand", value: "DJI" },
      { label: "Tested Payload", value: "0.4–2 kg (0.8–4.4 lbs)" },
      { label: "Weight", value: "795 g (Portrait) / 850 g (Horizontal)" },
    ],
  },
  {
    category: "Battery & Performance",
    items: [
      { label: "Battery Capacity", value: "2450 mAh (17.64 Wh)" },
      { label: "Battery Type", value: "18650 Li-ion 2S" },
      { label: "Operating Time", value: "Up to 10 hours" },
      { label: "Charging Time", value: "Approx. 2.5 hours" },
      { label: "Charging Port", value: "USB Type-C (5V/2A)" },
    ],
  },
  {
    category: "Connectivity",
    items: [
      { label: "Wireless Connection", value: "Bluetooth 5.1" },
      { label: "Accessory Ports", value: "1/4\"-20 Mount, NATO Port, USB-C RSS Camera Control Port" },
      { label: "Mobile App", value: "DJI Ronin (iOS 11.0+, Android 7.0+)" },
    ],
  },
  {
    category: "Physical Specifications",
    items: [
      { label: "Folded Dimensions", value: "323 × 195 × 98 mm" },
      { label: "Unfolded Dimensions", value: "180 × 159 × 296 mm" },
      { label: "Operating Temperature", value: "-10°C to 45°C (14°F to 113°F)" },
    ],
  },
  {
    category: "Compatibility",
    items: [
      {
        label: "Compatible Cameras",
        value: "Mirrorless cameras from Sony, Canon, Nikon, Panasonic, Fujifilm, and other supported models (up to 2 kg payload)",
      },
      {
        label: "Shooting Modes",
        value: "Horizontal & Native Vertical Shooting",
      },
    ],
  },
],
  },
];

export default accessories;
