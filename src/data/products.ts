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
  category: string;
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

export const products: Product[] = [
  {
    id: "fujifilm-x100vi",
    name: "FUJIFILM X100VI 40.2 MP MIRRORLESS CAMERA WITH FIXED 23MMF2 LENS",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹179,998",
    slug: "fujifilm-x100vi",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F19.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F20.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F21.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F22.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F23.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F24.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F25.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F26.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F27.webp",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F19.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F20.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F22.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F24.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F26.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F27.webp",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F21.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F23.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X100/F25.webp",
        ],
      },
    ],
    overview:
      "X100VI offers advanced video performance in a compact, lightweight body. Create movies up to 6.2K internally at 30p in 4:2:2 10-bit color. 4K/60p and high-speed 1080/240p are also available, maximizing video flexibility.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "X-Processor 5 Image Processor",
      "Fujinon 23mm f/2 Lens (35mm Equivalent)",
      "6-Stop In-Body Image Stabilization",
      "6.2K/30p 4:2:2 10-bit internal recording",
      "425-Point Intelligent Hybrid AF",
      "Hybrid 0.66x OVF with 3.69m-Dot OLED EVF",
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-m5",
    name: "FUJIFILM X-M5",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹78,000",
    originalPrice: "₹83,999",
    slug: "fujifilm-x-m5",
    status: "In Stock",
    desc: "The lightest X Series model. 26.1MP X-Trans CMOS 4 sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f14.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f15.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f17.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f18.webp",
        ],
      },
      {
        name: "Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f1.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f2.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f3.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f5.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f7.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f9.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f11.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f13.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f15.webp",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f18.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f4.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f6.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f8.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f10.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f12.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f14.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f16.webp",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-M5/f17.webp",
        ],
      },
    ],
    lenses: ["Body", "XC 15-45mm Lens"],
    overview:
      "FUJIFILM X-M5 mirrorless digital camera has everything you need to bring that vision to life. Compact, lightweight, and with powerful photo and video functions, it’s the perfect companion to record everyday life.",
    keyFeatures: [
      "26.1MP APS-C X-Trans CMOS 4 Sensor",
      "X-Processor 5 Image Processor",
      "6.2K/30p 4:2:2 10-bit internal recording",
      "AI Subject Detection Autofocus",
      "Lightest X Series camera at 355g",
      "Film Simulation Dial with 20 modes",
      "Three Built-In Microphones for advanced audio",
    ],
    richFeatures: [
      {
        title: "Microphone Direction Setting",
        description:
          "FUJIFILM X-M5 is the first X Series model to feature three built-in microphones for the highest-quality audio. Four different audio modes are available: Surround, Front Priority, Back Priority, or Front & Back Priority, giving the flexibility to get crystal-clear sound from any direction.",
      },
      {
        title: "Film Simulation mode Dial",
        description:
          "Instantly access your own creative looks thanks to FUJIFILM X-M5 digital cameras unique Film Simulation mode dial. Offering up to 20 looks, X-M5’s Film Simulation modes can be applied to photos and videos, giving you incredible flexibility for your output.",
      },
      {
        title: "See It Your Way",
        description:
          "Great images are all about the details. With the 20 available Film Simulation modes and a host of creative controls, FUJIFILM X-M5 empowers you to make content just the way you want it.",
      },
      {
        title: "An Eye for Detail",
        description:
          "Create content with depth, texture, and true-to-life color thanks to FUJIFILM X-M5’s X-Trans CMOS 4 sensor and X-Processor 5 imaging engine. Experience detail and quality that far exceeds the results from your Smartphone.",
      },
      {
        title: "Film Simulation",
        description:
          "The 20 Film Simulation modes offered by FUJIFILM X-M5, including REALA ACE mode, harness 90 years of Fujifilm color science.",
      },
      {
        title: "Color Your Moment",
        description:
          "Every day is different. The weather, the light, the way you feel – each offers a chance to view the world in a new way. FUJIFILM X-M5 mirrorless digital camera has everything you need to bring that vision to life. Compact, lightweight, and with powerful photo and video functions, it’s the perfect companion to record everyday life.",
      },
      {
        title: "Form and Function",
        description:
          "The compact size of FUJIFILM X-M5 hasn’t compromised its elegant styling. The symmetrically placed dials on the top plate enhance its beauty. It’s unmistakably an X Series camera in both looks and performance.",
      },
      {
        title: "Noise Reduction Setting",
        description:
          "The new microphones offer more than just directional control – a versatile noise reduction feature has also been added. Now, it’s possible to reduce noise that continues at a constant frequency; for example, the sound of air conditioning or wind noise.",
      },
      {
        title: "Digital Image Stabilization",
        description:
          "FUJIFILM X-M5 uses a powerful digital image stabilizer that combats camera shake for smooth, professional footage. It’s effective whether you’re standing still or moving to keep up with a subject.",
      },
      {
        title: "Easy-to-Use Interface",
        description:
          "The layout of the Vlog mode interface has been designed to make video recording intuitive and enjoyable, even if you are new to content creation.",
      },
      {
        title: "High-Quality Recording",
        description:
          "FUJIFILM X-M5 supports in-camera card recording to your SD card at 6.2K/30p 4:2:2 10-bit, as well as high-quality, 4K/60p and 1080/240p video recording in a compact and lightweight body.",
      },
      {
        title: "Latest AF Technology",
        description:
          "FUJIFILM X-M5 is equipped with Fujifilm’s latest predictive algorithm, recording subjects with highly accurate AF even in scenes requiring tracking of moving objects or in low-contrast environments. It tracks a wide range of subjects, including sports and animals, and subjects in motion.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X-Processor 5 features subject detection autofocus that is built with deep-learning AI technology. In addition to providing incredible AF tracking and detection for human faces and eyes, FUJIFILM X-M5 can also automatically detect and track a broad range of subjects, including animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.",
      },
      {
        title: "Ready For Everything",
        description:
          "At 355g (0.78lb), FUJIFILM X-M5 is currently the lightest model in the X Series line-up of digital cameras and so small it fits in a jacket pocket. This makes it perfect to carry everywhere you go, ready to create high-quality content on a moment’s notice.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
          {
            label: "Terminal",
            value:
              "USB Type-C (USB 10Gbps), HDMI Micro connector (Type D), Microphone / shutter release input: ø2.5mm",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
      {
        category: "Imaging",
        items: [
          { label: "Number of recorded pixels", value: "26.1 million pixels" },
          {
            label: "File format of still image",
            value: "JPEG, HEIF, RAW (14bit RAF), TIFF",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          {
            label: "Image stabilizer",
            value: "Digital Image Stabilization (Movie mode)",
          },
        ],
      },
      {
        category: "Shooting",
        items: [
          { label: "Lens", value: "FUJIFILM X mount" },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/32000 sec",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous, Bracketing, Advanced Filter, Panorama, Multiple Exposure",
          },
          {
            label: "Continuous shooting CH",
            value: "Approx. 20fps (Electronic Shutter), 8fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
        ],
      },
      {
        category: "Video & Interaction",
        items: [
          {
            label: "Movie Recording",
            value: "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K | FHD",
          },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-t5-mirrorless",
    name: "Fujifilm X-T5 Mirrorless",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹145,999",
    slug: "fujifilm-x-t5-mirrorless",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f13.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/gf12.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T5 Mirrorless/f13.png",
        ],
      },
    ],
    overview:
      "X-T5 features a five-axis in-body image stabilization (IBIS) system that provides up to 7.0 stops of compensation and a 3.69 million dot EVF with an 0.8x magnification ratio. Despite this, the camera body only weighs 557g (1.23lb). Dials and buttons provide easy operation, letting life’s most precious moments stand a chance of being documented to see another day.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR sensor for ultra-high-resolution images",
      "7-stop in-body image stabilization (IBIS) for sharper handheld shots",
      "6.2K/30P and 4K/60P video recording with professional-quality output",
      "Fast AI-powered autofocus with subject detection for people, animals, birds, cars, and more",
      "15 fps mechanical shutter and up to 20 fps electronic shutter for action photography",
      "Classic Fujifilm Film Simulation modes for stunning colors and creative looks",
      "Compact weather-resistant magnesium alloy body with dual SD card slots",
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-s20-mirrorless",
    name: "Fujifilm X-S20 Mirrorless",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹116,999",
    slug: "fujifilm-x-s20-mirrorless",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/f13.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/gf12.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-S20 Mirrorless/bf13.png",
        ],
      },
    ],
    overview:
      "X-S20 features a back-illuminated “X-Trans CMOS 4” sensor. Boasting a 26.1 MP resolution, X-S20 can chronicle your most extraordinary adventures and everyday moments with a unique filter array that controls moiré and false colors for an image that will help you share your true creative vision. The back-illuminated design works to enhance image quality while minimizing noise.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR sensor for ultra-high-resolution images",
      "7-stop in-body image stabilization (IBIS) for sharper handheld shots",
      "6.2K/30P and 4K/60P video recording with professional-quality output",
      "Fast AI-powered autofocus with subject detection for people, animals, birds, cars, and more",
      "15 fps mechanical shutter and up to 20 fps electronic shutter for action photography",
      "Classic Fujifilm Film Simulation modes for stunning colors and creative looks",
      "Compact weather-resistant magnesium alloy body with dual SD card slots",
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-half",
    name: "Fujifilm X Half",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹59,999",
    slug: "fujifilm-x-half",
    status: "In Stock",
    desc: "The ultimate design for analog operation. 40.2MP APS-C X-Trans CMOS 5 HR Sensor with X-Processor 5.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/f9.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf9.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf10.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/gf12.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black8.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-Half/black9.png",
        ],
      },
    ],
    overview:
      "X half brings the joy of film photography into the digital world. From the tactile action of the Frame Advance Lever, to the subtle sub-LCD that echoes a film window, every detail evokes a nostalgic thrill of the analog age.",
    keyFeatures: [
      "Film-inspired design with tactile Frame Advance Lever",
      "Vertical 3:4 format shooting for photos and videos",
      "Unique Film Camera Mode for an authentic analog experience",
      "2-in-1 Mode combines two images or videos into one composition",
      "13 Fujifilm Film Simulations including REALA ACE",
      "Creative analog effects such as Light Leak, Halation, and Expired Film",
      "Compact 240g body with a fixed 32mm-equivalent f/2.8 lens",
    ],
    richFeatures: [
      {
        title: "Advanced Hybrid Viewfinder",
        description:
          "Frame images your way using X100VI’s hybrid viewfinder. Switch between the EVF, showing what the sensor sees, and OVF, which also shows what’s outside the frame. An OVF Image Display option allows you to view an image after it has been made, either at full screen or in the corner of the viewfinder.",
      },
      {
        title: "S/N Level / Low-Light Power",
        description:
          "The high-resolution 40.2-megapixel X-Trans CMOS 5 HR sensor has an enhanced image-processing algorithm that boosts resolution without compromising the signal-to-noise ratio. Astonishing image quality is in the palm of your hand.",
      },
      {
        title: "Flat Two-way Tilting LCD",
        description:
          "Confidently compose and view images using X100VI’s two-way tilting LCD. Featuring 1.62 million dots for color accuracy and detail, the LCD stores flat against the body to maintain the perfect profile. Framing is now even easier with 45° screen tilt available when holding the camera at high angles.",
      },
      {
        title: "ISO 125 Standard Sensitivity",
        description:
          "The X-Trans CMOS 5 HR sensor in X100VI has a more light-efficient pixel structure. A setting of ISO 125, which on the prior model, X100V was only an extended sensitivity option, is now available natively on the X100VI.",
      },
      {
        title: "Light Weight, High Performance",
        description:
          "When light is low and stakes are high, X100VI’s newly developed in-body image stabilization (IBIS) system keeps images sharp and videos stable. The five-axis IBIS mechanism offers up to 6.0* stops of compensation, yet maintains the X100 Series’ characteristic compactness and portability.",
      },
      {
        title: "Colour chrome effect",
        description:
          "For highly-saturated subjects, Color Chrome Effect adds depth, detail, and vibrancy in three strengths to red, green, or yellow tones where detail may otherwise be lost. Or use Color Chrome FX Blue to boost the blue tones in an image.",
      },
      {
        title: "The Ultimate Design for Analog Operation",
        description:
          "Echoing classic film camera design, the dials on the top-plate of X100VI combine essential functionality with creative freedom. View or change camera settings at any time, with shutter speed, aperture, and ISO controls all instantly accessible – just as they were on X100V.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "X100VI uses X-Processor 5’s subject detection AF to accurately track a range of subjects. Built using deep-learning AI technology, it detects animals, birds, cars, motorcycles, bicycles, airplanes, trains, insects, and drones.* \n*SUBJECT DETECTION SETTING to be set to BIRD for insect detection, and to AIRPLANE for detecting drones.",
      },
      {
        title: "Updated AF algorithm",
        description:
          "X100VI incorporates an impressive autofocus prediction algorithm for reliable focusing even when recording continuously moving subjects. Autofocus enhancements are most notable in Zone AF and low-contrast situations.",
      },
      {
        title: "FILM SIMULATION",
        description:
          "The 20 Film Simulation modes offered by X100VI, including the new REALA ACE mode, harness 90 years of Fujifilm color science, digitally replicating the look of classic photographic film stocks. Reproduce the classic colors and tones Fujifilm is renowned for, or add artistic flair and start to BUILD YOUR LEGACY.",
      },
      {
        title: "Grain effect",
        description:
          "From subtle textures to the gritty look of traditional high-ISO film stocks, with X100VI you can easily add natural-looking grain to your photos. Control the strength and size for just the right amount of texture on any image.",
      },
      {
        title: "The One and Only",
        description:
          "However you want to create content, the light, portable X100VI will always be ready. Compose using the versatile hybrid viewfinder, flip out the detailed LCD to work at waist level, or preset settings and trust your instincts. Whatever your creative style, this camera ensures no moment is missed.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value:
              "Temperature: 0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80% (no condensation)",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (included)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Other Terminals",
            value: "Microphone / shutter release input: ø2.5mm; Hot Shoe",
          },
          {
            label: "Bluetooth®",
            value: "Bluetooth Ver. 4.2 (Bluetooth low energy)",
          },
          {
            label: "Wireless Transmitter",
            value: "IEEE802.11a/b/g/n/ac (standard wireless protocol)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value:
              "JPEG (Exif Ver.2.32), HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF (8bit / 16bit RGB)",
          },
          {
            label: "Sensitivity",
            value:
              "Standard Output: AUTO1 / AUTO2 / AUTO3 / ISO125-12800 (1/3 step)",
          },
          {
            label: "Lens",
            value:
              "FUJINON single focal length lens, f=23mm (35mm format equivalent: 35mm)",
          },
          {
            label: "Exposure compensation",
            value: "-5.0EV~+5.0EV 1/3EV step (Movie: -2.0EV~+2.0EV)",
          },
          {
            label: "Image stabilizer",
            value:
              "Image sensor shift mechanism with 5-axis compensation (up to 6.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Drive Mode",
            value:
              "Continuous: Approx. 20fps (Electronic Shutter), 11fps (Mechanical)",
          },
          {
            label: "Focus",
            value:
              "Intelligent Hybrid AF (TTL contrast AF / TTL phase detection AF)",
          },
          { label: "Flash", value: "Auto flash (Super Intelligent Flash)" },
          {
            label: "Touch Screen Mode",
            value:
              "Shooting: AF, Focus Area, OFF, Double Tap Zoom | Playback: Swipe, Zoom, Pinch",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K (6240x3150) 29.97p/25p/24p/23.98p | 4K HQ | DCI4K | FHD",
          },
          {
            label: "Grain Effect",
            value: "STRONG, WEAK, OFF / Size: LARGE, SMALL",
          },
          { label: "Dynamic Range Setting", value: "AUTO, 100%, 200%, 400%" },
          {
            label: "White Balance",
            value: "Auto, Custom, Color temperature, Preset",
          },
          { label: "Self-timer", value: "10sec. / 2sec." },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-h2",
    name: "FUJIFILM X-H2 MIRRORLESS CAMERA BODY",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹189,999",
    originalPrice: "₹199,999",
    slug: "fujifilm-x-h2",
    status: "In Stock",
    desc: "Unrivaled image quality. 40.2MP X-Trans CMOS 5 HR sensor offering the world's first 8K/30P Apple ProRes internal recording.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f8.png",
        ],
      },
      {
        name: "Grey",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f8.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2/f8.png",
        ],
      },
    ],
    lenses: ["Body Only"],
    overview:
      "Pushing the boundaries of APS-C imaging, the FUJIFILM X-H2 is a high-resolution, premium mirrorless camera featuring a groundbreaking 40.2-megapixel BSI sensor. It delivers astonishing stills with 160MP Pixel Shift Multi-Shot and professional-grade 8K/30p video internally.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "X-Processor 5 Image Processor",
      "8K 30p, 4K 60p, FHD 240p 10-Bit Video",
      "Internal Apple ProRes 422 HQ Recording",
      "160MP Pixel Shift Multi-Shot",
      "7-Stop In-Body Image Stabilization",
      "AI Deep Learning Subject Detection AF",
    ],
    richFeatures: [
      {
        title: "High-Resolution 40.2MP Sensor",
        description:
          "The X-H2 features the high-resolution 40.2MP X-Trans CMOS 5 HR sensor, delivering superior image quality and capturing unparalleled fine details. The enhanced image-processing algorithm boosts resolution without compromising the signal-to-noise ratio.",
      },
      {
        title: "8K/30P Internal Apple ProRes Recording",
        description:
          "A first for the X Series, the X-H2 supports internal 8K/30P video recording in 4:2:2 10-bit color. It natively supports Apple ProRes codecs (ProRes 422 HQ, ProRes 422, and ProRes 422 LT) for streamlined post-production workflows.",
      },
      {
        title: "160MP Pixel Shift Multi-Shot",
        description:
          "Perfect for commercial photography and cultural archiving, Pixel Shift Multi-Shot uses the IBIS system to precisely shift the sensor, capturing 20 separate frames that are combined into a massive, ultra-detailed 160-megapixel image.",
      },
      {
        title: "Up to 7.0 Stops of IBIS",
        description:
          "A 5-axis in-body image stabilization system offers up to 7.0 stops of compensation. This allows you to handhold the camera in extremely low-light situations and still achieve incredibly sharp results.",
      },
      {
        title: "Subject Detection Autofocus",
        description:
          "Utilizing deep-learning AI technology, the X-H2 automatically detects and tracks a wide range of subjects including human faces/eyes, animals, birds, cars, motorcycles, bicycles, airplanes, and trains.",
      },
      {
        title: "Unmatched Shutter Speeds",
        description:
          "The electronic shutter has been improved to an incredible maximum speed of 1/180000 sec, giving you the freedom to shoot wide open with fast-aperture lenses even in extremely bright conditions.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value: "-10°C - 40°C / 14°F - 104°F | Humidity: 10% - 80%",
          },
          { label: "Power Supply", value: "NP-W235 Li-ion battery (included)" },
          {
            label: "Weight",
            value: "Approx. 660g (including battery and memory card)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB3.2 Gen2x1)" },
          { label: "HDMI Output", value: "HDMI connector (Type A)" },
          { label: "Audio Inputs", value: "3.5mm microphone, 3.5mm headphone" },
          {
            label: "Wireless",
            value: "Wi-Fi (IEEE802.11a/b/g/n/ac) & Bluetooth Ver. 4.2",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value: "JPEG, HEIF, 14-bit RAW (RAF), TIFF",
          },
          {
            label: "Sensitivity",
            value: "ISO125~12800 (Extended: ISO64~51200)",
          },
          {
            label: "Image stabilizer",
            value:
              "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)",
          },
          { label: "Mechanical Shutter Speed", value: "Up to 1/8000 sec" },
          { label: "Electronic Shutter Speed", value: "Up to 1/180000 sec" },
          {
            label: "Continuous Shooting",
            value: "Approx. 20fps (Electronic), 15fps (Mechanical)",
          },
          {
            label: "Movie Recording",
            value:
              "8K(7680x4320) 29.97p | 4K(3840x2160) 59.94p | FHD up to 240p",
          },
          {
            label: "Storage Media",
            value: "CFexpress Type B card & SDXC memory card (UHS-II)",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-s20",
    name: "FUJIFILM X-S20 MIRRORLESS CAMERA",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹119,999",
    originalPrice: "₹124,999",
    slug: "fujifilm-x-s20",
    status: "In Stock",
    desc: "Compact, versatile hybrid camera. 26.1MP X-Trans CMOS 4 with deep grip, huge battery, and dedicated Vlog features.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f1.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f2.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f3.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f4.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f5.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f6.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f7.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f8.png",
        ],
      },
      // because gray have no images
      // {
      //   name: "Grey",
      //   images: [
      //    "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f1.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f2.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f3.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f4.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f5.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f6.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f7.png",
      //     "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f8.png",
      //   ],
      // },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f1.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f2.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f3.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f4.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f5.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f6.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f7.png",
          "/products/fujifilms X series/Fujifilm/FUJIFILM X-S20 MIRRORLESS CAMERA/f8.png",
        ],
      },
    ],
    lenses: ["Body Only", "15-45mm Lens Kit"],
    overview:
      "Designed for content creators and hybrid shooters, the FUJIFILM X-S20 combines the renowned 26.1MP X-Trans CMOS 4 sensor with an incredibly ergonomic grip. It brings massive battery life and a new dedicated Vlog mode to a travel-friendly body.",
    keyFeatures: [
      "26.1MP APS-C X-Trans CMOS 4 Sensor",
      "X-Processor 5 Engine with AI Subject Tracking",
      "6.2K/30p and 4K/60p 10-Bit Video",
      "Dedicated Vlog Mode with Touch Interface",
      "High-Capacity NP-W235 Battery (approx. 800 frames)",
      "7-Stop In-Body Image Stabilization",
    ],
    richFeatures: [
      {
        title: "Extended Battery Life",
        description:
          "The X-S20 features the high-capacity NP-W235 battery, allowing you to capture up to 800 frames on a single charge. This massive leap means less time worrying about power and more time creating.",
      },
      {
        title: "Dedicated Vlog Mode",
        description:
          "Set the top dial to Vlog mode to instantly optimize the camera for self-recording. The touchscreen transforms into a specialized interface with easy access to Product Priority Mode, Background Defocus, and Self-timer settings.",
      },
      {
        title: "Deep Ergonomic Grip",
        description:
          "Despite its highly compact and lightweight body, the X-S20 features a prominent, easy-to-hold grip. It guarantees comfortable and stable shooting, even when pairing the camera with heavier telephoto lenses.",
      },
      {
        title: "Open Gate 6.2K Video",
        description:
          "Record stunningly detailed 6.2K/30P video internally in 4:2:2 10-bit color. The open gate functionality allows you to capture a broader aspect ratio, perfect for cropping into different social media formats in post-production.",
      },
      {
        title: "19 Film Simulation Modes",
        description:
          "Leveraging 90 years of color science, the X-S20 features 19 Film Simulation modes, including Nostalgic Neg. Apply classic photographic looks directly in-camera to save time on color grading.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value: "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%",
          },
          { label: "Power Supply", value: "NP-W235 Li-ion battery (included)" },
          {
            label: "Weight",
            value: "Approx. 491g (including battery and memory card)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB3.2 Gen2x1)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Audio",
            value: "3.5mm stereo mini connector (Microphone & Headphone)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "26.1 million pixels" },
          {
            label: "File format of still image",
            value: "JPEG, HEIF, RAW (14bit RAF)",
          },
          {
            label: "Sensitivity",
            value: "ISO160~12800 (Extended: ISO80~51200)",
          },
          {
            label: "Image stabilizer",
            value:
              "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/32000 sec",
          },
          {
            label: "Continuous Shooting",
            value: "Approx. 20fps (Electronic), 8fps (Mechanical)",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K(6240x4160) up to 29.97p | 4K up to 59.94p | FHD up to 240p",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-t50",
    name: "FUJIFILM X-T50 MIRRORLESS CAMERA WITH 15-45mm LENS",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹134,999",
    slug: "fujifilm-x-t50",
    status: "In Stock",
    desc: "Everyday perfection. Flagship 40.2MP performance in a classic, compact body featuring a dedicated Film Simulation dial.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f8.png",
        ],
      },
      {
        name: "Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f12.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f11.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f13.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f14.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f15.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f16.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f17.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f18.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f19.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f20.png",
        ],
      },
      {
        name: "Charcoal Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f21.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f22.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f23.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f24.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f25.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f26.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f27.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f28.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f29.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f30.png",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f7.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T50/f8.png",
        ],
      },
    ],
    lenses: ["Body Only", "XC 15-45mm Lens", "XF 16-50mm Lens"],
    overview:
      "The FUJIFILM X-T50 packages the extraordinary 40.2-megapixel sensor and ultra-fast X-Processor 5 of flagship models into an incredibly lightweight, elegantly styled body. It introduces a physical Film Simulation dial on the top plate for instantaneous creative control.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "Dedicated Top-Plate Film Simulation Dial",
      "7.0-Stop In-Body Image Stabilization (IBIS)",
      "Deep Learning AI Subject Detection Autofocus",
      "6.2K/30p and 4K/60p Video Recording",
      "Sleek, lightweight body (approx. 438g)",
    ],
    richFeatures: [
      {
        title: "Dedicated Film Simulation Dial",
        description:
          "For the very first time in the X Series, a dedicated dial on the top plate allows you to instantly switch between your favorite Film Simulation modes. Access classic looks like REALA ACE, Provia, and Classic Chrome with a simple twist.",
      },
      {
        title: "Flagship 40.2MP Resolution",
        description:
          "Despite its compact footprint, the X-T50 utilizes the same ultra-high-resolution 40.2MP X-Trans CMOS 5 HR sensor found in flagship cameras, delivering breathtaking sharpness and croppability for everyday photography.",
      },
      {
        title: "Up to 7.0 Stops of Stabilization",
        description:
          "A newly designed, compact 5-axis in-body image stabilization mechanism provides up to 7.0 stops of shake correction. This ensures crisp stills and smooth video even in challenging low-light environments.",
      },
      {
        title: "Deep-Learning Autofocus",
        description:
          "Powered by the X-Processor 5, the X-T50 features an intelligent subject-detection AF system that automatically locks onto humans, animals, birds, and various vehicles, freeing you to focus completely on composition.",
      },
      {
        title: "Built-In Pop-Up Flash",
        description:
          "Integrating seamlessly into the retro top-plate design, a built-in pop-up flash provides an easy-to-use fill light for night portraits and strongly backlit scenes.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value: "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%",
          },
          { label: "Power Supply", value: "NP-W126S Li-ion battery" },
          {
            label: "Weight",
            value: "Approx. 438g (including battery and memory card)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB3.2 Gen2x1)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          { label: "Microphone Jack", value: "ø3.5mm stereo mini connector" },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value: "JPEG, HEIF, RAW (14bit RAF)",
          },
          {
            label: "Sensitivity",
            value: "ISO125~12800 (Extended: ISO64~51200)",
          },
          {
            label: "Image stabilizer",
            value:
              "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Continuous Shooting",
            value: "Approx. 20fps (Electronic), 8fps (Mechanical)",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K(6240x3150) up to 29.97p | 4K HQ up to 29.97p | FHD up to 240p",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-t30-iii",
    name: "FUJIFILM X-T30 III MIRRORLESS CAMERA",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹95,499",
    slug: "fujifilm-x-t30-iii",
    status: "In Stock",
    desc: "Little Giant Evolved. Features a high-speed 26.1MP sensor backed by the powerful X-Processor 5, putting advanced AI subject detection autofocus into a classically styled, ultralight body.",
    colors: [
      {
        name: "Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f1.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f2.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f4.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f5.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f6.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f7.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f8.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f9.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30/f10.jpg",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30 III/black1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-T30 III/black2.png",
        ],
      },
    ],
    lenses: ["Body Only", "XF 13-33mm Lens"],
    overview:
      "The FUJIFILM X-T30 III builds on its predecessor by pairing a field-proven 26.1MP X-Trans CMOS 4 sensor with Fujifilm's next-generation X-Processor 5. This brings significant performance gains including 6.2K open gate video recording, deep-learning AI autofocus, and a layout complete with a configurable Film Simulation dial for immediate color style selection.",
    keyFeatures: [
      "26.1MP APS-C X-Trans CMOS 4 Sensor",
      "Next-Gen X-Processor 5 Imaging Engine",
      "Configurable Top-Plate Film Simulation Dial",
      "AI-Based Deep Learning Subject Detection AF",
      "6.2K/30p Open Gate and 4K/60p Video Recording",
      "Classic Lightweight Body with Built-in Pop-up Flash",
    ],
    richFeatures: [
      {
        title: "Configurable Film Simulation Dial",
        description:
          "Adjust your color profile on the fly with a dedicated physical top plate dial. Switch dynamically between 20 distinctive Film Simulation options to preview and capture stylized images in-camera.",
      },
      {
        title: "X-Processor 5 Upgrades",
        description:
          "By stepping up to the X-Processor 5 engine, the camera gains incredible parsing speed, dramatically boosting autofocus tracking capabilities and unlocking demanding higher-resolution video codecs.",
      },
      {
        title: "6.2K Open Gate Recording",
        description:
          "Capture the full canvas of the 3:2 image sensor with stunning 6.2K/30p open gate footage, allowing unmatched reframing and cropping freedom for multi-platform delivery formats.",
      },
      {
        title: "Deep-Learning Subject Detection AF",
        description:
          "Harnessing advanced machine learning, the hybrid autofocus intelligence reliably isolates and paths humans, animals, birds, airplanes, and multiple vehicle types seamlessly across the scene.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value: "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%",
          },
          {
            label: "Power Supply",
            value: "NP-W126S Li-ion battery (Approx. 315 shots)",
          },
          {
            label: "Weight",
            value: "Approx. 378g (including battery and memory card)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB 10Gbps)" },
          { label: "HDMI Output", value: "HDMI Micro connector (Type D)" },
          {
            label: "Microphone Jack",
            value: "ø2.5mm stereo mini connector (Microphone & Remote)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "26.1 million pixels" },
          {
            label: "File format of still image",
            value: "JPEG, HEIF (4:2:2 10bit), RAW (14bit RAF), TIFF",
          },
          {
            label: "Sensitivity",
            value: "ISO160~12800 (Extended: ISO80~51200)",
          },
          {
            label: "Image stabilizer",
            value: "Digital Image Stabilization (No IBIS)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/32000 sec",
          },
          {
            label: "Continuous Shooting",
            value: "Approx. 30fps (Electronic with 1.25x crop)",
          },
          {
            label: "Movie Recording",
            value:
              "6.2K(6240x4160) up to 29.97p | 4K up to 59.94p | FHD up to 240p",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-e5",
    name: "FUJIFILM X-E5 MIRRORLESS CAMERA",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹148,999",
    slug: "fujifilm-x-e5",
    status: "In Stock",
    desc: "Analog simplicity meets flagship resolution. Combines an ultra-high resolution 40.2MP sensor, robust 5-axis stabilization, and rangefinder styling for discrete street and travel photography.",
    colors: [
      {
        name: "All",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f1.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f2.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f3.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f4.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f5.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f6.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f7.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f8.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f9.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f10.jpg",
        ],
      },
      {
        name: "Silver",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f11.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f12.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f13.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f14.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f15.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f16.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f17.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f18.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f19.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f20.jpg",
        ],
      },
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f1.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f2.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f3.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f4.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f5.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f6.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f7.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f8.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f9.jpg",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-E5/f10.jpg",
        ],
      },
    ],
    lenses: ["Body Only", "XF 23mm Lens Kit"],
    overview:
      "The FUJIFILM X-E5 matches a timeless, low-profile rangefinder form factor with modern technical achievements. Housing a 40.2-megapixel sensor and premium 5-axis sensor-shift hardware inside its aluminum body, it grants purist operations via dedicated top-plate adjustments alongside a configured Film Simulation dial.",
    keyFeatures: [
      "40.2MP APS-C X-Trans CMOS 5 HR Sensor",
      "X-Processor 5 High-Speed Image Engine",
      "5-Axis In-Body Image Stabilization (Up to 7 Stops)",
      "Configurable Top Film Simulation Dial",
      "Intelligent Hybrid AF with AI Subject Detection",
      "6.2K/30p Video & 3.0-inch 3-Axis Tilting LCD Screen",
    ],
    richFeatures: [
      {
        title: "Tactile Rangefinder Form Factor",
        description:
          "Engineered for street agility, the offset view screen configuration lets creators monitor surroundings while keeping one eye to the high-density OLED viewfinder, styled in a lightweight vintage aesthetic.",
      },
      {
        title: "Flagship High-Resolution Matrix",
        description:
          "Utilizes the high-density 40.2MP sensor to capture pristine detail and texture accuracy, empowering you with digital teleconverter configurations and flexibility to crop images deeply without sacrificing sharpness.",
      },
      {
        title: "5-Axis Image Stabilization",
        description:
          "Even with its ultra-compact depth, a built-in sensor-shift layout combats shakes up to 7 stops at center frame, allowing smooth video and handheld slow-shutter photography at night.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value: "0°C - 40°C / 32°F - 104°F | Humidity: 10% - 80%",
          },
          { label: "Power Supply", value: "NP-W126S Li-ion battery" },
          { label: "Weight", value: "Approx. 445g (Body Only)" },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C" },
          { label: "HDMI Output", value: "Micro-HDMI connector" },
          { label: "Microphone Jack", value: "3.5mm stereo mic input" },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "40.2 million pixels" },
          {
            label: "File format of still image",
            value: "RAW (14bit), HEIF (4:2:2 10bit), TIFF (8bit), JPEG",
          },
          {
            label: "Sensitivity",
            value: "ISO125~12800 (Extended: ISO64~51200)",
          },
          {
            label: "Image stabilizer",
            value:
              "Sensor-shift mechanism with 5-axis compensation (up to 7.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/4000 sec | Electronic: Up to 1/180000 sec",
          },
          {
            label: "Continuous Shooting",
            value: "Up to 20 fps (Electronic Shutter)",
          },
          {
            label: "Movie Recording",
            value: "6.2K/30p | 4K/60p | Full HD/240p",
          },
        ],
      },
    ],
  },
  {
    id: "fujifilm-x-h2s",
    name: "FUJIFILM X-H2s MIRRORLESS CAMERA",
    category: "Mirrorless Cameras",
    brand: "Fujifilm",
    price: "₹197,999",
    slug: "fujifilm-x-h2s",
    status: "In Stock",
    desc: "The ultimate speed flagship. Equipped with a groundbreaking 26.1MP Stacked BSI sensor capable of blackout-free 40fps continuous shooting and internal Apple ProRes video capturing.",
    colors: [
      {
        name: "Black",
        images: [
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f1.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f2.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f3.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f4.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f5.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f6.png",
          "/products/fujifilms X series/Fujifilm/Fujifilm X-H2s/f7.png",
        ],
      },
    ],
    lenses: ["Body Only"],
    overview:
      "The FUJIFILM X-H2s represents peak operational velocity for professional wildlife, sports, and multimedia creators. It marks the introduction of the 26.1MP X-Trans Stacked BSI sensor structure which fundamentally eliminates rolling shutter warp, handling blistering 40fps burst speeds and high-framerate 4K/120p tracking streams effortlessly.",
    keyFeatures: [
      "26.1MP APS-C X-Trans Stacked BSI Sensor",
      "X-Processor 5 High-Speed Signal Processor",
      "Blackout-Free 40fps Burst Electronic Shooting",
      "Internal 10-Bit Apple ProRes 422 HQ Recording",
      "4K/120p High-Speed and 6.2K/30p Open Gate Video",
      "Up to 7.0 Stops In-Body Image Stabilization (IBIS)",
    ],
    richFeatures: [
      {
        title: "Revolutionary Stacked BSI Sensor",
        description:
          "By moving signal-processing circuits behind the pixel surface, stacked architecture increases reading speed by nearly four times. This effectively cures rolling shutter distortion and delivers a true blackout-free finder view.",
      },
      {
        title: "ProRes Codecs Recorded Internally",
        description:
          "Supports broadcast workflows right out of the card bay by natively saving Apple ProRes 422 HQ, ProRes 422, and ProRes 422 LT directly to CFexpress Type B media, minimizing transcode times in post-production.",
      },
      {
        title: "Unrivaled Cine Speeds",
        description:
          "Record high-resolution action in pristine 4K at 120 frames per second or choose 240p in Full HD to slow fast motions with extreme detail retention, backed by F-Log 2 color space with 14+ stops of dynamic range.",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Operation Environment",
            value: "-10°C - 40°C / 14°F - 104°F | Weather-Resistant Build",
          },
          { label: "Power Supply", value: "NP-W235 Li-ion battery" },
          {
            label: "Weight",
            value: "Approx. 660g (including battery and memory card)",
          },
        ],
      },
      {
        category: "Terminals & Interfaces",
        items: [
          { label: "Digital Interface", value: "USB Type-C (USB3.2 Gen2x1)" },
          { label: "HDMI Output", value: "Full-Size HDMI Type A connector" },
          {
            label: "Audio & Remote",
            value: "3.5mm Microphone Jack | 3.5mm Headphone Jack",
          },
          {
            label: "Storage Slots",
            value: "Dual Slot: 1x CFexpress Type B, 1x SD/SDHC/SDXC (UHS-II)",
          },
        ],
      },
      {
        category: "Imaging & Video",
        items: [
          { label: "Number of recorded pixels", value: "26.1 million pixels" },
          {
            label: "File format of still image",
            value: "JPEG, HEIF, RAW (14bit RAF), TIFF",
          },
          {
            label: "Sensitivity",
            value: "ISO160~12800 (Extended: ISO80~51200)",
          },
          {
            label: "Image stabilizer",
            value:
              "Sensor shift mechanism with 5-axis compensation (up to 7.0 stops)",
          },
          {
            label: "Shutter Speed",
            value:
              "Mechanical: Up to 1/8000 sec | Electronic: Up to 1/32000 sec",
          },
          {
            label: "Continuous Shooting",
            value:
              "Approx. 40fps (Electronic Shutter, Blackout-Free), 15fps (Mechanical)",
          },
          {
            label: "Movie Recording",
            value: "6.2K/30p Open Gate | 4K up to 120p | FHD up to 240p",
          },
        ],
      },
    ],
  },

  //  ===   sony brand start from here camera's

  {
    id: "ilce-7m5",
    name: "ILCE-7M5",
    category: "Mirrorless Cameras",
    brand: "Sony",
    price: "₹270,990",
    slug: "ilce-7m5",
    status: "In Stock",
    desc: "A professional full-frame mirrorless camera featuring a 33MP Exmor RS CMOS sensor, AI-powered autofocus, up to 30fps blackout-free shooting, and advanced 4K video capabilities.",
    colors: [
      {
        name: "Black",
        images: ["/products/sony/sony1.jpg"],
      },
    ],
    lenses: ["Body Only"],
    overview:
      "The SONY ILCE-7M5 is a next-generation full-frame mirrorless camera designed for photographers and filmmakers seeking exceptional speed, intelligence, and image quality. Featuring a 33MP full-frame Exmor RS CMOS sensor, advanced AI subject recognition, up to 30fps continuous shooting, and powerful 4K video recording, it delivers professional performance across photography and videography workflows. :contentReference[oaicite:0]{index=0}",
    keyFeatures: [
      "33MP Full-Frame Exmor RS CMOS Sensor",
      "Up to 30fps Continuous Shooting",
      "759-Point Fast Hybrid Autofocus",
      "AI Subject Recognition and Tracking",
      "4K Video Recording with 10-Bit 4:2:2 Output",
      "5-Axis In-Body Image Stabilization up to 7.5 Stops",
    ],
    richFeatures: [
      {
        title: "Advanced AI Autofocus",
        description:
          "Dedicated AI processing enables accurate recognition and tracking of humans, animals, birds, vehicles, and other subjects for both stills and video. :contentReference[oaicite:1]{index=1}",
      },
      {
        title: "High-Speed Continuous Shooting",
        description:
          "Capture action at up to 30fps with the electronic shutter and full AF/AE tracking, making it ideal for sports and wildlife photography. :contentReference[oaicite:2]{index=2}",
      },
      {
        title: "Professional Stabilization",
        description:
          "The 5-axis image stabilization system provides up to 7.5 stops of compensation for sharper handheld images and smoother video recording. :contentReference[oaicite:3]{index=3}",
      },
    ],
    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Camera Type",
            value: "Interchangeable Lens Digital Camera",
          },
          {
            label: "Lens Mount",
            value: "Sony E-Mount",
          },
          {
            label: "Weight",
            value: "Approx. 695g (with battery and memory card)",
          },
        ],
      },
    ],
  },
  {
    id: "ilce-1m2",
    name: "ILCE-1M2",
    category: "Mirrorless Cameras",
    brand: "Sony",
    price: "₹599,990",
    slug: "ilce-1m2",
    status: "In Stock",
    desc: "Sony's flagship full-frame mirrorless camera featuring a 50.1MP stacked Exmor RS sensor, AI-powered autofocus, blackout-free 30fps shooting, 8K video recording, and professional-grade connectivity for elite photographers and filmmakers.",
    colors: [
      {
        name: "Black",
        images: ["/products/sony/sony1.jpg"],
      },
    ],
    lenses: ["Body Only"],
    overview:
      "The SONY ILCE-1M2 is the ultimate flagship mirrorless camera, combining ultra-high 50.1MP resolution, blazing-fast 30fps continuous shooting, advanced AI subject recognition, and professional 8K video recording. Built around a full-frame stacked Exmor RS CMOS sensor and Sony's latest processing technology, it delivers exceptional performance for sports, wildlife, commercial, and cinematic productions.",

    keyFeatures: [
      "50.1MP Full-Frame Stacked Exmor RS CMOS Sensor",
      "Up to 30fps Blackout-Free Continuous Shooting",
      "8K 30p and 4K 120p Video Recording",
      "759-Point Fast Hybrid Autofocus System",
      "AI Subject Recognition and Real-Time Tracking",
      "5-Axis In-Body Image Stabilization up to 8.5 Stops",
    ],

    richFeatures: [
      {
        title: "50.1MP Stacked Exmor RS Sensor",
        description:
          "The full-frame stacked sensor delivers exceptional detail, dynamic range, and ultra-fast readout speeds for high-resolution photography without compromising speed.",
      },
      {
        title: "Advanced AI Recognition",
        description:
          "Dedicated AI processing accurately recognizes and tracks humans, animals, birds, insects, vehicles, trains, and aircraft for unmatched autofocus performance.",
      },
      {
        title: "Professional 8K Production",
        description:
          "Capture stunning 8K footage and oversampled 4K video with advanced codecs, professional color profiles, and HDMI RAW output support.",
      },
    ],

    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Camera Type",
            value: "Interchangeable Lens Digital Camera",
          },
          {
            label: "Lens Mount",
            value: "Sony E-Mount",
          },
          {
            label: "Weight",
            value: "Approx. 743g (with battery and memory card)",
          },
        ],
      },

      {
        category: "Terminals & Interfaces",
        items: [
          {
            label: "USB Interface",
            value: "USB Type-C SuperSpeed USB 10Gbps",
          },
          {
            label: "HDMI Output",
            value: "Full-Size HDMI Type-A",
          },
          {
            label: "Wireless Connectivity",
            value: "Wi-Fi, Bluetooth, Gigabit Ethernet",
          },
          {
            label: "Storage Slots",
            value: "Dual CFexpress Type A / SD UHS-II Compatible Slots",
          },
        ],
      },

      {
        category: "Imaging & Video",
        items: [
          {
            label: "Sensor",
            value: "35mm Full-Frame Exmor RS CMOS Sensor",
          },
          {
            label: "Effective Resolution",
            value: "Approx. 50.1 Megapixels",
          },
          {
            label: "File Formats",
            value: "JPEG, HEIF, RAW (Sony ARW)",
          },
          {
            label: "ISO Range",
            value: "ISO 100-32000 (Expandable to ISO 50-102400)",
          },
          {
            label: "Autofocus System",
            value: "759-Point Phase Detection Fast Hybrid AF",
          },
          {
            label: "Image Stabilization",
            value: "5-Axis Sensor Shift (Up to 8.5 Stops Center Compensation)",
          },
          {
            label: "Shutter Speed",
            value: "Electronic: 1/32000s to 30s | Mechanical: 1/8000s to 30s",
          },
          {
            label: "Continuous Shooting",
            value: "Up to 30fps Electronic | Up to 10fps Mechanical",
          },
          {
            label: "Viewfinder",
            value: "9.44M-Dot Quad-XGA OLED EVF, Up to 240fps Refresh Rate",
          },
          {
            label: "LCD Screen",
            value: "3.2-inch Multi-Angle Touchscreen, 2.1M Dots",
          },
          {
            label: "Movie Recording",
            value: "8K 30p | 4K 120p | HDMI RAW Output",
          },
        ],
      },
    ],
  },
  {
  id: "ilce-1",
  name: "ILCE-1",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹599,990",
  slug: "ilce-1",
  status: "In Stock",
  desc: "Sony's groundbreaking flagship full-frame mirrorless camera featuring a 50.1MP stacked Exmor RS sensor, blackout-free 30fps shooting, advanced AI autofocus, and professional 8K video recording for sports, wildlife, commercial, and cinematic productions.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony4.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-1 redefines flagship performance by combining ultra-high 50.1MP resolution with blistering 30fps continuous shooting in a single camera body. Powered by a full-frame stacked Exmor RS CMOS sensor and BIONZ XR processor, it delivers exceptional image quality, blackout-free shooting, advanced subject tracking, and professional 8K video recording. Designed for photographers and filmmakers who refuse to compromise between speed and resolution.",

  keyFeatures: [
    "50.1MP Full-Frame Stacked Exmor RS CMOS Sensor",
    "Up to 30fps Blackout-Free Continuous Shooting",
    "8K 30p and 4K 120p Video Recording",
    "759-Point Fast Hybrid Autofocus System",
    "Real-Time Eye AF for Humans, Animals & Birds",
    "5-Axis In-Body Image Stabilization",
  ],

  richFeatures: [
    {
      title: "50.1MP Resolution Meets 30fps Speed",
      description:
        "The stacked full-frame Exmor RS sensor delivers extraordinary image quality while enabling continuous shooting at up to 30 frames per second with AF and AE tracking.",
    },
    {
      title: "Blackout-Free Electronic Viewfinder",
      description:
        "Experience uninterrupted subject tracking with blackout-free shooting and a high-resolution 9.44-million-dot OLED electronic viewfinder operating at up to 240fps refresh rate.",
    },
    {
      title: "Professional 8K Cinema Performance",
      description:
        "Capture stunning 8K 30p footage with 8.6K oversampling, advanced color science, S-Cinetone support, and high-quality 4K 120p recording for cinematic workflows.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 737g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 10Gbps",
        },
        {
          label: "HDMI Output",
          value: "Full-Size HDMI Type-A",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, Bluetooth 5.0, Gigabit Ethernet",
        },
        {
          label: "Storage Slots",
          value: "Dual CFexpress Type A / SD UHS-II Compatible Slots",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Stacked Exmor RS CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 50.1 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "759-Point Phase Detection Fast Hybrid AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift In-Body Stabilization",
        },
        {
          label: "Shutter Speed",
          value: "Electronic: 1/32000s to 30s | Mechanical: 1/8000s to 30s",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 30fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "9.44M-Dot Quad-XGA OLED EVF, Up to 240fps Refresh Rate",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Tilting Touchscreen LCD, 1.44M Dots",
        },
        {
          label: "Movie Recording",
          value: "8K 30p | 4K 120p | 10-bit 4:2:2 Internal Recording",
        },
      ],
    },
  ],
},
  {
    id: "ilce-9m3",
    name: "ILCE-9M3",
    category: "Mirrorless Cameras",
    brand: "Sony",
    price: "₹529,990",
    slug: "ilce-9m3",
    status: "In Stock",
    desc: "Sony's revolutionary full-frame mirrorless camera featuring the world's first full-frame global shutter image sensor, blackout-free continuous shooting up to 120fps, AI-powered autofocus, and professional 4K video recording for sports, wildlife, and news photography.",

    colors: [
      {
        name: "Black",
        images: ["/products/sony/sony5.jpg"],
      },
    ],

    lenses: ["Body Only"],

    overview:
      "The SONY ILCE-9M3 redefines speed and performance with the world's first full-frame global shutter CMOS sensor. Delivering up to 120fps blackout-free continuous shooting, distortion-free capture, advanced AI subject recognition, and professional-grade connectivity, it is designed for sports, wildlife, photojournalism, and action photography where every fraction of a second matters.",

    keyFeatures: [
      "24.6MP Full-Frame Exmor RS Global Shutter CMOS Sensor",
      "Up to 120fps Blackout-Free Continuous Shooting",
      "AI-Powered Real-Time Subject Recognition AF",
      "4K 120p Video Recording",
      "759-Point Fast Hybrid Autofocus System",
      "5-Axis In-Body Image Stabilization up to 8 Stops",
    ],

    richFeatures: [
      {
        title: "Global Shutter Technology",
        description:
          "The world's first full-frame global shutter image sensor eliminates rolling shutter distortion, enabling flash synchronization at virtually any shutter speed and accurate capture of fast-moving subjects.",
      },
      {
        title: "120fps Continuous Shooting",
        description:
          "Capture decisive moments with blackout-free continuous shooting at up to 120 frames per second while maintaining full AF and AE tracking.",
      },
      {
        title: "Advanced AI Autofocus",
        description:
          "Dedicated AI processing unit accurately recognizes and tracks humans, animals, birds, insects, vehicles, trains, and aircraft in both stills and video.",
      },
    ],

    specs: [
      {
        category: "General Specifications",
        items: [
          {
            label: "Camera Type",
            value: "Interchangeable Lens Digital Camera",
          },
          {
            label: "Lens Mount",
            value: "Sony E-Mount",
          },
          {
            label: "Weight",
            value: "Approx. 702g (with battery and memory card)",
          },
        ],
      },

      {
        category: "Terminals & Interfaces",
        items: [
          {
            label: "USB Interface",
            value: "USB Type-C SuperSpeed USB 10Gbps",
          },
          {
            label: "HDMI Output",
            value: "Full-Size HDMI Type-A",
          },
          {
            label: "Wireless Connectivity",
            value: "Wi-Fi 5, Bluetooth 5.0, Gigabit Ethernet",
          },
          {
            label: "Storage Slots",
            value: "Dual CFexpress Type A / SD UHS-II Compatible Slots",
          },
        ],
      },

      {
        category: "Imaging & Video",
        items: [
          {
            label: "Sensor",
            value: "35mm Full-Frame Exmor RS CMOS Global Shutter Sensor",
          },
          {
            label: "Effective Resolution",
            value: "Approx. 24.6 Megapixels",
          },
          {
            label: "File Formats",
            value: "JPEG, HEIF, RAW (Sony ARW)",
          },
          {
            label: "ISO Range",
            value: "ISO 250-25600 (Expandable to ISO 125-51200)",
          },
          {
            label: "Autofocus System",
            value: "759-Point Phase Detection Fast Hybrid AF",
          },
          {
            label: "Image Stabilization",
            value: "5-Axis Sensor Shift (Up to 8 Stops Compensation)",
          },
          {
            label: "Shutter Speed",
            value: "Electronic: 1/80000s to 30s",
          },
          {
            label: "Continuous Shooting",
            value: "Up to 120fps with AF/AE Tracking",
          },
          {
            label: "Viewfinder",
            value: "9.44M-Dot Quad-XGA OLED EVF, Up to 240fps Refresh Rate",
          },
          {
            label: "LCD Screen",
            value: "3.2-inch Multi-Angle Touchscreen, 2.1M Dots",
          },
          {
            label: "Movie Recording",
            value: "4K 120p, 4K 60p 10-bit 4:2:2, HDMI RAW Output",
          },
        ],
      },
    ],
  },
  {
  id: "ilce-9m2",
  name: "ILCE-9M2",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹423,990",
  slug: "ilce-9m2",
  status: "In Stock",

  desc: "Sony's professional full-frame sports mirrorless camera featuring a 24.2MP stacked Exmor RS sensor, blackout-free 20fps shooting, Real-Time Tracking autofocus, advanced connectivity, and workflow enhancements designed for sports photographers and photojournalists.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony5.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-9M2 (Alpha 9 II) builds upon the renowned Alpha 9 platform with enhanced connectivity, durability, and workflow features tailored for professional sports and news photography. Featuring a 24.2MP full-frame stacked Exmor RS CMOS sensor, blackout-free continuous shooting at up to 20fps, advanced Real-Time Tracking autofocus, and improved FTP transfer capabilities, it delivers exceptional speed, reliability, and image quality in demanding environments.",

  keyFeatures: [
    "24.2MP Full-Frame Stacked Exmor RS CMOS Sensor",
    "Up to 20fps Blackout-Free Continuous Shooting",
    "693-Point Phase Detection Autofocus System",
    "Real-Time Tracking & Real-Time Eye AF",
    "5-Axis In-Body Image Stabilization",
    "4K Video Recording with Full Pixel Readout",
  ],

  richFeatures: [
    {
      title: "24.2MP Stacked Exmor RS Sensor",
      description:
        "The full-frame stacked sensor with integral memory enables ultra-fast readout speeds, exceptional image quality, and blackout-free continuous shooting for fast-paced action photography.",
    },
    {
      title: "Professional Sports Performance",
      description:
        "Capture critical moments at up to 20fps with continuous autofocus and auto-exposure tracking, making it ideal for sports, wildlife, and photojournalism applications.",
    },
    {
      title: "Enhanced Professional Workflow",
      description:
        "Built-in Gigabit Ethernet, faster FTP transfer, USB Type-C connectivity, voice memo support, and dual UHS-II card slots streamline professional image delivery workflows.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 678g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.2 Gen 1)",
        },
        {
          label: "HDMI Output",
          value: "Full-Size HDMI Type-A",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth",
        },
        {
          label: "Network",
          value: "Gigabit Ethernet (1000BASE-T)",
        },
        {
          label: "Storage Slots",
          value: "Dual SD Card Slots (Both UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Stacked Exmor RS CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 24.2 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-51200 (Expandable to ISO 50-204800)",
        },
        {
          label: "Autofocus System",
          value: "693-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5.5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "Electronic: 1/32000s to 30s | Mechanical: 1/8000s to 30s",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 20fps Electronic | Up to 10fps Mechanical",
        },
        {
          label: "Viewfinder",
          value: "3.69M-Dot OLED Tru-Finder EVF",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Tilting Touchscreen LCD, 1.44M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | Full Pixel Readout",
        },
      ],
    },
  ],
},
{
  id: "ilce-7rm5",
  name: "ILCE-7RM5",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹353,990",
  slug: "ilce-7rm5",
  status: "In Stock",

  desc: "Sony's ultra-high-resolution full-frame mirrorless camera featuring a 61MP Exmor R CMOS sensor, dedicated AI Processing Unit, advanced subject recognition autofocus, 8K video recording, and professional imaging performance for photographers and filmmakers.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony6.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7RM5 (Alpha 7R V) combines extraordinary 61MP resolution with next-generation AI-powered autofocus technology. Built around a full-frame back-illuminated Exmor R CMOS sensor and Sony's BIONZ XR processor, it delivers remarkable detail, enhanced subject recognition, advanced image stabilization, and professional 8K video recording. Designed for landscape, wildlife, commercial, portrait, and studio photographers who demand maximum image quality without compromise.",

  keyFeatures: [
    "61MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "Dedicated AI Processing Unit for Subject Recognition",
    "8K 24p and 4K 60p Video Recording",
    "693-Point Fast Hybrid Autofocus System",
    "8-Stop 5-Axis In-Body Image Stabilization",
    "4-Axis Multi-Angle Touchscreen LCD",
  ],

  richFeatures: [
    {
      title: "61MP High-Resolution Imaging",
      description:
        "The full-frame Exmor R sensor delivers extraordinary detail, dynamic range, and color accuracy, making it ideal for landscape, commercial, portrait, and fine-art photography.",
    },
    {
      title: "Next-Generation AI Autofocus",
      description:
        "A dedicated AI Processing Unit accurately recognizes and tracks humans, animals, birds, insects, cars, trains, and aircraft with exceptional precision.",
    },
    {
      title: "Professional Hybrid Performance",
      description:
        "Capture stunning 8K video, advanced 10-bit recording formats, and highly stabilized handheld footage with up to 8 stops of image stabilization.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 723g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 10Gbps",
        },
        {
          label: "HDMI Output",
          value: "Full-Size HDMI Type-A",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, Bluetooth 5.0",
        },
        {
          label: "Storage Slots",
          value: "Dual CFexpress Type A / SD UHS-II Compatible Slots",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 61.0 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor + AI Processing Unit",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "693-Point Phase Detection Fast Hybrid AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 8 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "9.44M-Dot Quad-XGA OLED EVF, Up to 120fps Refresh Rate",
        },
        {
          label: "LCD Screen",
          value: "3.2-inch 4-Axis Multi-Angle Touchscreen, 2.1M Dots",
        },
        {
          label: "Movie Recording",
          value: "8K 24p | 4K 60p | 10-bit 4:2:2 Internal Recording",
        },
      ],
    },
  ],
},
{
  id: "ilce-7sm3",
  name: "ILCE-7SM3",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹348,490",
  slug: "ilce-7sm3",
  status: "In Stock",

  desc: "Sony's professional full-frame cinema-focused mirrorless camera featuring a 12.1MP Exmor R CMOS sensor, exceptional low-light performance, 4K 120p recording, 10-bit 4:2:2 internal video, and advanced autofocus for filmmakers and content creators.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony7.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7SM3 (Alpha 7S III) is designed for visual storytellers who demand uncompromising video performance. Featuring a newly developed 12.1MP full-frame back-illuminated Exmor R CMOS sensor and BIONZ XR processor, it delivers extraordinary low-light capability, 15-stop dynamic range, advanced autofocus, and professional 4K recording up to 120fps. With 10-bit 4:2:2 internal recording, RAW output, and industry-leading workflow tools, it remains one of the most respected hybrid cinema cameras available.",

  keyFeatures: [
    "12.1MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "4K 120p 10-Bit 4:2:2 Internal Recording",
    "759-Point Fast Hybrid Autofocus System",
    "Ultra-High ISO up to 409600 (Expanded)",
    "5-Axis In-Body Image Stabilization with Active Mode",
    "Dual CFexpress Type A / SD UHS-II Card Slots",
  ],

  richFeatures: [
    {
      title: "Exceptional Low-Light Performance",
      description:
        "The 12.1MP full-frame sensor delivers outstanding sensitivity, low noise, and wide dynamic range, making it ideal for professional video production in challenging lighting conditions.",
    },
    {
      title: "Professional 4K Cinema Recording",
      description:
        "Record up to 4K 120p with 10-bit 4:2:2 color depth, advanced codecs, S-Log3, HLG, and RAW HDMI output for maximum post-production flexibility.",
    },
    {
      title: "Advanced Autofocus for Video",
      description:
        "Fast Hybrid AF with 759 phase-detection points provides reliable subject tracking and Real-Time Eye AF for both stills and video production.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 699g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 5Gbps",
        },
        {
          label: "HDMI Output",
          value: "Full-Size HDMI Type-A",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth 5.0",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Mic Input, 3.5mm Headphone Output",
        },
        {
          label: "Storage Slots",
          value: "Dual CFexpress Type A / SD UHS-II Compatible Slots",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 12.1 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 80-102400 (Expandable to ISO 40-409600)",
        },
        {
          label: "Autofocus System",
          value: "759-Point Phase Detection Fast Hybrid AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5.5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "9.44M-Dot OLED Electronic Viewfinder",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Vari-Angle Touchscreen LCD, 1.44M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K 120p | 4K 60p | 10-Bit 4:2:2 Internal Recording | RAW HDMI Output",
        },
      ],
    },
  ],
},
{
  id: "ilce-7cr",
  name: "ILCE-7CR",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹305,490",
  slug: "ilce-7cr",
  status: "In Stock",

  desc: "Sony's ultra-compact high-resolution full-frame mirrorless camera featuring a 61MP Exmor R CMOS sensor, AI-powered autofocus, advanced image stabilization, and professional 4K video capabilities in the lightweight Alpha 7C series body.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony8.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7CR combines the acclaimed 61MP full-frame sensor from the Alpha 7R series with the compact and portable Alpha 7C design. Powered by the BIONZ XR processor and a dedicated AI Processing Unit, it delivers extraordinary detail, intelligent subject recognition, advanced stabilization, and professional-grade video recording. Designed for travel, street, landscape, portrait, and content creators who want flagship image quality in a compact form factor.",

  keyFeatures: [
    "61MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "Dedicated AI Processing Unit for Subject Recognition",
    "693-Point Fast Hybrid Autofocus System",
    "7-Stop 5-Axis In-Body Image Stabilization",
    "4K 60p Video Recording & 6.2K Oversampling",
    "Compact Alpha 7C Series Design",
  ],

  richFeatures: [
    {
      title: "61MP Resolution in a Compact Body",
      description:
        "Experience exceptional image quality and detail with the same 61MP full-frame sensor found in Sony's flagship high-resolution cameras, now packed into an ultra-portable body.",
    },
    {
      title: "Advanced AI Subject Recognition",
      description:
        "The dedicated AI Processing Unit recognizes humans, animals, birds, insects, cars, trains, and aircraft for highly accurate autofocus and tracking performance.",
    },
    {
      title: "Powerful Stabilization System",
      description:
        "Advanced 5-axis image stabilization provides up to 7 stops of compensation, enabling sharper handheld photography and smoother video recording.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 515g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 5Gbps",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth 4.2",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Mic Input, 3.5mm Headphone Output",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I / UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 61.0 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor + AI Processing Unit",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "693-Point Fast Hybrid AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 7 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/4000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 8fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.39-inch OLED EVF, 2.36M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Vari-Angle Touchscreen LCD, 1.03M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K 60p | 10-Bit 4:2:2 | 6.2K Oversampled Recording",
        },
      ],
    },
  ],
},
{
  id: "ilce-7rm4",
  name: "ILCE-7RM4",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹297,990",
  slug: "ilce-7rm4",
  status: "In Stock",

  desc: "Sony's high-resolution full-frame mirrorless camera featuring a 61MP Exmor R CMOS sensor, advanced autofocus, 10fps continuous shooting, and professional-grade image quality for landscape, portrait, wildlife, and commercial photography.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony9.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7RM4 (Alpha 7R IV) pushes full-frame resolution to new heights with its groundbreaking 61MP back-illuminated Exmor R CMOS sensor. Combined with the BIONZ X image processor, advanced autofocus technology, and 5-axis image stabilization, it delivers exceptional detail, dynamic range, and color reproduction. Designed for professionals and enthusiasts alike, the Alpha 7R IV excels in landscape, studio, commercial, wildlife, and fine-art photography while also offering advanced 4K video capabilities.",

  keyFeatures: [
    "61MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "567-Point Phase Detection Autofocus System",
    "Up to 10fps Continuous Shooting",
    "5.5-Stop 5-Axis In-Body Image Stabilization",
    "4K Video Recording with Full Pixel Readout",
    "Dual UHS-II SD Card Slots",
  ],

  richFeatures: [
    {
      title: "Industry-Leading 61MP Resolution",
      description:
        "The high-resolution full-frame Exmor R sensor captures extraordinary detail, dynamic range, and color accuracy suitable for large-format printing and professional commercial work.",
    },
    {
      title: "Advanced Autofocus Performance",
      description:
        "Fast Hybrid AF combines 567 phase-detection points and 425 contrast-detection points for precise subject tracking and Real-Time Eye AF for humans and animals.",
    },
    {
      title: "Professional Imaging Workflow",
      description:
        "Dual UHS-II card slots, high-speed connectivity, and robust weather-sealed construction ensure reliable performance in demanding professional environments.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 665g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 5Gbps",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth",
        },
        {
          label: "Storage Slots",
          value: "Dual SD Card Slots (Both UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 61.0 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "567-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5.5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "5.76M-Dot OLED Tru-Finder EVF, Up to 120fps Refresh Rate",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Tilting Touchscreen LCD, 1.44M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | S-Log2 / S-Log3 Support",
        },
      ],
    },
  ],
},
{
  id: "zv-e1",
  name: "ZV-E1",
  category: "Vlog Cameras",
  brand: "Sony",
  price: "₹223,490",
  slug: "zv-e1",
  status: "In Stock",

  desc: "Sony's full-frame vlog camera featuring a 12.1MP Exmor R CMOS sensor, AI-powered subject recognition, exceptional low-light performance, 4K 120p recording, and advanced stabilization in the world's most compact and lightweight interchangeable-lens full-frame camera.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony10.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ZV-E1 is designed specifically for content creators and vloggers who want professional full-frame image quality in an ultra-compact body. Featuring the same 12.1MP full-frame Exmor R sensor technology found in Sony's professional cinema-oriented cameras, the ZV-E1 combines exceptional low-light performance, AI-powered autofocus, advanced stabilization, and cinematic video features. With dedicated creator tools such as Auto Framing, Product Showcase Mode, Cinematic Vlog settings, and an intelligent 3-capsule microphone, it provides a complete solution for modern content creation.",

  keyFeatures: [
    "12.1MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "AI Processing Unit for Advanced Subject Recognition",
    "4K 120p Video Recording",
    "Dynamic Active Stabilization",
    "Auto Framing & Product Showcase Mode",
    "Intelligent 3-Capsule Directional Microphone",
  ],

  richFeatures: [
    {
      title: "Full-Frame Sensor for Creators",
      description:
        "The 12.1MP full-frame Exmor R sensor delivers exceptional low-light performance, cinematic depth of field, and impressive dynamic range for professional-looking content.",
    },
    {
      title: "AI-Powered Content Creation",
      description:
        "A dedicated AI Processing Unit enables advanced subject recognition, Auto Framing, multiple face recognition, and highly accurate Real-Time Tracking autofocus.",
    },
    {
      title: "Professional Video Performance",
      description:
        "Capture stunning 4K footage at up to 120fps with 10-bit recording, S-Log3 support, Cinematic Vlog settings, and advanced stabilization for smooth handheld shooting.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Vlog Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 483g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 5Gbps",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, 3.5mm Headphone Output, Multi Interface Shoe",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 12.1 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor + AI Processing Unit",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 80-102400 (Expandable to ISO 40-409600)",
        },
        {
          label: "Autofocus System",
          value: "759-Point Fast Hybrid AF with Real-Time Tracking",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis In-Body Stabilization with Active & Dynamic Active Mode",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps",
        },
        {
          label: "Viewfinder",
          value: "No Electronic Viewfinder",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Fully Articulating Touchscreen LCD, 1.03M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K 120p | 4K 60p | 10-Bit 4:2:2 Internal Recording | S-Log3 | HLG",
        },
      ],
    },
  ],
},
{
  id: "ilce-7cm2",
  name: "ILCE-7CM2",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹223,990",
  slug: "ilce-7cm2",
  status: "In Stock",

  desc: "Sony's compact full-frame mirrorless camera featuring a 33MP Exmor R CMOS sensor, AI-powered subject recognition autofocus, 4K 60p video recording, and advanced image stabilization in the lightweight Alpha 7C series body.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony11.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7CM2 (Alpha 7C II) combines the powerful imaging technology of Sony's latest full-frame cameras with an ultra-compact and lightweight design. Featuring a 33MP back-illuminated Exmor R CMOS sensor, BIONZ XR processor, dedicated AI Processing Unit, and advanced autofocus system, it delivers exceptional image quality, intelligent subject tracking, and professional video capabilities. Designed for travel, street photography, content creation, and everyday shooting, the Alpha 7C II offers full-frame performance without the bulk of traditional camera bodies.",

  keyFeatures: [
    "33MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "Dedicated AI Processing Unit for Subject Recognition",
    "759-Point Fast Hybrid Autofocus System",
    "4K 60p Video Recording with 10-Bit 4:2:2",
    "7-Stop 5-Axis In-Body Image Stabilization",
    "Compact and Lightweight Alpha 7C Series Design",
  ],

  richFeatures: [
    {
      title: "Compact Full-Frame Performance",
      description:
        "The 33MP Exmor R sensor delivers outstanding image quality, dynamic range, and low-light performance in one of Sony's most portable full-frame camera bodies.",
    },
    {
      title: "AI-Powered Autofocus",
      description:
        "A dedicated AI Processing Unit accurately recognizes and tracks humans, animals, birds, insects, cars, trains, and aircraft for reliable autofocus performance.",
    },
    {
      title: "Advanced Hybrid Shooting",
      description:
        "Capture professional-quality stills and oversampled 4K video with advanced stabilization, subject tracking, and creator-friendly shooting features.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 514g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 5Gbps",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth 4.2",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, 3.5mm Headphone Output",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I / UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 33.0 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor + AI Processing Unit",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-51200 (Expandable to ISO 50-204800)",
        },
        {
          label: "Autofocus System",
          value: "759-Point Phase Detection Fast Hybrid AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 7 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "Mechanical: 1/4000s to 30s | Electronic: 1/8000s to 30s",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.39-inch XGA OLED EVF, 2.36M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Vari-Angle Touchscreen LCD, 1.03M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K 60p | 10-Bit 4:2:2 Internal Recording | S-Log3 | HLG",
        },
      ],
    },
  ],
},
{
  id: "ilce-7m4",
  name: "ILCE-7M4",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹210,990",
  slug: "ilce-7m4",
  status: "In Stock",

  desc: "Sony's versatile full-frame hybrid mirrorless camera featuring a 33MP Exmor R CMOS sensor, advanced autofocus, 4K 60p video recording, and professional imaging performance for photographers, filmmakers, and content creators.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony12.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7M4 (Alpha 7 IV) is a powerful hybrid camera that combines outstanding still-image quality with advanced video capabilities. Built around a 33MP full-frame back-illuminated Exmor R CMOS sensor and the BIONZ XR processor, it delivers exceptional image quality, fast autofocus, improved color science, and professional video features. Whether shooting weddings, portraits, travel, wildlife, or cinematic content, the Alpha 7 IV provides the versatility and reliability demanded by modern creators.",

  keyFeatures: [
    "33MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "759-Point Fast Hybrid Autofocus System",
    "4K 60p 10-Bit 4:2:2 Video Recording",
    "Real-Time Eye AF & Subject Tracking",
    "5.5-Stop 5-Axis In-Body Image Stabilization",
    "10fps Continuous Shooting with AF/AE Tracking",
  ],

  richFeatures: [
    {
      title: "33MP Full-Frame Imaging",
      description:
        "The Exmor R CMOS sensor delivers an ideal balance of resolution, dynamic range, low-light performance, and manageable file sizes for professional photography.",
    },
    {
      title: "Next-Generation Autofocus",
      description:
        "With 759 phase-detection points and Real-Time Tracking, the camera provides highly accurate subject recognition and Eye AF for humans, animals, and birds.",
    },
    {
      title: "Professional Hybrid Performance",
      description:
        "Capture oversampled 4K video with 10-bit 4:2:2 recording, advanced color profiles, and creator-focused workflow features alongside high-quality still photography.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 658g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C SuperSpeed USB 10Gbps",
        },
        {
          label: "HDMI Output",
          value: "Full-Size HDMI Type-A",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth 4.1",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, 3.5mm Headphone Output",
        },
        {
          label: "Storage Slots",
          value: "Dual Card Slots (CFexpress Type A / SD UHS-II + SD UHS-II)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 33.0 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-51200 (Expandable to ISO 50-204800)",
        },
        {
          label: "Autofocus System",
          value: "759-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5.5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "3.69M-Dot OLED Electronic Viewfinder, Up to 120fps Refresh Rate",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Vari-Angle Touchscreen LCD, 1.03M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K 60p | 4K 30p 7K Oversampled | 10-Bit 4:2:2 Internal Recording",
        },
      ],
    },
  ],
},
{
  id: "ilce-7rm3",
  name: "ILCE-7RM3",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹204,990",
  slug: "ilce-7rm3",
  status: "In Stock",

  desc: "Sony's professional high-resolution full-frame mirrorless camera featuring a 42.4MP Exmor R CMOS sensor, advanced autofocus, 10fps continuous shooting, and outstanding image quality for landscape, portrait, wildlife, and commercial photography.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony13.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7RM3 (Alpha 7R III) combines exceptional 42.4MP resolution with impressive speed and versatility. Built around a full-frame back-illuminated Exmor R CMOS sensor and BIONZ X image processor, it delivers extraordinary detail, wide dynamic range, fast autofocus performance, and professional-grade video capabilities. Designed for photographers who demand both resolution and responsiveness, the Alpha 7R III excels in landscape, portrait, studio, wildlife, and commercial photography.",

  keyFeatures: [
    "42.4MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "399-Point Phase Detection Autofocus System",
    "Up to 10fps Continuous Shooting with AF/AE Tracking",
    "5-Axis In-Body Image Stabilization",
    "4K UHD Video Recording with Full Pixel Readout",
    "Dual UHS-II SD Card Slots",
  ],

  richFeatures: [
    {
      title: "42.4MP High-Resolution Imaging",
      description:
        "The full-frame Exmor R CMOS sensor delivers remarkable detail, dynamic range, and low-noise performance, making it ideal for professional photography and large-format prints.",
    },
    {
      title: "Speed Meets Resolution",
      description:
        "Capture fast-moving subjects at up to 10fps with continuous autofocus and auto-exposure tracking, combining high resolution with impressive shooting speed.",
    },
    {
      title: "Professional Hybrid Performance",
      description:
        "Record detailed 4K video, utilize advanced Picture Profiles including S-Log3 and HLG, and benefit from professional workflow features for both photography and filmmaking.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 657g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.1 Gen 1)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, NFC, Bluetooth",
        },
        {
          label: "Storage Slots",
          value: "Dual SD Card Slots (UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 42.4 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "399-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5.5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "3.69M-Dot Quad-VGA OLED Electronic Viewfinder",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Tilting LCD Touchscreen, 1.44M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | S-Log3 | HLG",
        },
      ],
    },
  ],
},
{
  id: "ilce-7c",
  name: "ILCE-7C",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹148,490",
  slug: "ilce-7c",
  status: "In Stock",

  desc: "Sony's compact full-frame mirrorless camera featuring a 24.2MP Exmor R CMOS sensor, advanced Real-Time Eye AF, 4K video recording, and 5-axis image stabilization in one of the world's smallest and lightest full-frame camera bodies.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony14.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7C (Alpha 7C) brings full-frame image quality into an ultra-compact and lightweight body. Featuring a 24.2MP back-illuminated Exmor R CMOS sensor, BIONZ X processor, Real-Time Eye AF, and advanced 5-axis stabilization, it delivers outstanding performance for travel, street photography, content creation, and everyday shooting. Its compact design, vari-angle touchscreen, and powerful video capabilities make it one of Sony's most versatile full-frame cameras.",

  keyFeatures: [
    "24.2MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "693-Point Fast Hybrid Autofocus System",
    "Real-Time Eye AF & Real-Time Tracking",
    "4K UHD Video Recording with Full Pixel Readout",
    "5-Axis In-Body Image Stabilization",
    "Ultra-Compact Full-Frame Design",
  ],

  richFeatures: [
    {
      title: "Compact Full-Frame Freedom",
      description:
        "Designed for creators on the move, the Alpha 7C delivers professional full-frame image quality in one of the smallest and lightest full-frame camera bodies available.",
    },
    {
      title: "Advanced Autofocus Technology",
      description:
        "Featuring 693 phase-detection AF points and Real-Time Tracking, the camera delivers fast, accurate focusing and Eye AF for both humans and animals.",
    },
    {
      title: "Professional Video Capabilities",
      description:
        "Record oversampled 4K UHD video with full pixel readout, advanced Picture Profiles including S-Log2, S-Log3, and HLG for greater creative flexibility.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 509g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.1 Gen 1)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, NFC, Bluetooth 4.1",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, 3.5mm Headphone Output",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I / UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 24.2 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-51200 (Expandable to ISO 50-204800)",
        },
        {
          label: "Autofocus System",
          value: "693-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "Mechanical: 1/4000s to 30s | Electronic: 1/8000s to 30s",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.39-inch OLED Electronic Viewfinder, 2.36M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Vari-Angle Touchscreen LCD, 921K Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | S-Log2 | S-Log3 | HLG",
        },
      ],
    },
  ],
},
{
  id: "ilce-7m3",
  name: "ILCE-7M3",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹146,990",
  slug: "ilce-7m3",
  status: "In Stock",

  desc: "Sony's highly acclaimed full-frame mirrorless camera featuring a 24.2MP Exmor R CMOS sensor, advanced 693-point autofocus system, 10fps continuous shooting, 4K HDR video recording, and exceptional low-light performance for photographers and content creators.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony15.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-7M3 (Alpha 7 III) is one of the most versatile full-frame mirrorless cameras ever created. Combining a 24.2MP back-illuminated Exmor R CMOS sensor with the powerful BIONZ X processor, it delivers outstanding image quality, impressive dynamic range, excellent low-light performance, and professional autofocus capabilities. Whether shooting portraits, weddings, landscapes, wildlife, travel, or video content, the Alpha 7 III provides exceptional performance and reliability in a compact body.",

  keyFeatures: [
    "24.2MP Full-Frame Back-Illuminated Exmor R CMOS Sensor",
    "693-Point Fast Hybrid Autofocus System",
    "Up to 10fps Continuous Shooting with AF/AE Tracking",
    "4K UHD HDR Video Recording",
    "5-Axis In-Body Image Stabilization",
    "Dual SD Card Slots with Extended Battery Life",
  ],

  richFeatures: [
    {
      title: "24.2MP Full-Frame Performance",
      description:
        "The back-illuminated Exmor R sensor delivers exceptional image quality, dynamic range, and low-light performance with natural color reproduction and excellent detail.",
    },
    {
      title: "Advanced Autofocus System",
      description:
        "Featuring 693 phase-detection AF points covering approximately 93% of the frame, the camera delivers fast and accurate subject tracking with Real-Time Eye AF.",
    },
    {
      title: "Professional Hybrid Capabilities",
      description:
        "Capture stunning stills and oversampled 4K HDR video with advanced stabilization, high-speed shooting, and extensive creative controls.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 650g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.1 Gen 1)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, NFC, Bluetooth",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, 3.5mm Headphone Output",
        },
        {
          label: "Storage Slots",
          value: "Dual SD Card Slots (Slot 1 UHS-II, Slot 2 UHS-I)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "35mm Full-Frame Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 24.2 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-51200 (Expandable to ISO 50-204800)",
        },
        {
          label: "Autofocus System",
          value: "693-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 10fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.5-inch XGA OLED Electronic Viewfinder, 2.36M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Tilting Touchscreen LCD, 922K Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | HLG HDR | S-Log2 | S-Log3",
        },
      ],
    },
  ],
},
{
  id: "ilce-6700",
  name: "ILCE-6700",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹142,490",
  slug: "ilce-6700",
  status: "In Stock",

  desc: "Sony's flagship APS-C mirrorless camera featuring a 26MP Exmor R CMOS sensor, AI-powered subject recognition, advanced autofocus, 4K 120p video recording, and Cinema Line-inspired features for photographers, filmmakers, and content creators.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony16.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-6700 (Alpha 6700) combines cutting-edge AI technology with Sony's latest APS-C imaging system in a compact and lightweight body. Featuring a 26MP back-illuminated Exmor R CMOS sensor, BIONZ XR processor, dedicated AI Processing Unit, and advanced autofocus capabilities, it delivers exceptional image quality, intelligent subject tracking, and professional-grade video performance. With Cinema Line-inspired features such as 4K 120p recording, S-Cinetone, and 10-bit 4:2:2 recording, the Alpha 6700 is built for creators who demand versatility without compromise.",
  
  keyFeatures: [
    "26MP APS-C Back-Illuminated Exmor R CMOS Sensor",
    "Dedicated AI Processing Unit for Subject Recognition",
    "759-Point Fast Hybrid Autofocus System",
    "4K 120p 10-Bit Video Recording",
    "5-Axis In-Body Image Stabilization",
    "S-Cinetone and S-Log3 Professional Video Profiles",
  ],

  richFeatures: [
    {
      title: "Next-Generation AI Autofocus",
      description:
        "The dedicated AI Processing Unit recognizes humans, animals, birds, insects, cars, trains, and aircraft for highly accurate tracking and autofocus performance.",
    },
    {
      title: "Cinema Line Inspired Video",
      description:
        "Capture oversampled 4K video from 6K data, record up to 4K 120p, and utilize S-Cinetone and S-Log3 for professional cinematic workflows.",
    },
    {
      title: "Compact APS-C Powerhouse",
      description:
        "Combining advanced imaging technology with a lightweight body, the Alpha 6700 is ideal for travel, wildlife, vlogging, photography, and filmmaking.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 493g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.2 Gen 2)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, 3.5mm Headphone Output, Multi Interface Shoe",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I / UHS-II Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "APS-C Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 26.0 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor + AI Processing Unit",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "759-Point Phase Detection Fast Hybrid AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization (Up to 5 Stops)",
        },
        {
          label: "Shutter Speed",
          value: "1/8000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 11fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.39-inch XGA OLED EVF, 2.36M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Vari-Angle Touchscreen LCD, 1.03M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K 120p | 4K 60p Oversampled from 6K | 10-Bit 4:2:2 | S-Cinetone | S-Log3",
        },
      ],
    },
  ],
},
{
  id: "ilce-6600",
  name: "ILCE-6600",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹124,990",
  slug: "ilce-6600",
  status: "In Stock",

  desc: "Sony's premium APS-C mirrorless camera featuring a 24.2MP Exmor CMOS sensor, Real-Time Eye AF, 5-axis image stabilization, 4K HDR video recording, and extended battery life for photographers and content creators.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony17.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-6600 (Alpha 6600) is the flagship APS-C mirrorless camera of its generation, combining exceptional image quality, advanced autofocus technology, and professional video capabilities in a compact body. Featuring a 24.2MP APS-C Exmor CMOS sensor, BIONZ X processor, Real-Time Tracking, Real-Time Eye AF, and 5-axis image stabilization, it delivers outstanding performance for photography, videography, travel, wildlife, and vlogging. Its large Z-series battery provides industry-leading endurance for extended shooting sessions.",

  keyFeatures: [
    "24.2MP APS-C Exmor CMOS Sensor",
    "425-Point Fast Hybrid Autofocus System",
    "Real-Time Eye AF & Real-Time Tracking",
    "5-Axis In-Body Image Stabilization",
    "4K UHD HDR Video Recording",
    "High-Capacity Z-Series Battery",
  ],

  richFeatures: [
    {
      title: "Advanced Autofocus Performance",
      description:
        "Fast Hybrid AF with 425 phase-detection and contrast-detection points delivers highly accurate subject tracking and Real-Time Eye AF for humans and animals.",
    },
    {
      title: "Professional Stabilization",
      description:
        "Built-in 5-axis image stabilization compensates for camera shake, enabling sharper handheld photos and smoother video recording.",
    },
    {
      title: "Extended Battery Life",
      description:
        "Powered by Sony's high-capacity NP-FZ100 battery, the Alpha 6600 delivers significantly longer shooting endurance than previous APS-C models.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 503g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.1 Gen 1)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, NFC, Bluetooth",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "APS-C Exmor CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 24.2 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "425-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "5-Axis Sensor Shift Stabilization",
        },
        {
          label: "Shutter Speed",
          value: "1/4000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 11fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.39-inch XGA OLED Electronic Viewfinder, 2.36M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Tilting Touchscreen LCD, 921K Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | HLG HDR | S-Log2 | S-Log3",
        },
      ],
    },
  ],
},
{
  id: "zv-e10m2",
  name: "ZV-E10M2",
  category: "Vlog Cameras",
  brand: "Sony",
  price: "₹99,490",
  slug: "zv-e10m2",
  status: "In Stock",

  desc: "Sony's second-generation APS-C vlog camera featuring a 26MP Exmor R CMOS sensor, cinematic 4K 60p video, advanced creator tools, AI-powered autofocus, and interchangeable-lens flexibility for content creators and vloggers.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony18.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ZV-E10M2 (ZV-E10 II) is a powerful APS-C interchangeable-lens vlog camera built for modern content creators. Equipped with a 26MP back-illuminated Exmor R CMOS sensor, BIONZ XR processor, and advanced autofocus technology, it delivers exceptional image quality for both stills and video. Designed specifically for creators, it features Cinematic Vlog settings, Product Showcase Mode, Background Defocus, improved battery life, and professional 4K recording capabilities in a lightweight and portable body.",

  keyFeatures: [
    "26MP APS-C Back-Illuminated Exmor R CMOS Sensor",
    "4K 60p 10-Bit Video Recording",
    "759-Point Fast Hybrid Autofocus System",
    "Cinematic Vlog & Product Showcase Modes",
    "Background Defocus & Real-Time Eye AF",
    "Interchangeable Sony E-Mount Lens System",
  ],

  richFeatures: [
    {
      title: "Built for Content Creators",
      description:
        "Dedicated creator tools including Product Showcase Mode, Background Defocus, Cinematic Vlog settings, and advanced microphone controls simplify professional content production.",
    },
    {
      title: "High-Quality 4K Video",
      description:
        "Capture oversampled 4K footage from 5.6K sensor data with rich detail, 10-bit color recording, and advanced color profiles for cinematic results.",
    },
    {
      title: "Fast and Intelligent Autofocus",
      description:
        "The Fast Hybrid AF system with Real-Time Eye AF and subject tracking ensures reliable focus performance during vlogging, interviews, and creative productions.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Vlog Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 377g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.2 Gen 1)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi 2.4GHz / 5GHz, Bluetooth",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, Multi Interface Shoe",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "APS-C Back-Illuminated Exmor R CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 26.0 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ XR Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, HEIF, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-102400)",
        },
        {
          label: "Autofocus System",
          value: "759-Point Fast Hybrid AF",
        },
        {
          label: "Image Stabilization",
          value: "Electronic Active Mode Stabilization",
        },
        {
          label: "Shutter Speed",
          value: "1/4000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 11fps",
        },
        {
          label: "Viewfinder",
          value: "No Electronic Viewfinder",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Vari-Angle Touchscreen LCD, 1.04M Dots",
        },
        {
          label: "Movie Recording",
          value: "4K 60p | 10-Bit 4:2:2 | S-Cinetone | S-Log3 | HLG",
        },
      ],
    },
  ],
},
{
  id: "ilce-6400",
  name: "ILCE-6400",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹82,990",
  slug: "ilce-6400",
  status: "In Stock",

  desc: "Sony's compact APS-C mirrorless camera featuring a 24.2MP Exmor CMOS sensor, industry-leading autofocus, Real-Time Eye AF, 4K video recording, and a 180-degree tilting touchscreen for photographers and content creators.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony19.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-6400 (Alpha 6400) combines exceptional autofocus performance, high-quality imaging, and advanced video features in a compact APS-C mirrorless body. Equipped with a 24.2MP Exmor CMOS sensor and BIONZ X image processor, it delivers outstanding image quality, rapid autofocus acquisition, and professional-level tracking performance. Its 180-degree flip-up touchscreen and 4K video capabilities make it a favorite among photographers, vloggers, travelers, and content creators.",

  keyFeatures: [
    "24.2MP APS-C Exmor CMOS Sensor",
    "425-Point Fast Hybrid Autofocus System",
    "Real-Time Eye AF & Real-Time Tracking",
    "4K UHD Video Recording with Full Pixel Readout",
    "180° Tilting Touchscreen LCD",
    "Up to 11fps Continuous Shooting",
  ],

  richFeatures: [
    {
      title: "Lightning-Fast Autofocus",
      description:
        "Sony's Fast Hybrid AF system with 425 phase-detection points delivers rapid focus acquisition and accurate subject tracking for stills and video.",
    },
    {
      title: "Creator-Friendly Design",
      description:
        "The 180-degree flip-up touchscreen enables easy self-recording for vlogging, live streaming, and content creation.",
    },
    {
      title: "High-Quality 4K Video",
      description:
        "Capture detailed 4K footage using full pixel readout without pixel binning, delivering exceptional clarity and color reproduction.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 403g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "Micro USB (USB 2.0)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, NFC, Bluetooth",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "APS-C Exmor CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 24.2 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 102400)",
        },
        {
          label: "Autofocus System",
          value: "425-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "Lens-Based Optical Stabilization (No In-Body Stabilization)",
        },
        {
          label: "Shutter Speed",
          value: "1/4000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 11fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.39-inch XGA OLED Electronic Viewfinder, 2.36M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch 180° Tilting Touchscreen LCD, 921K Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | S-Log2 | S-Log3 | HLG",
        },
      ],
    },
  ],
},
{
  id: "ilce-6100",
  name: "ILCE-6100",
  category: "Mirrorless Cameras",
  brand: "Sony",
  price: "₹66,990",
  slug: "ilce-6100",
  status: "In Stock",

  desc: "Sony's entry-level APS-C mirrorless camera featuring a 24.2MP Exmor CMOS sensor, Real-Time Eye AF, 425-point autofocus system, 4K video recording, and a lightweight design ideal for beginners, travelers, and content creators.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony20.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ILCE-6100 (Alpha 6100) delivers impressive imaging performance and advanced autofocus technology in a compact and affordable APS-C mirrorless camera. Equipped with a 24.2MP Exmor CMOS sensor and Sony's Fast Hybrid AF system, it provides fast subject tracking, Real-Time Eye AF, and excellent image quality for both photography and video. Its 180-degree tilting touchscreen and 4K recording capabilities make it a great choice for beginners, vloggers, travelers, and everyday creators.",

  keyFeatures: [
    "24.2MP APS-C Exmor CMOS Sensor",
    "425-Point Fast Hybrid Autofocus System",
    "Real-Time Eye AF & Real-Time Tracking",
    "4K UHD Video Recording",
    "180° Tilting Touchscreen LCD",
    "Up to 11fps Continuous Shooting",
  ],

  richFeatures: [
    {
      title: "Advanced Autofocus Technology",
      description:
        "The Fast Hybrid AF system with 425 phase-detection and 425 contrast-detection points delivers quick focus acquisition and reliable subject tracking.",
    },
    {
      title: "Perfect for Content Creation",
      description:
        "The 180-degree flip-up touchscreen makes self-recording simple, while 4K video recording delivers high-quality footage for vlogging and social media.",
    },
    {
      title: "Compact Everyday Companion",
      description:
        "Lightweight and easy to carry, the Alpha 6100 offers excellent image quality and intuitive controls for photographers of all experience levels.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Digital Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 396g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "Micro USB (USB 2.0)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, NFC, Bluetooth 4.1",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "APS-C Exmor CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 24.2 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 51200)",
        },
        {
          label: "Autofocus System",
          value: "425-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "Lens-Based Optical Stabilization (No In-Body Stabilization)",
        },
        {
          label: "Shutter Speed",
          value: "1/4000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 11fps with AF/AE Tracking",
        },
        {
          label: "Viewfinder",
          value: "0.39-inch OLED Electronic Viewfinder, 1.44M Dots",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch 180° Tilting Touchscreen LCD, 921K Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p",
        },
      ],
    },
  ],
},
{
  id: "zv-e10",
  name: "ZV-E10",
  category: "Vlog Cameras",
  brand: "Sony",
  price: "₹61,990",
  slug: "zv-e10",
  status: "In Stock",

  desc: "Sony's APS-C interchangeable-lens vlog camera featuring a 24.2MP Exmor CMOS sensor, Real-Time Eye AF, 4K video recording, Product Showcase Mode, and a fully articulating touchscreen designed specifically for content creators and vloggers.",

  colors: [
    {
      name: "Black",
      images: ["/products/sony/sony21.jpg"],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The SONY ZV-E10 is a creator-focused APS-C mirrorless camera designed for vloggers, streamers, and content creators. Combining a 24.2MP APS-C Exmor CMOS sensor with Sony's renowned autofocus system, it delivers high-quality photos and 4K video while offering the flexibility of interchangeable E-mount lenses. Dedicated creator features such as Product Showcase Mode, Background Defocus, a directional 3-capsule microphone, and a fully articulating touchscreen make content production simple and professional." , 

  keyFeatures: [
    "24.2MP APS-C Exmor CMOS Sensor",
    "425-Point Fast Hybrid Autofocus System",
    "4K UHD Video Recording",
    "Product Showcase & Background Defocus Modes",
    "Real-Time Eye AF and Real-Time Tracking",
    "Fully Articulating Touchscreen LCD",
  ],

  richFeatures: [
    {
      title: "Built for Vloggers",
      description:
        "Dedicated creator tools such as Product Showcase Mode, Background Defocus, and a directional microphone make professional-looking content easy to create.",
    },
    {
      title: "Interchangeable Lens Flexibility",
      description:
        "Compatible with Sony's E-mount lens ecosystem, allowing creators to choose lenses for vlogging, portraits, travel, product videos, and filmmaking.",
    },
    {
      title: "Advanced Autofocus Performance",
      description:
        "Real-Time Eye AF and Real-Time Tracking help maintain accurate focus on subjects during video recording and photography.",
    },
  ],

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Camera Type",
          value: "Interchangeable Lens Vlog Camera",
        },
        {
          label: "Lens Mount",
          value: "Sony E-Mount",
        },
        {
          label: "Weight",
          value: "Approx. 343g (with battery and memory card)",
        },
      ],
    },

    {
      category: "Terminals & Interfaces",
      items: [
        {
          label: "USB Interface",
          value: "USB Type-C (USB 3.2 Gen 1)",
        },
        {
          label: "HDMI Output",
          value: "Micro HDMI (Type-D)",
        },
        {
          label: "Wireless Connectivity",
          value: "Wi-Fi, Bluetooth",
        },
        {
          label: "Audio Interfaces",
          value: "3.5mm Microphone Input, Multi Interface Shoe",
        },
        {
          label: "Storage Slots",
          value: "Single SD Card Slot (UHS-I Compatible)",
        },
      ],
    },

    {
      category: "Imaging & Video",
      items: [
        {
          label: "Sensor",
          value: "APS-C Exmor CMOS Sensor",
        },
        {
          label: "Effective Resolution",
          value: "Approx. 24.2 Megapixels",
        },
        {
          label: "Processor",
          value: "BIONZ X Image Processor",
        },
        {
          label: "File Formats",
          value: "JPEG, RAW (Sony ARW)",
        },
        {
          label: "ISO Range",
          value: "ISO 100-32000 (Expandable to ISO 50-51200)",
        },
        {
          label: "Autofocus System",
          value: "425-Point Phase Detection AF + 425 Contrast Detection AF",
        },
        {
          label: "Image Stabilization",
          value: "Lens-Based Stabilization + Electronic Active Mode",
        },
        {
          label: "Shutter Speed",
          value: "1/4000s to 30s, Bulb",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 11fps",
        },
        {
          label: "Viewfinder",
          value: "No Electronic Viewfinder",
        },
        {
          label: "LCD Screen",
          value: "3.0-inch Fully Articulating Touchscreen LCD, 921K Dots",
        },
        {
          label: "Movie Recording",
          value: "4K UHD 30p | Full HD 120p | S-Log2 | S-Log3 | HLG",
        },
      ],
    },
  ],
},

