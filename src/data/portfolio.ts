export interface Project {
  id: string;
  slug: string;
  order: string;
  title: string;
  subtitle: string;
  featured: boolean;
  category: "Distributed Systems" | "AI & Machine Learning" | "Full-Stack Web";
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
    category: "Distributed Systems",
    tagline: "A distributed job-processing platform with 12 REST API endpoints, BullMQ/Redis queues, CRON scheduling, and PostgreSQL execution tracking with Docker Compose.",
    summary: "Built a distributed job-processing platform with 12 REST API endpoints, BullMQ/Redis queues, CRON scheduling, configurable retries (up to 3 attempts), PostgreSQL-backed execution tracking, and 2 containerized worker services with Docker Compose.",
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
    problem: "Modern web systems require background job execution, recurring CRON schedules, and task queues without blocking main HTTP request lifecycles. Without structured queues, retry policies, and execution tracking, background jobs risk silent failure and inconsistent application states.",
    whatWasBuilt: "A production-grade distributed job-processing platform with 12 REST API endpoints, BullMQ and Redis for queue management, independent Docker-containerized worker services supporting 5 concurrent jobs per worker, and PostgreSQL with Prisma for persistent job and run tracking.",
    technicalApproach: [
      "Built 12 REST API endpoints with Express and TypeScript for job definitions, dispatching, and run queries",
      "Implemented BullMQ and Redis queues supporting immediate, delayed, and CRON recurring scheduling",
      "Configured automated exponential retry policies (up to 3 attempts) with structured error handling",
      "Managed PostgreSQL-backed job and execution run tracking with Prisma ORM migrations",
      "Enforced payload validation, rate limiting middleware, and unified error handling across API routes",
      "Containerized Redis, PostgreSQL, API, and 2 worker services with Docker Compose, validated by 50/50 passing tests"
    ],
    keyFeatures: [
      {
        title: "12 REST API Endpoints",
        description: "Comprehensive endpoints for job registration, status monitoring, cancellation, and execution logs."
      },
      {
        title: "BullMQ & Redis Queues",
        description: "In-memory task queues handling priority dispatching, concurrency control, and delayed execution."
      },
      {
        title: "CRON & Scheduled Execution",
        description: "Repeatable CRON expressions and scheduled triggers executed reliably without server clock drift."
      },
      {
        title: "Automated Retries & Error Handling",
        description: "Up to 3 automatic retry attempts with exponential backoff and failed-run diagnostic capture."
      },
      {
        title: "PostgreSQL Run Persistence",
        description: "Complete execution history, timestamps, worker metadata, and status tracking managed via Prisma."
      },
      {
        title: "Dockerized Multi-Worker Architecture",
        description: "Containerized setup with 2 worker services handling 5 concurrent jobs per worker, verified by 50/50 test suite."
      }
    ],
    databaseDetails: "PostgreSQL database managed via Prisma ORM for structured job configuration persistence and historical execution run tracking.",
    resultsOrMetrics: [
      "12 REST API endpoints for full job lifecycle management",
      "Up to 3 automatic retries with structured error handling",
      "2 worker services supporting 5 concurrent jobs per worker",
      "Multi-container environment validated by 50/50 passing tests"
    ]
  },
  {
    id: "devops-ai",
    slug: "devops-ai",
    order: "02",
    title: "DevOpsAI Research",
    subtitle: "AI-Driven Automation in Modern DevOps Pipelines",
    featured: true,
    category: "AI & Machine Learning",
    tagline: "An analytical study evaluating AI-driven automation, predictive anomaly detection, and self-healing architectures in modern DevOps workflows.",
    summary: "Investigated AI-driven automation in modern DevOps pipelines through literature review and controlled evaluation of predictive and self-healing machine learning architectures including LSTM, XGBoost, Isolation Forest, Prophet/ARIMA, and PPO reinforcement learning.",
    technologies: [
      "Python",
      "LSTM",
      "XGBoost",
      "Isolation Forest",
      "Prophet/ARIMA",
      "Reinforcement Learning (PPO)",
      "DevOps"
    ],
    githubUrl: null,
    liveUrl: null,
    problem: "High-velocity CI/CD delivery pipelines face complex failure modes where static threshold alerts produce alert fatigue and fail to detect subtle operational degradation before customer-impacting outages occur.",
    whatWasBuilt: "An analytical research investigation evaluating predictive monitoring, multi-model anomaly detection, time-series failure forecasting, and policy-driven autonomous remediation architectures in modern continuous delivery pipelines.",
    technicalApproach: [
      "Literature review and structured evaluation of AI/ML architectures in continuous delivery pipelines",
      "Evaluation of anomaly detection models including Isolation Forest, LSTM neural networks, and XGBoost",
      "Time-series metric forecasting analysis using Prophet and ARIMA for metric degradation prediction",
      "Exploration of policy-driven automated remediation and rollback using PPO reinforcement learning"
    ],
    keyFeatures: [
      {
        title: "Predictive Anomaly Detection",
        description: "Evaluated LSTM and Isolation Forest models for early detection of latency and telemetry anomalies."
      },
      {
        title: "Time-Series Metric Forecasting",
        description: "Analyzed Prophet and ARIMA models for predicting resource saturation and pipeline failures."
      },
      {
        title: "Autonomous Remediation Workflows",
        description: "Investigated PPO reinforcement learning architectures for automated incident mitigation and rollback."
      },
      {
        title: "Operational Impact Analysis",
        description: "Evaluated reported benchmarks and literature outcomes across MTTD, MTTR, and change failure rates."
      }
    ],
    databaseDetails: "Evaluation across telemetry benchmarks, continuous integration log datasets, and published DevOps operational studies.",
    resultsOrMetrics: [
      "Evaluated predictive architectures for modern CI/CD software delivery pipelines",
      "Comparative analysis across LSTM, XGBoost, Isolation Forest, and Prophet/ARIMA models",
      "Synthesized analytical framework for policy-driven autonomous remediation"
    ]
  },
  {
    id: "fake-news-detection",
    slug: "fake-news-detection",
    order: "03",
    title: "Fake News Detection",
    subtitle: "NLP & Machine Learning Classification",
    featured: true,
    category: "AI & Machine Learning",
    tagline: "An applied NLP pipeline trained on 44,898 articles with CountVectorizer and Logistic Regression achieving ~98.6% prediction accuracy.",
    summary: "Built an applied NLP classification pipeline in Python processing 44,898 labeled news articles using tokenization, stopword removal, and Porter stemming, extracting 10,000-dimensional CountVectorizer features, and comparing Logistic Regression, Naive Bayes, and KNN models.",
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "Pandas",
      "CountVectorizer",
      "Logistic Regression"
    ],
    githubUrl: null,
    liveUrl: null,
    problem: "Automated identification of misleading or fabricated news requires structured textual preprocessing, high-dimensional feature engineering, and robust classification across large textual corpora without overfitting.",
    whatWasBuilt: "An applied NLP pipeline featuring tokenization, stopword filtering, and Porter stemming, 10,000-dimensional CountVectorizer feature extraction across an 80/20 train-test split, and a comparative evaluation across Logistic Regression, Naive Bayes, and K-Nearest Neighbors.",
    technicalApproach: [
      "Processed 44,898 labeled news articles using NLP preprocessing (tokenization, stopword removal, Porter stemming)",
      "Engineered 10,000-dimensional Bag-of-Words feature representations using CountVectorizer",
      "Trained and evaluated models using a stratified 80/20 train-test split",
      "Benchmarked 3 classifiers: Logistic Regression, Naive Bayes, and K-Nearest Neighbors (KNN)"
    ],
    keyFeatures: [
      {
        title: "Corpus Preprocessing",
        description: "Processed 44,898 labeled news articles with tokenization, stopword removal, and Porter stemming."
      },
      {
        title: "10,000-Dim Feature Vectorization",
        description: "Extracted 10,000-dimensional Bag-of-Words feature space using Scikit-learn CountVectorizer."
      },
      {
        title: "Multi-Classifier Comparison",
        description: "Compared Logistic Regression against Naive Bayes and KNN baselines across precision, recall, and F1."
      },
      {
        title: "High Precision & Recall",
        description: "Logistic Regression achieved 98.6% accuracy, 98.4% precision, 98.8% recall, and 98.6% F1-score."
      }
    ],
    databaseDetails: "Labeled corpus of 44,898 news articles processed with Pandas data structures.",
    resultsOrMetrics: [
      "44,898 labeled articles processed in training and evaluation",
      "10,000-dimensional Bag-of-Words feature representations",
      "Logistic Regression achieved ~98.6% accuracy, 98.4% precision, 98.8% recall, and 98.6% F1-score"
    ]
  },
  {
    id: "cartzilla",
    slug: "cartzilla",
    order: "04",
    title: "Cartzilla",
    subtitle: "Full-Stack E-Commerce Platform",
    featured: true,
    category: "Full-Stack Web",
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
    title: "Programming Languages",
    description: "Core programming languages for software and systems engineering",
    skills: ["Python", "C++", "C", "JavaScript", "SQL"]
  },
  {
    title: "AI & Data Science",
    description: "Machine learning models, natural language processing, and data processing",
    skills: [
      "Machine Learning",
      "Natural Language Processing (NLP)",
      "Data Processing",
      "ETL Concepts",
      "Pandas",
      "Scikit-learn"
    ]
  },
  {
    title: "Backend Development",
    description: "Server-side architectures, RESTful APIs, and backend frameworks",
    skills: ["Node.js", "Express.js", "Django", "REST APIs"]
  },
  {
    title: "Databases & Queues",
    description: "Relational data stores, in-memory caching, and message broker systems",
    skills: ["PostgreSQL", "MySQL", "Redis"]
  },
  {
    title: "DevOps & Development Tools",
    description: "Containerization, Linux environments, version control, and build tools",
    skills: ["Docker", "Git", "GitHub", "Linux", "CMake", "VS Code"]
  },
  {
    title: "Computer Science Fundamentals",
    description: "Core theoretical foundations, data structures, and engineering principles",
    skills: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming (OOP)",
      "SDLC"
    ]
  }
];
