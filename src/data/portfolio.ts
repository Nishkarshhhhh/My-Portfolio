export interface Project {
  id: string;
  slug: string;
  order: string;
  title: string;
  subtitle: string;
  featured: boolean;
  tagline: string;
  summary: string;
  technologies: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  problem: string;
  whatWasBuilt: string;
  technicalApproach?: string[];
  keyFeatures: {
    title: string;
    description: string;
  }[];
  databaseDetails?: string;
  resultsOrMetrics?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  type?: "internship" | "research" | "work";
  badge?: string;
  projectTitle?: string;
  highlights: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  cgpa: string;
  location: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
}

export const DEVELOPER_PROFILE = {
  name: "Nishkarsh Varshney",
  title: "Software Developer",
  focus: "Backend & Full-Stack Development",
  headline: "Building reliable software, backend systems, and full-stack applications.",
  email: "nishkarsh.2.v@gmail.com",
  githubUrl: "https://github.com/Nishkarshhhhh",
  linkedinUrl: "https://www.linkedin.com/in/nishkarshvarshney18/",
  location: "Ghaziabad, India",
  resumePath: "/New_Ultar_Main_Resume(20261024-125233).pdf",
  aboutNarrative: `I am a Computer Science Engineering student at S.R.M. Institute of Science and Technology (2023–2027) with a 9.40 CGPA. My focus is on software development, backend systems, and full-stack web applications.

During my internship at Labmentix, I developed and integrated RESTful APIs using Node.js, Express.js, and Django, supported backend business logic and workflows, optimized API response handling and frontend assets to achieve an approximate 20% reduction in page load time, and resolved functional and performance bottlenecks.

My projects include a distributed job scheduling system using BullMQ, Redis, PostgreSQL, and Docker; a full-stack e-commerce platform using PHP and MySQL; and an NLP machine learning classifier for news veracity analysis.`,
};

