import {
  Code2,
  Smartphone,
  Database,
  BrainCircuit,
  Cpu,
  ShieldCheck,
  Stethoscope,
  Activity,
  Layers,
  Sparkles,
  Terminal,
  Server,
  Cloud,
  CheckCircle2,
  AlertTriangle,
  Pill,
  Microscope,
  Calendar,
  Users
} from "lucide-react";

export const personalInfo = {
  name: "Gumoshabe Angel",
  shortName: "Angel",
  initials: "GA",
  title: "AI Engineer & Full-Stack Developer",
  roleHeadline: "AI Engineer + Full-Stack Developer",
  location: "Kampala, Uganda",
  country: "Uganda, East Africa",
  timezone: "EAT (UTC+3)",
  email: "gumushobeangel@gmail.com",
  phones: ["+256 740 230 081", "+256 755000083"],
  whatsappUrl: "https://wa.me/256740230081",
  github: {
    handle: "gumushobeangel-del",
    url: "https://github.com/gumushobeangel-del",
  },
  linkedin: {
    handle: "gumoshabe-angel-6031203b9",
    url: "https://www.linkedin.com/in/gumoshabe-angel-6031203b9/",
  },
  availability: "AVAILABLE FOR FULL-TIME & CONTRACT ROLES",
  bioLead: "I bridge the gap between intelligent AI algorithms and robust, production-grade full-stack applications.",
  bioDescription: [
    "I'm a software developer and AI engineer based in Kampala, Uganda, focused on building software that works smoothly from interface to database.",
    "My engineering spans end-to-end full-stack architectures, applied Generative AI workflows, LLM orchestration (RAG, prompt engineering), and IoT embedded telemetry.",
    "I believe great software is born at the intersection of deep problem understanding, disciplined engineering, and intuitive user experiences."
  ],
  traits: [
    "Clean Architecture",
    "Generative AI & LLMs",
    "RESTful API Design",
    "Database Optimization",
    "Continuous Improvement",
    "User-Centric UI/UX",
    "Rigorous Testing",
    "Reliable Production Delivery"
  ],
  quote: "Great software is not just about writing lines of code — it is about understanding the problem deeply and engineering the most dependable, human-friendly solution that actually works.",
  spokenLanguages: [
    { name: "English", level: "Professional / Fluent" },
    { name: "Luganda", level: "Native / Fluent" },
    { name: "Runyankole", level: "Native / Fluent" },
  ]
};

export const stats = [
  { num: "3+", label: "Flagship Systems", subtext: "Production-ready solutions" },
  { num: "6", label: "Credentials", subtext: "Education & professional certificates" },
  { num: "15+", label: "Core Technologies", subtext: "Python, React, AI, DBs" },
  { num: "<150ms", label: "API Latency Focus", subtext: "Optimized backend performance" },
];