// === nikon brand start from here camera's

{
  id: "z-89",
  name: "Z 89",
  category: "Mirrorless Cameras",
  brand: "Nikon",
  price: "₹2,99,495",
  slug: "z-89",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/nikon/z-8/n1.jpg",
        "/products/nikon/z-8/n3.jpg",
        "/products/nikon/z-8/n4.jpg",
        "/products/nikon/z-8/n5.jpg",
        "/products/nikon/z-8/n6.jpg",
        "/products/nikon/z-8/n8.jpg",
        "/products/nikon/z-8/n9.jpg",
        "/products/nikon/z-8/n10.jpg",
        "/products/nikon/z-8/n11.jpg",
        "/products/nikon/z-8/n12.jpg",
        "/products/nikon/z-8/n13.jpg",
        "/products/nikon/z-8/n14.jpg",
        "/products/nikon/z-8/n15.jpg",
        "/products/nikon/z-8/n16.jpg",
      ],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "A legacy inspired by agility and performance. Relish in the autofocus (AF) performance, 9 types of subjects at a time. With the dedicated new airplane mode added to the AF detection menu, the Z 8’s powerful combination of subject detection and 3D-tracking allows you to easily capture fast, erratically moving subjects; while the wide-area AF offers 20 custom options to provide flexibility for any shooting situation. Experience excellent video features with multiple video formats of your choice to tell your visual narratives. Record to your heart’s content with up to 125 minutes of continuous recording in 4K UHD/60p, together with a variety of accessories to elevate your videography creations.",

  specs: [
    {
      category: "General Specifications",
      items: [
        {
          label: "Type",
          value: "Digital camera with support for interchangeable lenses",
        },
        {
          label: "Lens Mount",
          value: "Nikon Z mount",
        },
        {
          label: "Picture Angle",
          value: "Full-frame / FX-Format",
        },
      ],
    },

    {
      category: "Image Sensor",
      items: [
        {
          label: "Sensor Size",
          value: "35.9 mm × 23.9 mm",
        },
        {
          label: "Sensor Type",
          value: "CMOS",
        },
        {
          label: "Effective Pixels",
          value: "45.7 million",
        },
        {
          label: "Total Pixels",
          value: "52.37 million",
        },
        {
          label: "Image Sensor Format",
          value: "Full-frame / FX-format",
        },
      ],
    },

    {
      category: "Movie",
      items: [
        {
          label: "Video Resolution",
          value: "8K UHD (7680×4320) up to 30p, 4K UHD (3840×2160) up to 120p",
        },
        {
          label: "Movie File Format",
          value: "NEV, MOV, MP4",
        },
        {
          label: "Video Compression",
          value: "N-RAW, Apple ProRes RAW HQ, Apple ProRes 422 HQ, H.265/HEVC, H.264/AVC",
        },
        {
          label: "Maximum Recording Time",
          value: "125 min",
        },
        {
          label: "Audio",
          value: "Built-in stereo or external microphone",
        },
      ],
    },

    {
      category: "Storage",
      items: [
        {
          label: "Storage Media",
          value: "CFexpress Type B, XQD, SD, SDHC (UHS-II), SDXC (UHS-II)",
        },
        {
          label: "Card Slots",
          value: "1 CFexpress/XQD + 1 SD card slot",
        },
      ],
    },

    {
      category: "Viewfinder",
      items: [
        {
          label: "Viewfinder Type",
          value: "OLED Electronic Viewfinder",
        },
        {
          label: "Resolution",
          value: "Approx. 3690k-dot",
        },
        {
          label: "Frame Coverage",
          value: "Approx. 100% horizontal and vertical",
        },
        {
          label: "Magnification",
          value: "Approx. 0.8x",
        },
      ],
    },

    {
      category: "Shutter",
      items: [
        {
          label: "Shutter Type",
          value: "Electronic shutter with shutter sound and sensor shield",
        },
        {
          label: "Shutter Speed",
          value: "1/32000 sec to 30 sec, Bulb, Time",
        },
        {
          label: "Continuous Shooting",
          value: "Up to 120 fps",
        },
      ],
    },

    {
      category: "Exposure & ISO",
      items: [
        {
          label: "Exposure Modes",
          value: "P, S, A, M",
        },
        {
          label: "ISO Range",
          value: "ISO 64–25600 (expandable to ISO 102400)",
        },
      ],
    },

    {
      category: "Autofocus",
      items: [
        {
          label: "Autofocus System",
          value: "Hybrid phase-detection / contrast AF",
        },
        {
          label: "Focus Points",
          value: "493",
        },
        {
          label: "Image Stabilization",
          value: "5-axis image sensor shift VR",
        },
        {
          label: "Animal Eye AF",
          value: "Yes",
        },
      ],
    },

    {
      category: "Monitor",
      items: [
        {
          label: "Monitor Size",
          value: "3.2-inch",
        },
        {
          label: "Resolution",
          value: "Approx. 2100k-dot",
        },
        {
          label: "Type",
          value: "Vertically and horizontally tilting TFT touch-sensitive LCD",
        },
      ],
    },

    {
      category: "Connectivity",
      items: [
        {
          label: "USB",
          value: "USB Type-C",
        },
        {
          label: "HDMI",
          value: "Type-A",
        },
        {
          label: "Wi-Fi",
          value: "IEEE 802.11 a/b/g/n/ac",
        },
        {
          label: "App Connectivity",
          value: "SnapBridge",
        },
      ],
    },

    {
      category: "Power",
      items: [
        {
          label: "Battery",
          value: "EN-EL15c Rechargeable Li-ion Battery",
        },
      ],
    },

    {
      category: "Physical",
      items: [
        {
          label: "Weight",
          value: "Approx. 910g with battery and memory card",
        },
        {
          label: "Dimensions",
          value: "Approx. 144 × 118.5 × 83 mm",
        },
        {
          label: "4K UHD",
          value: "Yes",
        },
      ],
    },
  ],
},
{
  id: "z-9",
  name: "Z 9",
  category: "Mirrorless Cameras",
  brand: "Nikon",
  price: "₹4,75,995",
  slug: "z-9",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/nikon/z-9/n1.jpg",
        "/products/nikon/z-9/n2.jpg",
        "/products/nikon/z-9/n3.jpg",
        "/products/nikon/z-9/n4.jpg",
        "/products/nikon/z-9/n5.jpg",
        "/products/nikon/z-9/n6.jpg",
        "/products/nikon/z-9/n7.jpg",
        "/products/nikon/z-9/n8.jpg",
      ],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The time has come for the arrival of a true next level flagship mirrorless camera. Fast, powerful, dependable - in an incredible range of scenarios. With its revolutionary real-time Viewfinder with no blackout, its advanced subject detection technology, and high-speed frame capture, never miss a moment with the Z 9. Film up to 125 minutes of non-stop, in-camera, 8K UHD footage and experience the astonishing resolving power of the NIKKOR Z S-line lenses powered by the Z mount to reveal amazingly sharp detail from edge to edge. Shoot in harsh conditions with absolute confidence of never missing a detail. You'll be ready.",
   specs: [
    {
      category: "General Specifications",
      items: [
        { label: "Type", value: "Digital camera with support for interchangeable lenses" },
        { label: "Lens Mount", value: "Nikon Z mount" },
        { label: "Picture Angle", value: "Full-frame / FX-format" },
      ],
    },

    {
      category: "Image Sensor",
      items: [
        { label: "Sensor Size", value: "35.9 mm × 23.9 mm" },
        { label: "Sensor Type", value: "Stacked CMOS Sensor" },
        { label: "Effective Pixels", value: "45.7 million" },
        { label: "Total Pixels", value: "52.37 million" },
        { label: "Image Sensor Format", value: "Full-frame / FX-format" },
      ],
    },

    {
      category: "Movie",
      items: [
        { label: "Video Resolution", value: "8K UHD up to 30p, 4K UHD up to 120p, Full HD up to 120p" },
        { label: "Movie File Format", value: "MOV, MP4" },
        { label: "Video Compression", value: "N-RAW, Apple ProRes RAW HQ, ProRes 422 HQ, H.265/HEVC, H.264/AVC" },
        { label: "Maximum Recording Time", value: "2 hours 5 minutes" },
        { label: "Audio", value: "Built-in stereo or external microphone" },
      ],
    },

    {
      category: "Storage",
      items: [
        { label: "Storage Media", value: "CFexpress Type B, XQD" },
        { label: "Card Slots", value: "Dual CFexpress/XQD card slots" },
      ],
    },

    {
      category: "Viewfinder",
      items: [
        { label: "Viewfinder Type", value: "OLED Electronic Viewfinder" },
        { label: "Resolution", value: "Approx. 3690k-dot" },
        { label: "Frame Coverage", value: "Approx. 100% horizontal and vertical" },
        { label: "Magnification", value: "Approx. 0.8x" },
      ],
    },

    {
      category: "Shutter",
      items: [
        { label: "Shutter Type", value: "Electronic shutter with shutter sound and sensor shield" },
        { label: "Shutter Speed", value: "1/32000 sec to 30 sec, Bulb, Time" },
        { label: "Continuous Shooting", value: "Up to 120 fps" },
      ],
    },

    {
      category: "Exposure & ISO",
      items: [
        { label: "Exposure Modes", value: "Matrix, Center-weighted, Spot, Highlight-weighted" },
        { label: "ISO Range", value: "ISO 64–25600 (expandable to ISO 102400)" },
      ],
    },

    {
      category: "Autofocus",
      items: [
        { label: "Autofocus System", value: "Hybrid phase-detection / contrast AF" },
        { label: "Focus Points", value: "493" },
        { label: "Image Stabilization", value: "5-axis image sensor shift VR" },
        { label: "Animal Eye AF", value: "Yes" },
      ],
    },

    {
      category: "Monitor",
      items: [
        { label: "Monitor Size", value: "3.2-inch" },
        { label: "Resolution", value: "Approx. 2100k-dot" },
        { label: "Type", value: "Vertically and horizontally tilting TFT touch-sensitive LCD" },
      ],
    },

    {
      category: "Connectivity",
      items: [
        { label: "USB", value: "USB Type-C" },
        { label: "HDMI", value: "Type-A" },
        { label: "Wi-Fi", value: "IEEE 802.11 b/g/n/a/ac" },
        { label: "App Connectivity", value: "SnapBridge" },
      ],
    },

    {
      category: "Power",
      items: [
        { label: "Battery", value: "EN-EL18d Rechargeable Li-ion Battery" },
      ],
    },

    {
      category: "Physical",
      items: [
        { label: "Weight", value: "Approx. 1340g with battery and memory card" },
        { label: "Dimensions", value: "149 × 149.5 × 90.5 mm" },
        { label: "4K UHD", value: "Yes" },
      ],
    },
  ],
},
{
  id: "z-6ii-nikkor-z-24-105mm-f/4-7.1",
  name: "Z 6II + NIKKOR Z 24-105mm f/4-7.1",
  category: "Mirrorless Cameras",
  brand: "Nikon",
  price: "₹1,71,225",
  slug: "z-6ii-nikkor-z-24-105mm-f-4-7.1",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/nikon/z-6ii/n1.jpg",
        "/products/nikon/z-6ii/n2.jpg",
      ],
    },
  ],

  lenses: ["Body Only"],

  overview:
    "The time has come for the arrival of a true next level flagship mirrorless camera. Fast, powerful, dependable - in an incredible range of scenarios. With its revolutionary real-time Viewfinder with no blackout, its advanced subject detection technology, and high-speed frame capture, never miss a moment with the Z 9. Film up to 125 minutes of non-stop, in-camera, 8K UHD footage and experience the astonishing resolving power of the NIKKOR Z S-line lenses powered by the Z mount to reveal amazingly sharp detail from edge to edge. Shoot in harsh conditions with absolute confidence of never missing a detail. You'll be ready.",
    specs: [
    {
      category: "General Specifications",
      items: [
        { label: "Type", value: "Digital camera with support for interchangeable lenses" },
        { label: "Lens Mount", value: "Nikon Z mount" },
        { label: "Picture Angle", value: "N/A" },
      ],
    },

    {
      category: "Image Sensor",
      items: [
        { label: "Sensor Size", value: "35.9 mm × 23.9 mm" },
        { label: "Sensor Type", value: "CMOS" },
        { label: "Effective Pixels", value: "24.5 million" },
        { label: "Total Pixels", value: "25.28 million" },
        { label: "Image Sensor Format", value: "Full-frame / FX-format" },
      ],
    },

    {
      category: "Movie",
      items: [
        { label: "Video Resolution", value: "4K UHD up to 30p, Full HD up to 120p" },
        { label: "Movie File Format", value: "MOV, MP4" },
        { label: "Video Compression", value: "H.264 / MPEG-4 AVC" },
        { label: "Maximum Recording Time", value: "29 min 59 sec" },
        { label: "Audio", value: "Built-in stereo or external microphone" },
      ],
    },

    {
      category: "Storage",
      items: [
        { label: "Storage Media", value: "CFexpress Type B, XQD, SD/SDHC/SDXC UHS-II" },
        { label: "Card Slots", value: "Dual Slots" },
      ],
    },

    {
      category: "Viewfinder",
      items: [
        { label: "Viewfinder Type", value: "OLED Electronic Viewfinder" },
        { label: "Resolution", value: "Approx. 3690k-dot" },
        { label: "Frame Coverage", value: "Approx. 100% horizontal and vertical" },
        { label: "Magnification", value: "Approx. 0.8x" },
      ],
    },

    {
      category: "Shutter",
      items: [
        { label: "Shutter Type", value: "Mechanical, Electronic Front-Curtain, Electronic" },
        { label: "Shutter Speed", value: "1/8000 sec to 900 sec" },
        { label: "Continuous Shooting", value: "Up to 14 fps" },
      ],
    },

    {
      category: "Exposure & ISO",
      items: [
        { label: "Exposure Modes", value: "P, S, A, M, U1, U2, U3" },
        { label: "ISO Range", value: "ISO 100–51200 (expandable to ISO 204800)" },
      ],
    },

    {
      category: "Autofocus",
      items: [
        { label: "Autofocus System", value: "Hybrid phase-detection / contrast AF" },
        { label: "Focus Points", value: "273" },
        { label: "Image Stabilization", value: "5-axis image sensor shift VR" },
        { label: "Animal Eye AF", value: "Yes" },
      ],
    },

    {
      category: "Monitor",
      items: [
        { label: "Monitor Size", value: "3.2-inch" },
        { label: "Resolution", value: "Approx. 2100k-dot" },
        { label: "Type", value: "Tilting TFT Touch-Sensitive LCD" },
      ],
    },

    {
      category: "Connectivity",
      items: [
        { label: "USB", value: "USB Type-C" },
        { label: "HDMI", value: "Type-C" },
        { label: "Wi-Fi", value: "IEEE 802.11 b/g/n/a/ac" },
        { label: "App Connectivity", value: "SnapBridge" },
      ],
    },

    {
      category: "Power",
      items: [
        { label: "Battery", value: "EN-EL15c Rechargeable Li-ion Battery" },
      ],
    },

    {
      category: "Physical",
      items: [
        { label: "Weight", value: "Approx. 615g" },
        { label: "Dimensions", value: "134 × 100.5 × 69.5 mm" },
        { label: "4K UHD", value: "Yes" },
      ],
    },
  ],
},
{
  id: "z-30",
  name: "Z 30",
  category: "Mirrorless Cameras",
  brand: "Nikon",
  price: "₹59,895",
  slug: "z-30",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/nikon/z-30/n1.jpg",
        "/products/nikon/z-30/n2.jpg",
        "/products/nikon/z-30/n3.jpg",
        "/products/nikon/z-30/n4.jpg",
        "/products/nikon/z-30/n5.jpg",
        "/products/nikon/z-30/n6.jpg",
        "/products/nikon/z-30/n7.jpg",
        "/products/nikon/z-30/n8.jpg",
        "/products/nikon/z-30/n9.jpg",
        "/products/nikon/z-30/n10.jpg",
        "/products/nikon/z-30/n11.jpg",
        "/products/nikon/z-30/n12.jpg",
      ],
    },
  ],

  lenses: ["Body Only"],

  overview:
        "The Z 30 is made for your inner videographer. Hit record with ease whenever inspiration strikes. Excite the ears of your audience with premium sound quality from dual microphones. From teasers to reels to stories to streams, this is where heroes of content are born.",
  specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Type", value: "Digital camera with support for interchangeable lenses" },
      { label: "Lens Mount", value: "Nikon Z mount" },
      { label: "Picture Angle", value: "APS-C Size / DX-Format" },
    ],
  },

  {
    category: "Image Sensor",
    items: [
      { label: "Sensor Size", value: "23.5 mm × 15.7 mm" },
      { label: "Sensor Type", value: "CMOS" },
      { label: "Effective Pixels", value: "20.9 million" },
      { label: "Total Pixels", value: "21.51 million" },
      { label: "Image Sensor Format", value: "APS-C / DX-format" },
    ],
  },

  {
    category: "Movie",
    items: [
      { label: "Video Resolution", value: "4K UHD up to 30p, Full HD up to 120p" },
      { label: "Movie File Format", value: "MOV, MP4" },
      { label: "Video Compression", value: "H.264 / MPEG-4 AVC" },
      { label: "Maximum Recording Time", value: "125 minutes" },
      { label: "Audio", value: "Built-in stereo or external microphone" },
    ],
  },

  {
    category: "Storage",
    items: [
      { label: "Storage Media", value: "SD Memory Card" },
      { label: "Card Slots", value: "Single Slot" },
    ],
  },

  {
    category: "Viewfinder",
    items: [
      { label: "Lens Compatibility", value: "Z mount NIKKOR lenses, F mount NIKKOR lenses (adapter required)" },
    ],
  },

  {
    category: "Shutter",
    items: [
      { label: "Shutter Type", value: "Mechanical, Electronic Front-Curtain, Electronic" },
      { label: "Shutter Speed", value: "30 sec to 1/4000 sec" },
      { label: "Continuous Shooting", value: "Up to 11 fps" },
    ],
  },

  {
    category: "Exposure & ISO",
    items: [
      { label: "Exposure Compensation", value: "±5 EV in 1/3-step increments" },
      { label: "ISO Range", value: "ISO 100–51200 (expandable to ISO 204800)" },
      { label: "Metering", value: "Matrix, Center-weighted, Spot, Highlight-weighted" },
    ],
  },

  {
    category: "Autofocus",
    items: [
      { label: "Autofocus System", value: "Hybrid phase-detection / contrast AF" },
      { label: "Focus Points", value: "209" },
      { label: "Detection Range", value: "-4.5 to +19 EV" },
      { label: "Animal Eye AF", value: "Yes" },
    ],
  },

  {
    category: "Monitor",
    items: [
      { label: "Monitor Size", value: "3.0-inch" },
      { label: "Resolution", value: "Approx. 1040k-dot" },
      { label: "Type", value: "Vari-angle TFT Touch-Sensitive LCD" },
    ],
  },

  {
    category: "Connectivity",
    items: [
      { label: "USB", value: "USB Type-C (SuperSpeed USB)" },
      { label: "HDMI", value: "Type-D HDMI" },
      { label: "Wi-Fi", value: "IEEE 802.11 b/g/n" },
      { label: "Microphone Input", value: "3.5mm Stereo Mini Jack" },
    ],
  },

  {
    category: "Power",
    items: [
      { label: "Battery", value: "EN-EL25 Rechargeable Li-ion Battery" },
      { label: "Battery Charger", value: "EH-7P Charging AC Adapter (optional)" },
    ],
  },

  {
    category: "Physical",
    items: [
      { label: "Weight", value: "Approx. 405g (with battery and memory card)" },
      { label: "Dimensions", value: "128 × 73.5 × 59.5 mm" },
      { label: "4K UHD", value: "Yes" },
    ],
  },
],
},
{
  id: "z-50",
  name: "Z 50",
  category: "Mirrorless Cameras",
  brand: "Nikon",
  price: "₹70,995",
  slug: "z-50",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/nikon/z-50/n1.jpg",
        "/products/nikon/z-50/n2.jpg",
        "/products/nikon/z-50/n3.jpg",
        "/products/nikon/z-50/n4.jpg",
        "/products/nikon/z-50/n5.jpg",
      ],
    },
  ],

  lenses: ["Body Only"],

  overview:
        "Small but mighty, simple but powerful—a Z series camera for creating amazing online stories. Professional looking stills, 4K Ultra HD videos, slow motion, time-lapse and more. Wi-Fi® and Bluetooth enabled, plus in-camera video editing. Beautifully designed with a comfortable grip, flip-down touchscreen LCD, smart button layout, extended Electronic Viewfinder and travel-proof ruggedness.",
  specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Type", value: "Digital camera with support for interchangeable lenses" },
      { label: "Lens Mount", value: "Nikon Z mount" },
      { label: "Picture Angle", value: "APS-C Size / DX-Format" },
    ],
  },

  {
    category: "Image Sensor",
    items: [
      { label: "Sensor Size", value: "23.5 × 15.7 mm" },
      { label: "Sensor Type", value: "CMOS" },
      { label: "Effective Pixels", value: "20.9 million" },
      { label: "Total Pixels", value: "21.51 million" },
      { label: "Image Sensor Format", value: "APS-C / DX-format" },
    ],
  },

  {
    category: "Movie",
    items: [
      { label: "Video Resolution", value: "4K UHD up to 30p, Full HD up to 120p" },
      { label: "Movie File Format", value: "MOV, MP4" },
      { label: "Video Compression", value: "H.264 / MPEG-4 AVC" },
      { label: "Maximum Recording Time", value: "29 min 59 sec" },
      { label: "Audio", value: "Built-in stereo or external microphone" },
    ],
  },

  {
    category: "Storage",
    items: [
      { label: "Storage Media", value: "SD, SDHC, SDXC (UHS-I)" },
      { label: "Card Slots", value: "Single Slot" },
    ],
  },

  {
    category: "Viewfinder",
    items: [
      { label: "Viewfinder Type", value: "OLED Electronic Viewfinder" },
      { label: "Resolution", value: "Approx. 2360k-dot" },
      { label: "Frame Coverage", value: "Approx. 100% horizontal and vertical" },
      { label: "Magnification", value: "Approx. 1.02x" },
    ],
  },

  {
    category: "Shutter",
    items: [
      { label: "Shutter Type", value: "Mechanical, Electronic Front-Curtain, Electronic" },
      { label: "Shutter Speed", value: "1/8000 sec to 30 sec" },
      { label: "Continuous Shooting", value: "Up to 11 fps" },
    ],
  },

  {
    category: "Exposure & ISO",
    items: [
      { label: "Exposure Modes", value: "P, S, A, M, U1, U2, U3" },
      { label: "ISO Range", value: "ISO 100–51200 (expandable to ISO 204800)" },
    ],
  },

  {
    category: "Autofocus",
    items: [
      { label: "Autofocus System", value: "Hybrid phase-detection / contrast AF" },
      { label: "Focus Points", value: "209" },
      { label: "Image Stabilization", value: "Lens-shift VR (lens dependent)" },
      { label: "Animal Eye AF", value: "No" },
    ],
  },

  {
    category: "Monitor",
    items: [
      { label: "Monitor Size", value: "3.2-inch" },
      { label: "Resolution", value: "Approx. 1040k-dot" },
      { label: "Type", value: "Tilting TFT Touch-Sensitive LCD" },
    ],
  },

  {
    category: "Connectivity",
    items: [
      { label: "USB", value: "Micro-B USB" },
      { label: "HDMI", value: "Type-D" },
      { label: "Wi-Fi", value: "IEEE 802.11 b/g/n/a/ac" },
      { label: "App Connectivity", value: "SnapBridge" },
    ],
  },

  {
    category: "Power",
    items: [
      { label: "Battery", value: "EN-EL25 Rechargeable Li-ion Battery" },
    ],
  },

  {
    category: "Physical",
    items: [
      { label: "Weight", value: "Approx. 395g" },
      { label: "Dimensions", value: "126.5 × 93.5 × 60 mm" },
      { label: "4K UHD", value: "Yes" },
    ],
  },
],
},
{
  id: "z-50-ii",
  name: "Z 50II",
  category: "Mirrorless Cameras",
  brand: "Nikon",
  price: "₹77,995",
  slug: "z-50-ii",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/nikon/z-50ii/n1.webp",
        "/products/nikon/z-50ii/n2.webp",
        "/products/nikon/z-50ii/n3.webp",
        "/products/nikon/z-50ii/n4.webp",
        "/products/nikon/z-50ii/n5.webp",
        "/products/nikon/z-50ii/n6.webp",
        "/products/nikon/z-50ii/n7.webp",
        "/products/nikon/z-50ii/n8.webp",
        "/products/nikon/z-50ii/n9.webp",
      ],
    },
  ],

  lenses: ["Body Only"],

  overview:
        "Free your imagination with the Z50II, a compact APS-C mirrorless camera   (DX-format) with mighty yet intuitive features for the emerging content creators. Create cinematic stories and shoot 4K videos with rich detail, even in low light, using the 5.6K oversampling sensor  . Perfect for vlogging and livestreaming, Z50II features product review mode, Hi-Res Zoom, plug-and-play webcam support, and audio recording options. Express your individuality with diverse colour settings,   creator-crafted Imaging Recipes, and 31 types of Creative Picture Controls. Enjoy excellent subject detection, AF performance and powerful image processing for confident and stylish creations.",
 specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Type", value: "Digital camera with support for interchangeable lenses" },
      { label: "Lens Mount", value: "Nikon Z mount" },
      { label: "Picture Angle", value: "DX-Format (APS-C)" },
    ],
  },

  {
    category: "Image Sensor",
    items: [
      { label: "Sensor Size", value: "23.5 × 15.7 mm" },
      { label: "Sensor Type", value: "CMOS" },
      { label: "Effective Pixels", value: "20.9 million" },
      { label: "Total Pixels", value: "21.51 million" },
      { label: "Dust Reduction", value: "Image Dust Off reference data support" },
    ],
  },

  {
    category: "Video",
    items: [
      { label: "Video Resolution", value: "4K UHD up to 60p, Full HD up to 120p" },
      { label: "Video File Format", value: "MOV, MP4" },
      { label: "Video Compression", value: "H.265/HEVC (8/10-bit), H.264/AVC (8-bit)" },
      { label: "Audio Recording", value: "Linear PCM, AAC" },
      { label: "Special Video Features", value: "N-Log, HLG HDR, Time-lapse, Hi-Res Zoom, Time Codes" },
    ],
  },

  {
    category: "Storage",
    items: [
      { label: "Storage Media", value: "SD, SDHC, SDXC (UHS-II Compatible)" },
      { label: "Card Slots", value: "1 × SD Card Slot" },
      { label: "File System", value: "DCF 2.0, Exif 2.32, MPEG-A MIAF" },
    ],
  },

  {
    category: "Viewfinder",
    items: [
      { label: "Viewfinder Type", value: "0.39-inch OLED Electronic Viewfinder" },
      { label: "Resolution", value: "Approx. 2360k-dot" },
      { label: "Frame Coverage", value: "Approx. 100% Horizontal and Vertical" },
      { label: "Magnification", value: "Approx. 1.02x" },
      { label: "Eyepoint", value: "19.5 mm" },
    ],
  },

  {
    category: "Shutter",
    items: [
      { label: "Shutter Type", value: "Mechanical, Electronic Front-Curtain, Electronic" },
      { label: "Shutter Speed", value: "1/4000 sec to 30 sec (extendable to 900 sec)" },
      { label: "Continuous Shooting", value: "Up to 30 fps" },
      { label: "Flash Sync Speed", value: "Up to 1/250 sec" },
    ],
  },

  {
    category: "Exposure & ISO",
    items: [
      { label: "Exposure Modes", value: "P, S, A, M, Auto, Scene Modes" },
      { label: "Metering", value: "Matrix, Center-Weighted, Spot, Highlight-Weighted" },
      { label: "Exposure Compensation", value: "±5 EV" },
      { label: "ISO Range", value: "ISO 100–51200 (expandable to ISO 204800)" },
    ],
  },

  {
    category: "Autofocus",
    items: [
      { label: "AF Modes", value: "AF-S, AF-C, AF-A, AF-F, Manual Focus" },
      { label: "AF Area Modes", value: "Pinpoint, Single-Point, Dynamic-Area, Wide-Area, Auto-Area, 3D Tracking" },
      { label: "Detection Range", value: "-9 to +19 EV" },
      { label: "Focus Lock", value: "Half-Press Shutter or AE-L/AF-L Button" },
    ],
  },

  {
    category: "White Balance",
    items: [
      { label: "White Balance Modes", value: "Auto, Natural Light Auto, Daylight, Cloudy, Shade, Incandescent, Fluorescent, Flash" },
      { label: "Color Temperature", value: "2500K – 10000K" },
      { label: "Custom Presets", value: "Up to 6 Presets" },
    ],
  },

  {
    category: "Monitor",
    items: [
      { label: "Monitor Size", value: "3.2-inch Vari-angle LCD" },
      { label: "Resolution", value: "Approx. 1040k-dot" },
      { label: "Type", value: "TFT Touch-Sensitive LCD" },
      { label: "Viewing Angle", value: "170°" },
    ],
  },

  {
    category: "Connectivity",
    items: [
      { label: "USB", value: "USB Type-C (SuperSpeed USB)" },
      { label: "HDMI", value: "Type-D HDMI" },
      { label: "Microphone Input", value: "3.5 mm Stereo Mini Jack" },
      { label: "Headphone Output", value: "3.5 mm Stereo Mini Jack" },
    ],
  },

  {
    category: "Power",
    items: [
      { label: "Battery", value: "EN-EL25a Rechargeable Li-ion Battery" },
      { label: "AC Adapter Support", value: "EH-8P AC Adapter (Optional)" },
    ],
  },

  {
    category: "Physical",
    items: [
      { label: "Weight", value: "Approx. 550 g with Battery & Card, 495 g Body Only" },
      { label: "Dimensions", value: "127 × 96.8 × 66.5 mm" },
      { label: "Card Slot", value: "Single SD Card Slot" },
    ],
  },
]
},
{
  id: "z-f-c",
  name: "Z FC",
  category: "Mirrorless Cameras",
  brand: "Nikon",
  price: "₹84,995",
  slug: "z-f-c",
  status: "In Stock",

  colors: [
    {
      name: "All",
      images: [
        "/products/nikon/z-fc/n1.webp",
        "/products/nikon/z-fc/n2.webp",
        "/products/nikon/z-fc/n3.webp",
        "/products/nikon/z-fc/n4.webp",
        "/products/nikon/z-fc/n5.webp",
        "/products/nikon/z-fc/n6.webp",
        "/products/nikon/z-fc/n7.webp",
        "/products/nikon/z-fc/n8.webp",
        "/products/nikon/z-fc/n9.webp",
        "/products/nikon/z-fc/n10.webp",
      ],
    },
  ],

  lenses: ["Body Only"],

  overview:
        "Z fc fuses classic design with Z series technology. Small size with big image quality. 4K videos with full-time Eye-Detection AF. A flip out vlogger screen with live streaming capabilities. This is a camera you think you’ve seen before. But the performance is entirely new.",
 specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Type", value: "Digital camera with support for interchangeable lenses" },
      { label: "Lens Mount", value: "Nikon Z mount" },
      { label: "Picture Angle", value: "APS-C Size / DX-Format" },
    ],
  },

  {
    category: "Image Sensor",
    items: [
      { label: "Sensor Size", value: "23.5 × 15.7 mm" },
      { label: "Sensor Type", value: "CMOS" },
      { label: "Effective Pixels", value: "20.9 million" },
      { label: "Total Pixels", value: "21.51 million" },
      { label: "Image Sensor Format", value: "APS-C / DX-Format" },
    ],
  },

  {
    category: "Movie",
    items: [
      { label: "Video Resolution", value: "4K UHD up to 30p, Full HD up to 120p" },
      { label: "Movie File Format", value: "MOV, MP4" },
      { label: "Video Compression", value: "H.264 / MPEG-4 AVC" },
      { label: "Maximum Recording Time", value: "29 min 59 sec" },
      { label: "Audio", value: "Built-in Stereo or External Microphone" },
      { label: "Special Features", value: "Time-Lapse Movie, HDMI Output, Time Code, Active D-Lighting" },
    ],
  },

  {
    category: "Storage",
    items: [
      { label: "Storage Media", value: "SD, SDHC, SDXC (UHS-I)" },
      { label: "Card Slots", value: "Single Slot" },
      { label: "File System", value: "DCF 2.0, Exif 2.31" },
    ],
  },

  {
    category: "Viewfinder",
    items: [
      { label: "Viewfinder Type", value: "OLED Electronic Viewfinder" },
      { label: "Resolution", value: "Approx. 2360k-dot" },
      { label: "Frame Coverage", value: "Approx. 100% Horizontal and Vertical" },
      { label: "Magnification", value: "Approx. 1.02x" },
      { label: "Eyepoint", value: "19.5 mm" },
    ],
  },

  {
    category: "Shutter",
    items: [
      { label: "Shutter Type", value: "Mechanical, Electronic Front-Curtain, Electronic" },
      { label: "Shutter Speed", value: "1/4000 sec to 900 sec" },
      { label: "Continuous Shooting", value: "Up to 11 fps" },
      { label: "Flash Sync Speed", value: "1/200 sec" },
    ],
  },

  {
    category: "Exposure & ISO",
    items: [
      { label: "Exposure Modes", value: "Auto, P, S, A, M" },
      { label: "Metering", value: "Matrix, Center-Weighted, Spot, Highlight-Weighted" },
      { label: "Exposure Compensation", value: "±3 EV (up to ±5 EV with compensation dial)" },
      { label: "ISO Range", value: "ISO 100–51200 (expandable to ISO 204800)" },
    ],
  },

  {
    category: "Autofocus",
    items: [
      { label: "Autofocus System", value: "Hybrid Phase-Detection / Contrast AF" },
      { label: "Focus Points", value: "209" },
      { label: "AF Modes", value: "AF-S, AF-C, AF-A, AF-F, Manual Focus" },
      { label: "Detection Range", value: "-4.5 to +19 EV" },
      { label: "Animal Eye AF", value: "Yes" },
    ],
  },

  {
    category: "Monitor",
    items: [
      { label: "Monitor Size", value: "3.0-inch" },
      { label: "Resolution", value: "Approx. 1040k-dot" },
      { label: "Type", value: "Vari-angle TFT Touch-Sensitive LCD" },
      { label: "Viewing Angle", value: "170°" },
    ],
  },

  {
    category: "Connectivity",
    items: [
      { label: "USB", value: "USB Type-C (SuperSpeed USB)" },
      { label: "HDMI", value: "Type-D HDMI" },
      { label: "Microphone Input", value: "3.5 mm Stereo Mini Jack" },
      { label: "Wi-Fi", value: "IEEE 802.11 b/g/n/a/ac" },
      { label: "GPS", value: "No" },
    ],
  },

  {
    category: "White Balance",
    items: [
      { label: "White Balance Modes", value: "Auto, Daylight, Cloudy, Shade, Incandescent, Fluorescent, Flash" },
      { label: "White Balance Bracketing", value: "Yes" },
      { label: "Custom Presets", value: "Supported" },
    ],
  },

  {
    category: "Power",
    items: [
      { label: "Battery", value: "EN-EL25 Rechargeable Li-ion Battery" },
      { label: "Battery Life", value: "Approx. 300 Shots (CIPA)" },
      { label: "Movie Recording Time", value: "Approx. 75 Minutes" },
      { label: "Battery Charger", value: "MH-32" },
    ],
  },

  {
    category: "Physical",
    items: [
      { label: "Weight", value: "Approx. 380 g" },
      { label: "Dimensions", value: "134.5 × 93.5 × 43.5 mm" },
      { label: "Tripod Socket", value: '1/4" (ISO 1222)' },
      { label: "4K UHD", value: "Yes" },
    ],
  },
]
},

