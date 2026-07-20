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
    category: "Lens Rear Cap",
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
    id: "firecuda-x-vault-gaming-hard-drive",
    name: "FireCuda X Vault Gaming Hard Drive",
    category: "Harddisk & SSD",
    // brand: "Nikon",
    price: "₹12,500",
    slug: "firecuda-x-vault-gaming-hard-drive",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/hard-disk-ssd/1.png",
          "/accessories/hard-disk-ssd/2.png",
          "/accessories/hard-disk-ssd/3.png",
          "/accessories/hard-disk-ssd/4.png",
          "/accessories/hard-disk-ssd/5.png",
          "/accessories/hard-disk-ssd/6.png",
        ],
      },
    ],
    overview:
      "Built for gamers and streamers, FireCuda X Vault offers massive capacity, bus-powered transportability, and convenient single-cable connectivity. Vault’s striking design with customizable RGB illumination and Windows Dynamic Lighting keeps your vibe in check and syncs to your rig’s energy. Plus, level up protection for your gameplay footage and stored files with smart backup software and no-cost Rescue Data Recovery Services.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Name", value: "Seagate FireCuda Vault" },
          { label: "Product Type", value: "External Gaming Hard Drive" },
          { label: "Brand", value: "Seagate" },
          { label: "Storage Capacity", value: "8TB" },
          { label: "Interface", value: "USB Type-C" },
          {
            label: "Power Source",
            value: "Bus-Powered (No External Power Adapter Required)",
          },
        ],
      },
      {
        category: "Features",
        items: [
          {
            label: "RGB Lighting",
            value: "Customizable RGB with Windows Dynamic Lighting Support",
          },
          { label: "Gaming Compatibility", value: "Designed for Xbox on PC" },
          {
            label: "Storage Use",
            value:
              "Ideal for large game libraries, gameplay recordings, and content creation files",
          },
          {
            label: "Software",
            value:
              "Smart software for enhanced protection and drive management",
          },
          {
            label: "Bonus Offers",
            value:
              "1-Month Xbox Game Pass Ultimate for PC and 2-Month Adobe Creative Cloud Plan",
          },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          {
            label: "Dimensions",
            value: "198 × 53.2 × 132 mm (7.795 × 2.094 × 5.197 in)",
          },
          { label: "Weight", value: "1290 g (2.844 lb)" },
        ],
      },
      {
        category: "System Requirements",
        items: [
          {
            label: "Operating System",
            value: "Compatible with most Windows systems",
          },
          {
            label: "USB Requirement",
            value: "USB Type-C port with at least 15W power output",
          },
        ],
      },
      {
        category: "In the Box",
        items: [
          { label: "Drive", value: "Seagate FireCuda Vault" },
          { label: "Cable", value: "0.5 m USB Type-C Cable" },
          { label: "Documentation", value: "Quick Install Guide" },
        ],
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
        images: ["/accessories/sony/cable/cable.jpg"],
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
            value:
              "Sony cameras and accessories with Multi Interface (MI) Shoe",
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
        images: ["/accessories/nikon/filter/filter1.webp"],
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
        images: ["/accessories/gimbal/gimbal1.jpg"],
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
          {
            label: "Accessory Ports",
            value: '1/4"-20 Mount, NATO Port, USB-C RSS Camera Control Port',
          },
          { label: "Mobile App", value: "DJI Ronin (iOS 11.0+, Android 7.0+)" },
        ],
      },
      {
        category: "Physical Specifications",
        items: [
          { label: "Folded Dimensions", value: "323 × 195 × 98 mm" },
          { label: "Unfolded Dimensions", value: "180 × 159 × 296 mm" },
          {
            label: "Operating Temperature",
            value: "-10°C to 45°C (14°F to 113°F)",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Cameras",
            value:
              "Mirrorless cameras from Sony, Canon, Nikon, Panasonic, Fujifilm, and other supported models (up to 2 kg payload)",
          },
          {
            label: "Shooting Modes",
            value: "Horizontal & Native Vertical Shooting",
          },
        ],
      },
    ],
  },
  {
    id: "tripod-ballhead",
    name: "Tripod + Ballhead",
    category: "Tripod",
    brand: "Dji",
    price: "$49.99",
    slug: "tripod-ballhead",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/gopro/tripod/tripod-ballhead/1.webp",
          "/accessories/gopro/tripod/tripod-ballhead/2.webp",
          "/accessories/gopro/tripod/tripod-ballhead/3.webp",
          "/accessories/gopro/tripod/tripod-ballhead/4.webp",
          "/accessories/gopro/tripod/tripod-ballhead/5.webp",
          "/accessories/gopro/tripod/tripod-ballhead/6.webp",
          "/accessories/gopro/tripod/tripod-ballhead/7.webp",
          "/accessories/gopro/tripod/tripod-ballhead/8.webp",
          "/accessories/gopro/tripod/tripod-ballhead/9.webp",
          "/accessories/gopro/tripod/tripod-ballhead/10.webp",
        ],
      },
    ],
    overview:
      "This compact, waterproof aluminum tripod features adjustable legs for stable shots on uneven terrain, sand, or water. Its 360° rotating ball head tilts up to 90° and locks securely for precise angles, while the rubberized mount keeps your camera firmly in place. The foldable legs double as a comfortable hand grip, and the tripod is compatible with 1/4-20 extension poles for capturing invisible pole shots with 360 cameras.",
    specs: [
      {
        category: "Product Specifications",
        items: [
          { label: "Product Type", value: "Compact Tripod with Ball Head" },
          { label: "Brand", value: "GoPro" },
          { label: "Included Accessories", value: "Tripod and Ball Head" },
          { label: "Build", value: "Durable and Waterproof Construction" },
        ],
      },
      {
        category: "Tripod Features",
        items: [
          { label: "Leg Sections", value: "2-Section Telescoping Legs" },
          { label: "Maximum Leg Extension", value: "Up to 9 in (20 cm)" },
          { label: "Collapsed Length", value: "6 in (15 cm)" },
          {
            label: "Leg Positions",
            value:
              "Independently extendable, angle-locking, and flat-lay design for uneven terrain",
          },
        ],
      },
      {
        category: "Ball Head",
        items: [
          { label: "Rotation", value: "360° Pan Rotation" },
          { label: "Tilt Range", value: "Up to 90°" },
          { label: "Locking Mechanism", value: "Secure Ball Head Lock" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Extension Pole Support",
            value:
              'Compatible with 1/4"-20 extension poles (mounts to ball head or tripod base)',
          },
          {
            label: "Tripod Adapter",
            value: 'Compatible with 1/4"-20 Tripod Adapter (sold separately)',
          },
          {
            label: "Camera Compatibility",
            value:
              'Works with GoPro cameras and compatible 1/4"-20 mounted devices',
          },
          {
            label: "Legacy GoPro Support",
            value:
              "Supports older GoPro cameras and accessories using the optional Tripod Adapter",
          },
        ],
      },
      {
        category: "Warranty",
        items: [
          {
            label: "Warranty",
            value: "Backed by GoPro's Lifetime Warranty",
          },
        ],
      },
    ],
  },
  {
    id: "sandisk-extreme-256GB-microsdx",
    name: "SanDisk Extreme® 256GB microSDXC™",
    category: "Sd Card",
    brand: "",
    price: "$82.99",
    slug: "sandisk-extreme-256GB-microsdx",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/sd-card/1.webp"],
      },
    ],
    overview:
      "This memory card delivers fast write speed up to 60MB/s for burst photo capture, recording 4K Video and Full HD video (1080p) and fast read speed up to 160MB/s for quicker data transfer.",
    specs: [
      {
        category: "Memory Card Specifications",
        items: [
          { label: "Product Type", value: "microSDXC Memory Card" },
          { label: "Brand", value: "SanDisk" },
          { label: "Speed Class", value: "UHS Speed Class 1 (U3), Class 10" },
          {
            label: "Video Support",
            value:
              "Optimized for 4K UHD, Full HD (1080p), and other GoPro-supported video modes",
          },
        ],
      },
      {
        category: "Performance",
        items: [
          {
            label: "Recommended Use",
            value:
              "High-resolution photo capture and 4K/Full HD video recording",
          },
          {
            label: "GoPro Compatibility",
            value: "Verified by GoPro for compatibility with GoPro cameras",
          },
        ],
      },
      {
        category: "Durability",
        items: [
          { label: "Water Resistance", value: "Waterproof" },
          {
            label: "Operating Temperature",
            value: "-13°F to 185°F (-25°C to 85°C)",
          },
          { label: "Shock Resistance", value: "Shockproof" },
          { label: "X-Ray Resistance", value: "X-Ray Proof" },
        ],
      },
      {
        category: "Software & Warranty",
        items: [
          {
            label: "Recovery Software",
            value:
              "RescuePRO® Deluxe data recovery software (downloadable offer)",
          },
          {
            label: "Warranty",
            value: "Lifetime Limited Warranty",
          },
          {
            label: "Seller of Record",
            value: "Western Digital Technologies, Inc. (Americas)",
          },
        ],
      },
    ],
  },
  {
    id: "light-mod",
    name: "Light Mod",
    category: "Lightning Solution",
    brand: "Dji",
    price: "$59.99",
    slug: "light-mod",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/lightning-solution/1.webp",
          "/accessories/lightning-solution/2.webp",
          "/accessories/lightning-solution/3.webp",
          "/accessories/lightning-solution/4.webp",
          "/accessories/lightning-solution/5.webp",
          "/accessories/lightning-solution/6.webp",
        ],
      },
    ],
    overview:
      "Add compact yet powerful LED lighting to your next adventure. With Light Mod, you can illuminate your subject with wide, smooth, even light and capture ultra crisp footage. Light Mod attaches to HERO cameras via Media Mod (sold separately), or works as a handy standalone light for use with GoPro mounts.",
    specs: [
      {
        category: "Light Specifications",
        items: [
          { label: "Product Type", value: "LED Light Mod" },
          { label: "Brand", value: "GoPro" },
          {
            label: "Included Accessories",
            value: "Light Mod, Light Diffuser, 2-Finger Adapter, USB-C Cable",
          },
          {
            label: "Brightness Levels",
            value: "4 Adjustable Levels (Up to 200 Lumens)",
          },
          { label: "Water Resistance", value: "Waterproof up to 33 ft (10 m)" },
        ],
      },
      {
        category: "Performance",
        items: [
          { label: "Maximum Brightness", value: "200 Lumens (Overdrive Mode)" },
          { label: "Level 3", value: "125 Lumens, 120 Lux @ 1 m" },
          { label: "Level 2", value: "60 Lumens" },
          { label: "Level 1", value: "20 Lumens" },
          { label: "Overdrive Duration", value: "Up to 30 Seconds" },
          { label: "Strobe Mode", value: "Supported" },
        ],
      },
      {
        category: "Battery & Runtime",
        items: [
          { label: "Battery Type", value: "Built-In Rechargeable Battery" },
          { label: "Maximum Runtime", value: "Up to 6 Hours" },
          { label: "Runtime (Level 3)", value: "Up to 1 Hour" },
          { label: "Runtime (Level 2)", value: "Up to 2 Hours" },
          { label: "Runtime (Level 1)", value: "Up to 6 Hours" },
          {
            label: "Battery Note",
            value:
              "Battery life may vary depending on usage and environmental conditions",
          },
        ],
      },
      {
        category: "Lighting Characteristics",
        items: [
          { label: "Color Temperature", value: "5700K (Without Diffuser)" },
          { label: "Color Rendering Index (CRI)", value: "90+" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Camera Compatibility",
            value:
              "Connects to GoPro HERO cameras via Media Mod (sold separately)",
          },
          {
            label: "Standalone Use",
            value: "Can be used independently with compatible GoPro mounts",
          },
        ],
      },
    ],
  },
  {
    id: "sandisk-usb-c-flash-drive-64gb",
    name: "SANDISK USB-C™ Flash Drive - 64GB",
    category: "Pen Drive",
    brand: "SANDISK",
    price: "$19.99",
    slug: "sandisk-usb-c-flash-drive-64gb",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/pen-drive/sandisk/sandisk1.png",
          "/accessories/pen-drive/sandisk/sandisk2.png",
          "/accessories/pen-drive/sandisk/sandisk3.png",
          "/accessories/pen-drive/sandisk/sandisk4.png",
          "/accessories/pen-drive/sandisk/sandisk5.png",
          "/accessories/pen-drive/sandisk/sandisk6.webp",
          "/accessories/pen-drive/sandisk/sandisk7.webp",
          "/accessories/pen-drive/sandisk/sandisk8.webp",
        ],
      },
    ],
    overview:
      "Introducing the SANDISK USB-C™ Flash Drive - designed for the way you use devices today — instant and ready for anything. A reversible USB-C™ connector connects easily to modern USB-C™ laptops, tablets, and more in either direction. No flipping. No adapters. Connect and go. Store up to 60,000 high-res photos4 with 256GB1 capacity in sleek, thumb-sized storage that simply works.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "USB-C Flash Drive" },
          { label: "Brand", value: "SanDisk" },
          { label: "Capacity", value: "64GB" },
          { label: "Interface", value: "USB 3.2 Gen 1" },
          { label: "Model Number", value: "SDCZB-064G-G46" },
          { label: "Warranty", value: "3-Year Limited Warranty" },
        ],
      },
      {
        category: "Performance",
        items: [
          { label: "Sequential Read Speed", value: "Up to 250MB/s" },
          {
            label: "Storage Capacity",
            value: "Stores up to 60,000 high-resolution photos (256GB model)",
          },
        ],
      },
      {
        category: "Design & Build",
        items: [
          { label: "Dimensions", value: '1.94" × 0.81" × 0.46"' },
          { label: "Weight", value: "6g" },
          {
            label: "Connector",
            value: "Reversible USB-C™ connector",
          },
          {
            label: "Design",
            value: "Thumb-size design for convenient portable storage",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "macOS", value: "macOS 12+ (Monterey)" },
          { label: "Windows", value: "Windows® 10 & Windows® 11" },
        ],
      },
      {
        category: "Package Contents",
        items: [
          { label: "Included in the Box", value: "SanDisk USB-C™ Flash Drive" },
        ],
      },
      {
        category: "Available Models",
        items: [
          { label: "64GB", value: "SDCZB-064G-G46" },
          { label: "128GB", value: "SDCZB-128G-G46" },
          { label: "256GB", value: "SDCZB-256G-G46" },
        ],
      },
    ],
  },
  {
    id: "sandisk-extreme-pro-flash-drive-with-usb-a-512gb",
    name: "SanDisk Extreme PRO Flash Drive with USB-A - 512GB",
    category: "Pen Drive",
    brand: "SANDISK",
    price: "$134.99",
    slug: "sandisk-extreme-pro-flash-drive-with-usb-a-512gb",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/pen-drive/sandisk/1.png",
          "/accessories/pen-drive/sandisk/2.png",
          "/accessories/pen-drive/sandisk/3.png",
          "/accessories/pen-drive/sandisk/4.webp",
        ],
      },
    ],
    overview:
      "Custom built for intense file storage and transfers, the SanDisk Extreme PRO® Flash Drive with USB-A delivers solid performance so you can set your own work pace. This over-achiever boasts rapid read speeds up to 1,000MB/s2 and write speeds up to 900MB/s.2 With USB 3.2 Gen 2 speeds, you can transfer 200x faster than standard USB 2.0 drives.5 For professionals on-the-go with demanding workflows, match your sleek style with a premium metal design and convenient keyring hole to clip your favorite bag or briefcase.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "USB-A Flash Drive" },
          { label: "Brand", value: "SanDisk" },
          { label: "Capacity", value: "512GB" },
          { label: "Interface", value: "USB 3.2 Gen 2" },
          { label: "Model Number", value: "SDCZ820-512G-G46" },
          { label: "Warranty", value: "Lifetime Limited Warranty" },
        ],
      },
      {
        category: "Performance",
        items: [
          {
            label: "Transfer Speed",
            value: "SSD-like transfer speeds of up to 1000MB/s",
          },
          {
            label: "Maximum Capacity",
            value: "Available in capacities up to 2TB",
          },
          {
            label: "Backup Support",
            value:
              "Fast backups across compatible devices with USB-A connector",
          },
        ],
      },
      {
        category: "Software & Security",
        items: [
          {
            label: "File Management",
            value:
              "Works with the SanDisk Memory Zone™ app for transferring, organizing, and backing up files",
          },
          {
            label: "Supported Platforms",
            value:
              "SanDisk Memory Zone™ app available for compatible macOS and Windows® computers",
          },
          {
            label: "Security",
            value: "128-bit AES password protection encryption",
          },
        ],
      },
      {
        category: "Design & Build",
        items: [
          { label: "Weight", value: "28g" },
          {
            label: "Connector",
            value: "USB-A",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "macOS", value: "macOS 12+" },
          { label: "Windows", value: "Windows® 10+" },
        ],
      },
      {
        category: "Package Contents",
        items: [
          {
            label: "Included in the Box",
            value: "SanDisk Extreme PRO Flash Drive with USB-A",
          },
        ],
      },
      {
        category: "Available Models",
        items: [
          { label: "256GB", value: "SDCZ820-256G-G46" },
          { label: "512GB", value: "SDCZ820-512G-G46" },
          { label: "1TB", value: "SDCZ820-1T00-G46" },
          { label: "2TB", value: "SDCZ820-2T00-G46" },
        ],
      },
    ],
  },
  {
    id: "sandisk-extreme-pro-dual-drive-256gb",
    name: "SanDisk Extreme PRO Dual Drive - 256GB",
    category: "Pen Drive",
    brand: "SANDISK",
    price: "$76.99",
    slug: "sandisk-extreme-pro-dual-drive-256gb",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/pen-drive/sandisk/6.png",
          "/accessories/pen-drive/sandisk/7.png",
          "/accessories/pen-drive/sandisk/8.webp",
          "/accessories/pen-drive/sandisk/9.webp",
        ],
      },
    ],
    overview:
      "Amplify your data management with the SanDisk Extreme PRO Dual Drive, boasting read speeds up to 1,000MB/s2 and write speeds up to 900MB/s.2 Transition seamlessly between your USB-C™ and USB-A devices, and store tons of content with up to 2TB1 capacity. The SanDisk Extreme PRO Dual Drive is where rugged construction meets state-of-the-art data protection and convenience — for on-the-go professionals that need high performance and portability.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Dual USB Flash Drive" },
          { label: "Brand", value: "SanDisk" },
          { label: "Capacity", value: "256GB" },
          { label: "Interface", value: "USB 3.2 Gen 2" },
          { label: "Connectors", value: "USB-C & USB-A" },
          { label: "Warranty", value: "Lifetime Limited Warranty" },
        ],
      },
      {
        category: "Performance",
        items: [
          { label: "Sequential Read Speed", value: "Up to 1000MB/s" },
          { label: "Sequential Write Speed", value: "Up to 900MB/s" },
          {
            label: "Storage",
            value:
              "High-capacity flash storage for creative projects and critical documents",
          },
          {
            label: "Performance Benefit",
            value:
              "Fast read and write speeds help accelerate file transfers and backups",
          },
        ],
      },
      {
        category: "Design & Build",
        items: [
          { label: "Dimensions", value: '3.15" × 0.72" × 0.42"' },
          { label: "Weight", value: "23g" },
          {
            label: "Construction",
            value: "Durable premium metal design",
          },
          {
            label: "Portability",
            value: "Compact dual-drive design for carrying files anywhere",
          },
        ],
      },
      {
        category: "Compatibility",
        items: [
          { label: "Windows", value: "Windows® 10+" },
          { label: "macOS", value: "macOS v12+" },
          { label: "USB Type-A Devices", value: "Supported" },
          { label: "USB Type-C™ Devices", value: "Supported" },
        ],
      },
      {
        category: "Package Contents",
        items: [
          {
            label: "Included in the Box",
            value: "SanDisk Extreme PRO Dual Drive",
          },
        ],
      },
      {
        category: "Available Models",
        items: [
          { label: "256GB", value: "SDDDE1-256G-G46" },
          { label: "512GB", value: "SDDDE1-512G-G46" },
          { label: "1TB", value: "SDDDE1-1T00-G46" },
          { label: "2TB", value: "SDDDE1-2T00-G46" },
        ],
      },
    ],
  },
  {
    id: "fujifilm-protector-filter-prf-43",
    name: "FUJIFILM PROTECTOR FLITER PRF-43",
    category: "Filter",
    brand: "Fujifilm",
    price: "₹4,199",
    slug: "fujifilm-protector-filter-prf-43",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/filter/1.webp"],
      },
    ],
    overview:
      "A completely colorless and transparent lens protection filter to prevent the lens from being damaged by dust and dirt. – This filter has a “Super EBC coating” that coats multiple layers of thin films. This effectively suppresses light reflection with a surface reflectance of 0.3% or less, allowing the color reproducibility of the lens to be exhibited as it is, supporting ultra-high image quality shooting.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Protective Lens Filter" },
          { label: "Brand", value: "Fujifilm" },
          { label: "Model", value: "PRF-43" },
          { label: "Filter Diameter", value: "Ø43mm" },
          { label: "Country of Origin", value: "China" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Lenses",
            value: "XF23mmF2 R WR / XF35mmF2 R WR / XC35mmF2",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
        ],
      },
      {
        category: "Importer Information",
        items: [
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
    id: "fujifilm-protector-filter-prf-49s",
    name: "FUJIFILM PROTECTOR FLITER PRF-49S",
    category: "Filter",
    brand: "Fujifilm",
    price: "₹3,999",
    slug: "fujifilm-protector-filter-prf-49s",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/filter/2.webp"],
      },
    ],
    overview:
      "A completely colorless and transparent lens protection filter to prevent the lens from being damaged by dust and dirt. – This filter has a “Super EBC coating” that coats multiple layers of thin films. This effectively suppresses light reflection with a surface reflectance of 0.3% or less, allowing the color reproducibility of the lens to be exhibited as it is, supporting ultra-high image quality shooting.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Protective Lens Filter" },
          { label: "Brand", value: "Fujifilm" },
          { label: "Model", value: "PRF-49S" },
          { label: "Filter Diameter", value: "φ49mm" },
          { label: "Country of Origin", value: "China" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Lens",
            value: "XF16mmF2.8 R WR",
          },
          {
            label: "X100 Series Compatibility",
            value:
              "Compatible with FUJIFILM X100V, X100F, X100T, X100S, and X100 when used with the separately sold LH-X100 Lens Hood (includes AR-X100 Adapter Ring) or AR-X100 Adapter Ring.",
          },
          {
            label: "X70 Compatibility",
            value:
              "Compatible with FUJIFILM X70 when used with the adapter ring included with the separately sold LH-X70 Lens Hood.",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
        ],
      },
      {
        category: "Importer Information",
        items: [
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
    id: "fujifilm-protector-filter-prf-49",
    name: "FUJIFILM PROTECTOR FLITER PRF-49",
    category: "Filter",
    brand: "Fujifilm",
    price: "₹3,999",
    slug: "fujifilm-protector-filter-prf-49",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/filter/1.webp"],
      },
    ],
    overview:
      "A completely colorless and transparent lens protection filter to prevent the lens from being damaged by dust and dirt. – This filter has a “Super EBC coating” that coats multiple layers of thin films. This effectively suppresses light reflection with a surface reflectance of 0.3% or less, allowing the color reproducibility of the lens to be exhibited as it is, supporting ultra-high image quality shooting.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Protective Lens Filter" },
          { label: "Brand", value: "Fujifilm" },
          { label: "Model", value: "PRF-49" },
          { label: "Filter Diameter", value: "Ø49mm" },
          { label: "Country of Origin", value: "China" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Models",
            value: "X100V / X100F / X100T / X100S / X100 / X70",
          },
          {
            label: "X100 Series Installation",
            value:
              "Requires the separately sold LH-X100 lens hood (includes AR-X100 adapter ring) or the AR-X100 adapter ring.",
          },
          {
            label: "X70 Installation",
            value:
              "Use the adapter ring included with the separately sold LH-X70 lens hood.",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
        ],
      },
      {
        category: "Importer Information",
        items: [
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
    id: "fujifilm-lens-cap-flcp-58-ii",
    name: "FUJIFILM LENS CAP FLCP-58 II",
    category: "Lens Rear Cap",
    brand: "Fujifilm",
    price: "₹599",
    slug: "fujifilm-lens-lens-cap-flcp-58-ii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/lens-cap/1.webp"],
      },
    ],
    overview:
      "It prevents dust and dirt from adhering to the lens and protects the lens from scratches and dirt.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Front Lens Cap" },
          { label: "Brand", value: "Fujifilm" },
          { label: "Model", value: "FLCP-58 II" },
          { label: "Lens Cap Size", value: "58mm" },
          { label: "Country of Origin", value: "China" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Models",
            value:
              "GF30mmF3.5 R WR / XF14mmF2.8 R / XF23mmF1.4 R LM WR / XF33mmF1.4 R LM WR / XF18-55mmF2.8-4 R LM OIS / XC16-50mmF3.5-5.6 OIS / XC16-50mmF3.5-5.6 OIS II / XC50-230mmF4.5-6.7 OIS / XC50-230mmF4.5-6.7 OIS II",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
        ],
      },
      {
        category: "Importer Information",
        items: [
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
    id: "fujifilm-lens-cap-rlcp-001",
    name: "FUJIFILM LENS CAP RLCP-001",
    category: "Lens Rear Cap",
    brand: "Fujifilm",
    price: "₹599",
    slug: "fujifilm-lens-lens-cap-rlcp-001",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/lens-cap/2.webp"],
      },
    ],
    overview:
      "It prevents dust and dirt from adhering to the lens and protects the lens from scratches and dirt.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Rear Lens Cap" },
          { label: "Brand", value: "Fujifilm" },
          { label: "Model", value: "RLCP-001" },
          { label: "Mount Compatibility", value: "FUJIFILM X Mount" },
          { label: "Country of Origin", value: "China" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Models",
            value: "All FUJIFILM X Mount Lenses",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
        ],
      },
      {
        category: "Importer Information",
        items: [
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
    id: "fujifilm-body-cap-bcp-002",
    name: "FUJIFILM BODY CAP BCP-002",
    category: "Camera Body Cap",
    brand: "Fujifilm",
    price: "₹749",
    slug: "fujifilm-body-cap-bcp-002",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/body-cap/1.webp"],
      },
    ],
    overview:
      "Prevents light fog, dust, and dust from adhering to the camera body when the lens is not attached.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Camera Body Cap" },
          { label: "Brand", value: "Fujifilm" },
          { label: "Model", value: "BCP-002" },
          { label: "Mount Compatibility", value: "FUJIFILM G Mount" },
          { label: "Country of Origin", value: "China" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Models",
            value: "All FUJIFILM G Mount Camera Bodies",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
        ],
      },
      {
        category: "Importer Information",
        items: [
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
    id: "fujifilm-body-cap-bcp-001",
    name: "FUJIFILM BODY CAP BCP-001",
    category: "Camera Body Cap",
    brand: "Fujifilm",
    price: "₹749",
    slug: "fujifilm-body-cap-bcp-001",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/fujifilm/body-cap/2.webp"],
      },
    ],
    overview:
      "Prevents light fog, dust, and dust from adhering to the camera body when the lens is not attached.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Camera Body Cap" },
          { label: "Brand", value: "Fujifilm" },
          { label: "Model", value: "BCP-001" },
          { label: "Mount Compatibility", value: "FUJIFILM X Mount" },
          { label: "Country of Origin", value: "China" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Models",
            value: "All FUJIFILM X Mount Camera Bodies",
          },
        ],
      },
      {
        category: "Manufacturer Information",
        items: [
          {
            label: "Manufacturer",
            value: "Fujifilm Corporation",
          },
          {
            label: "Manufacturer Address",
            value:
              "26-30, Nishiazabu, 2-Chome, Minato-Ku, Tokyo 106-8620, Japan",
          },
        ],
      },
      {
        category: "Importer Information",
        items: [
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
    id: "dji-osmo-mobile-8-standrad-combo",
    name: "DJI Osmo Mobile 8 Standard Combo",
    category: "Gimbal",
    brand: "DJI",
    price: "₹9,590",
    slug: "dji-osmo-mobile-8-standrad-combo",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/gimbal/dji/1.jpg",
          "/accessories/gimbal/dji/2.jpg",
        ],
      },
    ],
    overview:
      "Seamless 360° Pan Rotation – Enjoy 360° horizontal rotation for immersive shots. Intelligent tracking lets you follow subjects freely, and the built-in tripod/selfie stick adds more flexibility.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Smartphone Gimbal Stabilizer" },
          { label: "Brand", value: "DJI" },
          { label: "Model", value: "Osmo Mobile 8 Standard Combo" },
          { label: "Dimensions (Unfolded)", value: "288 × 107 × 96 mm" },
          { label: "Dimensions (Folded)", value: "190 × 95 × 46 mm" },
          {
            label: "Weight",
            value:
              "Approx. 370 g (Gimbal + Built-in Tripod + Magnetic Phone Clamp + Multifunctional Module)",
          },
        ],
      },
      {
        category: "Performance",
        items: [
          { label: "Stabilization", value: "3-Axis Gimbal Stabilization" },
          { label: "Pan Rotation", value: "360° Unlimited Rotation" },
          { label: "Maximum Control Speed", value: "120°/s" },
          {
            label: "Extension Rod",
            value: "Built-in, up to 215 mm",
          },
          {
            label: "Phone Charging",
            value: "Supported",
          },
        ],
      },
      {
        category: "Battery",
        items: [
          { label: "Battery Type", value: "Li-Po 1S" },
          { label: "Capacity", value: "3350 mAh" },
          { label: "Battery Energy", value: "12.06 Wh" },
          { label: "Operating Time", value: "Up to 10 Hours" },
          { label: "Charging Time", value: "Approx. 2.5 Hours" },
          { label: "Charging Port", value: "USB-C" },
        ],
      },
      {
        category: "Phone Compatibility",
        items: [
          { label: "Compatible Phone Weight", value: "170–300 g" },
          { label: "Compatible Phone Thickness", value: "6.9–10 mm" },
          { label: "Compatible Phone Width", value: "67–84 mm" },
          { label: "Bottom Mount", value: '1/4"-20 UNC Thread' },
        ],
      },
      {
        category: "Connectivity & Software",
        items: [
          { label: "Wireless", value: "Bluetooth 5.3" },
          { label: "Companion App", value: "DJI Mimo" },
        ],
      },
      {
        category: "Key Features",
        items: [
          { label: "360° Pan Rotation", value: "Supported" },
          { label: "Built-in Extension Rod", value: "Yes" },
          { label: "Built-in Tripod", value: "Yes" },
          { label: "Magnetic Phone Clamp", value: "Included" },
          { label: "Multifunctional Module", value: "Included" },
        ],
      },
      {
        category: "Package Contents",
        items: [
          {
            label: "Included in the Box",
            value:
              "Osmo Mobile 8 Gimbal, Magnetic Phone Clamp, Multifunctional Module, Built-in Tripod, USB-C Charging Cable, Storage Pouch, Documentation",
          },
        ],
      },
    ],
  },
  {
    id: "dji-rs-4-mini-combo",
    name: "DJI RS 4 Mini Combo",
    category: "Gimbal",
    brand: "DJI",
    price: "₹9,590",
    slug: "dji-rs-4-mini-combo",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/gimbal/dji/3.jpg",
          "/accessories/gimbal/dji/4.jpg",
          "/accessories/gimbal/dji/5.jpg",
          "/accessories/gimbal/dji/6.jpg",
          "/accessories/gimbal/dji/7.jpg",
          "/accessories/gimbal/dji/8.jpg",
        ],
      },
    ],
    overview:
      "**DJI RS 4 Mini Combo** is a lightweight 3-axis camera gimbal that delivers smooth, professional stabilization for mirrorless cameras and smartphones.Featuring intelligent tracking, native vertical shooting, and a 2 kg payload capacity, it's perfect for creators, vloggers, and filmmakers on the go.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "3-Axis Camera Gimbal Stabilizer" },
          { label: "Brand", value: "DJI" },
          { label: "Model", value: "RS 4 Mini Combo" },
          { label: "Tested Payload", value: "0.4–2 kg (0.88–4.4 lbs)" },
          { label: "Weight", value: "Approx. 890 g (Gimbal Only)" },
          {
            label: "Dimensions (Folded)",
            value: "236 × 64 × 316 mm",
          },
          {
            label: "Dimensions (Unfolded)",
            value: "175 × 182 × 338 mm",
          },
        ],
      },
      {
        category: "Performance",
        items: [
          { label: "Stabilization", value: "3-Axis Gimbal Stabilization" },
          { label: "Pan Rotation", value: "360° Continuous Rotation" },
          { label: "Tilt Range", value: "-110° to +210°" },
          { label: "Roll Range", value: "-95° to +235°" },
          { label: "Maximum Rotation Speed", value: "360°/s (Pan/Tilt/Roll)" },
          {
            label: "Vertical Shooting",
            value: "3rd-Gen Native Vertical Shooting",
          },
          { label: "Axis Locks", value: "2nd-Generation Automatic Axis Locks" },
          { label: "Follow Mode", value: "Responsive Follow Mode" },
        ],
      },
      {
        category: "Battery",
        items: [
          { label: "Battery Type", value: "LiPo 2S" },
          { label: "Capacity", value: "3100 mAh" },
          { label: "Battery Energy", value: "22.32 Wh" },
          { label: "Battery Life", value: "Up to 13 Hours" },
          { label: "Charging Time", value: "Approx. 1 Hour 50 Minutes" },
          { label: "Charging Port", value: "USB-C" },
        ],
      },
      {
        category: "Connectivity",
        items: [
          { label: "Wireless", value: "Bluetooth 5.1" },
          { label: "App Compatibility", value: "DJI Ronin App" },
          { label: "Supported OS", value: "iOS 14.0+ / Android 9.0+" },
          {
            label: "Accessory Ports",
            value:
              'NATO Port, 1/4"-20 Mounting Hole, RSS Camera Control (USB-C), Pogo Pin',
          },
        ],
      },
      {
        category: "Key Features",
        items: [
          {
            label: "Intelligent Tracking",
            value: "Supported (Tracking Module)",
          },
          { label: "Teflon™ Enhanced Balancing", value: "Yes" },
          { label: "Quick Vertical Switch", value: "Supported" },
          { label: "Auto Axis Locks", value: "Supported" },
        ],
      },
      {
        category: "Package Contents",
        items: [
          {
            label: "Included in the Box",
            value:
              "DJI RS 4 Mini Gimbal, BG21 Battery Grip, Quick-Release Plate, RS Intelligent Tracking Module, Mini Briefcase Handle, Extended Grip/Tripod, USB-C Charging Cable, Multi-Camera Control Cable (USB-C), Screw Kit, Documentation",
          },
        ],
      },
    ],
  },
  {
    id: "insta360-flow-2-pro",
    name: "Insta360 Flow 2 Pro",
    category: "Gimbal",
    brand: "INSTA360",
    price: "₹15,999",
    slug: "insta360-flow-2-pro",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/gimbal/insta360/1.png",
          "/accessories/gimbal/insta360/2.jfif",
          "/accessories/gimbal/insta360/3.png",
          "/accessories/gimbal/insta360/4.jfif",
          "/accessories/gimbal/insta360/5.jfif",
          "/accessories/gimbal/insta360/6.jfif",
        ],
      },
    ],
    overview:
      "Insta360 Flow 2 Pro is an AI-powered smartphone gimbal that delivers ultra-smooth stabilization with intelligent subject tracking for professional-quality videos.Its foldable design, built-in selfie stick and tripod, plus long battery life make it the perfect companion for creators and vloggers on the go.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Smartphone Gimbal Stabilizer" },
          { label: "Brand", value: "Insta360" },
          {
            label: "Weight",
            value: "Gimbal: Approx. 357g | Magnetic Phone Clamp: Approx. 25g",
          },
          { label: "Dimensions (Folded)", value: "97.9 × 178.4 × 36.7 mm" },
          { label: "Dimensions (Unfolded)", value: "121.1 × 282.1 × 54 mm" },
          { label: "Charging Port", value: "USB-C" },
        ],
      },
      {
        category: "Phone Compatibility",
        items: [
          { label: "Compatible Phone Thickness", value: "6.9–10 mm" },
          { label: "Compatible Phone Width", value: "64–84 mm" },
          { label: "Compatible Phone Weight", value: "130–300 g" },
          { label: "Built-In Selfie Stick", value: "210 mm" },
          {
            label: "Built-In Tripod",
            value: "Extended Length: 94 mm | Extended Diameter: 204 mm",
          },
        ],
      },
      {
        category: "Battery",
        items: [
          { label: "Battery Capacity", value: "1100 mAh" },
          { label: "Runtime", value: "Up to 10 Hours" },
          { label: "Charging Time", value: "Approx. 2 Hours (5V/2A)" },
          {
            label: "Operating Temperature",
            value: "-10°C to 40°C (14°F to 104°F)",
          },
          {
            label: "Charging Temperature",
            value: "0°C to 40°C (32°F to 104°F)",
          },
          {
            label: "Battery Test Conditions",
            value:
              "Measured at 25°C with the gimbal balanced on a flat surface and the Tracking Ring Light turned off",
          },
        ],
      },
      {
        category: "Gimbal Performance",
        items: [
          { label: "Stabilization", value: "3-Axis Gimbal Stabilization" },
          { label: "Pan Range", value: "360° Continuous Rotation" },
          { label: "Roll Range", value: "-390° to 135°" },
          { label: "Tilt Range", value: "-99° to 231°" },
          { label: "Maximum Control Speed", value: "120°/s" },
        ],
      },
      {
        category: "Connectivity",
        items: [
          { label: "Bluetooth", value: "Bluetooth 5.0" },
          { label: "NFC", value: "Supports ISO/IEC 14443A Standard" },
        ],
      },
    ],
  },
  {
    id: "insta360-flow-2-pro-ai-traker-bundle",
    name: "Insta360 Flow 2 Pro AI Tracker Bundle",
    category: "Gimbal",
    brand: "INSTA360",
    price: "₹18,990",
    slug: "insta360-flow-2-pro-ai-traker-bundle",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/gimbal/insta360/7.webp"],
      },
    ],
    overview:
      "Insta360 Flow 2 Pro Creator Bundle is an all-in-one AI-powered smartphone gimbal kit that delivers ultra-smooth stabilization, intelligent subject tracking, and professional-quality mobile filmmaking.Complete with premium creator accessories, including a spotlight and magnetic phone mount, it's the perfect solution for vloggers, filmmakers, and content creators.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Smartphone Gimbal Stabilizer" },
          { label: "Brand", value: "Insta360" },
          {
            label: "Weight",
            value: "Gimbal: Approx. 357g | Magnetic Phone Clamp: Approx. 25g",
          },
          { label: "Dimensions (Folded)", value: "97.9 × 178.4 × 36.7 mm" },
          { label: "Dimensions (Unfolded)", value: "121.1 × 282.1 × 54 mm" },
          { label: "Port", value: "USB-C" },
        ],
      },
      {
        category: "Phone Compatibility",
        items: [
          { label: "Compatible Phone Thickness", value: "6.9–10 mm" },
          { label: "Compatible Phone Width", value: "64–84 mm" },
          { label: "Compatible Phone Weight", value: "130–300 g" },
          { label: "Built-In Selfie Stick Length", value: "210 mm (8.3 in)" },
          {
            label: "Built-In Tripod",
            value: "Extended Length: 94 mm | Extended Diameter: 204 mm",
          },
        ],
      },
      {
        category: "Battery",
        items: [
          { label: "Battery Capacity", value: "1100 mAh" },
          { label: "Runtime", value: "Up to 10 Hours" },
          { label: "Charging Time", value: "Approx. 2 Hours (5V/2A)" },
          {
            label: "Operating Temperature",
            value: "-10°C to 40°C (14°F to 104°F)",
          },
          {
            label: "Charging Temperature",
            value: "0°C to 40°C (32°F to 104°F)",
          },
          {
            label: "Test Conditions",
            value:
              "Measured at 25°C with the gimbal fully balanced on a flat surface and the Tracking Ring Light turned off.",
          },
        ],
      },
      {
        category: "Gimbal Performance",
        items: [
          { label: "Pan Range", value: "360° Continuous Rotation" },
          { label: "Roll Range", value: "-390° to 135°" },
          { label: "Tilt Range", value: "-99° to 231°" },
          { label: "Maximum Control Speed", value: "120°/s" },
        ],
      },
      {
        category: "Wireless Connectivity",
        items: [
          { label: "Bluetooth", value: "Bluetooth 5.0" },
          { label: "NFC", value: "Supports ISO/IEC 14443A Standard" },
        ],
      },
    ],
  },
  {
    id: "insta360-luna-ultra-standrad",
    name: "Insta 360 Luna Ultra Standard",
    category: "Gimbal",
    brand: "INSTA360",
    price: "₹85,990",
    slug: "insta360-luna-ultra-standrad",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: [
          "/accessories/gimbal/insta360/8.jpg",
          "/accessories/gimbal/insta360/9.jpg",
          "/accessories/gimbal/insta360/10.jpg",
          "/accessories/gimbal/insta360/11.jpg",
          "/accessories/gimbal/insta360/12.jpg",
        ],
      },
    ],
    overview:
      "Insta360 Luna Ultra is a premium AI-powered 3-axis gimbal camera featuring Leica optics, dual-lens imaging, and stunning 8K video recording for cinematic content creation.Its intelligent tracking, detachable touchscreen, and advanced stabilization make it the perfect companion for vloggers, filmmakers, and professional creators.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Dual-Lens 3-Axis Gimbal Camera" },
          { label: "Brand", value: "Insta360" },
          { label: "Model", value: "Luna Ultra" },
          { label: "Release Date", value: "June 2026" },
          {
            label: "Available Colors",
            value: "Cosmic Black, Stellar White",
          },
          {
            label: "Dimensions",
            value: "52.4 × 169.9 × 38.5 mm",
          },
          {
            label: "Weight",
            value: "233 g (Cosmic Black), 235 g (Stellar White)",
          },
        ],
      },
      {
        category: "Camera & Optics",
        items: [
          { label: "Main Sensor", value: "1-inch CMOS" },
          { label: "Telephoto Sensor", value: "1/1.3-inch CMOS" },
          { label: "Main Lens Aperture", value: "f/1.8" },
          { label: "Telephoto Lens Aperture", value: "f/2.0" },
          {
            label: "35mm Equivalent Focal Length",
            value: "20mm (Main), 60mm (Telephoto)",
          },
          {
            label: "Minimum Focus Distance",
            value: "9 cm (Main), 15 cm (Telephoto)",
          },
        ],
      },
      {
        category: "Display & Storage",
        items: [
          { label: "Display", value: '2.0" OLED Touchscreen' },
          { label: "Display Resolution", value: "318 × 564 pixels" },
          { label: "Peak Brightness", value: "1000 nits" },
          { label: "Internal Storage", value: "47GB" },
          { label: "USB Interface", value: "USB Type-C (USB 3.0)" },
          {
            label: "Microphones",
            value: "4 (3 on camera + 1 on detachable remote)",
          },
        ],
      },
      {
        category: "Gimbal Performance",
        items: [
          { label: "Stabilization", value: "3-Axis Mechanical Gimbal" },
          { label: "Mechanical Pan Range", value: "-63° to 240°" },
          { label: "Mechanical Pitch Range", value: "-98° to 180°" },
          { label: "Mechanical Roll Range", value: "-63° to 220°" },
          { label: "Maximum Control Speed", value: "210°/s" },
          { label: "Jitter Suppression", value: "±0.005°" },
        ],
      },
      {
        category: "Battery",
        items: [
          { label: "Main Battery Capacity", value: "1550 mAh" },
          { label: "Remote Battery Capacity", value: "210 mAh" },
          { label: "Battery Life", value: "Up to 240 Minutes" },
          { label: "Charging Time", value: "80% in ~23 min, 100% in ~38 min" },
          { label: "Fast Charging", value: "Supported" },
        ],
      },
      {
        category: "Connectivity",
        items: [
          { label: "Wi-Fi", value: "Wi-Fi 6 (802.11 a/b/g/n/ac/ax)" },
          { label: "Bluetooth", value: "BR / EDR / BLE" },
          { label: "Operating Temperature", value: "0°C to 40°C" },
          {
            label: "Water Resistance",
            value: "Not waterproof, dustproof, or splashproof",
          },
        ],
      },
    ],
  },
  {
    id: "rechargeable-li-ion-batt-en-el18c(tw)-f",
    name: "Rechargeable Li-ion Batt EN-EL18c(TW)/F",
    category: "Battery",
    brand: "Nikon",
    price: "₹11,190",
    slug: "rechargeable-li-ion-batt-en-el18c(tw)-f",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/battery/1.webp"],
      },
    ],
    overview:
      "The EN-EL18c is a Rechargeable Li-ion Battery that is used to power the D5, D4s and D4 Nikon D-SLR cameras. The EN-EL18c Li-ion Battery can be charged using either the MH-26a or MH-26aAK Adapter Kit battery chargers. The EN-EL18c Rechargeable Lithium-ion Battery is also used with select Nikon cameras and Multi-Power Battery Packs, powering the cameras.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Adapter" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VFB12303" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "Nikon D6, D5, D4S, and D4",
          },
        ],
      },
    ],
  },
  {
    id: "battery-en-el25a",
    name: "Battery EN-EL25a",
    category: "Battery",
    brand: "Nikon",
    price: "₹3,295",
    slug: "battery-en-el25a",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/battery/2.webp"],
      },
    ],
    overview:
      "The EN-EL25a is a rechargeable Lithium-ion battery that is used to power specific Nikon digital cameras. The battery can be charged using the MH-32 battery charger or it can be charged while in the camera using the EH-73P charging AC adapter.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Charger" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VFB12505" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "Nikon Z fc, Z 30, and Z 50",
          },
        ],
      },
    ],
  },
  {
    id: "rechargeable-li-ion-battery-en-el18d(in)",
    name: "Rechargeable Li-ion Battery EN-EL18d(IN)",
    category: "Battery",
    brand: "Nikon",
    price: "₹17,495",
    slug: "rechargeable-li-ion-battery-en-el18d(in)",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/battery/3.webp"],
      },
    ],
    overview:
      "The EN-EL18d is a Rechargeable Li-ion Battery that is used to power the Z 9 Z camera. The EN-EL18d Li-ion Battery can be charged using either the MH-33 battery charger. The EN-EL18d Rechargeable Lithium-ion Battery is also used with select Nikon cameras and Multi-Power Battery Packs, powering the cameras.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Charger" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VFB12905" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "Nikon Z 9",
          },
        ],
      },
    ],
  },
  {
    id: "battery-en-el25(in)-f",
    name: "Battery EN-EL25(IN)/F",
    category: "Battery",
    brand: "Nikon",
    price: "₹3,295",
    slug: "battery-en-el25(in)-f",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/battery/4.webp"],
      },
    ],
    overview:
      "The EN-EL25 is a rechargeable Lithium-ion battery that is used to power specific Nikon digital cameras. The battery can be charged using the MH-32 battery charger or it can be charged while in the camera using the EH-73P charging AC adapter.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Charger" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VFB12505" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "Nikon Z fc, Nikon Z 30, and Nikon Z 50",
          },
        ],
      },
    ],
  },
  {
    id: "battery-charger-mh-25a-in",
    name: "BATTERY CHARGER MH-25a IN",
    category: "Charger",
    brand: "Nikon",
    price: "₹2,650",
    slug: "battery-charger-mh-25a-in",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/charger/1.webp"],
      },
    ],
    overview:
      "The MH-25a is a battery charger designed specifically for recharging Nikon EN-EL15/EN-EL15a/b/c Lithium-ion batteries.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Charger" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VEA016NA" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value:
              "Nikon Z8, Nikon Z6III, Nikon Z5II, Nikon Zf, Nikon Z7, Nikon Z6, Nikon Z7II, Nikon Z6II, Nikon Z5, Nikon D780, Nikon D610, Nikon D7500, Nikon D850, Nikon D7200, Nikon D500, Nikon D7100, Nikon D810A, Nikon D750, Nikon D810, Nikon D800E, Nikon D600, and Nikon D800",
          },
        ],
      },
    ],
  },
  {
    id: "battery-charger-mh-24-in",
    name: "BATTERY CHARGER MH-24 IN",
    category: "Charger",
    brand: "Nikon",
    price: "₹2,900",
    slug: "battery-charger-mh-24-in",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/charger/2.webp"],
      },
    ],
    overview:
      "Battery charger for rechargeable EN-EL 14 Lithium Ion (Li-ion) battery.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Charger" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VEA006ND" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value:
              "Nikon D3500, Nikon D5600, Nikon D3400, Nikon D3300, Nikon D5300, Nikon D5500, Nikon D3200, Nikon Df, Nikon COOLPIX P7800, Nikon COOLPIX P7700, Nikon COOLPIX P7100, Nikon COOLPIX P7000, Nikon D5200, Nikon D3100, and Nikon D5100",
          },
        ],
      },
    ],
  },
  {
    id: "battery-charger-mh-33(in)-f",
    name: "Battery Charger MH-33(IN)/F",
    category: "Charger",
    brand: "Nikon",
    price: "₹9,795",
    slug: "battery-charger-mh-33(in)-f",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/charger/3.webp"],
      },
    ],
    overview:
      "The MH-33 is a battery charger specifically designed to charge EN-EL18d Li-ion battery.Please note, to power the MH-33 charger, you will need the EH-7P charging AC adapter (Sold separately).",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Charger" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VEA02505" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value:
              "Nikon EN-EL18d, Nikon EN-EL18c, and Nikon EN-EL18b Rechargeable Li-ion Batteries",
          },
        ],
      },
    ],
  },
  {
    id: "battery-charger-cover-bl-6",
    name: "BATTERY CHAMBER COVER BL-6",
    category: "Charger",
    brand: "Nikon",
    price: "₹1,450",
    slug: "battery-charger-cover-bl-6",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/charger/4.webp"],
      },
    ],
    overview:
      "The BL-6 is a Battery Chamber Cover for the D4, D4s, D5 and D6 and EN-EL18/a,b,c rechargeable battery.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Battery Charger" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "VFD10004" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "Nikon D6, Nikon D5, Nikon D4S, and Nikon D4",
          },
        ],
      },
    ],
  },
  {
    id: "hb-119-lens-hood",
    name: "HB-119 Lens Hood",
    category: "Lens Hood",
    brand: "Nikon",
    price: "₹4,795",
    slug: "hb-119-lens-hood",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/lens-hood/1.webp"],
      },
    ],
    overview:
      "The Nikon HB-119 Lens Hood is designed for the NIKKOR Z 70-200mm f/2.8 VR S II lens, helping reduce flare and unwanted stray light for improved image quality. It also provides added protection to the front element while featuring a convenient filter adjustment window for rotating filters.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Lens Hood" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "JMB04601" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "NIKKOR Z 70-200mm f/2.8 VR S II",
          },
        ],
      },
    ],
  },
  {
    id: "hb-93-b-lens-hood",
    name: "HB-93B Lens Hood",
    category: "Lens Hood",
    brand: "Nikon",
    price: "₹4,795",
    slug: "hb-93-b-lens-hood",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/lens-hood/1.webp"],
      },
    ],
    overview:
      "The Nikon HB-93B Lens Hood is a bayonet-style hood designed specifically for the NIKKOR Z 24-105mm f/4-7.1 lens, helping reduce flare and improve image contrast. It also protects the front element from accidental impacts, dust, and scratches during everyday shooting.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Lens Hood" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "JMB04801" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "NIKKOR Z 24-105mm f/4-7.1",
          },
        ],
      },
    ],
  },
  {
    id: "hn-43-lens-hood",
    name: "HN-43 Lens Hood",
    category: "Lens Hood",
    brand: "Nikon",
    price: "₹4,795",
    slug: "hn-43-lens-hood",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/lens-hood/3.webp"],
      },
    ],
    overview:
      "The Nikon HN-43 Lens Hood is a screw-on lens hood designed for select NIKKOR Z lenses, helping reduce flare and stray light for sharper, higher-contrast images. It also provides added protection for the front lens element against accidental bumps, dust, and scratches.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Lens Hood" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "JMB04701" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value:
              "NIKKOR Z DX MC 35mm f/1.7, NIKKOR Z 28mm f/2.8, NIKKOR Z 28mm f/2.8 (SE), NIKKOR Z 40mm f/2, and NIKKOR Z 40mm f/2 (SE)",
          },
        ],
      },
    ],
  },
  {
    id: "hn-118-lens-hood",
    name: "HB-118 Lens Hood",
    category: "Lens Hood",
    brand: "Nikon",
    price: "₹4,795",
    slug: "hn-118-lens-hood",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/nikon/lens-hood/4.webp"],
      },
    ],
    overview:
      "The Nikon HB-118 Lens Hood is a petal-shaped bayonet hood designed for the NIKKOR Z DX 16-50mm f/2.8 VR lens, helping minimize flare and improve image contrast. It also protects the front lens element from accidental bumps, dust, and scratches during everyday use.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Lens Hood" },
          { label: "Brand", value: "Nikon" },
          { label: "Display SKU", value: "JMB04901" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "NIKKOR Z DX 16-50mm f/2.8 VR",
          },
        ],
      },
    ],
  },
  {
    id: "lens-dust-cap-rf-ii",
    name: "Lens Dust Cap RF II",
    category: "Lens Rear Cap",
    brand: "Canon",
    price: "$8.99",
    slug: "lens-dust-cap-rf-ii",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/canon/lens-rear-cap/1.webp"],
      },
    ],
    overview:
      "Protect your lens' rear glass from dust and scratches. Lens Dust Cap RF II features three mounting points to affix the dust cap to an RF or RF-S lens' red mount index point. This cap replaces and is compatible with all lenses as the original Lens Dust Cap RF.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Lens Dust Cap" },
          { label: "Brand", value: "Canon" },
          { label: "Display SKU", value: "7464C001" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "All Canon RF and RF-S lenses",
          },
        ],
      },
    ],
  },
  {
    id: "lens-cap-3-9",
    name: "Lens Cap 3.9",
    category: "Lens Rear Cap",
    brand: "Canon",
    price: "$57.99",
    slug: "lens-cap-3-9",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/canon/lens-rear-cap/2.webp"],
      },
    ],
    overview:
      "Specifically designed for the RF-S3.9mm F3.5 STM DUAL FISHEYE lens, this cap protects the lens from smudges, dust and other unwanted particles or damage that can occur when carried in a camera bag or simply being stored. This cap has a center pinch design that makes it easy to remove or replace.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Lens Cap" },
          { label: "Brand", value: "Canon" },
          { label: "Display SKU", value: "LCAPE-95" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value:
              "Canon RF 28-70mm F2L USM, Canon RF 800mm F11 IS STM, Canon RF 200-800mm F6.3-9 IS USM, and all Canon lenses with a 95mm filter thread",
          },
        ],
      },
    ],
  },
  {
    id: "lens-cap-10-20",
    name: "Lens Cap 10-20",
    category: "Lens Rear Cap",
    brand: "Canon",
    price: "$27.99",
    slug: "lens-cap-10-20",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/canon/lens-rear-cap/3.webp"],
      },
    ],
    overview:
      "Lens cap for the RF10-20mm F4 L IS STM to helps protect the front glass from dust and scratches.",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "Lens Cap" },
          { label: "Brand", value: "Canon" },
          { label: "Display SKU", value: "LENSCAP10-20" },
        ],
      },
      {
        category: "Compatibility",
        items: [
          {
            label: "Compatible Products",
            value: "Canon RF10-20mm F4 L IS STM",
          },
        ],
      },
    ],
  },
  {
    id: "fluid-pro-ai",
    name: "Fluid Pro AI",
    category: "Gimbal",
    brand: "Go Pro",
    price: "$229.99",
    slug: "fluid-pro-ai",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/gopro/gimbal/1.webp"],
      },
    ],
    overview:
      "This premium gimbal delivers super-smooth video stabilization plus the power of AI subject tracking. Made for videographers, vloggers and content creators, it automatically tracks your subject throughout your shot using an attached sensor with a built-in fill light",
    specs: [
      {
        category: "General Specifications",
        items: [
          { label: "Product Type", value: "3-Axis Camera & Smartphone Gimbal" },
          { label: "Brand", value: "GoPro" },
          {
            label: "Compatible Devices",
            value: "Smartphones, GoPro Cameras, and Point-and-Shoot Cameras",
          },
        ],
      },
      {
        category: "Performance",
        items: [
          { label: "Maximum Payload", value: "400g" },
          { label: "Gimbal Type", value: "3-Axis Stabilization" },
          { label: "Pan Rotation", value: "Unlimited 360°" },
          { label: "Tilt & Roll Range", value: "335°" },
          {
            label: "AI Tracking",
            value: "Forward- and Rear-Facing AI Subject Tracking Module",
          },
          { label: "Integrated Fill Light", value: "Yes" },
          {
            label: "Wireless Control",
            value:
              "Phone Camera Shutter, Zoom, Focus & GoPro Shutter (Select Models)",
          },
          { label: "Battery Runtime", value: "Up to 18 Hours" },
          { label: "Power Bank Function", value: "Yes, USB Power-Out Port" },
        ],
      },
      {
        category: "Package Contents",
        items: [
          {
            label: "Included Accessories",
            value:
              "Gimbal, AI Tracking Module, Phone Mounting Bracket, GoPro Mounting Bracket & Finger Adapter, Thumb Screw, Tripod Base, Gimbal USB-C Charging Cable, Camera USB-C Charging Cable, and Zippered Carry Case",
          },
        ],
      },
      {
        category: "Warranty",
        items: [
          { label: "Warranty", value: "GoPro Limited Lifetime Warranty" },
        ],
      },
    ],
  },
  {
    id: "3-prong-to-1-4-adapter",
    name: "3-Prong to 1/4 Adapter",
    category: "Action Camera Accessories",
    brand: "Insta 360",
    price: "₹1,799.00",
    slug: "3-prong-to-1-4-adapter",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/insta360/action-camera-accessories/1.webp"],
      },
    ],
    overview:
      "The **Insta360 3-Prong to 1/4 Adapter** lets you securely mount compatible Insta360 cameras to standard 1/4-20 like tripods, selfie sticks, and extension poles.Its durable, lightweight design with an adjustable angle and included thumb screw ensures stable and flexible shooting.",
    specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Product Type", value: '3-Prong to 1/4" Adapter' },
      { label: "Brand", value: "Insta360" },
      { label: "Material", value: "Durable Lightweight Construction" },
    ],
  },
  {
    category: "Features",
    items: [
      {
        label: "Mount Type",
        value: '3-Prong Mount to 1/4"-20 Thread Adapter',
      },
      {
        label: "Adjustability",
        value: "Adjustable Camera Angle",
      },
      {
        label: "Included Accessory",
        value: "Thumb Screw",
      },
    ],
  },
  {
    category: "Compatibility",
    items: [
      {
        label: "Compatible Products",
        value:
          "Insta360 X5, Insta360 Ace Pro 2, Insta360 Ace Pro, Insta360 Ace, Insta360 ONE RS (Twin/4K), and Insta360 ONE R",
      },
    ],
  },
],
  },
  {
    id: "heavy-duty-clamp",
    name: "Heavy Duty Clamp",
    category: "Action Camera Accessories",
    brand: "Insta 360",
    price: "₹4,950.00",
    slug: "heavy-duty-clamp",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/insta360/action-camera-accessories/2.webp"],
      },
    ],
    overview:
      "The Insta360 Heavy Duty Clamp provides a strong, secure grip for mounting your camera on handlebars, poles, and other surfaces, delivering stable footage even during high-action adventures.Its ball-joint-free design minimizes vibration for steadier shots, making it an ideal accessory for motorcycle rides and outdoor filming",
    specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Product Type", value: "Heavy Duty Camera Clamp" },
      { label: "Brand", value: "Insta360" },
      { label: "Mount Type", value: "Universal Clamp Mount with 1/4\" Thread & 3-Prong Adapter" },
    ],
  },
  {
    category: "Features",
    items: [
      { label: "Design", value: "Ball-Joint-Free Design for Maximum Stability" },
      { label: "Application", value: "Motorcycle Handlebars, Bars, Poles, Tubes, and Similar Mounting Points" },
      { label: "Quick Release Support", value: "Requires Quick Release Mount for Insta360 GO 3S/GO 3" },
      { label: "Construction", value: "Heavy-Duty Metal Construction" },
    ],
  },
  {
    category: "Compatibility",
    items: [
      {
        label: "Compatible Products",
        value:
          "Insta360 X5, X4 Air, X4, GO Ultra, GO 3S, Ace Pro 2, Ace Pro, Ace, GO 3, X3, ONE RS (Twin/4K), GO 2, ONE X2, ONE R, ONE X, and ONE",
      },
    ],
  },
  {
    category: "Package Contents",
    items: [
      {
        label: "Included Accessories",
        value:
          "Heavy Duty Clamp, 4× Anti-Slip Rings, Hex Wrench, 3-Prong to 1/4\" Adapter, Thumb Screw, and Clamp Mount Wrench",
      },
    ],
  },
],
  },
  {
    id: "chest-strap",
    name: "Insta360 Chest Strap",
    category: "Action Camera Accessories",
    brand: "Insta 360",
    price: "₹5,363.00",
    slug: "chest-strap",
    status: "In Stock",
    colors: [
      {
        name: "All",
        images: ["/accessories/insta360/action-camera-accessories/3.webp"],
      },
    ],
    overview:
      "The Insta360 Chest Strap lets you capture immersive, hands-free first-person POV footage with a secure and comfortable fit for action-packed adventures.Its adjustable, non-slip design keeps your camera stable, making it ideal for cycling, hiking, skiing, and other outdoor activities.",
   specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Product Type", value: "Chest Strap Mount" },
      { label: "Brand", value: "Insta360" },
      { label: "Mount Type", value: "Adjustable Hands-Free Chest Harness" },
    ],
  },
  {
    category: "Features",
    items: [
      { label: "Design", value: "Adjustable, Comfortable, Non-Slip Chest Strap" },
      { label: "Usage", value: "Hands-Free First-Person (POV) Shooting" },
      { label: "Quick Release Support", value: "GO 3/GO 3S Requires Quick Release Mount; GO 2 Requires Action Mount Adapter" },
    ],
  },
  {
    category: "Compatibility",
    items: [
      {
        label: "Compatible Products",
        value:
          "Insta360 X5, X4 Air, GO Ultra, Ace Pro 2, X4, GO 3S, Ace Pro, Ace, GO 3, X3, ONE RS (Twin/4K), GO 2, ONE X2, and ONE R",
      },
    ],
  },
  {
    category: "Package Contents",
    items: [
      {
        label: "Included Accessories",
        value: "Chest Strap",
      },
    ],
  },
],
  },
  {
  id: "all-purpose-tripod",
  name: "Insta360 All-Purpose Tripod",
  category: "Action Camera Accessories",
  brand: "Insta 360",
  price: "₹3,628.00",
  slug: "all-purpose-tripod",
  status: "In Stock",
  colors: [
    {
      name: "All",
      images: ["/accessories/insta360/action-camera-accessories/4.webp"],
    },
  ],
  overview:
    "The Insta360 All-Purpose Tripod provides a stable platform for capturing photos, videos, and time-lapse shots. Its compact foldable design and sturdy construction make it ideal for both indoor and outdoor shooting.",
  specs: [
    {
      category: "General Specifications",
      items: [
        { label: "Product Type", value: "Tripod" },
        { label: "Brand", value: "Insta360" },
        { label: "Mount Type", value: '1/4" Screw Mount' },
      ],
    },
    {
      category: "Features",
      items: [
        { label: "Design", value: "Compact, Foldable, Stable Legs" },
        { label: "Usage", value: "Photography, Video Recording, Time-lapse" },
        { label: "Compatibility Note", value: "Ace Pro 2/Ace Pro/Ace require Quick Release Mount or 3-Prong to 1/4 Adapter (sold separately)." },
      ],
    },
    {
      category: "Compatibility",
      items: [
        {
          label: "Compatible Products",
          value: "All Insta360 cameras with 1/4-inch mounting support",
        },
      ],
    },
    {
      category: "Package Contents",
      items: [
        {
          label: "Included Accessories",
          value: "All-Purpose Tripod",
        },
      ],
    },
  ],
},
{
  id: "dual-suction-cup-car-mount",
  name: "Insta360 Dual Suction Cup Car Mount",
  category: "Action Camera Accessories",
  brand: "Insta 360",
  price: "₹26,484.00",
  slug: "dual-suction-cup-car-mount",
  status: "Out of Stock",
  colors: [
    {
      name: "All",
      images: ["/accessories/insta360/action-camera-accessories/5.webp"],
    },
  ],
  overview:
    "The Insta360 Dual Suction Cup Car Mount delivers ultra-secure mounting for smooth third-person driving shots. Its powerful suction cups provide exceptional stability for creative automotive filmmaking.",
  specs: [
    {
      category: "General Specifications",
      items: [
        { label: "Product Type", value: "Car Mount" },
        { label: "Brand", value: "Insta360" },
        { label: "Mount Type", value: "Dual/Triple Suction Cup Mount" },
      ],
    },
    {
      category: "Features",
      items: [
        { label: "Design", value: "Heavy-Duty Triple Suction Cup System" },
        { label: "Usage", value: "Third-Person Vehicle Filming" },
        { label: "Special Feature", value: "Can be configured as single, dual or triple suction cup mount." },
      ],
    },
    {
      category: "Compatibility",
      items: [
        {
          label: "Compatible Products",
          value: "Insta360 X5, X4, Ace Pro 2, Ace Pro, Ace, GO 3S, GO 3, X3, ONE RS, GO 2, ONE X2, ONE R and ONE X",
        },
      ],
    },
    {
      category: "Package Contents",
      items: [
        {
          label: "Included Accessories",
          value: "Dual/Triple Suction Cup Car Mount",
        },
      ],
    },
  ],
},
{
  id: "helmet-chin-mount",
  name: "Insta360 Helmet Chin Mount",
  category: "Action Camera Accessories",
  brand: "Insta 360",
  price: "₹2,672.00",
  slug: "helmet-chin-mount",
  status: "In Stock",
  colors: [
    {
      name: "All",
      images: ["/accessories/insta360/action-camera-accessories/6.webp"],
    },
  ],
  overview:
    "The Insta360 Helmet Chin Mount lets you capture immersive first-person riding footage with a secure fit on full-face helmets. It is lightweight, easy to install, and designed for stable POV recording.",
  specs: [
    {
      category: "General Specifications",
      items: [
        { label: "Product Type", value: "Helmet Mount" },
        { label: "Brand", value: "Insta360" },
        { label: "Mount Type", value: "Helmet Chin Mount" },
      ],
    },
    {
      category: "Features",
      items: [
        { label: "Design", value: "Secure, Lightweight, Easy to Install" },
        { label: "Usage", value: "Hands-Free Motorcycle & Cycling POV Recording" },
        { label: "Quick Release Support", value: "GO 3/GO 3S requires Quick Release Mount." },
      ],
    },
    {
      category: "Compatibility",
      items: [
        {
          label: "Compatible Products",
          value: "Insta360 X5, X4, Ace Pro 2, Ace Pro, Ace, GO 3S, GO 3, X3, ONE RS, ONE X2, ONE X, GO 2 and ONE R",
        },
      ],
    },
    {
      category: "Package Contents",
      items: [
        {
          label: "Included Accessories",
          value: "Helmet Chin Mount, 2 Screws, Mount Extension",
        },
      ],
    },
  ],
},
{
  id: "quick-release-mount",
  name: "Insta360 Quick Release Mount",
  category: "Action Camera Accessories",
  brand: "Insta 360",
  price: "₹9,898.00",
  slug: "quick-release-mount",
  status: "In Stock",
  colors: [
    {
      name: "All",
      images: ["/accessories/insta360/action-camera-accessories/7.webp"],
    },
  ],
  overview:
    "The Insta360 Quick Release Mount allows you to switch your camera between different mounts in seconds. Its secure locking mechanism ensures fast installation while keeping your camera firmly attached.",
  specs: [
    {
      category: "General Specifications",
      items: [
        { label: "Product Type", value: "Quick Release Mount" },
        { label: "Brand", value: "Insta360" },
        { label: "Mount Type", value: "Quick Release System" },
      ],
    },
    {
      category: "Features",
      items: [
        { label: "Design", value: "Quick Locking, Compact, Secure" },
        { label: "Usage", value: "Fast Camera Mount Switching" },
        { label: "Special Feature", value: "Tool-Free Installation and Removal" },
      ],
    },
    {
      category: "Compatibility",
      items: [
        {
          label: "Compatible Products",
          value: "Insta360 Ace Pro 2, Ace Pro, Ace, GO 3S, GO 3 and compatible Insta360 mounting accessories",
        },
      ],
    },
    {
      category: "Package Contents",
      items: [
        {
          label: "Included Accessories",
          value: "Quick Release Mount",
        },
      ],
    },
  ],
},
{
  id: "sandisk-extreme-pro-sdxc-uhs-ii",
  name: "SanDisk Extreme PRO® SDXC™ UHS-II Card",
  category: "Sd Card",
  brand: "SanDisk",
  price: "$59.99",
  slug: "sandisk-extreme-pro-sdxc-uhs-ii",
  status: "In Stock",
  colors: [
    {
      name: "All",
      images: ["/accessories/sd-card/2.webp"],
    },
  ],
  overview:
    "The SanDisk Extreme PRO SDXC UHS-II Card delivers professional-grade performance with ultra-fast read and write speeds, making it ideal for recording 8K, 4K UHD, and Full HD video as well as continuous burst photography.",
  specs: [
    {
      category: "Memory Card Specifications",
      items: [
        { label: "Product Type", value: "SDXC Memory Card" },
        { label: "Brand", value: "SanDisk" },
        { label: "Interface", value: "UHS-II" },
        { label: "Speed Class", value: "U3, V90, Class 10" },
      ],
    },
    {
      category: "Performance",
      items: [
        { label: "Read Speed", value: "Up to 300MB/s" },
        { label: "Write Speed", value: "Up to 260MB/s" },
        { label: "Recommended Use", value: "8K, 4K UHD, Full HD Video & RAW Photography" },
      ],
    },
    {
      category: "Durability",
      items: [
        { label: "Water Resistance", value: "Waterproof" },
        { label: "Shock Resistance", value: "Shockproof" },
        { label: "Temperature Resistance", value: "Temperature Proof" },
        { label: "X-Ray Resistance", value: "X-Ray Proof" },
      ],
    },
    {
      category: "Warranty",
      items: [
        { label: "Warranty", value: "Limited Lifetime Warranty" },
      ],
    },
  ],
},
{
  id: "sandisk-extreme-pro-sdxc-uhs-i",
  name: "SanDisk Extreme PRO® SDXC™ UHS-I Card",
  category: "Sd Card",
  brand: "SanDisk",
  price: "$24.99",
  slug: "sandisk-extreme-pro-sdxc-uhs-i",
  status: "In Stock",
  colors: [
    {
      name: "All",
      images: ["/accessories/sd-card/3.webp"],
    },
  ],
  overview:
    "Capture stunning 6K, 4K UHD, and Full HD video with the SanDisk Extreme PRO SDXC UHS-I Card, designed for DSLR, mirrorless cameras, and professional photography workflows.",
  specs: [
    {
      category: "Memory Card Specifications",
      items: [
        { label: "Product Type", value: "SDXC Memory Card" },
        { label: "Brand", value: "SanDisk" },
        { label: "Interface", value: "UHS-I" },
        { label: "Speed Class", value: "U3, V30, Class 10" },
      ],
    },
    {
      category: "Performance",
      items: [
        { label: "Read Speed", value: "Up to 200MB/s" },
        { label: "Write Speed", value: "Up to 140MB/s" },
        { label: "Recommended Use", value: "6K, 4K UHD Video & High-Speed Burst Photography" },
      ],
    },
    {
      category: "Durability",
      items: [
        { label: "Water Resistance", value: "Waterproof" },
        { label: "Shock Resistance", value: "Shockproof" },
        { label: "Temperature Resistance", value: "Temperature Proof" },
        { label: "X-Ray Resistance", value: "X-Ray Proof" },
      ],
    },
    {
      category: "Warranty",
      items: [
        { label: "Warranty", value: "Limited Lifetime Warranty" },
      ],
    },
  ],
},
{
  id: "sandisk-extreme-sd-uhs-i",
  name: "SanDisk Extreme® SD UHS-I Card",
  category: "Sd Card",
  brand: "SanDisk",
  price: "$19.99",
  slug: "sandisk-extreme-sd-uhs-i",
  status: "In Stock",
  colors: [
    {
      name: "All",
      images: ["/accessories/sd-card/4.webp"],
    },
  ],
  overview:
    "The SanDisk Extreme SD UHS-I Card offers reliable high-speed performance for capturing Full HD, 4K UHD video, and high-resolution photos with compatible DSLR and mirrorless cameras.",
  specs: [
    {
      category: "Memory Card Specifications",
      items: [
        { label: "Product Type", value: "SDXC Memory Card" },
        { label: "Brand", value: "SanDisk" },
        { label: "Interface", value: "UHS-I" },
        { label: "Speed Class", value: "U3, V30, Class 10" },
      ],
    },
    {
      category: "Performance",
      items: [
        { label: "Read Speed", value: "Up to 180MB/s" },
        { label: "Write Speed", value: "Up to 130MB/s" },
        { label: "Recommended Use", value: "4K UHD Video Recording & Photography" },
      ],
    },
    {
      category: "Durability",
      items: [
        { label: "Water Resistance", value: "Waterproof" },
        { label: "Shock Resistance", value: "Shockproof" },
        { label: "Temperature Resistance", value: "Temperature Proof" },
        { label: "X-Ray Resistance", value: "X-Ray Proof" },
      ],
    },
    {
      category: "Warranty",
      items: [
        { label: "Warranty", value: "Limited Lifetime Warranty" },
      ],
    },
  ],
},
];

export default accessories;