export const skillsData = [
  {
    category: "Languages",
    title: "Programming Languages",
    icon: Code2,
    accent: "#a8e063",
    items: [
      { name: "Python", level: "Advanced", note: "FastAPI, Django, AI/ML scripting" },
      { name: "JavaScript", level: "Advanced", note: "ES6+, Async, DOM APIs" },
      { name: "TypeScript", level: "Proficient", note: "Strict typing, React interfaces" },
      { name: "C / C++", level: "Intermediate", note: "Arduino, Embedded systems" },
      { name: "HTML", level: "Expert", note: "Semantic web structure and accessible markup" },
      { name: "CSS", level: "Expert", note: "Modern styling and responsive layouts" }
    ]
  },
  {
    category: "Frontend",
    title: "Frontend Engineering",
    icon: Smartphone,
    accent: "#38bdf8",
    items: [
      { name: "React.js", level: "Advanced", note: "Hooks, SPA routing, state management" },
      { name: "Streamlit", level: "Advanced", note: "Rapid AI & Data app prototyping" },
      { name: "UI/UX Architecture", level: "Proficient", note: "Design systems, accessibility, micro-interactions" },
      { name: "Vite", level: "Advanced", note: "Modern fast bundler & toolchain" }
    ]
  },
  {
    category: "Backend",
    title: "Backend & Systems",
    icon: Database,
    accent: "#f59e0b",
    items: [
      { name: "FastAPI", level: "Advanced", note: "High-performance async APIs, Pydantic v2" },
      { name: "Django", level: "Advanced", note: "ORM, auth, enterprise architectures" },
      { name: "REST APIs", level: "Expert", note: "RESTful standards, error schemas, token auth" }
    ]
  },
  {
    category: "AI & ML",
    title: "Artificial Intelligence & ML",
    icon: BrainCircuit,
    accent: "#c084fc",
    items: [
      { name: "Generative AI", level: "Advanced", note: "Prompt engineering, structured outputs" },
      { name: "LLM Orchestration", level: "Proficient", note: "LangChain, RAG pipelines, OpenAI APIs" },
      { name: "Embeddings & Vector Search", level: "Proficient", note: "Semantic search, context augmentation" },
      { name: "Machine Learning Foundations", level: "Proficient", note: "Supervised models, Turing College certified" },
      { name: "STAR Method Feedback AI", level: "Specialist", note: "Automated behavioral interview scoring" }
    ]
  },
  {
    category: "Data & DevOps",
    title: "Data, Cloud & DevOps",
    icon: Cloud,
    accent: "#34d399",
    items: [
      { name: "PostgreSQL", level: "Proficient", note: "Relational modeling, indexing, ACID" },
      { name: "SQLite", level: "Advanced", note: "Embedded storage, rapid testing" },
      { name: "Docker", level: "Proficient", note: "Containerization, compose multi-service" },
      { name: "Git & GitHub", level: "Expert", note: "Branching workflows, version control, CI/CD" },
      { name: "Cloud Computing", level: "Proficient", note: "Refactory certified cloud foundations" }
    ]
  },
  {
    category: "IoT & Hardware",
    title: "Embedded & IoT Systems",
    icon: Cpu,
    accent: "#f43f5e",
    items: [
      { name: "Arduino Uno", level: "Proficient", note: "Microcontroller circuit architecture" },
      { name: "Multi-Sensor Telemetry", level: "Proficient", note: "Temperature, sound, photodiode sensors" },
      { name: "Embedded Logic", level: "Proficient", note: "Interrupts, analog-to-digital thresholds" },
      { name: "Safety Alarms", level: "Proficient", note: "Acoustic buzzer and visual LED triggers" }
    ]
  }
];