// Insta360 brand start from here camera's

{
  id: "insta360-x4-air",
  name: "Insta360 X4 Air",
  category: "360 Cameras",
  brand: "Insta360",
  price: "₹45,990",
  slug: "insta360-x4-air",
  status: "In Stock",

  colors: [
    {
      name: "Gray",
      images: [
        "/products/insta360/x4-1.jpg",
        "/products/insta360/x4-2.jpg",
        "/products/insta360/x4-3.jpg",
      ],
    },
  ],
},
{
  id: "insta360-x5-standalone",
  name: "Insta X5 Standalone",
  category: "360 Cameras",
  brand: "Insta360",
  price: "₹58,990",
  slug: "insta360-x5-standalone",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/insta360/x5-1.jpg",
        "/products/insta360/x5-2.jpg",
        "/products/insta360/x5-3.jpg",
        "/products/insta360/x5-4.jpg",
        "/products/insta360/x5-5.jpg",
        "/products/insta360/x5-6.jpg",
        "/products/insta360/x5-7.jpg",
        "/products/insta360/x5-8.jpg",
      ],
    },
  ],
},
{
  id: "insta360-flow-2",
  name: "Insta Flow 2",
  category: "360 Cameras",
  brand: "Insta360",
  price: "₹58,990",
  slug: "insta360-flow-2",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/insta360/link1.jpg",
        "/products/insta360/link2.jpg",
        "/products/insta360/link3.jpg",
        "/products/insta360/link4.jpg",
        "/products/insta360/link5.jpg",
        "/products/insta360/link6.jpg",
        "/products/insta360/link7.jpg",
        "/products/insta360/link8.jpg",
      ],
    },
  ],
},
{
  id: "insta360-link-2",
  name: "Insta link 2",
  category: "360 Cameras",
  brand: "Insta360",
  price: "₹58,990",
  slug: "insta360-flow-2",
  status: "In Stock",

  colors: [
    {
      name: "Gray",
      images: [
        "/products/insta360/flow1.jpg",
        "/products/insta360/flow2.jpg",
        "/products/insta360/flow3.jpg",
        "/products/insta360/flow4.jpg",
        "/products/insta360/flow5.jpg",
      ],
    },
  ],
},
{
  id: "insta360-x5-motorcycle-bundle",
  name: "Insta X5 Motorcycle Bundle",
  category: "360 Cameras",
  brand: "Insta360",
  price: "₹58,990",
  slug: "insta360-x5-motorcycle-bundle",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/insta360/bundle1.jpg",
        "/products/insta360/bundle2.jpg",
        "/products/insta360/bundle3.jpg",
        "/products/insta360/bundle4.jpg",
      ],
    },
  ],
},

