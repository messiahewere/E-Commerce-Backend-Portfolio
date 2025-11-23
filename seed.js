const mongoose = require('mongoose');
require('dotenv').config()
const Product = require('./schema/product-schema');

// One option that can be used for connecting to the database
// mongoose.connect(process.env.MONGO_URI)
// .then(() => console.log('DB connected'))
// .catch((err) => console.log(err.message));

// Using Try Catch Async Function
const dbConnectSeed = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected for seeding');
        await seedDb();
        
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

const products = [
  // ----------------------- ELECTRONICS -----------------------
  {
    title: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling over-ear headphones with 40h battery life.",
    price: 89.99,
    category: "Electronics",
    brand: "SoundCore",
    rating: 4.5,
    stock: 35,
    images: ["https://i.imgur.com/XX1.jpg"]
  },
  {
    title: "Smart Fitness Watch",
    description: "Tracks heart rate, sleep, calories, and supports notifications.",
    price: 129.00,
    category: "Electronics",
    brand: "FitMax",
    rating: 4.2,
    stock: 50,
    images: ["https://i.imgur.com/XX2.jpg"]
  },
  {
    title: "4K Ultra HD Smart TV (55-inch)",
    description: "Crystal clear 4K resolution with built-in streaming apps.",
    price: 499.00,
    category: "Electronics",
    brand: "VisionX",
    rating: 4.7,
    stock: 20,
    images: ["https://i.imgur.com/XX3.jpg"]
  },
  {
    title: "Portable Bluetooth Speaker",
    description: "Deep bass, waterproof, 18h playtime.",
    price: 39.99,
    category: "Electronics",
    brand: "BoomBox",
    rating: 4.4,
    stock: 60,
    images: ["https://i.imgur.com/XX4.jpg"]
  },
  {
    title: "Noise Cancelling Earbuds",
    description: "Lightweight earbuds with touch control and charging case.",
    price: 59.99,
    category: "Electronics",
    brand: "AirTune",
    rating: 4.6,
    stock: 44,
    images: ["https://i.imgur.com/XX5.jpg"]
  },
  {
    title: "Gaming Mechanical Keyboard",
    description: "RGB lighting, fast switches, and aluminum frame.",
    price: 75.00,
    category: "Electronics",
    brand: "RedLine",
    rating: 4.8,
    stock: 32,
    images: ["https://i.imgur.com/XX6.jpg"]
  },
  {
    title: "1080p HD Webcam",
    description: "Perfect for Zoom meetings and streaming.",
    price: 24.99,
    category: "Electronics",
    brand: "StreamPro",
    rating: 4.1,
    stock: 80,
    images: ["https://i.imgur.com/XX7.jpg"]
  },
  {
    title: "Wireless Phone Charger",
    description: "Fast charging pad compatible with all Qi devices.",
    price: 19.99,
    category: "Electronics",
    brand: "ChargeNow",
    rating: 4.3,
    stock: 75,
    images: ["https://i.imgur.com/XX8.jpg"]
  },

  // ----------------------- FASHION -----------------------
  {
    title: "Men's Classic Leather Sneakers",
    description: "Comfortable and stylish sneakers for daily wear.",
    price: 59.99,
    category: "Fashion",
    brand: "UrbanWalk",
    rating: 4.4,
    stock: 40,
    images: ["https://i.imgur.com/F1.jpg"]
  },
  {
    title: "Women's Denim Jacket",
    description: "Trendy lightweight denim jacket.",
    price: 45.00,
    category: "Fashion",
    brand: "BlueFit",
    rating: 4.6,
    stock: 28,
    images: ["https://i.imgur.com/F2.jpg"]
  },
  {
    title: "Men's Cotton Hoodie",
    description: "Soft, warm, and perfect for cold weather.",
    price: 35.00,
    category: "Fashion",
    brand: "CozyWear",
    rating: 4.2,
    stock: 55,
    images: ["https://i.imgur.com/F3.jpg"]
  },
  {
    title: "Women's Handbag",
    description: "Premium PU leather handbag with compartments.",
    price: 42.00,
    category: "Fashion",
    brand: "StylePro",
    rating: 4.5,
    stock: 31,
    images: ["https://i.imgur.com/F4.jpg"]
  },
  {
    title: "Men's Wristwatch",
    description: "Water-resistant analog watch with steel strap.",
    price: 79.99,
    category: "Fashion",
    brand: "TimeMax",
    rating: 4.7,
    stock: 22,
    images: ["https://i.imgur.com/F5.jpg"]
  },
  {
    title: "Women's Sneakers",
    description: "Lightweight sports sneakers for running.",
    price: 52.00,
    category: "Fashion",
    brand: "RunFit",
    rating: 4.3,
    stock: 37,
    images: ["https://i.imgur.com/F6.jpg"]
  },
  {
    title: "Men's Slim Fit Jeans",
    description: "Stretchable and comfortable denim.",
    price: 29.99,
    category: "Fashion",
    brand: "DenimLab",
    rating: 4.1,
    stock: 49,
    images: ["https://i.imgur.com/F7.jpg"]
  },

  // ----------------------- HOME & KITCHEN -----------------------
  {
    title: "Stainless Steel Water Bottle",
    description: "Double-wall insulated, keeps temperature for 24h.",
    price: 16.99,
    category: "Home",
    brand: "HydroMax",
    rating: 4.4,
    stock: 90,
    images: ["https://i.imgur.com/H1.jpg"]
  },
  {
    title: "Non-Stick Frying Pan",
    description: "Durable non-stick coating with ergonomic handle.",
    price: 22.50,
    category: "Home",
    brand: "CookPro",
    rating: 4.3,
    stock: 33,
    images: ["https://i.imgur.com/H2.jpg"]
  },
  {
    title: "Electric Kettle",
    description: "Fast-boil electric kettle with auto shut-off.",
    price: 29.99,
    category: "Home",
    brand: "HeatWave",
    rating: 4.6,
    stock: 47,
    images: ["https://i.imgur.com/H3.jpg"]
  },
  {
    title: "Memory Foam Pillow",
    description: "Comfortable orthopedic pillow for deep sleep.",
    price: 34.99,
    category: "Home",
    brand: "SleepWell",
    rating: 4.2,
    stock: 60,
    images: ["https://i.imgur.com/H4.jpg"]
  },
  {
    title: "LED Desk Lamp",
    description: "Adjustable brightness with USB charging port.",
    price: 18.99,
    category: "Home",
    brand: "BrightLite",
    rating: 4.5,
    stock: 70,
    images: ["https://i.imgur.com/H5.jpg"]
  },

  // ----------------------- BEAUTY -----------------------
  {
    title: "Vitamin C Serum",
    description: "Brightens skin and reduces dark spots.",
    price: 15.99,
    category: "Beauty",
    brand: "GlowSkin",
    rating: 4.6,
    stock: 85,
    images: ["https://i.imgur.com/B1.jpg"]
  },
  {
    title: "Hair Growth Oil",
    description: "Strengthens weak hair and promotes growth.",
    price: 12.99,
    category: "Beauty",
    brand: "HairBloom",
    rating: 4.3,
    stock: 64,
    images: ["https://i.imgur.com/B2.jpg"]
  },
  {
    title: "Face Moisturizer",
    description: "Hydrating cream for daily use.",
    price: 9.99,
    category: "Beauty",
    brand: "HydraCare",
    rating: 4.2,
    stock: 72,
    images: ["https://i.imgur.com/B3.jpg"]
  },
  {
    title: "Beard Oil",
    description: "Softens and nourishes beard hair.",
    price: 11.50,
    category: "Beauty",
    brand: "BeardPro",
    rating: 4.4,
    stock: 53,
    images: ["https://i.imgur.com/B4.jpg"]
  },

  // ----------------------- SPORTS -----------------------
  {
    title: "Yoga Mat",
    description: "Non-slip mat with 10mm thickness for comfort.",
    price: 21.99,
    category: "Sports",
    brand: "FlexFit",
    rating: 4.5,
    stock: 45,
    images: ["https://i.imgur.com/S1.jpg"]
  },
  {
    title: "Adjustable Dumbbells (Pair)",
    description: "Perfect for home gym workouts.",
    price: 39.99,
    category: "Sports",
    brand: "PowerX",
    rating: 4.7,
    stock: 28,
    images: ["https://i.imgur.com/S2.jpg"]
  },
  {
    title: "Football",
    description: "Durable PU football for training and play.",
    price: 14.99,
    category: "Sports",
    brand: "KickPro",
    rating: 4.1,
    stock: 55,
    images: ["https://i.imgur.com/S3.jpg"]
  },
  {
    title: "Running Shoes",
    description: "Breathable shoes with shock absorption.",
    price: 49.99,
    category: "Sports",
    brand: "RunFlex",
    rating: 4.4,
    stock: 37,
    images: ["https://i.imgur.com/S4.jpg"]
  },

  // ----------------------- GAMING -----------------------
  {
    title: "Gaming Mouse",
    description: "RGB lighting, ergonomic, 6 programmable buttons.",
    price: 29.99,
    category: "Gaming",
    brand: "ProClick",
    rating: 4.6,
    stock: 50,
    images: ["https://i.imgur.com/G1.jpg"]
  },
  {
    title: "PlayStation Wireless Controller",
    description: "DualShock controller with vibration feedback.",
    price: 59.99,
    category: "Gaming",
    brand: "Sony",
    rating: 4.8,
    stock: 29,
    images: ["https://i.imgur.com/G2.jpg"]
  },
  {
    title: "Gaming Chair",
    description: "Ergonomic chair with lumbar support.",
    price: 149.99,
    category: "Gaming",
    brand: "GameSeat",
    rating: 4.5,
    stock: 21,
    images: ["https://i.imgur.com/G3.jpg"]
  },
  {
    title: "VR Headset",
    description: "Immersive virtual reality headset.",
    price: 199.99,
    category: "Gaming",
    brand: "VRPro",
    rating: 4.7,
    stock: 18,
    images: ["https://i.imgur.com/G4.jpg"]
  },

  // ----------------------- OFFICE -----------------------
  {
    title: "Laptop Stand",
    description: "Adjustable aluminum stand for laptops.",
    price: 25.00,
    category: "Office",
    brand: "WorkEase",
    rating: 4.5,
    stock: 60,
    images: ["https://i.imgur.com/O1.jpg"]
  },
  {
    title: "Office Desk Chair",
    description: "Comfortable chair with breathable mesh.",
    price: 89.99,
    category: "Office",
    brand: "ProSit",
    rating: 4.3,
    stock: 25,
    images: ["https://i.imgur.com/O2.jpg"]
  },
  {
    title: "USB Desk Fan",
    description: "Quiet small fan for desk use.",
    price: 11.99,
    category: "Office",
    brand: "CoolBreeze",
    rating: 4.2,
    stock: 75,
    images: ["https://i.imgur.com/O3.jpg"]
  },

  // ----------------------- ACCESSORIES -----------------------
  {
    title: "Wireless Earbuds Case",
    description: "Protective silicone case for earbuds.",
    price: 7.99,
    category: "Accessories",
    brand: "CaseCraft",
    rating: 4.1,
    stock: 70,
    images: ["https://i.imgur.com/A1.jpg"]
  },
  {
    title: "Portable Power Bank (10000mAh)",
    description: "Fast charging power bank with dual USB ports.",
    price: 24.99,
    category: "Accessories",
    brand: "ChargeGo",
    rating: 4.6,
    stock: 42,
    images: ["https://i.imgur.com/A2.jpg"]
  },
  {
    title: "Travel Backpack",
    description: "Water-resistant bag with laptop compartment.",
    price: 39.99,
    category: "Accessories",
    brand: "TravelPro",
    rating: 4.5,
    stock: 33,
    images: ["https://i.imgur.com/A3.jpg"]
  },

  // FILLERS TO MAKE IT 50 ITEMS -----------------------------------
  {
    title: "Scented Candles Set",
    description: "Lavender & vanilla aromatherapy candles.",
    price: 19.99,
    category: "Home",
    brand: "Calmify",
    rating: 4.6,
    stock: 41,
    images: ["https://i.imgur.com/H6.jpg"]
  },
  {
    title: "Laptop Backpack",
    description: "Anti-theft design with multiple pockets.",
    price: 34.99,
    category: "Accessories",
    brand: "SecurePack",
    rating: 4.4,
    stock: 29,
    images: ["https://i.imgur.com/A4.jpg"]
  },
  {
    title: "Stainless Steel Knife Set",
    description: "Sharp, durable cooking knives.",
    price: 27.99,
    category: "Home",
    brand: "ChefPro",
    rating: 4.3,
    stock: 39,
    images: ["https://i.imgur.com/H7.jpg"]
  },
  {
    title: "Bluetooth Car Adapter",
    description: "Hands-free calls and music streaming.",
    price: 14.99,
    category: "Electronics",
    brand: "DriveSound",
    rating: 4.2,
    stock: 57,
    images: ["https://i.imgur.com/XX9.jpg"]
  },
  {
    title: " men's Wallet",
    description: "Leather slim wallet with card slots.",
    price: 22.00,
    category: "Fashion",
    brand: "PocketMan",
    rating: 4.5,
    stock: 32,
    images: ["https://i.imgur.com/F8.jpg"]
  }
];

const seedDb = async () => {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log('DB Seeded');
    process.exit();
}

dbConnectSeed();
// seedDb();