export const projectsData = [
  {
    id: "hospital-system",
    number: "01",
    featured: true,
    badge: "FLAGSHIP FULL-STACK PLATFORM",
    category: "Full-Stack",
    title: "MediLink Hospital Operations & Clinical System",
    shortDescription: "An enterprise clinical healthcare workspace streamlining patient intake, triage queues, physician consults, e-prescriptions, lab diagnostics, and role-based staff provisioning.",
    fullDescription: "MediLink is an end-to-end hospital management and clinical operations system built to digitize and synchronize healthcare workflows. Designed with clinical precision, it connects emergency triage, outpatient appointments, doctor consultations, electronic pharmacy dispensing, diagnostic laboratories, and hospital inventory into a unified, high-reliability command center.",
    stack: ["FastAPI", "React 18", "TypeScript", "SQLAlchemy 2.0", "Alembic", "Argon2id", "SQLite / PostgreSQL", "Vite"],
    metrics: [
      { label: "Clinical Modules", value: "8 Connected Workspaces" },
      { label: "RBAC Security", value: "7 Granular Staff Roles" },
      { label: "Triage Workflow", value: "Emergency, Urgent, Routine" },
      { label: "Data Integrity", value: "Tamper-Evident Audit Logs" }
    ],
    features: [
      "Real-time Triage Queue Monitor with severity classification (Emergency, Urgent, Routine)",
      "Patient Intake & Medical Records Drawer with vitals telemetry (BP, SpO2, Pulse, Temp)",
      "Clinical Consultation Scheduler with room assignment and doctor assignment",
      "Dispensary & Pharmacy with dosage protocols and allergy contraindication alerts",
      "Diagnostic Laboratory order tracking with Abnormal / Critical specimen flags",
      "Central Medical Depot & Inventory management with reorder threshold alerts",
      "Strict Role-Based Access Control (Admin, Doctor, Nurse, Receptionist, Pharmacist, Lab, Accountant)",
      "FastAPI REST backend with Argon2id password hashing and SQLAlchemy 2.0 engine"
    ],
    architectureHighlights: [
      { component: "Frontend Layer", detail: "React 18 + Vite SPA, strict TypeScript interfaces, responsive clinical command center." },
      { component: "API Layer", detail: "FastAPI REST API with Pydantic v2 schemas and role-based dependency checks." },
      { component: "Security", detail: "Argon2id password hashing, HttpOnly session cookies, and tamper-evident audit logging." },
      { component: "Database ORM", detail: "SQLAlchemy 2.0 declarative models with Alembic database schema migrations." }
    ],
    previewScreens: [
      { id: "triage", name: "Triage & Queue", icon: Activity, description: "Live triage monitor with vital signs and severity classification." },
      { id: "patients", name: "Patient Intake", icon: Stethoscope, description: "Electronic health records, allergies, demographics, and vitals." },
      { id: "pharmacy", name: "Dispensary & Pharmacy", icon: Pill, description: "E-prescriptions, dosage protocols, and contraindication safety." },
      { id: "lab", name: "Diagnostic Lab", icon: Microscope, description: "Specimen results (Hematology, Biochemistry) with critical flags." },
      { id: "architecture", name: "System Architecture", icon: Layers, description: "FastAPI + React + SQLAlchemy + Alembic enterprise design." }
    ],
    simulatedData: {
      stats: {
        activePatients: 24,
        triageQueue: 7,
        urgentCases: 2,
        bedOccupancy: "82%",
        apiLatency: "18ms"
      },
      queue: [
        { id: "MED-041", name: "Amina Nakato", age: 34, triage: "Emergency", complaint: "Acute chest pain & tachycardia", bp: "148/95", spo2: "93%", status: "Calling In" },
        { id: "MED-039", name: "David Otim", age: 48, triage: "Urgent", complaint: "Suspected diabetic ketoacidosis", bp: "135/88", spo2: "96%", status: "Triage Done" },
        { id: "MED-044", name: "Grace Kigozi", age: 29, triage: "Routine", complaint: "Follow-up prenatal review", bp: "118/76", spo2: "99%", status: "Waiting" },
      ],
      prescriptions: [
        { rx: "RX-8821", patient: "Amina Nakato", medication: "Nitroglycerin 0.4mg SL", doctor: "Dr. K. Sarah", status: "Dispensed" },
        { rx: "RX-8824", patient: "David Otim", medication: "Regular Insulin 10 units IV", doctor: "Dr. M. Joseph", status: "Verification Pending" }
      ],
      labs: [
        { test: "Troponin I & Cardiac Enzymes", patient: "Amina Nakato", result: "0.14 ng/mL", flag: "Abnormal", time: "14m ago" },
        { test: "Full Blood Count (FBC)", patient: "David Otim", result: "Hb 13.8 g/dL, WBC 11.2k", flag: "Normal", time: "32m ago" }
      ]
    },
    githubUrl: "https://github.com/gumushobeangel-del",
    visualClass: "proj-medilink"
  },
  {
    id: "ai-interview",
    number: "02",
    featured: false,
    badge: "GENERATIVE AI & LLM APPLICATION",
    category: "AI & ML",
    title: "AI Interview Practice Coach",
    shortDescription: "An intelligent interview preparation coach using LLMs to simulate real-world technical and behavioral interviews, structure answers using the STAR method, and generate actionable feedback.",
    fullDescription: "AI Interview Practice Coach empowers job candidates and students to prepare for high-stakes interviews with an AI interviewer. It dynamically adapts interview questions based on job description, guides candidates to frame responses using the STAR method (Situation, Task, Action, Result), and analyzes answers for clarity, impact, and confidence.",
    stack: ["Python", "Streamlit", "LLM APIs", "Prompt Engineering", "NLP", "STAR Rubric"],
    metrics: [
      { label: "Framework", value: "Streamlit + Python" },
      { label: "Evaluation", value: "STAR Method Scoring" },
      { label: "Interaction", value: "Adaptive Multi-turn Q&A" },
      { label: "Outcome", value: "Actionable Feedback Reports" }
    ],
    features: [
      "Context-aware interview questions generated dynamically from role specifications",
      "STAR method (Situation, Task, Action, Result) prompt structure and answer coaching",
      "Instant multi-dimensional evaluation (technical accuracy, structure, conciseness)",
      "Actionable recommendations and model exemplar responses for iterative practice",
      "Clean, distraction-free interactive interface powered by Streamlit"
    ],
    architectureHighlights: [
      { component: "Prompt Chain", detail: "Multi-stage prompting: context extraction -> dynamic question formulation -> STAR rubric evaluation." },
      { component: "Feedback Engine", detail: "Parses candidate answers into structured criteria and generates constructive improvement points." },
      { component: "UI Layer", detail: "Responsive Streamlit workspace providing real-time question generation and markdown report export." }
    ],
    githubUrl: "https://github.com/gumushobeangel-del",
    visualClass: "proj-ai"
  },
  {
    id: "iot-monitor",
    number: "03",
    featured: false,
    badge: "EMBEDDED HARDWARE & IOT",
    category: "IoT & Hardware",
    title: "Smart Room Environmental Safety Monitor",
    shortDescription: "An Arduino-based multi-sensor environmental safety system tracking ambient noise, illumination, and temperature thresholds with automatic visual and acoustic alarm triggers.",
    fullDescription: "A hardware and embedded software project engineered with the Arduino Uno microcontroller to safeguard indoor environments. The system continuously polls sound, light, and temperature sensor circuits, processes analog signals against configurable safety limits, and drives visual LED indicators and buzzer alarms in real-time.",
    stack: ["Arduino Uno", "C / C++", "Analog Sensors", "Microcontroller Circuits", "IoT"],
    metrics: [
      { label: "Controller", value: "ATmega328P (Arduino Uno)" },
      { label: "Telemetry", value: "Sound, Light, Temp Sensors" },
      { label: "Alert Response", value: "<10ms Real-time Trigger" },
      { label: "Output", value: "Multi-color LEDs & Buzzer" }
    ],
    features: [
      "Simultaneous multi-sensor continuous polling for environmental fluctuations",
      "Sound sensor integration detecting unexpected loud noises or security breaches",
      "Photoresistor (LDR) light sensor monitoring room illumination thresholds",
      "Thermistor temperature telemetry triggering thermal safety alerts",
      "Active acoustic buzzer and dual-state LED indicators for immediate warning feedback",
      "Efficient C/C++ embedded firmware with non-blocking timing logic"
    ],
    architectureHighlights: [
      { component: "Microcontroller", detail: "Arduino Uno running optimized C/C++ loop with sensor calibration routines." },
      { component: "Sensor Network", detail: "Sound microphone module, LDR light sensor, and analog temperature probe." },
      { component: "Alarm Actuators", detail: "Piezo buzzer PWM frequency generation and multi-color status alert LEDs." }
    ],
    githubUrl: "https://github.com/gumushobeangel-del",
    visualClass: "proj-iot"
  }
];

