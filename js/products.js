// ============================================
// PRODUCT DATABASE
// ============================================

const PRODUCTS = [
    {
        id: 1,
        name: "Wireless Apple Keyboard",
        category: "gear",
        price: 59.99,
        originalPrice: 99.99,
        rating: 4.5,
        reviews: 128,
        description: "Experience premium sound with these wireless earphones featuring active noise cancellation and 30-hour battery life.",
        image: "/src/black-keyboard-with-letters-f-letters-f.png",
        images: [
            "/src/black-keyboard-with-letters-f-letters-f.png"
        ],
        brand: "AudioTech",
        size: "3.2 x 2.1 x 1.8 inches",
        weight: "0.3 ounces",
        inStock: true,
        features: [
            "Active Noise Cancellation",
            "30-Hour Battery Life",
            "Bluetooth 5.0 Connectivity",
            "Ergonomic Design",
            "Quick Charge Technology"
        ],
        specs: {
            dimensions: "3.2 x 2.1 x 1.8 inches",
            weight: "0.3 ounces",
            material: "Premium Aluminum & Silicone",
            warranty: "2-Year Limited"
        },
        fullDescription: "Our premium wireless earphones are engineered for audiophiles and casual listeners alike. With active noise cancellation technology and crystal-clear sound quality, these earphones deliver an immersive listening experience. The 30-hour battery life ensures your music never stops, while quick charge technology gets you 5 hours of playback in just 15 minutes."
    },
    {
        id: 2,
        name: "VR Headset",
        category: "technology",
        price: 499.99,
        originalPrice: 699.99,
        rating: 4.8,
        reviews: 256,
        description: "Advanced VR Headset with 4K per eye display, 8-hour battery life, and intelligent tracking for professional simulation and design.",
        image: "/src/vr.png",
        images: [
            "/src/vr.png"
        ],
        brand: "DroneMax",
        size: "14.5 x 10.2 x 5.5 inches",
        weight: "2.5 pounds",
        inStock: true,
        features: [
            "4K Ultra HD Camera",
            "60-Minute Flight Time",
            "Obstacle Avoidance",
            "Intelligent Flight Modes",
            "15km Video Transmission"
        ],
        specs: {
            dimensions: "14.5 x 10.2 x 5.5 inches",
            weight: "2.5 pounds",
            material: "Carbon Fiber & Aircraft Aluminum",
            warranty: "2-Year Limited"
        },
        fullDescription: "The professional-grade drone is designed for content creators and aerial photographers. Its advanced 4K camera system captures stunning footage with exceptional color accuracy. With intelligent flight modes and obstacle avoidance, even beginners can capture professional-quality aerial shots. The 60-minute flight time ensures you can capture everything you need in a single charge."
    },
    {
        id: 3,
        name: "Smart Speaker",
        category: "audio",
        price: 69.99,
        originalPrice: 99.99,
        rating: 4.6,
        reviews: 342,
        description: "Voice-controlled smart speaker with premium sound quality and seamless smart home integration.",
        image: "/src/smart_speaker_virtual_assistant_it_is_used_keep_home_connected_give.png",
        images: [
            "/src/smart_speaker_virtual_assistant_it_is_used_keep_home_connected_give.png"
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
            "/src/headphones-audio-listen.png"
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
        category: "computer",
        price: 899.99,
        originalPrice: 999.99,
        rating: 4.4,
        reviews: 267,
        description: "Durable travel backpack with smart compartments and anti-theft design for the modern traveler.",
        image: "/src/untitled-design-66.png",
        images: [
            "/src/untitled-design-66.png",
            "/src/modern-black-smartwatch-with-fabric-strap.png"
        ],
        brand: "TravelGear",
        size: "18 x 12 x 6.5 inches",
        weight: "1.8 pounds",
        inStock: true,
        features: [
            "Anti-Theft Design",
            "USB Charging Port",
            "Water-Resistant Material",
            "Smart Organization",
            "Ergonomic Support"
        ],
        specs: {
            dimensions: "18 x 12 x 6.5 inches",
            weight: "1.8 pounds",
            material: "Durable Polyester & Nylon",
            warranty: "Lifetime Warranty"
        },
        fullDescription: "Perfect for business travelers and adventure seekers alike. This backpack features hidden pockets and compartments to keep your valuables secure. The built-in USB charging port lets you power your devices on the go, while the water-resistant material protects your gear from the elements."
    },
    {
        id: 6,
        name: "Wireless Mouse",
        category: "gear",
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
            "/src/grey_reusable_bottle_grey_background_close_up_zero_waste_plastic.png"
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
        category: "gear",
        price: 49.99,
        originalPrice: 89.99,
        rating: 4.6,
        reviews: 234,
        description: "Multi-port USB-C hub with HDMI 4K support and 100W power delivery.",
        image: "/src/hdmi-cable.png",
        images: [
            "/src/hdmi-cable.png",
            "/src/flat-screen-monitor-isolated.png"
        ],
        brand: "ConnectTech",
        size: "4.5 x 2.1 x 0.8 inches",
        weight: "0.3 pounds",
        inStock: true,
        features: [
            "7 Ports",
            "4K HDMI Support",
            "100W Power Delivery",
            "Aluminum Design",
            "Plug & Play"
        ],
        specs: {
            dimensions: "4.5 x 2.1 x 0.8 inches",
            weight: "0.3 pounds",
            material: "Premium Aluminum",
            warranty: "1-Year Limited"
        },
        fullDescription: "Expand your laptop connectivity with this powerful USB-C hub. With 7 ports including 4K HDMI output, multiple USB 3.0 ports, and 100W power delivery, you can connect all your peripherals simultaneously. The compact aluminum design is perfect for portable workspaces."
    },
    {
        id: 9,
        name: "4k Monitor",
        category: "computers",
        price: 129.99,
        originalPrice: 199.99,
        rating: 4.7,
        reviews: 178,
        description: "Professional 4K webcam with auto-focus and built-in microphone for streaming and video calls.",
        image: "/src/flat-screen-monitor-isolated.png",
        images: [
            "/src/flat-screen-monitor-isolated.png"
        ],
        brand: "CamTech",
        size: "3.5 x 3.5 x 2.8 inches",
        weight: "0.5 pounds",
        inStock: true,
        features: [
            "4K Ultra HD",
            "Auto-Focus",
            "Built-in Microphone",
            "Wide Field of View",
            "USB Plug & Play"
        ],
        specs: {
            dimensions: "3.5 x 3.5 x 2.8 inches",
            weight: "0.5 pounds",
            material: "Premium Plastic & Glass",
            warranty: "1-Year Limited"
        },
        fullDescription: "Upgrade your video conferencing with crystal-clear 4K resolution. The auto-focus technology keeps you sharp and in focus, while the built-in microphone captures pristine audio. Perfect for streaming, content creation, and professional video calls."
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