// dji brand start from here camera's

{
  id: "osmo-pocket-4-creator-combo",
  name: "Osmo Pocket 4 Creator Combo",
  category: "Mirrorless Cameras",
  brand: "DJI",
  price: "₹69,990",
  slug: "osmo-pocket-4-creator-combo",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/dji/creator1.jpg",
        "/products/dji/creator2.jpg",
        "/products/dji/creator3.jpg",
        "/products/dji/creator4.jpg",
        "/products/dji/creator5.jpg",
        "/products/dji/creator6.jpg",
      ],
    },
  ],
  keyFeatures: [
      '1" CMOS & 4K/240fps',
      "14-Stop Dynamic Range",
      "10-bit D-Log",
      "3-Axis Stabilization & Rotatable Touchscreen",
      "2× Lossless Zoom",
      "107GB Built-In Storage & 800MB/s Transfer",
      "New ActiveTrack & Intelligent Focusing",
      "OsmoAudio 4-Channel Output"
    ],
},
{
  id: "osmo-pocket-4-standard-combo",
  name: "Osmo Pocket 4 Standard Combo",
  category: "Mirrorless Cameras",
  brand: "DJI",
  price: "₹52,990",
  slug: "osmo-pocket-4-standard-combo",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/dji/standard.jpg",
        "/products/dji/creator3.jpg",
        "/products/dji/creator4.jpg",
        "/products/dji/creator5.jpg",
        "/products/dji/creator6.jpg",
      ],
    },
  ],
  keyFeatures: [
      '1" CMOS & 4K/240fps',
      "14-Stop Dynamic Range",
      "10-bit D-Log",
      "3-Axis Stabilization & Rotatable Touchscreen",
      "2× Lossless Zoom",
      "107GB Built-In Storage & 800MB/s Transfer",
      "New ActiveTrack & Intelligent Focusing",
      "Osmo Audio 4-Channel Output"
    ],
},
{
  id: "osmo-mobile-7p",
  name: "Osmo Mobile 7P",
  category: "Mirrorless Cameras",
  brand: "DJI",
  price: "₹52,990",
  slug: "osmo-mobile-7p",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/dji/7p-1.jpg",
        "/products/dji/7p-3.jpg",
        "/products/dji/7p-4.jpg",
        "/products/dji/7p-5.jpg",
        "/products/dji/7p-6.jpg",
        "/products/dji/7p-7.jpg",
        "/products/dji/7p-8.jpg",
      ],
    },
  ],
  keyFeatures: [
      "Native Tracking With Integrated Audio & Lighting Capabilities [1]",
      "Robust 3-Axis Gimbal Stabilization",
      "Robust 3-Axis Gimbal Stabilization",
      "Easy Tutorials & One-Tap Editing",
      "Built-in Extension Rod & Tripod",
      "Quick Fold & Quick Launch",
      "10-Hour Battery Life & Phone Charging",
      "Includes the Multifunctional Module offering intelligent tracking, DJI Mic Mini reception, and lighting features. Unlock tracking with your phone's native camera app or third-party apps, and use the built-in extension rod and tripod for effortless filming."
    ],
},
{
  id: "dji-osmo-action-5-pro-adventure-combo",
  name: "DJI Osmo Action 5 Pro Adventure Combo",
  category: "Mirrorless Cameras",
  brand: "DJI",
  price: "₹45,990",
  slug: "dji-osmo-action-5-pro-adventure-combo",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/dji/adventure1.jpg",
        "/products/dji/adventure2.jpg",
        "/products/dji/adventure3.jpg",
        "/products/dji/adventure4.jpg",
        "/products/dji/adventure5.jpg",
        "/products/dji/adventure6.jpg",
        "/products/dji/adventure7.jpg",
        "/products/dji/adventure8.jpg",
        "/products/dji/adventure9.jpg",
        "/products/dji/adventure10.jpg",
      ],
    },
  ],
  keyFeatures: [
    "Revolutionary Imaging Performance With an All-New 1/1.3' Sensor",
    "Center and Track Subjects With Enhanced Precision",
    "capture more With 4hrs Extended Battery Life",
    "Dual OLED High-Brightness Touchscreens",
    "Robust Stabilization With 360 Horizon Steady",
    "Professional Audio Recording With DJI Microphone Connection",
    "Includes two additional Extreme Batteries Plus (1950mAh), a Multifunctional Battery Case2, and a 1.5m Extension Rod, ideal for extended outdoor shooting and capturing various angles."
  ],
},
{
  id: "dji-rs-4-mini",
  name: "DJI RS 4 Mini",
  category: "Mirrorless Cameras",
  brand: "DJI",
  price: "₹32,990",
  slug: "dji-rs-4-mini",
  status: "In Stock",

  colors: [
    {
      name: "Gray",
      images: [
        "/products/dji/mini1.jpg",
        "/products/dji/mini3.jpg",
        "/products/dji/mini4.jpg",
        "/products/dji/mini5.jpg",
        "/products/dji/mini6.jpg",
        "/products/dji/mini7.jpg",
        "/products/dji/mini8.jpg",
        "/products/dji/mini9.jpg",
      ],
    },
  ],
  keyFeatures: [
    "2nd-Gen Automated Axis Locks",
    "Intelligent Tracking and Composition",
    "Teflon™ Enhanced Balancing",
    "3rd-Gen Native Vertical Shooting",
    "Responsive Follow Mode",
    "Handles Cameras and Smartphones"
  ],
},
{
  id: "osmo-pocket-3-creator-combo",
  name: "Osmo Pocket 3 Creator Combo",
  category: "Mirrorless Cameras",
  brand: "DJI",
  price: "₹60,990",
  slug: "osmo-pocket-3-creator-combo",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/dji/combo1.jpg",
        "/products/dji/combo3.jpg",
        "/products/dji/combo4.jpg",
        "/products/dji/combo5.jpg",
        "/products/dji/combo6.jpg",
        "/products/dji/combo7.jpg",
      ],
    },
  ],
  keyFeatures: [
    "1-Inch CMOS & 4K/120fps",
    "2-inch Rotatable Screen & Smart Horizontal-Vertical Shooting",
    "3-Axis Gimbal Mechanical Stabilization",
    "ActiveTrack 6.0",
    "Full-Pixel Fast Focusing",
    "D-Log M & 10-Bit",
    "Stereo Recording",
    "pocket-Sized"
  ],
},

