import { Project, SkillCategory } from "./types";

export const PERSONAL_INFO = {
  name: "Ananya Bansal",
  role: "Full-Stack Developer & B.E. CSE Undergrad",
  college: "Chitkara University, Rajpura",
  cgpa: "9.00 / 10.00",
  batch: "2024 - 2028 (3rd Year)",
  email: "ananya2006bansal@gmail.com",
  academicEmail: "ananya0259.becse24@chitkara.edu.in",
  github: "https://github.com/AnanyaBansal28",
  linkedin: "https://linkedin.com/in/ananya-bansal-254b73331",
};

export const PROJECTS: Project[] = [
  {
    id: "piksy",
    title: "PIKSY (Pick Things Smartly)",
    subtitle: "Smart 10-Minute Grocery Delivery Cart & Coupon Aggregator",
    tagline: "High-speed price arbitrage engine engineered for 10-minute grocery apps (Blinkit, Zepto, Instamart).",
    category: "Flagship",
    status: "In Active Development",
    featured: true,
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
    description:
      "A smart quick-commerce cart optimizer that analyzes grocery baskets in real-time, splits them across Blinkit, Zepto, and Instamart to guarantee the lowest total cost, and aggregates dynamic platform coupons.",
    fullOverview:
      "Quick-commerce platforms often charge varying delivery fees, surge pricing, and disparate item prices. PIKSY solves decision fatigue and overspending by aggregating real-time catalogs from Blinkit, Zepto, and Instamart. With its proprietary split-basket algorithm, shoppers save an average of 18–32% per grocery run without missing delivery time windows.",
    keyFeatures: [
      "Multi-Vendor Split-Cart Optimizer: Intelligently calculates optimal item distribution across Blinkit, Zepto, and Swiggy Instamart taking into account delivery fees, platform handling fees, and distance.",
      "Real Effective Discount Evaluator: Normalizes percentage vs. flat cashback vouchers (e.g. 50% up to ₹80 vs flat ₹100 off on ₹499) to pinpoint actual net savings.",
      "Aggregated Product Sentiment: Cross-checks brand quality ratings and customer reviews to recommend fresher perishables and higher-grade alternatives.",
      "Live Price History Tracker: Monitors sudden surge pricing during peak hours and rain alerts.",
    ],
    techStack: ["Next.js", "React", "Node.js", "Tailwind CSS", "TypeScript", "REST APIs", "Framer Motion"],
    githubUrl: PERSONAL_INFO.github,
    highlights: [
      { label: "Est. Savings", value: "Up to 30%" },
      { label: "Aggregated Apps", value: "3 Vendors" },
      { label: "Delivery SLA", value: "<10 Mins" },
      { label: "Phase", value: "Active Build" },
    ],
    accentColor: "from-[#fef08a] via-[#fde047] to-[#eab308]",
    glowColor: "rgba(114, 28, 36, 0.5)",
    interactiveType: "piksy-cart",
  },
  {
    id: "mess-management",
    title: "Mess Management System",
    subtitle: "Campus Dining & Flexible Meal Booking",
    tagline: "Role-based full-stack platform saving campus food waste through dynamic student meal reservations.",
    category: "Full-Stack",
    status: "Live Application",
    featured: true,
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-1 row-span-2",
    description:
      "A production full-stack portal built with React, Node.js, Express, and MySQL/MongoDB featuring three distinct role dashboards (Admin, Mess Staff, Student) where students only pay for meals they consume.",
    fullOverview:
      "Traditional campus messes suffer from massive food waste and rigid billing where students pay flat fees regardless of whether they eat. This system introduces flexible granular meal opt-ins (Breakfast, Lunch, Dinner). Students pre-book meals, mess staff get exact prep headcounts, and university admins get automated reconciliation.",
    keyFeatures: [
      "Three-Tier RBAC: Custom authenticated portals for Students, Mess Staff, and University Administration.",
      "Pay-Per-Selected-Meal Architecture: Dynamic meal selection ledger that refunds or deducts balances strictly based on selected meals.",
      "Food Waste Reduction Analytics: Predictive headcounts generated 2 hours prior to meal service so kitchen staff prep the exact volume.",
      "Instant Token Generation: Digital QR/pass authentication at the food counter to prevent unauthorized double-servings.",
    ],
    techStack: ["React.js", "Node.js", "Express", "MySQL", "MongoDB", "Render", "Tailwind CSS"],
    liveUrl: "https://mess-management-system-umess.onrender.com/",
    githubUrl: PERSONAL_INFO.github,
    highlights: [
      { label: "Food Waste Cut", value: "~40%" },
      { label: "Role Portals", value: "3 Roles" },
      { label: "Hosting", value: "Render Cloud" },
      { label: "Status", value: "Live" },
    ],
    accentColor: "from-[#721c24] via-[#881337] to-[#fef08a]",
    glowColor: "rgba(114, 28, 36, 0.45)",
    interactiveType: "mess-calc",
  },
  {
    id: "voice-wheelchair",
    title: "Voice Automated Wheelchair",
    subtitle: "Hands-Free Assistive Mobility Solution",
    tagline: "Assistive IoT robotics platform powered by voice speech recognition for mobility impairment.",
    category: "Hardware / AI",
    status: "Completed",
    featured: false,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description:
      "A voice-controlled autonomous wheelchair prototype designed for persons with physical disabilities, translating natural voice directives into micro-controller motor commands.",
    fullOverview:
      "Engineered to provide self-reliance and independence for individuals with mobility challenges. Integrated voice command recognition via directional natural language parsing ('Forward', 'Stop', 'Reverse', 'Pivot Left') connected to motor driver circuitry with emergency ultrasonic obstacle collision avoidance.",
    keyFeatures: [
      "Speech-to-Command Processing: Noise-tolerant acoustic command parsing for accurate intent detection.",
      "Emergency Fail-Safe Braking: Dual ultrasonic distance sensors that override motion if an obstacle is within 30cm.",
      "Low Latency Execution: Sub-200ms trigger response from audio capture to motor driver actuation.",
    ],
    techStack: ["Python", "Speech Recognition", "IoT Hardware", "Arduino / C++", "Ultrasonic Sensors"],
    githubUrl: PERSONAL_INFO.github,
    highlights: [
      { label: "Response Latency", value: "<200ms" },
      { label: "Safety Override", value: "30cm Sensor" },
      { label: "Use Case", value: "Accessibility" },
    ],
    accentColor: "from-[#fde047] to-[#fef08a]",
    glowColor: "rgba(254, 240, 138, 0.25)",
    interactiveType: "voice-demo",
  },
  {
    id: "minga-london",
    title: "Minga London Fashion UI",
    subtitle: "Editorial Apparel E-Commerce Experience",
    tagline: "Vibrant aesthetic e-commerce interface with custom fluid typography and responsive catalog view.",
    category: "Frontend & UI",
    status: "Completed",
    featured: false,
    bentoSpan: "col-span-1 md:col-span-1 lg:col-span-1",
    description:
      "A modern, vibrant apparel e-commerce frontend inspired by Minga London, boasting editorial aesthetic layouts, interactive lookbook carousels, and persistent state cart management.",
    fullOverview:
      "Explores bold avant-garde layout principles, high-contrast typography, interactive product filter drawers, sizing calculators, and smooth cart drawer transitions crafted in React and modern CSS.",
    keyFeatures: [
      "Dynamic Product Filtering: Multi-facet filtering by aesthetic subculture, sizing, fabric, and price range.",
      "Interactive Quick-View Drawer: Zero-reload detail inspection modal with animated color swatches.",
      "Mobile-First Responsive Layout: Optimized touch gestures and swipeable image galleries.",
    ],
    techStack: ["React.js", "Tailwind CSS", "JavaScript", "Custom CSS", "Framer Motion"],
    githubUrl: PERSONAL_INFO.github,
    highlights: [
      { label: "Aesthetic", value: "Vintage Grunge" },
      { label: "Fluid Layout", value: "100% Responsive" },
      { label: "Interactions", value: "Micro-animations" },
    ],
    accentColor: "from-[#721c24] to-[#fef08a]",
    glowColor: "rgba(114, 28, 36, 0.35)",
    interactiveType: "fashion-preview",
  },
  {
    id: "food-ordering",
    title: "Online Food Ordering Website",
    subtitle: "Responsive Restaurant & Delivery Portal",
    tagline: "Streamlined online menu catalog with interactive cart calculation and intuitive checkout flow.",
    category: "Frontend & UI",
    status: "Completed",
    featured: false,
    bentoSpan: "col-span-1 md:col-span-2 lg:col-span-1",
    description:
      "A responsive multi-cuisine restaurant ordering website with rich dish filters, dynamic cart calculation, tax breakdowns, and responsive order confirmation flows.",
    fullOverview:
      "Built to demonstrate foundational web development mastery, featuring clean DOM manipulation, modular architecture, responsive media queries, and mock payment gateway simulation.",
    keyFeatures: [
      "Interactive Menu Explorer: Live search, category tabs (Starters, Mains, Desserts, Beverages), and spice-level badges.",
      "Real-Time Cart Drawer: Live quantity controls, automatic GST/delivery calculation, and promo code validation.",
      "Responsive Cross-Device Layout: Pixel-perfect viewports across smartphones, tablets, and ultra-wide desktops.",
    ],
    techStack: ["HTML5", "CSS3", "JavaScript", "Backend Integration", "Responsive Design"],
    githubUrl: PERSONAL_INFO.github,
    highlights: [
      { label: "Search & Filter", value: "Instant DOM" },
      { label: "Cart Math", value: "Real-time" },
      { label: "Compatibility", value: "All Browsers" },
    ],
    accentColor: "from-[#fef08a] to-[#721c24]",
    glowColor: "rgba(254, 240, 138, 0.2)",
    interactiveType: "food-portal",
  },
];

