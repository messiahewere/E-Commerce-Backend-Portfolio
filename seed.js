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
  // ELECTRONICS
  {
    title: "Wireless Bluetooth Headphones",
    description: "Noise-cancelling headphones with 40h battery life.",
    price: 89.99,
    category: "Electronics",
    brand: "SoundCore",
    rating: 4.5,
    stock: 35,
    images: ["https://picsum.photos/400?random=1"]
  },
  {
    title: "Smart Fitness Watch",
    description: "Tracks heart rate, sleep, and steps. Waterproof.",
    price: 129.00,
    category: "Electronics",
    brand: "FitPulse",
    rating: 4.3,
    stock: 50,
    images: ["https://picsum.photos/400?random=2"]
  },
  {
    title: "4K Smart TV (55-inch)",
    description: "Ultra HD display with built-in streaming apps.",
    price: 499.00,
    category: "Electronics",
    brand: "VisionMax",
    rating: 4.7,
    stock: 20,
    images: ["https://picsum.photos/400?random=3"]
  },
  {
    title: "Portable Bluetooth Speaker",
    description: "Waterproof speaker with deep bass.",
    price: 39.99,
    category: "Electronics",
    brand: "BoomFlex",
    rating: 4.4,
    stock: 60,
    images: ["https://picsum.photos/400?random=4"]
  },
  {
    title: "Noise Cancelling Earbuds",
    description: "True wireless earbuds with touch control.",
    price: 59.99,
    category: "Electronics",
    brand: "AirTune",
    rating: 4.6,
    stock: 44,
    images: ["https://picsum.photos/400?random=5"]
  },

  // FASHION
  {
    title: "Men's Leather Sneakers",
    description: "Comfortable everyday sneakers.",
    price: 59.99,
    category: "Fashion",
    brand: "UrbanWalk",
    rating: 4.4,
    stock: 40,
    images: ["https://picsum.photos/400?random=6"]
  },
  {
    title: "Women's Denim Jacket",
    description: "Lightweight stylish denim jacket.",
    price: 45.00,
    category: "Fashion",
    brand: "BlueFit",
    rating: 4.6,
    stock: 28,
    images: ["https://picsum.photos/400?random=7"]
  },
  {
    title: "Men's Wristwatch",
    description: "Water-resistant analog watch.",
    price: 79.99,
    category: "Fashion",
    brand: "TimePro",
    rating: 4.7,
    stock: 22,
    images: ["https://picsum.photos/400?random=8"]
  },
  {
    title: "Women's Running Shoes",
    description: "Breathable shoes for gym and running.",
    price: 52.00,
    category: "Fashion",
    brand: "RunFit",
    rating: 4.3,
    stock: 37,
    images: ["https://picsum.photos/400?random=9"]
  },
  {
    title: "Men's Slim Fit Jeans",
    description: "Stretchable all-day comfort denim.",
    price: 29.99,
    category: "Fashion",
    brand: "DenimWorks",
    rating: 4.1,
    stock: 49,
    images: ["https://picsum.photos/400?random=10"]
  },

  // HOME
  {
    title: "Stainless Steel Water Bottle",
    description: "Double-wall insulated steel bottle.",
    price: 16.99,
    category: "Home",
    brand: "HydroMax",
    rating: 4.4,
    stock: 90,
    images: ["https://picsum.photos/400?random=11"]
  },
  {
    title: "Non-Stick Frying Pan",
    description: "Durable non-stick cooking pan.",
    price: 22.50,
    category: "Home",
    brand: "CookMate",
    rating: 4.3,
    stock: 33,
    images: ["https://picsum.photos/400?random=12"]
  },
  {
    title: "Electric Kettle",
    description: "Fast-boil kettle with auto shut-off.",
    price: 29.99,
    category: "Home",
    brand: "HeatWave",
    rating: 4.6,
    stock: 47,
    images: ["https://picsum.photos/400?random=13"]
  },
  {
    title: "Memory Foam Pillow",
    description: "Orthopedic memory foam pillow.",
    price: 34.99,
    category: "Home",
    brand: "SleepWell",
    rating: 4.2,
    stock: 60,
    images: ["https://picsum.photos/400?random=14"]
  },
  {
    title: "LED Desk Lamp",
    description: "Adjustable lamp with USB charging.",
    price: 18.99,
    category: "Home",
    brand: "BrightLite",
    rating: 4.5,
    stock: 70,
    images: ["https://picsum.photos/400?random=15"]
  },

  // BEAUTY
  {
    title: "Vitamin C Serum",
    description: "Brightening face serum.",
    price: 15.99,
    category: "Beauty",
    brand: "GlowSkin",
    rating: 4.6,
    stock: 85,
    images: ["https://picsum.photos/400?random=16"]
  },
  {
    title: "Hair Growth Oil",
    description: "Strengthens and thickens hair.",
    price: 12.99,
    category: "Beauty",
    brand: "HairBloom",
    rating: 4.3,
    stock: 64,
    images: ["https://picsum.photos/400?random=17"]
  },
  {
    title: "Face Moisturizer",
    description: "Daily hydrating face cream.",
    price: 9.99,
    category: "Beauty",
    brand: "HydraCare",
    rating: 4.2,
    stock: 72,
    images: ["https://picsum.photos/400?random=18"]
  },
  {
    title: "Beard Oil",
    description: "Softens beard and adds shine.",
    price: 11.50,
    category: "Beauty",
    brand: "BeardPro",
    rating: 4.4,
    stock: 53,
    images: ["https://picsum.photos/400?random=19"]
  },

  // SPORTS
  {
    title: "Yoga Mat",
    description: "Non-slip yoga mat (10mm thickness).",
    price: 21.99,
    category: "Sports",
    brand: "FlexFit",
    rating: 4.5,
    stock: 45,
    images: ["https://picsum.photos/400?random=20"]
  },
  {
    title: "Adjustable Dumbbells",
    description: "Adjustable weights for home gym.",
    price: 39.99,
    category: "Sports",
    brand: "PowerX",
    rating: 4.7,
    stock: 28,
    images: ["https://picsum.photos/400?random=21"]
  },
  {
    title: "Football",
    description: "Durable PU training football.",
    price: 14.99,
    category: "Sports",
    brand: "KickPro",
    rating: 4.1,
    stock: 55,
    images: ["https://picsum.photos/400?random=22"]
  },
  {
    title: "Running Shoes",
    description: "Shock-absorbing lightweight shoes.",
    price: 49.99,
    category: "Sports",
    brand: "RunFlex",
    rating: 4.4,
    stock: 37,
    images: ["https://picsum.photos/400?random=23"]
  },

  // GAMING
  {
    title: "Gaming Mouse",
    description: "RGB gaming mouse with 6 buttons.",
    price: 29.99,
    category: "Gaming",
    brand: "ProClick",
    rating: 4.6,
    stock: 50,
    images: ["https://picsum.photos/400?random=24"]
  },
  {
    title: "PlayStation Wireless Controller",
    description: "DualShock controller for gaming.",
    price: 59.99,
    category: "Gaming",
    brand: "Sony",
    rating: 4.8,
    stock: 29,
    images: ["https://picsum.photos/400?random=25"]
  },

  // OFFICE
  {
    title: "Laptop Stand",
    description: "Adjustable aluminum laptop stand.",
    price: 25.00,
    category: "Office",
    brand: "WorkEase",
    rating: 4.5,
    stock: 60,
    images: ["https://picsum.photos/400?random=26"]
  },
  {
    title: "Office Desk Chair",
    description: "Ergonomic mesh office chair.",
    price: 89.99,
    category: "Office",
    brand: "ProSit",
    rating: 4.3,
    stock: 25,
    images: ["https://picsum.photos/400?random=27"]
  },
  {
    title: "USB Desk Fan",
    description: "Compact quiet USB fan.",
    price: 11.99,
    category: "Office",
    brand: "CoolBreeze",
    rating: 4.2,
    stock: 75,
    images: ["https://picsum.photos/400?random=28"]
  },

  // ACCESSORIES
  {
    title: "Power Bank 10000mAh",
    description: "Fast-charging portable power bank.",
    price: 24.99,
    category: "Accessories",
    brand: "ChargeGo",
    rating: 4.6,
    stock: 42,
    images: ["https://picsum.photos/400?random=29"]
  },
  {
    title: "Travel Backpack",
    description: "Water-resistant backpack with compartments.",
    price: 39.99,
    category: "Accessories",
    brand: "TravelPro",
    rating: 4.5,
    stock: 33,
    images: ["https://picsum.photos/400?random=30"]
  },

  // MORE FILLERS
  {
    title: "Scented Candle Set",
    description: "Lavender and vanilla scented candles.",
    price: 19.99,
    category: "Home",
    brand: "Calmify",
    rating: 4.6,
    stock: 41,
    images: ["https://picsum.photos/400?random=31"]
  },
  {
    title: "Knife Set",
    description: "6-piece stainless steel kitchen knives.",
    price: 27.99,
    category: "Home",
    brand: "ChefPro",
    rating: 4.3,
    stock: 39,
    images: ["https://picsum.photos/400?random=32"]
  },
  {
    title: "Bluetooth Car Adapter",
    description: "Hands-free calls and music streaming.",
    price: 14.99,
    category: "Electronics",
    brand: "DriveSound",
    rating: 4.2,
    stock: 57,
    images: ["https://picsum.photos/400?random=33"]
  },
  {
    title: "Leather Wallet",
    description: "Minimalist men's leather wallet.",
    price: 22.00,
    category: "Fashion",
    brand: "PocketMan",
    rating: 4.5,
    stock: 32,
    images: ["https://picsum.photos/400?random=34"]
  },
  {
    title: "Baby Feeding Bottle",
    description: "Anti-colic BPA-free feeding bottle.",
    price: 9.99,
    category: "Baby",
    brand: "BabyCare",
    rating: 4.7,
    stock: 58,
    images: ["https://picsum.photos/400?random=35"]
  },
  {
    title: "Wireless Keyboard",
    description: "Silent keys, slim design.",
    price: 32.99,
    category: "Electronics",
    brand: "KeyLite",
    rating: 4.4,
    stock: 48,
    images: ["https://picsum.photos/400?random=36"]
  },
  {
    title: "Air Purifier",
    description: "Removes dust, pollen, and odors.",
    price: 59.99,
    category: "Home",
    brand: "PureAir",
    rating: 4.6,
    stock: 22,
    images: ["https://picsum.photos/400?random=37"]
  },
  {
    title: "Smart Light Bulb",
    description: "WiFi-enabled RGB LED bulb.",
    price: 12.99,
    category: "Home",
    brand: "GlowSmart",
    rating: 4.5,
    stock: 63,
    images: ["https://picsum.photos/400?random=38"]
  },
  {
    title: "Car Phone Holder",
    description: "Dashboard/windshield phone mount.",
    price: 10.99,
    category: "Accessories",
    brand: "GripPro",
    rating: 4.3,
    stock: 72,
    images: ["https://picsum.photos/400?random=39"]
  },
  {
    title: "Wireless Earbud Case",
    description: "Shockproof silicone case.",
    price: 6.99,
    category: "Accessories",
    brand: "CaseCraft",
    rating: 4.1,
    stock: 55,
    images: ["https://picsum.photos/400?random=40"]
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