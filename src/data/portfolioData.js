// Portfolio data - Customized with Ravi Ranjan's resume information
export const portfolioData = {
  // Personal Information
  personal: {
    name: "Ravi Ranjan",
    title: "AI-Powered Full Stack Developer | MERN Stack Expert | ML Engineering Specialist",
    tagline: "Transforming businesses with AI-driven solutions and scalable architectures",
    email: "raviranjan35@outlook.com",
    phone: "+918709805710", // For WhatsApp
    linkedin: "https://linkedin.com/in/raviranjan946",
    github: "https://github.com/ravi1122",
    location: "India",
    avatar: "/Mine.jpg", // Your actual profile image
    resumeUrl: "/resume.pdf", // Add your resume PDF to public/
    certificateUrl: "/Ravi_Ranjan_Certificate.pdf" // AI Master class certificate
  },

  // About section
  about: {
    description: `AI-focused Full Stack Developer with 8+ years of experience specializing in MERN stack development and modern AI/ML integration. Recently completed comprehensive AI Master class certification, now leveraging cutting-edge AI technologies including Large Language Models, Computer Vision, and Neural Networks. Proven expertise in leading cross-functional teams, implementing AI-powered solutions, and delivering intelligent software products across e-commerce, IoT, and enterprise applications with international onsite experience.`,
    highlights: [
      "🎓 Certified AI Master - Latest ML/AI Technologies",
      "🚀 8+ years of full stack + AI/ML development experience",
      "🌍 International onsite experience (Netherlands, South Korea)", 
      "👥 Led teams of up to 10 developers across AI projects",
      "🏗️ MACH architecture and headless commerce expertise",
      "☁️ AWS cloud solutions with AI/ML services specialist",
      "🏆 Multiple client appreciation awards for AI implementations",
      "🤖 Expertise in LLMs, Computer Vision, and Neural Networks"
    ]
  },

  // Skills - Categorized
  skills: {
    ai_ml: [
      { name: "Machine Learning", level: 90, icon: "fas fa-brain" },
      { name: "Large Language Models", level: 85, icon: "fas fa-robot" },
      { name: "Computer Vision", level: 80, icon: "fas fa-eye" },
      { name: "Neural Networks", level: 85, icon: "fas fa-network-wired" },
      { name: "TensorFlow/PyTorch", level: 80, icon: "fab fa-python" },
      { name: "OpenAI APIs", level: 90, icon: "fas fa-code" },
      { name: "Prompt Engineering", level: 95, icon: "fas fa-magic" }
    ],
    frontend: [
      { name: "React.js", level: 95, icon: "fab fa-react" },
      { name: "Next.js", level: 90, icon: "fab fa-react" },
      { name: "JavaScript", level: 95, icon: "fab fa-js-square" },
      { name: "TypeScript", level: 90, icon: "fab fa-js-square" },
      { name: "HTML5/CSS3", level: 95, icon: "fab fa-html5" },
      { name: "Redux/Redux Toolkit", level: 90, icon: "fas fa-code" },
      { name: "EnactJS", level: 85, icon: "fab fa-react" }
    ],
    backend: [
      { name: "Node.js", level: 95, icon: "fab fa-node-js" },
      { name: "Express.js", level: 90, icon: "fas fa-server" },
      { name: "GraphQL", level: 85, icon: "fas fa-project-diagram" },
      { name: "REST APIs", level: 95, icon: "fas fa-exchange-alt" },
      { name: "Python APIs", level: 85, icon: "fab fa-python" },
      { name: "MongoDB", level: 90, icon: "fas fa-database" },
      { name: "MySQL", level: 85, icon: "fas fa-database" }
    ],
    cloud: [
      { name: "AWS Lambda", level: 90, icon: "fab fa-aws" },
      { name: "AWS SageMaker", level: 80, icon: "fab fa-aws" },
      { name: "AWS Bedrock", level: 85, icon: "fab fa-aws" },
      { name: "AWS SQS", level: 85, icon: "fab fa-aws" },
      { name: "AWS API Gateway", level: 85, icon: "fab fa-aws" },
      { name: "Azure AI Services", level: 80, icon: "fab fa-microsoft" },
      { name: "Docker", level: 85, icon: "fab fa-docker" },
      { name: "Microservices", level: 90, icon: "fas fa-cubes" }
    ],
    tools: [
      { name: "Jest", level: 85, icon: "fas fa-vial" },
      { name: "Playwright", level: 80, icon: "fas fa-robot" },
      { name: "Webpack", level: 85, icon: "fas fa-box-open" },
      { name: "Git", level: 95, icon: "fab fa-git-alt" },
      { name: "Postman", level: 90, icon: "fas fa-paper-plane" },
      { name: "VS Code", level: 95, icon: "fas fa-code" }
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "AI-Powered E-commerce Platform (ECP & CP4L)",
      description: "Architected next-gen e-commerce platforms using MACH architecture with integrated AI recommendations, intelligent search, and ML-driven personalization. Implemented headless commerce on AWS with AI/ML services for predictive analytics.",
      image: "/images/projects/ecommerce-platform.svg",
      technologies: ["Next.js", "React.js", "AI/ML", "GraphQL", "Node.js", "AWS SageMaker", "Commerce Tools", "Algolia", "TypeScript"],
      githubUrl: "https://github.com/ravi1122",
      liveUrl: "",
      featured: true,
      aiPowered: true
    },
    {
      id: 2,
      title: "Smart TV & Applications",
      description: "Developed AI-enhanced Smart TV applications with voice recognition, intelligent content recommendations, and ML-powered personalization features for LG webOS 24. Integrated NLP for natural language interactions.",
      image: "/images/projects/webos-tv-apps.svg",
      technologies: ["EnactJS", "React.js", "AI/ML", "NLP", "Redux Toolkit", "Node.js", "Docker", "DB8"],
      githubUrl: "https://github.com/ravi1122",
      liveUrl: "",
      featured: true,
      aiPowered: true
    },
    {
      id: 3,
      title: "IoT Analytics Dashboard",
      description: "Comprehensive IoT monitoring dashboard enhanced with AI-powered predictive maintenance, anomaly detection, and intelligent alerting systems. Implemented ML models for pattern recognition and automated decision making.",
      image: "/images/projects/iot-dashboard.svg",
      technologies: ["React.js", "Node.js", "Machine Learning", "TensorFlow", "OAuth", "JWT", "Docker", "Azure AI"],
      githubUrl: "https://github.com/ravi1122",
      liveUrl: "",
      featured: true,
      aiPowered: true
    },
    {
      id: 4,
      title: "Computer Vision Autonomous Vehicle Dashboard",
      description: "Engineered cutting-edge dashboard with advanced computer vision algorithms, real-time object detection, and AI-powered decision making for autonomous vehicle perception with 360-degree camera integration.",
      image: "/images/projects/av-dashboard.svg",
      technologies: ["React.js", "Node.js", "Computer Vision", "OpenCV", "TensorFlow", "REST APIs", "Real-time AI"],
      githubUrl: "https://github.com/ravi1122",
      liveUrl: "",
      featured: false,
      aiPowered: true
    },
    {
      id: 5,
      title: "E-commerce Platform Components",
      description: "Developed comprehensive React components for Meijer's e-commerce platform including checkout module, product listing pages (PLP, DLP, SLP, CLP), shopping cart functionality, and user account management with robust form validation.",
      image: "/images/projects/meijer-ecommerce.svg",
      technologies: ["React.js", "JavaScript", "CSS3", "Form Validation", "Redux", "REST APIs"],
      githubUrl: "https://github.com/ravi1122",
      liveUrl: "",
      featured: false,
      aiPowered: false
    },
    {
      id: 6,
      title: "AI Chatbot & Virtual Assistant",
      description: "Built intelligent conversational AI using Large Language Models and advanced NLP techniques. Features include context-aware responses, multi-language support, and integration with business systems.",
      image: "/images/projects/ai-chatbot.svg",
      technologies: ["React.js", "Node.js", "OpenAI GPT", "LangChain", "NLP", "Python", "Vector Databases"],
      githubUrl: "https://github.com/ravi1122",
      liveUrl: "",
      featured: true,
      aiPowered: true
    }
  ],

  // Experience
  experience: [
    {
      id: 1,
      title: "AI Solutions Architect & Full Stack Developer",
      company: "LKQ Corporation",
      duration: "Nov 2023 - Present",
      location: "Remote",
      description: [
        "Architected and developed AI-enhanced e-commerce platforms (ECP and CP4L) using MACH architecture with intelligent recommendations",
        "Implemented ML-powered headless commerce platform on AWS stack utilizing SageMaker, Lambda, EventBridge, SQS, DynamoDB",
        "Integrated AI/ML services for predictive analytics, customer behavior analysis, and personalized user experiences",
        "Led a team of 10 developers in implementing AI-driven features and ensuring code quality standards",
        "Received Extra Miler Award from Director for exceptional AI implementation performance",
        "Technologies: NextJS, ReactJS, AI/ML, GraphQL, Node.js, AWS SageMaker, Commerce Tools, Algolia, TypeScript"
      ]
    },
    {
      id: 2,
      title: "AI-Enhanced Senior Research Engineer",
      company: "LG Electronics (R&D)",
      duration: "Dec 2021 - Nov 2023",
      location: "Seoul, South Korea (3 months onsite)",
      description: [
        "Developed AI-powered webOS TV applications with voice recognition and intelligent content recommendations",
        "Integrated NLP and ML models for personalized user experiences in Settings, Channel Management, and Picture Wizard",
        "Created intelligent Node.js services with AI-driven data processing for Luna integration",
        "Led a team of 7 engineers in developing AI-enhanced webOS TV projects with full SDLC management",
        "Successfully implemented machine learning algorithms for user behavior prediction and content optimization",
        "Received Customer Appreciation Award and Bravo Award from TATA Elxsi for AI innovation",
        "Technologies: EnactJS, ReactJS, AI/ML, NLP, Redux Toolkit, Node.js, Docker, Gerrit, DB8"
      ]
    },
    {
      id: 3,
      title: "Senior Engineer",
      company: "TATA Elxsi (TATA Group)",
      duration: "Jan 2020 - Dec 2021",
      location: "Netherlands (1+ year onsite) / Remote",
      description: [
        "Client: Royal Dutch Shell - Developed comprehensive IoT dashboard with battery monitoring and job scheduling",
        "Implemented enterprise SSO authentication using OAuth and JWT for security",
        "Client: AEye (US) - Engineered autonomous vehicle perception dashboard with 360-degree camera integration",
        "Built full-stack CRUD operations and deployed containerized applications using Docker and Azure",
        "Created single binary executable for Node.js server deployment optimization",
        "Technologies: ReactJS, Node.js, OAuth, JWT, Docker, Azure Container Registry"
      ]
    },
    {
      id: 4,
      title: "Associate Consultant",
      company: "Capgemini India Private Limited",
      duration: "Feb 2016 - Jan 2020",
      location: "India / US Client Projects",
      description: [
        "Client: Meijer (US Retail) - Developed React components for e-commerce checkout and product listing pages",
        "Implemented comprehensive form validation and resolved critical production defects",
        "Client: Cole-Haan (US Retail) - Collaborated with business stakeholders for requirement gathering",
        "Designed database objects including stored procedures, functions, and triggers",
        "Received Customer Delight Certificate from Vice President and Aspiring Certified Architect certification",
        "Ensured W3C compliance and coding standards adherence across projects"
      ]
    }
  ],

  // Education
  education: [
    {
      id: 1,
      degree: "AI Master Class Certification",
      school: "Professional AI/ML Training Program",
      duration: "2024",
      location: "Online",
      details: [
        "🏆 Comprehensive AI/ML certification covering latest technologies",
        "🤖 Large Language Models (LLMs) and Generative AI",
        "👁️ Computer Vision and Deep Learning techniques",
        "🧠 Neural Networks and Advanced ML Algorithms",
        "🔧 Hands-on experience with TensorFlow, PyTorch, and OpenAI APIs",
        "📊 Real-world AI project implementation and deployment"
      ],
      certificateUrl: "/Ravi_Ranjan_Certificate.pdf"
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      school: "AKU Patna, Nalanda College of Engineering",
      duration: "2011 - 2015",
      location: "Patna, India",
      details: [
        "Grade: 75% (First Class with Distinction)",
        "Achievement: 1st Rank in CSE Department",
        "Specialized in Software Engineering and Database Management",
        "Strong foundation in Data Structures, Algorithms, and System Design",
        "Early exposure to Machine Learning and AI concepts"
      ]
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (Science)",
      school: "BSEB Patna, KLS College Nawada",
      duration: "2009 - 2011",
      location: "Nawada, India",
      details: [
        "Grade: 68% in Science Stream",
        "Subjects: Physics, Chemistry, Mathematics, Computer Science",
        "Strong mathematical and analytical foundation for AI/ML",
        "Early exposure to programming and computational thinking"
      ]
    },
    {
      id: 3,
      degree: "Professional AI/ML & Industry Certifications",
      school: "Industry Certifications",
      duration: "2016 - 2024",
      location: "Online/Industry",
      details: [
        "🎓 AI Master Class Certification - Latest AI/ML Technologies (2024)",
        "🔍 Algolia Certified Developer (ACD) - Search and Discovery Platform",
        "🔗 MuleSoft Certified API 3.8 and Integration Developer",
        "🏗️ Aspiring Certified Architect (Level 0) - Capgemini",
        "☁️ AWS and Azure AI/ML cloud certifications in progress",
        "🤖 OpenAI API and LangChain specialized training"
      ]
    }
  ],

  // Social links
  social: {
    linkedin: "https://linkedin.com/in/raviranjan946",
    github: "https://github.com/ravi1122",
    twitter: "",
    instagram: ""
  }
};

export default portfolioData;