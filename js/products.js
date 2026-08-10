// ============================================
// PRODUCT DATABASE
// ============================================

const PRODUCTS = [
    {
        id: 1,
        name: "Wireless Keyboard",
        category: "computers",
        price: 59.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 128,
        description: "Sleek wireless keyboard with responsive keys, multi-device pairing, and a 30-hour battery life.",
        image: "/src/black-keyboard-with-letters-f-letters-f.png",
        images: [
            "/src/black-keyboard-with-letters-f-letters-f.png",
            "/src/untitled-design-66.png"
        ],
        brand: "KeyTech",
        size: "14.2 x 5.1 x 0.8 inches",
        weight: "0.9 pounds",
        inStock: true,
        features: [
            "Quiet, Responsive Keys",
            "30-Hour Battery Life",
            "Bluetooth 5.0 Connectivity",
            "Multi-Device Pairing",
            "Quick Charge Technology"
        ],
        specs: {
            dimensions: "14.2 x 5.1 x 0.8 inches",
            weight: "0.9 pounds",
            material: "Premium Aluminum & Silicone",
            warranty: "2-Year Limited"
        },
        fullDescription: "Our premium wireless keyboard is engineered for typists and casual users alike. With responsive, quiet keys and reliable Bluetooth connectivity, it delivers a smooth and comfortable typing experience. The 30-hour battery life keeps you working without interruption, while quick charge technology gets you hours of use from just a short top-up. Seamlessly pair and switch between multiple devices."
    },
    {
        id: 2,  
        name: "VR Headset",
        category: "technology",
        price: 499.99,
        originalPrice: 699.99,
        rating: 4.8,
        reviews: 256,
        description: "Immersive VR headset with high-resolution displays, wide field of view, and precise motion tracking.",
        image: "/src/vr.png",
        images: [
            "/src/vr.png",
            "/src/untitled-design-66.png"
        ],
        brand: "VisionTech",
        size: "7.5 x 4.5 x 3.8 inches",
        weight: "1.1 pounds",
        inStock: true,
        features: [
            "High-Resolution Displays",
            "110° Wide Field of View",
            "6DoF Motion Tracking",
            "Adjustable, Comfort-Fit Strap",
            "Built-in Spatial Audio"
        ],
        specs: {
            dimensions: "7.5 x 4.5 x 3.8 inches",
            weight: "1.1 pounds",
            material: "Premium Plastic & Foam Padding",
            warranty: "2-Year Limited"
        },
        fullDescription: "Step into fully immersive virtual worlds with our advanced VR headset. Its high-resolution displays and wide field of view deliver stunningly sharp, lifelike visuals, while precise 6-degrees-of-freedom motion tracking keeps every movement responsive and natural. The adjustable, comfort-fit strap and built-in spatial audio make extended gaming and exploration sessions comfortable and immersive."
    },
    {
        id: 3,
        name: "Smart Speaker",
        category: "technology",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.6,
        reviews: 342,
        description: "Voice-controlled smart speaker with premium sound quality and seamless smart home integration.",
        image: "/src/smart_speaker_virtual_assistant_it_is_used_keep_home_connected_give.png",
        images: [
            "/src/smart_speaker_virtual_assistant_it_is_used_keep_home_connected_give.png",
            "/src/untitled-design-66.png"
        ],
        brand: "SoundTech",
        size: "4.3 x 4.3 x 3.8 inches",
        weight: "0.6 pounds",
        inStock: true,
        features: [
            "360° Sound",
            "Smart Home Control",
            "Voice Activation",
            "Multi-Room Audio",
            "Premium Bass"
        ],
        specs: {
            dimensions: "4.3 x 4.3 x 3.8 inches",
            weight: "0.6 pounds",
            material: "Premium Fabric & Aluminum",
            warranty: "1-Year Limited"
        },
        fullDescription: "Transform your living space with our advanced smart speaker. Its 360-degree sound system delivers immersive audio in every direction. Control your smart home devices with natural voice commands, stream music from all major platforms, and enjoy multi-room audio synchronized across your home."
    },
    {
        id: 4,
        name: "Gaming Headset",
        category: "audio",
        price: 129.99,
        originalPrice: 179.99,
        rating: 4.7,
        reviews: 189,
        description: "Professional gaming headset with 7.1 surround sound and ultra-comfortable design for extended sessions.",
        image: "/src/headphones-audio-listen.png",
        images: [
            "/src/headphones-audio-listen.png",
            "/src/untitled-design-66.png"
        ],
        brand: "GameAudio",
        size: "9.5 x 8.2 x 3.5 inches",
        weight: "1.2 pounds",
        inStock: true,
        features: [
            "7.1 Surround Sound",
            "Noise-Canceling Mic",
            "Memory Foam Ear Cups",
            "RGB Lighting",
            "Multi-Platform Support"
        ],
        specs: {
            dimensions: "9.5 x 8.2 x 3.5 inches",
            weight: "1.2 pounds",
            material: "Premium Plastic & Memory Foam",
            warranty: "2-Year Limited"
        },
        fullDescription: "Dominate your games with professional-grade audio. The 7.1 surround sound system gives you a competitive edge by providing precise directional audio cues. The ultra-comfortable memory foam ear cups support extended gaming sessions, while the noise-canceling microphone ensures your team hears you perfectly."
    },
    {
        id: 5,
        name: "Mac Book Air M5",
        category: "computers",
        price: 899.99,
        originalPrice: 999.99,
        rating: 4.4,
        reviews: 267,
        description: "Ultra-thin laptop with the M5 chip, all-day battery life, and a stunning Liquid Retina display.",
        image: "/src/untitled-design-66.png",
        images: [
            "/src/untitled-design-66.png",
            "/src/modern-black-smartwatch-with-fabric-strap.png"
        ],
        brand: "Apple",
        size: "11.97 x 8.46 x 0.44 inches",
        weight: "2.7 pounds",
        inStock: true,
        features: [
            "M5 Chip Performance",
            "Up to 18-Hour Battery Life",
            "13.6-inch Liquid Retina Display",
            "Fanless, Silent Design",
            "1080p FaceTime HD Camera"
        ],
        specs: {
            dimensions: "11.97 x 8.46 x 0.44 inches",
            weight: "2.7 pounds",
            material: "Recycled Aluminum",
            warranty: "1-Year Limited"
        },
        fullDescription: "Perfect for work, study, and everything in between. This ultra-thin laptop features the powerful M5 chip for fast, fanless performance and up to 18 hours of battery life on a single charge. The stunning 13.6-inch Liquid Retina display delivers crisp visuals and vivid color, while the sleek all-aluminum design makes it easy to take anywhere."
    },
    {
        id: 6,
        name: "Wireless Mouse",
        category: "computers",
        price: 39.99,
        originalPrice: 79.99,
        rating: 4.5,
        reviews: 156,
        description: "Precision wireless mouse with ergonomic design and 18-month battery life.",
        image: "/src/black-wireless-computer-mouse-with-blue-light.png",
        images: [
            "/src/black-wireless-computer-mouse-with-blue-light.png",
            "/src/black-keyboard-with-letters-f-letters-f.png"
        ],
        brand: "MouseTech",
        size: "2.8 x 4.2 x 1.6 inches",
        weight: "0.2 pounds",
        inStock: true,
        features: [
            "Ergonomic Design",
            "18-Month Battery Life",
            "2.4GHz Wireless",
            "Precision Tracking",
            "6 Programmable Buttons"
        ],
        specs: {
            dimensions: "2.8 x 4.2 x 1.6 inches",
            weight: "0.2 pounds",
            material: "Premium Plastic & Rubber",
            warranty: "2-Year Limited"
        },
        fullDescription: "Experience precise control with our professional wireless mouse. The ergonomic contour design reduces wrist strain during long work sessions, while the 2.4GHz wireless connection ensures lag-free performance. With an impressive 18-month battery life, you'll spend less time replacing batteries and more time working."
    },
    {
        id: 7,
        name: "Water Bottle",
        category: "gear",
        price: 34.99,
        originalPrice: 59.99,
        rating: 4.3,
        reviews: 412,
        description: "Premium insulated water bottle keeping drinks cold for 24 hours or hot for 12 hours.",
        image: "/src/grey_reusable_bottle_grey_background_close_up_zero_waste_plastic.png",
        images: [
            "/src/grey_reusable_bottle_grey_background_close_up_zero_waste_plastic.png",
            "/src/untitled-design-66.png"
        ],
        brand: "HydroTech",
        size: "9.5 x 3.2 x 3.2 inches",
        weight: "0.9 pounds",
        inStock: true,
        features: [
            "Double-Wall Insulation",
            "Keeps Cold 24 Hours",
            "Keeps Hot 12 Hours",
            "Leak-Proof Design",
            "Multiple Colors"
        ],
        specs: {
            dimensions: "9.5 x 3.2 x 3.2 inches",
            weight: "0.9 pounds",
            material: "Stainless Steel",
            warranty: "Lifetime Warranty"
        },
        fullDescription: "Stay hydrated in style with our premium insulated water bottle. The advanced double-wall insulation technology keeps your cold drinks refreshing for up to 24 hours and hot beverages steaming for 12 hours. The leak-proof design ensures your bag stays dry, while the durable stainless steel construction guarantees years of reliable use."
    },
    {
        id: 8,
        name: "HDMI Cable",
        category: "computers",
        price: 49.99,
        originalPrice: 89.99,
        rating: 4.6,
        reviews: 234,
        description: "High-speed HDMI cable with 4K/8K support, braided nylon jacket, and gold-plated connectors.",
        image: "/src/hdmi-cable.png",
        images: [
            "/src/hdmi-cable.png",
            "/src/flat-screen-monitor-isolated.png"
        ],
        brand: "ConnectTech",
        size: "6 feet (1.8m) length",
        weight: "0.3 pounds",
        inStock: true,
        features: [
            "4K@60Hz & 8K@30Hz Support",
            "Gold-Plated Connectors",
            "Braided Nylon Jacket",
            "18Gbps High-Speed Transfer",
            "Backward Compatible"
        ],
        specs: {
            dimensions: "6 feet (1.8m) length",
            weight: "0.3 pounds",
            material: "Braided Nylon & Aluminum Housing",
            warranty: "1-Year Limited"
        },
        fullDescription: "Connect your devices with confidence using this high-speed HDMI cable. Supporting crisp 4K@60Hz and 8K@30Hz video transmission, it's built for gaming, streaming, and home theater setups. The durable braided nylon jacket resists tangling and wear, while gold-plated connectors ensure a reliable, corrosion-resistant connection every time."
    },
    {
        id: 9,
        name: "4k Monitor",
        category: "computers",
        price: 129.99,
        originalPrice: 199.99,
        rating: 4.7,
        reviews: 178,
        description: "27-inch 4K UHD monitor with vivid color accuracy, wide viewing angles, and multiple connectivity options.",
        image: "/src/flat-screen-monitor-isolated.png",
        images: [
            "/src/flat-screen-monitor-isolated.png",
            "/src/untitled-design-66.png"
        ],
        brand: "ViewTech",
        size: "24.1 x 14.3 x 8.5 inches",
        weight: "9.8 pounds",
        inStock: true,
        features: [
            "27-inch 4K Ultra HD Display",
            "99% sRGB Color Accuracy",
            "HDMI & DisplayPort Inputs",
            "Adjustable Tilt Stand",
            "Ultra-Slim Bezel Design"
        ],
        specs: {
            dimensions: "24.1 x 14.3 x 8.5 inches",
            weight: "9.8 pounds",
            material: "Premium Plastic & Glass",
            warranty: "1-Year Limited"
        },
        fullDescription: "Upgrade your workspace with crystal-clear 4K Ultra HD resolution. This 27-inch display delivers vivid, accurate colors and wide viewing angles, making it ideal for creative work, gaming, and everyday productivity. Multiple HDMI and DisplayPort inputs make it easy to connect your laptop, console, or desktop, while the adjustable stand lets you find the perfect viewing angle."
    },
{
    "id": 10,
    "name": "Apple Watch Series 9",
    "category": "technology",
    "price": 249.99,
    "originalPrice": 399.00,
    "rating": 4.8,
    "reviews": 1248,
    "description": "Powerful smartwatch featuring the S9 SiP chip, a brighter Always-On display, and magical double tap gesture control.",
    "image": "/src/modern-black-smartwatch-with-fabric-strap.png",
    "images": [
        "/src/modern-black-smartwatch-with-fabric-strap.png",
        "/src/apple-watch-s9-side-view.png"
    ],
    "brand": "Apple",
    "size": "1.77 x 1.50 x 0.42 inches",
    "weight": "0.07 pounds",
    "inStock": true,
    "features": [
        "Always-On Retina Display",
        "S9 SiP with Double Tap Gesture",
        "Blood Oxygen & ECG Apps",
        "Crash Detection & Fall Detection",
        "Swimproof (WR50 water resistance)"
    ],
    "specs": {
        "dimensions": "1.77 x 1.50 x 0.42 inches",
        "weight": "0.07 pounds",
        "material": "Aluminum & Sport Loop",
        "warranty": "1-Year Limited"
    },
    "fullDescription": "Apple Watch Series 9 helps you stay connected, active, healthy, and safe. Featuring the S9 SiP, which enables a superbright display and a magical new way to quickly and easily interact with your Apple Watch without touching the screen. Advanced health sensors provide deep insights into your physical and mental health, while overnight sleep tracking monitors your respiratory rate and sleep stages."
}
];

// Load products from localStorage if available
function getProducts() {
    const stored = localStorage.getItem('products');
    if (stored) {
        const customProducts = JSON.parse(stored);
        return [...PRODUCTS, ...customProducts];
    }
    return PRODUCTS;
}

// Get product by ID
function getProductById(id) {
    const products = getProducts();
    return products.find(p => p.id === parseInt(id));
}

// Get products by category
function getProductsByCategory(category) {
    const products = getProducts();
    if (category === 'all' || !category) {
        return products;
    }
    return products.filter(p => p.category === category);
}

// Search products
function searchProducts(query) {
    const products = getProducts();
    const lowerQuery = query.toLowerCase();
    return products.filter(p =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.category.toLowerCase().includes(lowerQuery)
    );
}

// Sort products
function sortProducts(products, sortBy) {
    const sorted = [...products];

    switch(sortBy) {
        case 'price-low':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-high':
            return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
            return sorted.sort((a, b) => b.id - a.id);
        case 'featured':
        default:
            return sorted;
    }
}

// Filter by price
function filterByPrice(products, maxPrice) {
    return products.filter(p => p.price <= maxPrice);
}