export const educationData = [
  {
    qualification: "Certificate in Software Engineering",
    institution: "Refactory Academy",
    year: "2026",
    credentialType: "Professional Software Engineering",
    skills: ["Full-Stack Architecture", "Software Testing", "Agile & Team Sprints", "Production Git"]
  },
  {
    qualification: "Certificate in Software & AI",
    institution: "Turing College",
    year: "2026",
    credentialType: "AI & Software Development",
    skills: ["Generative AI", "Applied Machine Learning", "API Design", "Code Review"]
  },
  {
    qualification: "Certificate in Machine Learning",
    institution: "Turing College",
    year: "2026",
    credentialType: "Machine Learning Foundations",
    skills: ["Supervised ML", "Model Evaluation", "Data Pipelines", "Prompt Engineering"]
  },
  {
    qualification: "Certificate in Cloud Computing",
    institution: "Refactory Academy",
    year: "2026",
    credentialType: "Cloud & Infrastructure",
    skills: ["Cloud Architecture", "Virtualization", "Container Concepts", "Deployment"]
  },
  {
    qualification: "WordPress Development",
    institution: "WordPress",
    year: "2026",
    credentialType: "Web Engineering",
    skills: ["CMS Architecture", "PHP & Themes", "Client Site Management"]
  },
  {
    qualification: "Uganda Certificate of Education (UCE)",
    institution: "St. Francis High School",
    year: "2026",
    credentialType: "Secondary Education",
    skills: ["Sciences & Mathematics", "Academic Excellence"]
  }
];

