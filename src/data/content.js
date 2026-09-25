export const content = {
  personal: {
    name: "Anirban Chatterjee",
    role: "Full-Stack Software Engineer | SDE Intern",
    tagline: "EVM Protocols, Computer Vision Inference & Scalable Systems",
    bio: "Full-stack software engineer and CS undergraduate with proven ownership across the stack — from smart contract architecture to computer-vision inference to production frontend delivery.",
    location: "Roorkee / Kolkata, India",
    educationBrief: "B.Tech CSE (Core) with Data Analytics Minor · Quantum University · GPA 8.01/10 (2028)"
  },
  contact: {
    email: "anirban4ru@gmail.com",
    calendly: "https://calendly.com/anirban4ru/30min",
    linkedin: "https://www.linkedin.com/in/anirban4ru",
    github: "https://github.com/Anirban4ru",
    resume: "/Anirban_Resume.pdf",
    location: "Roorkee / Kolkata, India"
  },
  hero: {
    eyebrow: "FULL-STACK SOFTWARE ENGINEER · APPLIED ML & WEB3",
    headline: "I'm Anirban Chatterjee.",
    description: "Full-stack software engineer and CS undergraduate with proven ownership across the stack — from EVM smart contracts to real-time computer-vision inference and production web/mobile delivery.",
    primaryCta: { text: "See selected work", link: "#work" },
    secondaryCta: { text: "Get in touch", link: "#contact" },
    floatingTagline: "EVM Smart Contracts, CV Inference & Full-Stack Systems",
    poweredByChips: [
      { label: "Solidity & L2", icon: "⛓️" },
      { label: "FastAPI & Node", icon: "⚡" },
      { label: "YOLOv8 & ML", icon: "🧠" },
      { label: "React & Next.js", icon: "💎" },
      { label: "TypeScript", icon: "🔷" }
    ]
  },
  ticker: [
    "SCALABLE FULL-STACK SYSTEMS",
    "EVM SMART CONTRACTS & L2 INDEXING",
    "COMPUTER VISION & YOLOV8 INFERENCE",
    "NSGA-II GENETIC OPTIMIZATION",
    "FASTAPI & ASYNC NODE.JS BACKENDS",
    "TYPESCRIPT & REACT ECOSYSTEM",
    "EXPLORATORY DATA ANALYSIS & PREDICTIVE MODELLING"
  ],
  whatIBring: {
    badge: "OPEN TO SDE INTERNSHIPS & COLLABORATIONS",
    headline: "Engineering depth across systems, intelligence, and interfaces.",
    description: "Demonstrated track record of independently architecting, deploying, and validating end-to-end applications across Web3, machine learning, and full-stack domains.",
    cta: { text: "Explore experience", link: "#experience" },
    cards: [
      {
        id: "fullstack",
        number: "01",
        title: "Full-Stack Architecture",
        description: "Type-safe React and Next.js applications backed by high-throughput FastAPI and Node.js microservices with Supabase and PostgreSQL persistence."
      },
      {
        id: "web3",
        number: "02",
        title: "Web3 & Smart Contracts",
        description: "Hardhat-tested Solidity protocols on Arbitrum Sepolia L2 with cryptographic host-domain whitelisting and real-time off-chain event indexers."
      },
      {
        id: "ai",
        number: "03",
        title: "Applied ML & Computer Vision",
        description: "Custom-trained YOLOv8 object detection, OpenCV.js image processing, and NSGA-II multi-objective genetic algorithms for complex constraint balancing."
      },
      {
        id: "ui",
        number: "04",
        title: "Data Pipelines & Analysis",
        description: "Automated Python ETL workflows, statistical regression modelling, and predictive analytics delivering actionable operational intelligence."
      }
    ]
  },
  selectedWork: {
    eyebrow: "SELECTED WORK",
    headline: "Production systems built with rigor from schema to deployment.",
    featured: {
      id: "meditrace",
      badge: "FEATURED CASE STUDY",
      title: "MediTrace: Decentralized Supply Chain",
      category: "Web3 · Arbitrum Sepolia L2 · Full Stack",
      year: "2026",
      description: "A decentralized pharmaceutical traceability platform integrating EVM smart contracts with simulated IoT cold-chain telemetry (2°C - 8°C) to eliminate counterfeit medicine networks.",
      outcome: "Engineered cryptographic host-domain whitelisting on the Pharmacy Inspector Terminal neutralizing phishing and DNS spoofing, and deployed an event-driven off-chain indexer on Arbitrum Sepolia firing sub-second webhooks.",
      stack: ["Next.js", "Solidity", "Arbitrum Sepolia L2", "Node.js", "OpenCV.js", "Supabase", "Tailwind CSS"],
      github: "https://github.com/Anirban4ru/MediTrace",
      live: "https://meditraceorg.vercel.app/",
      image: "/projects/MediTrace/1.png",
      images: [
        '/projects/MediTrace/1.png', '/projects/MediTrace/2.png', '/projects/MediTrace/3.png',
        '/projects/MediTrace/4.png', '/projects/MediTrace/5.png', '/projects/MediTrace/6.png',
        '/projects/MediTrace/7.png', '/projects/MediTrace/8.png'
      ]
    },
    projects: [
      {
        id: "nourish",
        title: "Nourish (DietarySystemApp)",
        category: "Mobile · Computer Vision · Genetic Alg",
        year: "2026",
        description: "Full-stack mobile dietary analytics app integrating real-time computer-vision inference with algorithmic meal synthesis, co-authored in academic research on Intelligent Dietary Systems.",
        outcome: "Deployed custom-trained YOLOv8 object-detection models for camera-feed classification and implemented an NSGA-II genetic algorithm in FastAPI to balance multi-objective caloric and nutritional constraints.",
        stack: ["React Native", "TypeScript", "YOLOv8", "NSGA-II", "FastAPI", "Supabase"],
        github: "https://github.com/Anirban4ru/DietarySystemApp",
        image: "/projects/Nourish/1.jpg",
        images: [
          '/projects/Nourish/1.jpg', '/projects/Nourish/2.jpg', '/projects/Nourish/3.jpg',
          '/projects/Nourish/4.jpg', '/projects/Nourish/5.jpg', '/projects/Nourish/6.jpg',
          '/projects/Nourish/7.jpg', '/projects/Nourish/8.jpg', '/projects/Nourish/9.jpg',
          '/projects/Nourish/10.jpg'
        ]
      },
      {
        id: "cryptopay",
        title: "Crypto Borderless Pay",
        category: "Web3 · DeFi · Smart Contracts",
        year: "2026",
        description: "Frictionless decentralized cross-border payment platform enabling instantaneous multi-token transfers with minimal gas overhead and verifiable settlement.",
        outcome: "Engineered secure wallet handshakes, gas-optimized Solidity settlement routines, and live on-chain status tracking.",
        stack: ["React", "Ethers.js", "Solidity", "Web3.py", "Hardhat"],
        github: "https://github.com/Anirban4ru/crypto-borderless-pay",
        image: "/projects/Crypto/1.png",
        images: ['/projects/Crypto/1.png', '/projects/Crypto/2.png']
      },
      {
        id: "dupecleaner",
        title: "DupeCleaner-Pro",
        category: "Systems · CLI & Web Engine",
        year: "2026",
        description: "High-performance disk optimization utility for identifying duplicate files via memory-efficient cryptographic hash parsing.",
        outcome: "Chunked stream-reading architecture that eliminates memory bottlenecks when indexing large directory structures.",
        stack: ["Node.js", "TypeScript", "File System API", "Streams"],
        github: "https://github.com/Anirban4ru/DupeCleaner-Pro",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000",
        images: ['https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=1000']
      }
    ]
  },
  process: {
    eyebrow: "HOW I WORK",
    headline: "From requirement decomposition to production durability.",
    description: "A disciplined, iterative engineering methodology rooted in architectural clarity, type safety, test invariants, and measurable real-world outcomes.",
    steps: [
      {
        number: "01",
        title: "Architect & Invariants",
        description: "Deconstruct problem constraints, formalize database schemas and smart contract state machines, and establish strict type contracts before writing code."
      },
      {
        number: "02",
        title: "Prototype & Stress-Test",
        description: "Construct functional proofs of concept, benchmark algorithm efficiency (e.g. NSGA-II / YOLOv8 latency), and test edge cases under simulated load."
      },
      {
        number: "03",
        title: "Engineer & Optimize",
        description: "Write modular, typed, thoroughly tested code with robust error handling, responsive viewports, and sub-100ms response targets."
      },
      {
        number: "04",
        title: "Deploy & Telemetry",
        description: "Deploy to production or EVM L2 testnets with automated CI/CD pipelines, cryptographic verification, and real-time monitoring alerts."
      }
    ]
  },
  aiWorkflow: {
    eyebrow: "AI WITH INTENTION",
    headline: "How I integrate AI into my engineering workflow.",
    description: "AI is a lever for velocity and exploration, paired with rigorous human validation and architectural ownership.",
    cards: [
      {
        id: "exploration",
        theme: "lavender",
        tag: "IDEATION & EXPLORATION",
        title: "Architectural Brainstorming",
        description: "Leveraging LLMs to explore API trade-offs, draft edge-case matrixes, brainstorm database normalization strategies, and examine alternative architectural paradigms."
      },
      {
        id: "acceleration",
        theme: "tan",
        tag: "VELOCITY & SYNTHESIS",
        title: "Accelerated Boilerplate & Tests",
        description: "Synthesizing repetitive unit test fixtures, mock data payloads, regex patterns, and routine migration scripts to keep focus on high-impact core logic."
      },
      {
        id: "rigor",
        theme: "green",
        tag: "HUMAN OWNERSHIP",
        title: "Rigor, Security & Auditing",
        description: "Every generated block is hand-audited for security vulnerabilities, gas efficiency in smart contracts, computational complexity, and maintainable structure."
      }
    ]
  },
  stack: {
    eyebrow: "MY STACK & TOOLING",
    headline: "The technologies I build with",
    description: "A curated technical toolkit across core programming languages, modern frontends, high-throughput backends, EVM smart contracts, and applied ML.",
    categories: [
      { id: "all", label: "All Tech (20)" },
      { id: "languages", label: "Languages" },
      { id: "frontend", label: "Frontend & UI" },
      { id: "backend-web3", label: "Backend & Web3" },
      { id: "ai-data", label: "AI & Intelligence" },
      { id: "devtools", label: "Workflow & Tools" }
    ],
    tools: [
      { name: "Python", logo: "PythonLogo", category: "languages", tag: "Core Language", glowColor: "rgba(56, 126, 184, 0.25)" },
      { name: "TypeScript", logo: "TypeScriptLogo", category: "languages", tag: "Type-Safe Systems", glowColor: "rgba(49, 120, 198, 0.25)" },
      { name: "JavaScript", logo: "JavaScriptLogo", category: "languages", tag: "Web Standard", glowColor: "rgba(247, 223, 30, 0.25)" },
      { name: "Java", logo: "JavaLogo", category: "languages", tag: "OOP & Systems", glowColor: "rgba(231, 111, 0, 0.25)" },
      { name: "React", logo: "ReactLogo", category: "frontend", tag: "UI Framework", glowColor: "rgba(0, 216, 255, 0.25)" },
      { name: "Tailwind CSS", logo: "TailwindLogo", category: "frontend", tag: "Styling Engine", glowColor: "rgba(56, 189, 248, 0.25)" },
      { name: "Figma", logo: "FigmaLogo", category: "frontend", tag: "Design & UX", glowColor: "rgba(162, 89, 255, 0.25)" },
      { name: "FastAPI", logo: "FastApiLogo", category: "backend-web3", tag: "REST API & Async", glowColor: "rgba(0, 150, 136, 0.25)" },
      { name: "Node.js", logo: "NodeLogo", category: "backend-web3", tag: "Runtime", glowColor: "rgba(51, 153, 51, 0.25)" },
      { name: "Solidity", logo: "SolidityLogo", category: "backend-web3", tag: "Smart Contracts", glowColor: "rgba(102, 102, 102, 0.25)" },
      { name: "Hardhat", logo: "HardhatLogo", category: "backend-web3", tag: "EVM Test Suite", glowColor: "rgba(255, 241, 0, 0.25)" },
      { name: "MySQL", logo: "MySqlLogo", category: "backend-web3", tag: "Relational DB", glowColor: "rgba(0, 117, 143, 0.25)" },
      { name: "Firebase", logo: "FirebaseLogo", category: "backend-web3", tag: "Cloud & FCM", glowColor: "rgba(255, 160, 0, 0.25)" },
      { name: "Gemini", logo: "GeminiLogo", category: "ai-data", tag: "Multimodal AI", glowColor: "rgba(84, 104, 255, 0.25)" },
      { name: "Claude", logo: "ClaudeLogo", category: "ai-data", tag: "LLM Agentic", glowColor: "rgba(217, 119, 6, 0.25)" },
      { name: "ChatGPT", logo: "ChatGptLogo", category: "ai-data", tag: "Generative AI", glowColor: "rgba(16, 163, 127, 0.25)" },
      { name: "Git", logo: "GitLogo", category: "devtools", tag: "Version Control", glowColor: "rgba(240, 80, 50, 0.25)" },
      { name: "GitHub", logo: "GitHubMarkLogo", category: "devtools", tag: "Collaboration", glowColor: "rgba(24, 23, 23, 0.2)" },
      { name: "VS Code", logo: "VSCodeLogo", category: "devtools", tag: "Development IDE", glowColor: "rgba(0, 122, 204, 0.25)" },
      { name: "Postman", logo: "PostmanLogo", category: "devtools", tag: "API Testing", glowColor: "rgba(255, 108, 55, 0.25)" }
    ]
  },
  experience: {
    eyebrow: "BACKGROUND & EXPERIENCE",
    headline: "Industry internships, academic background, and distinctions.",
    education: {
      degree: "B.Tech in Computer Science & Engineering (CSE Core)",
      minor: "Minor Specialization in Data Analytics",
      institution: "Quantum University, Roorkee, Uttarakhand",
      timeline: "Expected 06/2028",
      gpa: "8.01 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems (DBMS)",
        "Machine Learning",
        "Object-Oriented Programming (Java)",
        "Computer Networks"
      ]
    },
    work: [
      {
        role: "Junior Data Science Analyst — Agribusiness",
        company: "YuvaIntern",
        period: "08/2026 – 09/2026 · Remote",
        bullets: [
          "Analysed agribusiness datasets via Exploratory Data Analysis (EDA) and statistical modelling, improving supply-chain efficiency and price-indicator accuracy.",
          "Engineered automated Python data pipelines for cleaning and normalization, eliminating record anomalies across large-scale datasets.",
          "Built predictive regression models forecasting commodity price movements, delivering analytical reports for data-driven operational decisions."
        ]
      },
      {
        role: "Full Stack Development Intern",
        company: "CodSoft",
        period: "06/2024 – 07/2024 · Remote",
        bullets: [
          "Shipped 3 production-ready, responsive web applications using TypeScript, React.js, and CSS within 4-week Agile sprints.",
          "Optimized UI component architecture, resolving cumulative layout shift (CLS) issues and cross-browser rendering inconsistencies.",
          "Architected end-to-end client-server integrations, connecting decoupled frontends to RESTful API endpoints for scalable data exchange."
        ]
      }
    ],
    honors: [
      {
        title: "Merit Scholarship (INR 40,000)",
        detail: "Awarded via university entrance examination for academic distinction."
      },
      {
        title: "Professional Certifications",
        detail: "CodSoft Full Stack Development Certificate (2024) · Workshop on Agentic AI, Gemini, Claude & ChatGPT (2025)."
      }
    ],
    languages: ["English (Fluent)", "Hindi (Fluent)", "Bengali (Native)"]
  },
  footer: {
    headline: "Let's build scalable systems together.",
    tagline: "Currently open to software engineering internships, Web3/AI collaborations, and high-impact technical roles.",
    email: "anirban4ru@gmail.com",
    calendly: "https://calendly.com/anirban4ru/30min",
    links: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/anirban4ru" },
      { name: "GitHub", url: "https://github.com/Anirban4ru" },
      { name: "Calendly", url: "https://calendly.com/anirban4ru/30min" },
      { name: "Resume (PDF)", url: "/Anirban_Resume.pdf" }
    ],
    location: "Roorkee / Kolkata, India",
    copyright: `© ${new Date().getFullYear()} Anirban Chatterjee. All rights reserved.`
  }
};