// Distinct, Solid Bento Blocks (NO duplicates, NO marquee)
export const SKILL_BLOCKS = [
  {
    category: "Languages",
    description: "Core algorithms, procedural & object-oriented programming",
    accent: "border-[#fef08a]/40 bg-[#1c080d]/80",
    glow: "from-[#fef08a]/20 to-transparent",
    skills: [
      { name: "C", tag: "Low-level Systems & Pointers" },
      { name: "C++", tag: "DSA, STL & Optimization" },
      { name: "Python", tag: "Scripting, AI & Speech" },
      { name: "Java", tag: "OOP & Enterprise Patterns" },
      { name: "JavaScript", tag: "Modern ES6+ & Asynchronous" },
    ],
  },
  {
    category: "Frameworks & Web",
    description: "Responsive web architectures, SSR & high-performance APIs",
    accent: "border-[#721c24]/60 bg-[#1c080d]/80",
    glow: "from-[#721c24]/30 to-transparent",
    skills: [
      { name: "React.js", tag: "Component Lifecycles & State" },
      { name: "Next.js", tag: "App Router & SSR Optimization" },
      { name: "Node.js", tag: "Async I/O Runtime" },
      { name: "Express", tag: "REST Endpoints & Middleware" },
      { name: "Tailwind CSS", tag: "Modern Design Systems" },
    ],
  },
  {
    category: "Databases & Systems",
    description: "Data storage, relational schemas & Linux environments",
    accent: "border-[#fde047]/40 bg-[#1c080d]/80",
    glow: "from-[#fde047]/20 to-transparent",
    skills: [
      { name: "MongoDB", tag: "NoSQL & Document Modeling" },
      { name: "MySQL", tag: "Relational Schemas & Indexing" },
      { name: "Linux", tag: "Bash Scripting & File Control" },
      { name: "RedHat", tag: "Enterprise Sysadmin Basics" },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core algorithmic foundations, object-oriented paradigms, and system-level programming.",
    skills: [
      { name: "C", level: "Core Foundation", description: "Memory management, pointers, and data structures" },
      { name: "C++", level: "Advanced OOP & DSA", description: "Algorithms, STL, computational efficiency" },
      { name: "Python", level: "Scripting & AI/ML", description: "Automation, speech processing, backend scripts" },
      { name: "Java", level: "Object Oriented", description: "Design patterns, JVM architecture, enterprise OOP" },
      { name: "JavaScript (ES6+)", level: "Production", description: "Asynchronous programming, event loop, modern syntax" },
      { name: "HTML5 / CSS3", level: "Semantic Markup", description: "Responsive layouts, Flexbox, Grid, animations" },
    ],
  },
  {
    title: "Frameworks & Libraries",
    description: "Building responsive, modern, and high-performance client and server applications.",
    skills: [
      { name: "React.js", level: "Primary Web Library", description: "Hooks, component lifecycles, state architecture" },
      { name: "Next.js", level: "App Router & SSR", description: "Server components, routing, SEO optimization" },
      { name: "Node.js", level: "Runtime Environment", description: "Asynchronous I/O, REST APIs, microservices" },
      { name: "Express", level: "Backend Server", description: "Middleware, routing, RBAC, API endpoints" },
      { name: "Tailwind CSS", level: "Utility-First CSS", description: "Modern dark mode, responsive styling, design systems" },
    ],
  },
  {
    title: "Databases & Systems",
    description: "Relational and document storage, query optimization, and Unix operating environments.",
    skills: [
      { name: "MySQL", level: "Relational RDBMS", description: "Complex joins, indexing, normalization, triggers" },
      { name: "MongoDB", level: "NoSQL Document Store", description: "Aggregation pipelines, schema modeling, Mongoose" },
      { name: "Linux", level: "System Administration", description: "Bash scripting, process control, file permissions" },
      { name: "RedHat Basics", level: "Enterprise Linux", description: "System services, package management (RPM/DNF)" },
    ],
  },
];

// Large Infinite Moving Ticker Skills with Official Brand Accents
export const TICKER_SKILLS = [
  { name: "React", tag: "UI Library", color: "#06b6d4", bg: "bg-cyan-500/10", border: "border-cyan-500/30" },
  { name: "Next.js", tag: "App Router / SSR", color: "#ffffff", bg: "bg-white/10", border: "border-white/30" },
  { name: "TypeScript", tag: "Type System", color: "#3178c6", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { name: "JavaScript", tag: "ES6+ Async", color: "#f7df1e", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
  { name: "Node.js", tag: "Backend Runtime", color: "#22c55e", bg: "bg-emerald-500/10", border: "border-emerald-500/30" },
  { name: "Express.js", tag: "REST API", color: "#e4e4e7", bg: "bg-zinc-500/10", border: "border-zinc-500/30" },
  { name: "Tailwind CSS", tag: "Design Systems", color: "#38bdf8", bg: "bg-sky-500/10", border: "border-sky-500/30" },
  { name: "Python", tag: "Scripting & AI", color: "#3b82f6", bg: "bg-blue-500/10", border: "border-blue-500/30" },
  { name: "C++", tag: "DSA & Systems", color: "#60a5fa", bg: "bg-indigo-500/10", border: "border-indigo-500/30" },
  { name: "Java", tag: "OOP Design", color: "#ef4444", bg: "bg-rose-500/10", border: "border-rose-500/30" },
  { name: "MongoDB", tag: "NoSQL Database", color: "#10b981", bg: "bg-green-500/10", border: "border-green-500/30" },
  { name: "MySQL", tag: "Relational DB", color: "#f97316", bg: "bg-orange-500/10", border: "border-orange-500/30" },
  { name: "Linux", tag: "Bash & Systems", color: "#facc15", bg: "bg-yellow-500/10", border: "border-yellow-500/30" },
  { name: "RedHat", tag: "Enterprise Linux", color: "#dc2626", bg: "bg-red-500/10", border: "border-red-500/30" },
];

// Snappy Kinetic Intro Greetings (Fast 0.5s - 0.6s per word)
export const WELCOME_GREETINGS = [
  { text: "Hello", gradient: "from-rose-400 via-pink-500 to-rose-500", label: "Coral Pink" },
  { text: "नमस्ते", gradient: "from-amber-400 via-orange-500 to-yellow-300", label: "Saffron Amber" },
  { text: "ਸਤਿ ਸ਼੍ਰੀ ਅਕਾਲ", gradient: "from-emerald-400 via-teal-400 to-cyan-300", label: "Emerald Mint" },
  { text: "Bonjour", gradient: "from-violet-400 via-purple-500 to-fuchsia-500", label: "Electric Violet" },
  { text: "Hola", gradient: "from-orange-500 via-amber-500 to-yellow-400", label: "Tangerine" },
  { text: "Ciao", gradient: "from-pink-500 via-rose-500 to-red-500", label: "Rose" },
  { text: "こんにちは", gradient: "from-pink-300 via-rose-300 to-pink-500", label: "Sakura" },
  { text: "안녕하세요", gradient: "from-cyan-400 via-teal-300 to-blue-400", label: "Cyan" },
  { text: "Guten Tag", gradient: "from-yellow-300 via-amber-400 to-orange-400", label: "Golden Sunburst" },
];