export const terminalCommands = {
  help: [
    "Available commands in Angel's Interactive CLI:",
    "  help         - Show this list of available commands",
    "  about        - View Gumoshabe Angel's background & focus",
    "  skills       - Display technical skills and proficiencies",
    "  projects     - List flagship software and AI systems",
    "  hospital     - Deep dive into MediLink Hospital Operations System",
    "  education    - Display certifications and academic milestones",
    "  contact      - Show direct contact channels & social profiles",
    "  hire         - Output immediate hiring / contract availability",
    "  clear        - Clear the terminal console"
  ],
  about: [
    "Gumoshabe Angel — AI Engineer & Full-Stack Developer",
    "Location: Kampala, Uganda (East Africa) | Timezone: UTC+3",
    "Focus: Building dependable software across full-stack web, generative AI,",
    "and embedded IoT applications. Dedicated to clean code, test-driven logic,",
    "and delightful user experiences."
  ],
  skills: [
    "Core Languages: Python (FastAPI/Django), JavaScript, TypeScript, C/C++, HTML, CSS",
    "Frontend Stack: React.js, Streamlit, Vite, Modern Responsive Design",
    "Backend & DB:   FastAPI, Django, PostgreSQL, SQLite, SQLAlchemy 2.0, REST APIs",
    "AI & ML Stack:  Generative AI, LLMs, RAG, LangChain, Prompt Engineering, Embeddings",
    "DevOps & Tools: Docker, Git, GitHub, VS Code, Linux CLI, Cloud Computing",
    "Hardware & IoT: Arduino Uno, Multi-Sensor Telemetry, Circuit Integration"
  ],
  projects: [
    "01. MediLink Hospital System  - Full-stack clinical healthcare workspace (React + FastAPI + SQLAlchemy)",
    "02. AI Interview Practice Coach - LLM-powered STAR method interview simulator (Streamlit + Python)",
    "03. Smart Room Safety Monitor   - Multi-sensor IoT environmental safety monitor (Arduino Uno + C/C++)",
    "Type 'hospital' to inspect the full architecture of MediLink."
  ],
  hospital: [
    "=== MediLink Hospital Operations & Clinical System ===",
    "• Architecture: FastAPI REST backend + React 18 SPA + SQLAlchemy 2.0 ORM + Alembic",
    "• Security: Argon2id password ciphers, HttpOnly cookie sessions, 7 RBAC roles",
    "• Modules: Triage Queue Monitor, Patient Records, E-Prescriptions, Diagnostic Labs, Inventory Depot",
    "• Performance: Sub-150ms API response latency, tamper-evident audit logs",
    "• Status: Production ready & documented with full ERD schema."
  ],
  education: [
    "• Certificate in Software Engineering  - Refactory Academy (2026)",
    "• Certificate in Software & AI         - Turing College (2026)",
    "• Certificate in Machine Learning      - Turing College (2026)",
    "• Certificate in Cloud Computing       - Refactory Academy (2026)",
    "• WordPress Development                - WordPress (2026)",
    "• Uganda Certificate of Education      - St. Francis High School (2026)"
  ],
  contact: [
    "Direct Email: gumushobeangel@gmail.com",
    `Phone:        ${personalInfo.phones.join(" / ")}`,
    "WhatsApp:     https://wa.me/256740230081",
    "GitHub:       https://github.com/gumushobeangel-del",
    "LinkedIn:     https://www.linkedin.com/in/gumoshabe-angel-6031203b9/"
  ],
  hire: [
    "STATUS: AVAILABLE FOR IMMEDIATE FULL-TIME & CONTRACT OPPORTUNITIES",
    "Target Roles: AI Engineer, Full-Stack Developer, Python Backend Engineer, React Developer",
    "Reach out directly at: gumushobeangel@gmail.com"
  ]
};