// GoPro brand start from here
// compact part
{
  id: "mission-1",
  name: "Mission 1",
  category: "Compact Cameras",
  brand: "GoPro",
  price: "$599.99",
  slug: "mission-1",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/mission1.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"Compact cinematic camera with a fixed 14mm GoPro lens for serious creators",
specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Category", value: "Single-Lens Capture" },
      { label: "Processor", value: "GP3" },
      { label: "Image Sensor", value: '1-inch' },
      { label: "Lens Aperture", value: "F2.8" },
      { label: "35mm Equivalent Focal Length", value: "15mm - 27mm" },
    ],
  },

  {
    category: "Video",
    items: [
      { label: "Maximum Resolution", value: "8K up to 60fps" },
      { label: "4K Recording", value: "Up to 240fps" },
      { label: "1080p Recording", value: "Up to 480fps" },
      { label: "Video Format", value: "MP4" },
      { label: "Video Compression", value: "H.265 (HEVC)" },
      { label: "Maximum Bit Rate", value: "240 Mbps" },
      { label: "Color Depth", value: "8-bit, 10-bit" },
      { label: "GP-Log Encoding", value: "GP-Log2 with LUT Support" },
    ],
  },

  {
    category: "Photo",
    items: [
      { label: "Photo Resolution", value: "50MP, 12MP" },
      { label: "Photo Format", value: "JPG, GPR (RAW)" },
      { label: "Photo Output", value: "SuperPhoto, Standard, RAW" },
      { label: "Photo Aspect Ratio", value: "4:3" },
      { label: "Frame Grabs From Video", value: "Up to 44.2MP from 8K video" },
    ],
  },

  {
    category: "Time Lapse",
    items: [
      { label: "TimeWarp", value: "8K30, 4K30, 1080p30" },
      { label: "Time Lapse", value: "Video up to 8K30, Photo up to 44MP" },
      { label: "Night Lapse", value: "Integrated with Time Lapse" },
      { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Lights" },
    ],
  },

  {
    category: "Imaging",
    items: [
      { label: "ISO Range", value: "Video: 25-6400, Photo: 100-3200" },
      { label: "White Balance", value: "2300K - 6500K" },
      { label: "Exposure Compensation", value: "±2 EV" },
      { label: "Shutter Speed", value: "1/8 sec - 1/16000 sec (Photo)" },
      { label: "Color Profiles", value: "Vibrant, Natural, Cinematic, Flat, GP-Log2" },
    ],
  },

  {
    category: "Stabilization",
    items: [
      { label: "Video Stabilization", value: "HyperSmooth" },
      { label: "Horizon Lock", value: "360° Horizon Lock" },
      { label: "HDR Video", value: "HLG HDR" },
    ],
  },

  {
    category: "Audio",
    items: [
      { label: "Audio Modes", value: "Stereo" },
      { label: "Microphones", value: "4" },
      { label: "RAW Audio", value: "24-bit PCM, 32-bit Float" },
      { label: "Multitrack Audio", value: "Up to 3 Tracks" },
      { label: "Directional Audio", value: "Supported" },
      { label: "USB Audio", value: "Supported" },
      { label: "Wireless Audio", value: "Supported" },
    ],
  },

  {
    category: "Capture Modes",
    items: [
      { label: "Video Modes", value: "Video, Low Light, Slo-Mo, Burst Slo-Mo, HLG HDR, Subject Tracking, Looping, Endurance" },
      { label: "Photo Modes", value: "Single Photo, Interval, Burst" },
      { label: "Time Lapse Modes", value: "Time Lapse, Night Lapse, Star Trails, Light Painting, Vehicle Lights" },
    ],
  },

  {
    category: "Lens Options",
    items: [
      { label: "Digital Lenses (Video)", value: "SuperView, Wide, Linear" },
      { label: "Digital Lenses (Photo)", value: "Wide, Linear" },
      { label: "Aspect Ratios", value: "16:9, 4:3, 9:16" },
    ],
  },
],
},
{
  id: "mission-1-pro",
  name: "Mission 1 Pro",
  category: "Compact Cameras",
  brand: "GoPro",
  price: "$699.99",
  slug: "mission-1-pro",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/mission-1-pro.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"Advance features with a fixed 14mm GoPro lens for Pro level capture",
specs: [
  {
  category: "General Specifications",
  items: [
    { label: "Category", value: "Single-Lens Capture" },
    { label: "Processor", value: "GP3" },
    { label: "Image Sensor", value: '1"' },
    { label: "Lens Aperture", value: "F2.8" },
    { label: "35mm Equivalent Focal Length", value: "15mm - 27mm" },
  ],
},

{
  category: "Imaging",
  items: [
    { label: "Shutter Speed", value: "Video: 1/7680 sec, Photo: 1/8 - 1/16000 sec" },
    { label: "Exposure Compensation", value: "±2 EV" },
    { label: "White Balance", value: "2300K - 6500K" },
    { label: "ISO Range", value: "Video: 25-6400, Photo: 100-3200" },
    { label: "Color Profiles", value: "Vibrant, Natural, Cinematic, Flat, GP-Log2" },
  ],
},

{
  category: "Video",
  items: [
    { label: "Maximum Resolution", value: "8K up to 60fps" },
    { label: "4K Recording", value: "Up to 240fps" },
    { label: "1080p Recording", value: "Up to 480fps" },
    { label: "Slow Motion", value: "Up to 16x (480fps)" },
    { label: "Burst Slow Motion", value: "32x (960fps for 10 sec)" },
    { label: "Video Format", value: "MP4" },
    { label: "Video Compression", value: "H.265 (HEVC)" },
    { label: "Color Bit Depth", value: "8-bit, 10-bit" },
    { label: "Max Bit Rate", value: "240 Mbps" },
    { label: "GP-Log", value: "GP-Log2 with LUT Support" },
  ],
},

{
  category: "Photo",
  items: [
    { label: "Photo Resolution", value: "50MP, 12MP" },
    { label: "Photo Output", value: "SuperPhoto, Standard, RAW" },
    { label: "Photo Format", value: "JPG, GPR (RAW)" },
    { label: "Aspect Ratio", value: "4:3" },
    { label: "Frame Grabs", value: "Up to 44.2MP from 8K Video" },
  ],
},

{
  category: "Time Lapse",
  items: [
    { label: "TimeWarp", value: "8K30, 4K30, 1080p30" },
    { label: "Time Lapse", value: "Video up to 8K30, Photo up to 44MP" },
    { label: "Night Lapse", value: "Supported" },
    { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Lights" },
  ],
},

{
  category: "Stabilization",
  items: [
    { label: "Video Stabilization", value: "HyperSmooth" },
    { label: "Horizon Lock", value: "360° Horizon Lock" },
    { label: "HDR Video", value: "HLG HDR" },
  ],
},

{
  category: "Capture Modes",
  items: [
    { label: "Video Modes", value: "Video, Low Light, Slo-Mo, Burst Slo-Mo, HLG HDR, Subject Tracking, Looping, Endurance" },
    { label: "Photo Modes", value: "Single Photo, Interval, Burst" },
    { label: "Time Lapse Modes", value: "Time Lapse, Night Lapse, Star Trails, Light Painting, Vehicle Lights" },
  ],
},

{
  category: "Lens Options",
  items: [
    { label: "Digital Lenses (Video)", value: "SuperView, Wide, Linear" },
    { label: "Digital Lenses (Photo)", value: "Wide, Linear" },
    { label: "Aspect Ratios", value: "16:9, 4:3, 9:16" },
  ],
},
],
},
{
  id: "mission-1-pro-ils",
  name: "Mission 1 Pro Ils",
  category: "Compact Cameras",
  brand: "GoPro",
  price: "$699.99",
  slug: "mission-1-pro",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/mission-1-pro-ils.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"Specialized version for compatibility with interchangeable Micro Four Thirds (MFT) lenses",
specs: [
  {
  category: "General Specifications",
  items: [
    { label: "Category", value: "Single-Lens Capture" },
    { label: "Processor", value: "GP3" },
    { label: "Image Sensor", value: '1"' },
    { label: "Lens Aperture", value: "F2.8" },
    { label: "35mm Equivalent Focal Length", value: "15mm - 27mm" },
  ],
},

{
  category: "Imaging",
  items: [
    { label: "Shutter Speed", value: "Video: 1/7680 sec, Photo: 1/8 - 1/16000 sec" },
    { label: "Exposure Compensation", value: "±2 EV" },
    { label: "White Balance", value: "2300K - 6500K" },
    { label: "ISO Range", value: "Video: 25-6400, Photo: 100-3200" },
    { label: "Color Profiles", value: "Vibrant, Natural, Cinematic, Flat, GP-Log2" },
  ],
},

{
  category: "Video",
  items: [
    { label: "Maximum Resolution", value: "8K up to 60fps" },
    { label: "4K Recording", value: "Up to 240fps" },
    { label: "1080p Recording", value: "Up to 480fps" },
    { label: "Slow Motion", value: "Up to 16x (480fps)" },
    { label: "Burst Slow Motion", value: "32x (960fps for 10 sec)" },
    { label: "Video Format", value: "MP4" },
    { label: "Video Compression", value: "H.265 (HEVC)" },
    { label: "Color Bit Depth", value: "8-bit, 10-bit" },
    { label: "Max Bit Rate", value: "240 Mbps" },
    { label: "GP-Log", value: "GP-Log2 with LUT Support" },
  ],
},

{
  category: "Photo",
  items: [
    { label: "Photo Resolution", value: "50MP, 12MP" },
    { label: "Photo Output", value: "SuperPhoto, Standard, RAW" },
    { label: "Photo Format", value: "JPG, GPR (RAW)" },
    { label: "Aspect Ratio", value: "4:3" },
    { label: "Frame Grabs", value: "Up to 44.2MP from 8K Video" },
  ],
},

{
  category: "Time Lapse",
  items: [
    { label: "TimeWarp", value: "8K30, 4K30, 1080p30" },
    { label: "Time Lapse", value: "Video up to 8K30, Photo up to 44MP" },
    { label: "Night Lapse", value: "Supported" },
    { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Lights" },
  ],
},

{
  category: "Stabilization",
  items: [
    { label: "Video Stabilization", value: "HyperSmooth" },
    { label: "Horizon Lock", value: "360° Horizon Lock" },
    { label: "HDR Video", value: "HLG HDR" },
  ],
},

{
  category: "Capture Modes",
  items: [
    { label: "Video Modes", value: "Video, Low Light, Slo-Mo, Burst Slo-Mo, HLG HDR, Subject Tracking, Looping, Endurance" },
    { label: "Photo Modes", value: "Single Photo, Interval, Burst" },
    { label: "Time Lapse Modes", value: "Time Lapse, Night Lapse, Star Trails, Light Painting, Vehicle Lights" },
  ],
},

{
  category: "Lens Options",
  items: [
    { label: "Digital Lenses (Video)", value: "SuperView, Wide, Linear" },
    { label: "Digital Lenses (Photo)", value: "Wide, Linear" },
    { label: "Aspect Ratios", value: "16:9, 4:3, 9:16" },
  ],
},
],
},
// action camera part
{
  id: "hero-13-black",
  name: "HERO13 Black",
  category: "Action Cameras",
  brand: "GoPro",
  price: "$429.99",
  slug: "hero-13-black",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/hero-13-black.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"Works with the new HB-Series Lenses, improved power solutions, magnetic mounting + more",
specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Category", value: "Single-Lens Capture" },
      { label: "Processor", value: "GP2" },
      { label: "Image Sensor", value: '1/1.9" CMOS (27.6MP)' },
      { label: "Lens Aperture", value: "F2.5" },
      { label: "35mm Equivalent Focal Length", value: "12mm - 39mm" },
    ],
  },

  {
    category: "Design & Build",
    items: [
      { label: "Dimensions", value: "71.8 × 50.8 × 33.6 mm" },
      { label: "Weight", value: "159g (with battery), 125g (without battery)" },
      { label: "Battery", value: "1900mAh Enduro Battery" },
      { label: "Waterproof", value: "10m (33ft)" },
      { label: "Operating Temperature", value: "-10°C to 35°C" },
    ],
  },

  {
    category: "Display",
    items: [
      { label: "Rear Display", value: '2.27" Touch Display' },
      { label: "Front Display", value: '1.4" Color Display' },
      { label: "Cover Glass", value: "Removable Water-Repelling Cover Glass" },
    ],
  },

  {
    category: "Video",
    items: [
      { label: "Maximum Resolution", value: "5.3K up to 60fps" },
      { label: "4K Recording", value: "Up to 120fps" },
      { label: "1080p Recording", value: "Up to 240fps" },
      { label: "Slow Motion", value: "8x (1080p, 2.7K), 4x (4K), 2x (5.3K)" },
      { label: "Burst Slow Motion", value: "13x (400fps), 12x (360fps)" },
      { label: "Video Compression", value: "H.265 (HEVC)" },
      { label: "Color Bit Depth", value: "8-bit, 10-bit (4K and higher)" },
      { label: "Maximum Bit Rate", value: "120 Mbps" },
      { label: "HDR Video", value: "Supported" },
    ],
  },

  {
    category: "Photo",
    items: [
      { label: "Photo Resolution", value: "27.13MP (5568 × 4872)" },
      { label: "Photo Output", value: "SuperPhoto, HDR, Standard, RAW" },
      { label: "Photo Format", value: "JPG, GPR (RAW)" },
      { label: "RAW Capture", value: "27.13MP" },
      { label: "Frame Grabs", value: "Up to 24.69MP from 5.3K Video" },
    ],
  },

  {
    category: "Time Lapse",
    items: [
      { label: "TimeWarp", value: "TimeWarp 3.0 up to 5.3K" },
      { label: "TimeWarp Speeds", value: "Auto, 2x, 5x, 10x, 15x, 30x" },
      { label: "Time Lapse Resolution", value: "Up to 5.3K" },
      { label: "Night Lapse", value: "Up to 5.3K" },
      { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Light Trails" },
    ],
  },

  {
    category: "Stabilization",
    items: [
      { label: "Video Stabilization", value: "HyperSmooth 6.0" },
      { label: "Horizon Lock", value: "360° Horizon Lock & Horizon Leveling" },
      { label: "Exposure Control", value: "Supported" },
      { label: "Exposure Compensation", value: "±2 EV" },
    ],
  },

  {
    category: "Capture Modes",
    items: [
      { label: "Photo Modes", value: "Standard Photo, Burst Photo, Night Photo" },
      { label: "Looping Video", value: "Supported" },
      { label: "HindSight", value: "Supported" },
      { label: "Scheduled Capture", value: "Supported" },
      { label: "Duration Capture", value: "Supported" },
    ],
  },

  {
    category: "Lens Options",
    items: [
      { label: "Digital Lenses (Video)", value: "HyperView, SuperView, Wide, Linear, Linear + Horizon Lock" },
      { label: "Digital Lenses (Photo)", value: "Wide, Linear" },
      { label: "Aspect Ratios", value: "16:9, 9:16, 4:3, 8:7" },
    ],
  },

  {
    category: "Connectivity",
    items: [
      { label: "Storage", value: "microSD (A2 V30 or higher)" },
      { label: "USB", value: "USB-C" },
      { label: "Live Streaming", value: "1080p30 with HyperSmooth" },
      { label: "Webcam Mode", value: "Up to 1080p30" },
      { label: "Timecode Sync", value: "Supported" },
    ],
  },
],
},
{
  id: "hero-13-black-creator-edition",
  name: "HERO13 Black Creator Edition",
  category: "Action Cameras",
  brand: "GoPro",
  price: "$649.99",
  slug: "hero-13-black-creator-edition",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/creator-edition.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"HERO13 Black, battery hand grip, directional mic + LED lighting.",
specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Processor", value: "GP2" },
      { label: "Image Sensor", value: '1/1.9" CMOS, 27.6MP' },
      { label: "Lens Aperture", value: "F2.5" },
      { label: "35mm Equivalent Focal Length", value: "12mm - 39mm" },
      { label: "Battery", value: "Removable 1900mAh Enduro Battery" },
    ],
  },

  {
    category: "Design & Build",
    items: [
      { label: "Dimensions", value: "71.8 × 50.8 × 33.6 mm" },
      { label: "Weight", value: "159g (with battery), 125g (without battery)" },
      { label: "Displays", value: 'Rear 2.27" Touch Display, Front 1.4" Color Display' },
      { label: "Waterproof Rating", value: "10m (33ft)" },
      { label: "Operating Temperature", value: "-10°C to 35°C" },
    ],
  },

  {
    category: "Video",
    items: [
      { label: "Maximum Resolution", value: "5.3K up to 60fps" },
      { label: "4K Recording", value: "Up to 120fps" },
      { label: "1080p Recording", value: "Up to 240fps" },
      { label: "Slow Motion", value: "Up to 8x" },
      { label: "Burst Slow Motion", value: "Up to 13x (400fps)" },
      { label: "Video Compression", value: "H.265 (HEVC)" },
      { label: "Color Bit Depth", value: "8-bit, 10-bit (4K and above)" },
      { label: "Maximum Bit Rate", value: "120 Mbps" },
      { label: "Aspect Ratios", value: "16:9, 9:16, 4:3, 8:7" },
      { label: "Video Stabilization", value: "HyperSmooth 6.0" },
    ],
  },

  {
    category: "Photo",
    items: [
      { label: "Photo Resolution", value: "27.13MP (5568 × 4872)" },
      { label: "Photo Modes", value: "Standard Photo, Burst Photo, Night Photo" },
      { label: "Photo Output", value: "SuperPhoto, HDR, Standard, RAW" },
      { label: "Photo Format", value: "JPG, GPR (RAW)" },
      { label: "RAW Capture", value: "27.13MP RAW" },
      { label: "Frame Grabs", value: "Up to 24.69MP from 5.3K Video" },
    ],
  },

  {
    category: "Time Lapse",
    items: [
      { label: "TimeWarp", value: "TimeWarp 3.0 up to 5.3K" },
      { label: "TimeWarp Speeds", value: "Auto, 2x, 5x, 10x, 15x, 30x" },
      { label: "Time Lapse Resolution", value: "Up to 5.3K" },
      { label: "Night Lapse", value: "Supported up to 5.3K" },
      { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Light Trails" },
    ],
  },

  {
    category: "Stabilization & HDR",
    items: [
      { label: "Video Stabilization", value: "HyperSmooth 6.0" },
      { label: "Horizon Lock", value: "360° Horizon Lock & Horizon Leveling" },
      { label: "HDR Video", value: "Supported up to 5.3K" },
      { label: "Exposure Compensation", value: "±2 EV" },
    ],
  },

  {
    category: "Lens Options",
    items: [
      { label: "Digital Lenses (Video)", value: "HyperView, SuperView, Wide, Linear" },
      { label: "Horizon Lock Lens", value: "Linear + Horizon Lock / Leveling" },
      { label: "Digital Lenses (Photo)", value: "Wide, Linear" },
      { label: "Video Zoom", value: "Up to 2x" },
    ],
  },

  {
    category: "Connectivity & Storage",
    items: [
      { label: "Storage", value: "microSD (Class A2 V30 or higher)" },
      { label: "USB", value: "USB-C" },
      { label: "HDMI", value: "Media Mod Compatible" },
      { label: "Live Streaming", value: "1080p30 with HyperSmooth" },
      { label: "Webcam Mode", value: "Up to 1080p30" },
    ],
  },

  {
    category: "Advanced Features",
    items: [
      { label: "Looping Video", value: "Yes" },
      { label: "HindSight", value: "Yes" },
      { label: "Scheduled Capture", value: "Yes" },
      { label: "Duration Capture", value: "Yes" },
      { label: "Timecode Sync", value: "Yes" },
    ],
  },
],
},
{
  id: "hero-13-black-ultra-wide-edition",
  name: "HERO13 Black Ultra Wide Edition",
  category: "Action Cameras",
  brand: "GoPro",
  price: "$649.99",
  slug: "hero-13-black-ultra-wide-edition",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/ultra-wide-edition.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"Widest + tallest POV shots, including a 177° field of view in 4K60.",
specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Processor", value: "GP2" },
      { label: "Image Sensor", value: '1/1.9" CMOS, 27.6MP' },
      { label: "Lens Aperture", value: "F2.5" },
      { label: "35mm Equivalent Focal Length", value: "12mm - 39mm" },
      { label: "Battery", value: "Removable 1900mAh Enduro Battery" },
    ],
  },

  {
    category: "Design & Build",
    items: [
      { label: "Dimensions", value: "71.8 × 50.8 × 33.6 mm (Standard Lens)" },
      { label: "Dimensions (Ultra Wide Lens)", value: "72.4 × 51.3 × 42.1 mm" },
      { label: "Weight", value: "159g (Standard Lens), 178g (Ultra Wide Lens)" },
      { label: "Displays", value: 'Rear 2.27" Touch Display, Front 1.4" Color Display' },
      { label: "Waterproof Rating", value: "10m (Standard Lens), 5m (Ultra Wide Lens)" },
    ],
  },

  {
    category: "Video",
    items: [
      { label: "Maximum Resolution", value: "5.3K up to 60fps (Standard Lens)" },
      { label: "4K Recording", value: "Up to 120fps (Standard Lens), 60fps (Ultra Wide Lens)" },
      { label: "1080p Recording", value: "Up to 240fps" },
      { label: "Video Compression", value: "H.265 (HEVC)" },
      { label: "Color Bit Depth", value: "8-bit, 10-bit (4K and above)" },
      { label: "Maximum Bit Rate", value: "120 Mbps" },
      { label: "Aspect Ratios", value: "16:9, 9:16, 4:3, 8:7, 1:1" },
      { label: "Video Stabilization", value: "HyperSmooth 6.0" },
    ],
  },

  {
    category: "Photo",
    items: [
      { label: "Photo Resolution", value: "27.13MP (Standard Lens), 15MP (Ultra Wide Lens)" },
      { label: "Photo Modes", value: "Standard Photo, Burst Photo, Night Photo" },
      { label: "Photo Output", value: "SuperPhoto, HDR, Standard, RAW" },
      { label: "Photo Format", value: "JPG, GPR (RAW)" },
      { label: "RAW Capture", value: "27.13MP RAW (Standard Lens)" },
      { label: "Frame Grabs", value: "Up to 24.69MP from 5.3K Video" },
    ],
  },

  {
    category: "Time Lapse",
    items: [
      { label: "TimeWarp", value: "TimeWarp 3.0 up to 5.3K (Standard Lens), 4K (Ultra Wide Lens)" },
      { label: "TimeWarp Speeds", value: "Auto, 2x, 5x, 10x, 15x, 30x" },
      { label: "Time Lapse Resolution", value: "Up to 5.3K" },
      { label: "Night Lapse", value: "Supported up to 5.3K" },
      { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Light Trails" },
    ],
  },

  {
    category: "Stabilization & HDR",
    items: [
      { label: "Video Stabilization", value: "HyperSmooth 6.0" },
      { label: "Horizon Lock", value: "360° Horizon Lock (Ultra Wide Lens Mod)" },
      { label: "HDR Video", value: "Supported up to 5.3K" },
      { label: "Exposure Control", value: "Supported" },
    ],
  },

  {
    category: "Lens Options",
    items: [
      { label: "Digital Lenses (Standard Lens)", value: "HyperView, SuperView, Wide, Linear" },
      { label: "Digital Lenses (Ultra Wide Lens)", value: "Ultra HyperView, Ultra SuperView, Ultra Wide, Wide, Linear" },
      { label: "Horizon Lock Lens", value: "Linear + Horizon Lock / Leveling" },
      { label: "Video Zoom", value: "Up to 2x (Standard Lens)" },
    ],
  },

  {
    category: "Connectivity & Storage",
    items: [
      { label: "Storage", value: "microSD (Class A2 V30 or higher)" },
      { label: "USB", value: "USB-C" },
      { label: "HDMI", value: "Media Mod Compatible" },
      { label: "Live Streaming", value: "1080p30 with HyperSmooth" },
      { label: "Webcam Mode", value: "Up to 1080p30" },
    ],
  },

  {
    category: "Advanced Features",
    items: [
      { label: "Looping Video", value: "Yes" },
      { label: "HindSight", value: "Yes" },
      { label: "Scheduled Capture", value: "Yes" },
      { label: "Duration Capture", value: "Yes" },
      { label: "Timecode Sync", value: "Yes" },
    ],
  },
],
},
{
  id: "hero-12-black",
  name: "HERO12 Black",
  category: "Action Cameras",
  brand: "GoPro",
  price: "$649.99",
  slug: "hero-12-black",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/hero-12.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"Iconic design for immersive videos.",
specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Processor", value: "GP2" },
      { label: "Image Sensor", value: '1/1.9" CMOS, 27.6MP' },
      { label: "Lens Aperture", value: "F2.5" },
      { label: "Field of View", value: "156° (8:7 aspect ratio)" },
      { label: "35mm Equivalent Focal Length", value: "12mm - 39mm" },
    ],
  },

  {
    category: "Design & Build",
    items: [
      { label: "Dimensions", value: "71.8 × 50.8 × 33.6 mm" },
      { label: "Weight", value: "154g (with battery), 121g (without battery)" },
      { label: "Displays", value: 'Rear 2.27" Touch Display, Front 1.4" Color Display' },
      { label: "Waterproof Rating", value: "10m without housing, 60m with protective housing" },
      { label: "Battery", value: "Removable 1720mAh Enduro Battery" },
    ],
  },

  {
    category: "Video",
    items: [
      { label: "Maximum Resolution", value: "5.3K up to 60fps" },
      { label: "4K Recording", value: "Up to 120fps" },
      { label: "1080p Recording", value: "Up to 240fps" },
      { label: "Slow Motion", value: "Up to 8x" },
      { label: "Video Compression", value: "H.265 (HEVC)" },
      { label: "Color Bit Depth", value: "8-bit, 10-bit (4K and higher)" },
      { label: "Maximum Bit Rate", value: "120 Mbps" },
      { label: "Aspect Ratios", value: "16:9, 9:16, 4:3, 8:7" },
      { label: "Video Stabilization", value: "HyperSmooth 6.0" },
    ],
  },

  {
    category: "Photo",
    items: [
      { label: "Photo Resolution", value: "27.13MP (5568 × 4872)" },
      { label: "Photo Modes", value: "Standard Photo, Burst Photo, Night Photo" },
      { label: "Photo Output", value: "SuperPhoto, HDR, Standard, RAW" },
      { label: "Photo Format", value: "JPG, GPR (RAW)" },
      { label: "RAW Capture", value: "27.13MP RAW" },
      { label: "Frame Grabs", value: "Up to 24.69MP from 5.3K Video" },
    ],
  },

  {
    category: "Time Lapse",
    items: [
      { label: "TimeWarp", value: "TimeWarp 3.0 up to 5.3K" },
      { label: "TimeWarp Speeds", value: "Auto, 2x, 5x, 10x, 15x, 30x" },
      { label: "Time Lapse Resolution", value: "Up to 5.3K" },
      { label: "Night Lapse", value: "Supported up to 5.3K" },
      { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Light Trails" },
    ],
  },

  {
    category: "Stabilization & HDR",
    items: [
      { label: "Video Stabilization", value: "HyperSmooth 6.0" },
      { label: "Horizon Lock", value: "360° Horizon Lock & Horizon Leveling" },
      { label: "HDR Video", value: "Supported up to 5.3K" },
      { label: "Exposure Compensation", value: "±2 EV" },
    ],
  },

  {
    category: "Lens Options",
    items: [
      { label: "Digital Lenses (Video)", value: "HyperView, SuperView, Wide, Linear" },
      { label: "Horizon Lock Lens", value: "Linear + Horizon Lock / Leveling" },
      { label: "Digital Lenses (Photo)", value: "Wide, Linear" },
      { label: "Video Zoom", value: "Up to 2x" },
    ],
  },

  {
    category: "Connectivity & Storage",
    items: [
      { label: "Storage", value: "microSD (Class A2 V30 or higher)" },
      { label: "USB", value: "USB-C" },
      { label: "HDMI", value: "Media Mod Compatible" },
      { label: "Live Streaming", value: "1080p60 with HyperSmooth" },
      { label: "Webcam Mode", value: "Up to 1080p30" },
    ],
  },

  {
    category: "Advanced Features",
    items: [
      { label: "Looping Video", value: "Yes" },
      { label: "HindSight", value: "Yes" },
      { label: "Scheduled Capture", value: "Yes" },
      { label: "Duration Capture", value: "Yes" },
      { label: "Timecode Sync", value: "Yes" },
    ],
  },
],
},
// 360 camera
{
  id: "max-2",
  name: "Max2",
  category: "360 Cameras",
  brand: "GoPro",
  price: "$499.99",
  slug: "max-2",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/max2.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"True 8K 360 video, replaceable glass lenses + new Reframe tools.",
specs: [
  {
    category: "General Specifications",
    items: [
      { label: "Video Modes", value: "360 Video, POV, Selfie, Looping, Single-Lens Video" },
      { label: "Image Processor", value: "GP2" },
      { label: "Image Sensor", value: '1/2.3"' },
      { label: "Lens Aperture", value: "F1.8" },
      { label: "35mm Equivalent Focal Length", value: "14mm - 26mm" },
    ],
  },

  {
    category: "Design & Build",
    items: [
      { label: "Dimensions", value: "64.0 × 69.7 × 48.7 mm" },
      { label: "Weight", value: "195g" },
      { label: "Battery", value: "1960mAh Enduro Battery" },
      { label: "Display", value: '1.82" Touch LCD' },
      { label: "Waterproof Rating", value: "5m (16 ft)" },
      { label: "Replaceable Lenses", value: "Yes" },
    ],
  },

  {
    category: "Video",
    items: [
      { label: "360 Video Resolution", value: "8K up to 30fps, 5.6K up to 60fps, 4K up to 100fps" },
      { label: "Single-Lens Resolution", value: "4K up to 60fps, 1080p up to 60fps" },
      { label: "Slow Motion", value: "Up to 3x (4K100)" },
      { label: "Video Stabilization", value: "Max HyperSmooth with 360° Horizon Lock" },
      { label: "Video Format", value: ".360, .MP4" },
      { label: "Video Compression", value: "H.265 (HEVC)" },
      { label: "Color Bit Depth", value: "8-bit, 10-bit" },
      { label: "Max Bit Rate", value: "120 Mbps" },
      { label: "GP-Log", value: "GP-Log with LUT Support" },
    ],
  },

  {
    category: "Photo",
    items: [
      { label: "360 Photo Resolution", value: "29MP (7680 × 3840)" },
      { label: "Single-Lens Photo Resolution", value: "12MP (4000 × 3000)" },
      { label: "Photo Output", value: "Standard, RAW (Single Lens)" },
      { label: "Photo Formats", value: ".36P, JPG, GPR" },
      { label: "Aspect Ratio", value: "4:3" },
      { label: "Frame Grabs", value: "Up to 12MP from 4K (4:3) Video" },
    ],
  },

  {
    category: "Time Lapse",
    items: [
      { label: "TimeWarp", value: "360: 8K30, 5.6K30 | Single-Lens: 4K30, 1080p30" },
      { label: "Time Lapse", value: "360: 8K30, 5.6K30" },
      { label: "Night Lapse", value: "360: 8K30, 5.6K30" },
      { label: "Creative Effects", value: "Star Trails, Light Painting, Vehicle Lights" },
    ],
  },

  {
    category: "Stabilization",
    items: [
      { label: "Video Stabilization", value: "Max HyperSmooth" },
      { label: "Horizon Lock", value: "360° Horizon Lock" },
      { label: "Lens Priority Exposure", value: "Supported" },
    ],
  },

  {
    category: "Capture Modes",
    items: [
      { label: "360 Modes", value: "Video, POV, Selfie, Looping" },
      { label: "Single-Lens Modes", value: "Video, Photo, TimeWarp" },
      { label: "Photo Modes", value: "Photo, Burst Photo, Night Photo" },
      { label: "Time Lapse Modes", value: "TimeWarp, Time Lapse, Night Lapse, Star Trails, Light Painting, Vehicle Lights" },
    ],
  },

  {
    category: "Lens Options",
    items: [
      { label: "Digital Lenses", value: "Max HyperView, Max SuperView, Ultra Wide, Wide, Linear" },
      { label: "Photo Lenses", value: "Ultra Wide, Wide, Linear" },
      { label: "Aspect Ratios", value: "16:9, 9:16, 4:3" },
    ],
  },
],
},
{
  id: "max",
  name: "Max",
  category: "360 Cameras",
  brand: "GoPro",
  price: "$369.99",
  slug: "max",
  status: "In Stock",

  colors: [
    {
      name: "Black",
      images: [
        "/products/gopro/max.webp",
      ],
    },
  ],

  lenses: ["Body Only"],
  overview:"5.6K 360 video, easy Reframing + more.",
specs: [
  {
  category: "Camera Features",
  items: [
    { label: "Capture Types", value: "Traditional GoPro HERO Capture, 360 Capture" },
    { label: "Video Stabilization", value: "Max HyperSmooth" },
    { label: "Horizon Leveling", value: "Supported" },
    { label: "PowerPano", value: "Supported" },
    { label: "Audio", value: "Premium 360 Audio, Stereo Audio, Directional Audio" },
    { label: "Live Streaming", value: "1080p Live Streaming" },
    { label: "Voice Control", value: "Supported" },
    { label: "360 Editing", value: "In-Camera Stitching, Reframe via GoPro App" },
    { label: "Design", value: "Compact Design with Built-In Folding Fingers" },
    { label: "Waterproof Rating", value: "5m (16 ft)" },
  ],
},

{
  category: "Audio & Connectivity",
  items: [
    { label: "Microphone System", value: "6-Mic Processing with Advanced Wind Noise Reduction" },
    { label: "Audio Recording", value: "Stereo Audio, 360 Audio, RAW Audio (.wav)" },
    { label: "Wireless Connectivity", value: "Wi-Fi, Bluetooth" },
    { label: "GPS", value: "Built-in GPS" },
    { label: "Mobile Connectivity", value: "GoPro App Support" },
    { label: "Cloud Backup", value: "Auto Upload with GoPro PLUS Subscription" },
    { label: "Port", value: "USB-C" },
  ],
},

{
  category: "Video",
  items: [
    { label: "360 Video", value: "6K Source / 5.6K Stitched, 3K Source / Stitched" },
    { label: "HERO Video", value: "1440p, 1080p" },
    { label: "Video Format", value: "MP4 (H.264/AVC, H.265/HEVC)" },
    { label: "Max Bit Rate", value: "78 Mbps" },
    { label: "Slow Motion", value: "Up to 2x" },
    { label: "Additional Features", value: "Exposure Control, Live Streaming, Short Clips, On-Screen Shortcuts" },
  ],
},

{
  category: "Photo",
  items: [
    { label: "360 Photos", value: "18MP Source, 16.6MP Stitched" },
    { label: "HERO Photo", value: "5.5MP" },
    { label: "PowerPano", value: "6.2MP 270° Panoramic Photo" },
    { label: "Photo Lenses", value: "Max SuperView, Wide" },
    { label: "Additional Features", value: "Photo Timer, Horizon Leveling, Protune" },
  ],
},

{
  category: "Time Lapse",
  items: [
    { label: "TimeWarp", value: "360 TimeWarp, HERO TimeWarp" },
    { label: "Time Lapse Modes", value: "360 Time Lapse Video, 360 Time Lapse Photo, HERO Time Lapse Video, HERO Time Lapse Photo" },
    { label: "Intervals", value: "0.5s to 60min" },
    { label: "Additional Features", value: "Protune, On-Screen Shortcuts" },
  ],
},

{
  category: "Hardware",
  items: [
    { label: "Processor", value: "GP1" },
    { label: "Battery", value: "Removable 1600mAh Enduro Lithium-Ion Battery" },
    { label: "Digital Lenses", value: "Supported" },
    { label: "Touch Display", value: "Intuitive Touch Screen with Touch Zoom" },
  ],
},

{
  category: "In The Box",
  items: [
    { label: "Included Items", value: "GoPro MAX Camera, Enduro Battery, Curved Adhesive Mount, 2 Rubber Lens Caps, Microfiber Bag, Mounting Buckle, USB-C Cable, Long Thumbscrew, Stickers, Warranty" },
  ],
},

{
  category: "Compatibility",
  items: [
    { label: "Accessories Support", value: "Compatible with 30+ GoPro Accessories" },
  ],
},
],
},
];