export const PROJECTS: Project[] = [
  {
    id: "distributed-job-scheduler",
    slug: "distributed-job-scheduler",
    order: "01",
    title: "Distributed Job Scheduler",
    subtitle: "Distributed Job Scheduling & Queue System",
    featured: true,
    tagline: "A distributed job scheduling platform with REST APIs, CRON-based scheduling, job queues, retries, execution tracking, and worker coordination using BullMQ and Redis.",
    summary: "Built a distributed job scheduling platform to handle CRON-based recurring execution, asynchronous job queues, execution tracking, and worker coordination using BullMQ, Redis, PostgreSQL, Prisma, and Docker Compose.",
    technologies: [
      "TypeScript",
      "Node.js",
      "Express",
      "BullMQ",
      "Redis",
      "PostgreSQL",
      "Prisma",
      "Docker"
    ],
    githubUrl: "https://github.com/Nishkarshhhhh/distributed-job-scheduler",
    liveUrl: null,
    problem: "Applications often require background job execution, scheduled CRON jobs, and task queues without blocking main request lifecycles. Without structured queues, retries, and execution tracking, jobs can fail silently or cause inconsistent states.",
    whatWasBuilt: "A distributed job scheduling platform with REST APIs for job creation and management, BullMQ and Redis for queueing and job dispatching, independent workers for job processing, and PostgreSQL with Prisma for persistent job and run record management.",
    technicalApproach: [
      "REST APIs built with Express and TypeScript for job definitions and management",
      "CRON-based scheduling and immediate background task queueing using BullMQ and Redis",
      "Worker coordination executing background jobs with configurable retries",
      "PostgreSQL-backed job and execution run tracking managed via Prisma ORM",
      "Input validation, rate limiting, and structured error handling on API endpoints",
      "Docker Compose setup orchestrating Redis, PostgreSQL, API, and worker services"
    ],
    keyFeatures: [
      {
        title: "REST APIs & Management",
        description: "Endpoints for creating, scheduling, monitoring, and managing jobs and execution runs."
      },
      {
        title: "CRON & Scheduled Jobs",
        description: "Supports recurring CRON schedules and delayed task execution via BullMQ."
      },
      {
        title: "Job Queues & Retries",
        description: "Redis-backed BullMQ queues handle task dispatching and job retry execution."
      },
      {
        title: "Execution Tracking",
        description: "Tracks job statuses, run logs, timestamps, and failure information in PostgreSQL."
      },
      {
        title: "Worker Coordination",
        description: "Decouples worker execution from API handlers to process workloads reliably."
      },
      {
        title: "Containerized Orchestration",
        description: "Docker Compose service orchestration with Prisma database migrations."
      }
    ],
    databaseDetails: "PostgreSQL database managed via Prisma ORM for structured job configuration persistence and historical run tracking.",
    resultsOrMetrics: [
      "Configurable job retry policies and execution status tracking",
      "Persistent historical job and run management in PostgreSQL",
      "Multi-container environment managed with Docker Compose"
    ]
  },
  {
    id: "cartzilla",
    slug: "cartzilla",
    order: "02",
    title: "Cartzilla",
    subtitle: "Full-Stack E-Commerce Platform",
    featured: true,
    tagline: "A full-stack e-commerce web platform supporting product discovery, user authentication, shopping cart workflows, order management, and administrative control.",
    summary: "Developed a full-stack e-commerce application using PHP and MySQL that supports product discovery, user authentication, shopping cart workflows, order management, and administrative product and order management.",
    technologies: [
      "PHP",
      "MySQL",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap"
    ],
    githubUrl: "https://github.com/Nishkarshhhhh/Online-shopping-system",
    liveUrl: "https://onlineshoppingplatform.rf.gd/online%20shopping/",
    problem: "Online commerce websites require integrated workflows connecting product catalogs, user accounts, shopping carts, order placement, and back-office store administration.",
    whatWasBuilt: "A complete full-stack e-commerce platform with PHP and MySQL featuring user registration, product browsing and search, shopping cart workflows, order placement, and a comprehensive administrative dashboard for managing products, categories, brands, and customer orders.",
    technicalApproach: [
      "Server-side application logic built with PHP and structured session handling",
      "Relational MySQL database managing products, users, carts, orders, and inventory",
      "Responsive user interface developed with HTML, CSS, JavaScript, and Bootstrap",
      "Admin dashboard with CRUD functionality for catalog items and order statuses"
    ],
    keyFeatures: [
      {
        title: "Authentication & User Accounts",
        description: "User registration, login authentication, and secure session management."
      },
      {
        title: "Product Catalog & Search",
        description: "Structured product browsing with search and category filtering."
      },
      {
        title: "Shopping Cart Workflows",
        description: "Add, update, and remove items with dynamic order total calculations."
      },
      {
        title: "Order Management",
        description: "Checkout workflow recording customer orders and order status updates."
      },
      {
        title: "Admin Dashboard",
        description: "Administrative interface for store oversight, inventory control, and order tracking."
      },
      {
        title: "Category & Brand Management",
        description: "Full management of product categories, brands, and catalog organization."
      }
    ],
    databaseDetails: "MySQL-backed data management for products, users, carts, orders, and inventory.",
    resultsOrMetrics: [
      "Complete e-commerce lifecycle from user registration to order completion",
      "Deployed and accessible via live online demo"
    ]
  },
  {
    id: "fake-news-detection",
    slug: "fake-news-detection",
    order: "03",
    title: "Fake News Detection",
    subtitle: "NLP & Machine Learning",
    featured: true,
    tagline: "A natural language processing and machine learning classifier trained on 44,000+ articles to detect misinformation with ~98.6% prediction accuracy.",
    summary: "Built an NLP classification pipeline using Python, Pandas, and Scikit-learn to analyze over 44,000 news articles and classify misinformation using a Logistic Regression model.",
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Pandas"
    ],
    githubUrl: null, // Gracefully renders "Repository coming soon"
    liveUrl: null,
    problem: "Automated identification of misleading or fake news requires structured textual preprocessing, feature extraction, and high-accuracy classification across large textual datasets.",
    whatWasBuilt: "An NLP pipeline and predictive model trained on a benchmark dataset of over 44,000 articles using Scikit-learn and Pandas, achieving approximately 98.6% prediction accuracy with a Logistic Regression classifier.",
    technicalApproach: [
      "Dataset ingestion and tabular data processing using Pandas",
      "Text preprocessing including cleaning, tokenization, and vector representation",
      "Logistic Regression classification model trained and evaluated on held-out test data"
    ],
    keyFeatures: [
      {
        title: "Large-Scale Dataset Ingestion",
        description: "Processed and analyzed a corpus of over 44,000 news articles."
      },
      {
        title: "NLP Preprocessing Pipeline",
        description: "Text cleaning, tokenization, and feature vectorization."
      },
      {
        title: "Logistic Regression Classifier",
        description: "Trained classification model for accurate news veracity prediction."
      },
      {
        title: "High Prediction Accuracy",
        description: "Achieved approximately 98.6% prediction accuracy on evaluation data."
      }
    ],
    databaseDetails: "Dataset containing over 44,000 articles processed with Pandas data structures.",
    resultsOrMetrics: [
      "44,000+ articles processed in training and evaluation",
      "Approximately 98.6% prediction accuracy achieved"
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "devops-ai-research",
    company: "SRM Institute of Science and Technology (SRM IST)",
    role: "Researcher",
    location: "Ghaziabad, India",
    period: "2026",
    type: "research",
    badge: "Research Experience",
    projectTitle: "DevOpsAI: An Analytical Study of AI-Driven Automation in Modern DevOps Pipelines",
    highlights: [
      "Investigated AI-driven automation in modern DevOps pipelines through literature review and controlled evaluation of predictive and self-healing machine learning models.",
      "Analyzed and evaluated anomaly detection, forecasting, and self-healing architectures using LSTM, XGBoost, Isolation Forest, Prophet/ARIMA, and PPO-based reinforcement learning.",
      "Evaluated reported outcomes involving an 82% reduction in Mean Time to Detect (MTTD), a 79% reduction in Mean Time to Recover (MTTR), a 54% decrease in change failure rate, a 4.5× increase in deployment frequency, and 68% autonomous fault resolution."
    ],
    technologies: [
      "Python",
      "LSTM",
      "XGBoost",
      "Isolation Forest",
      "Prophet/ARIMA",
      "Reinforcement Learning (PPO)",
      "DevOps",
      "Anomaly Detection"
    ]
  },
  {
    id: "labmentix",
    company: "Labmentix",
    role: "Full Stack Web Development Intern",
    location: "Bangalore, India",
    period: "June 2025 – September 2025",
    type: "internship",
    badge: "Internship",
    highlights: [
      "Developed and integrated RESTful APIs using Node.js, Express.js and Django.",
      "Supported backend business logic and application workflows.",
      "Optimized API response handling and frontend assets, achieving approximately 20% reduction in page load time.",
      "Debugged backend and frontend issues, improving application reliability and resolving functional and performance bottlenecks."
    ],
    technologies: ["Node.js", "Express.js", "Django", "REST APIs", "JavaScript", "Python"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "srmist",
    institution: "S.R.M. Institute of Science and Technology",
    degree: "B.Tech in Computer Science and Engineering",
    period: "2023 – 2027",
    cgpa: "9.40",
    location: "Ghaziabad, India",
    highlights: [
      "Academic performance with a 9.40 CGPA.",
      "Core coursework in Data Structures & Algorithms, Object-Oriented Programming, DBMS, Operating Systems, Computer Networks, and SDLC."
    ]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    description: "Core programming languages for systems and web applications",
    skills: ["TypeScript", "JavaScript", "Python", "C++", "SQL", "C"]
  },
  {
    title: "Backend & Queues",
    description: "Server-side frameworks, APIs, and message queues",
    skills: ["Node.js", "Express.js", "Django", "BullMQ", "REST APIs"]
  },
  {
    title: "Databases & ORM",
    description: "Relational, in-memory data stores, and ORMs",
    skills: ["PostgreSQL", "MySQL", "Redis", "Prisma"]
  },
  {
    title: "Tools & DevOps",
    description: "Development toolchains, containerization, and build tools",
    skills: ["Docker", "Git", "GitHub", "Linux", "CMake", "VS Code"]
  },
  {
    title: "Computer Science",
    description: "Core computer science fundamentals",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "SDLC"
    ]
  },
  {
    title: "Concepts",
    description: "Software engineering and distributed systems concepts",
    skills: ["Distributed Systems", "API Design", "Debugging & Troubleshooting"]
  }
];
