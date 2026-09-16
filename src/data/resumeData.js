export const profile = {
  name: "Yannick Kuete",
  title: "Software Developer & Automation Engineer",
  location: "Denver, CO",
  phone: "(720) 694-2513",
  email: "yankuete@gmail.com",
  github: "https://github.com/ykuete",
  availability: "Open to full-time opportunities — available immediately",
  gpa: "3.4",
  graduation: "May 2027",
  summary:
    "Results-driven Computer Science student with hands-on experience spanning network security, database engineering, and DevOps automation. Recently completed coursework in Computer Security, Computer Networks, and Cybersecurity fundamentals. Proven track record of automating enterprise IT workflows, reducing manual errors, and improving operational efficiency.",
};

export const skillGroups = [
  {
    tag: "LANG",
    label: "Languages & Scripting",
    items: ["C", "C++", "Python", "Bash", "JavaScript", "SQL"],
  },
  {
    tag: "SEC",
    label: "Cybersecurity & Networking",
    items: [
      "Firewall Configuration",
      "Encryption & Authentication",
      "SQL Injection Remediation",
      "Security Monitoring",
      "TCP/UDP Socket Programming",
      "Network Attack Analysis",
    ],
  },
  {
    tag: "DB",
    label: "Databases",
    items: ["PostgreSQL", "Relational Design (3NF, ER Modeling)", "PHP"],
  },
  {
    tag: "OPS",
    label: "Automation & DevOps",
    items: ["Docker", "Jenkins", "Ansible", "AWS", "Git", "CI/CD Pipelines"],
  },
  {
    tag: "SYS",
    label: "Platforms & Practices",
    items: [
      "Linux Administration",
      "Infrastructure-as-Code",
      "Enterprise Hardware Repair",
    ],
  },
];

export const certifications = [
  { name: "AWS Certified Solutions Architect – Associate", year: "2024" },
  { name: "CompTIA A+", year: "2024" },
];

export const experience = [
  {
    role: "Customer Service Engineer",
    org: "WWTS",
    dates: "2023 – Present",
    bullets: [
      "Diagnosed and repaired HP, Dell, and Mac assets across large-scale enterprise environments, ensuring minimal downtime for end users.",
      "Wrote custom Bash and Python scripts to triage and resolve CrowdStrike-related IT outages, restoring critical system functionality and automating recurring remediation steps so technicians could focus on complex issues.",
      "Streamlined hardware-swap workflows by scripting asset-tracking updates, cutting manual data-entry time and reducing inventory errors.",
    ],
  },
  {
    role: "Civil Engineer",
    org: "FebDesign",
    dates: "2016 – 2021",
    bullets: [
      "Designed and documented construction projects ensuring strict compliance with engineering standards and safety regulations, and coordinated cross-functional teams — building the project-management discipline that now drives my technical work.",
    ],
  },
];

export const education = [
  {
    school: "University of Colorado Denver",
    detail: "Bachelor of Arts, Computer Science | GPA: 3.4",
    dates: "Anticipated Graduation: May 2027",
    extra: [
      "Completed Coursework: Data Concept Systems, Algorithms, Computer Security, Introduction to Computer Networks",
      "Current Coursework (Fall 2026): Introduction to Software Engineering, Fundamentals of UNIX, App Development for Mobile Devices, NLP with Generative AI",
    ],
  },
  {
    school: "Community College of Aurora",
    detail: "Associate of Science, Computer Science",
    dates: "2022 – 2025",
    extra: [],
  },
  {
    school: "University UIT Bandjoun, Cameroun",
    detail: "Civil Engineering Degree",
    dates: "2012 – 2016",
    extra: [],
  },
];

export const projects = [
  {
    id: "materials-db",
    name: "Materials Selection Database",
    stack: ["PostgreSQL", "PHP", "SQL"],
    art: "database",
    summary:
      "A normalized (3NF) relational database for a materials-selection application, with a PHP front end driving query-based lookups.",
    bullets: [
      "Designed and implemented a normalized (3NF) relational database, including ER diagrams, schema architecture, and relational-algebra formalization of core queries.",
      "Built a PHP front end connected to a PostgreSQL backend, translating functional dependencies and entity relationships into a working, query-driven web application.",
    ],
    link: "https://github.com/ykuete/Materials-Selection-Database",
  },
  {
    id: "socket-labs",
    name: "Network Socket Programming Labs",
    stack: ["C", "TCP", "UDP"],
    art: "network",
    summary:
      "Low-level client/server networking in C, covering both connection-oriented and connectionless communication.",
    bullets: [
      "Implemented TCP stream-socket and UDP datagram client/server systems in C, demonstrating reliable connection-oriented exchange and connectionless, packet-level communication between networked peers.",
    ],
    link: "https://github.com/ykuete/streamSocket_server_Clanguage",
    link2: "https://github.com/ykuete/UDP-Datagram-Client-Server-Lab-2-",
  },
  {
    id: "tetris",
    name: "Modern Tetris Clone",
    stack: ["C++", "Raylib"],
    art: "tetris",
    summary:
      "A fully functional Tetris recreation built with clean OOP architecture and a one-command cross-platform build.",
    bullets: [
      "Developed a fully functional Tetris recreation applying Object-Oriented Programming principles and clean architecture patterns.",
      "Engineered collision detection, line-clearing, and adaptive-difficulty algorithms; integrated a Makefile-based build system for one-command compilation across platforms.",
    ],
    link: null,
  },
  {
    id: "wheel-of-hopes",
    name: "\u201CWheel of Hopes\u201D Interactive Prototype",
    stack: ["Hardware", "Prototyping", "User Research"],
    art: "wheel",
    summary:
      "A physical, interactive gaming device built at CU Denver to spark social interaction — refined through real user testing.",
    bullets: [
      "Led end-to-end engineering lifecycle of a physical gaming device designed to facilitate social interaction.",
      "Executed a data-driven design pivot by conducting real-time user testing and translating feedback into revised technical requirements — mirroring agile iteration practices used in software development.",
    ],
    link: null,
  },
];

// ---------------------------------------------------------------------------
// Chatbot knowledge base
//
// This portfolio ships as a static site (GitHub Pages), so the assistant
// below runs entirely in the browser: no API key, no server, no per-message
// cost. It matches the visitor's question against short knowledge chunks
// pulled straight from the résumé and returns the best-scoring answer(s).
// See src/lib/chatEngine.js for the matching logic, and the README for how
// to swap this for a real hosted-LLM backend later if you want one.
// ---------------------------------------------------------------------------
export const chatKnowledge = [
  {
    id: "intro",
    keywords: ["who", "yannick", "introduce", "about you", "background", "bio"],
    question: "Who is Yannick?",
    answer:
      "Yannick Kuete is a Computer Science student at CU Denver (graduating May 2027, 3.4 GPA) and a Software Developer & Automation Engineer. He works at the intersection of DevOps automation, cybersecurity, networking, and database engineering.",
  },
  {
    id: "current-role",
    keywords: ["job", "work", "current role", "wwts", "customer service engineer", "employer"],
    question: "What does Yannick do at WWTS?",
    answer:
      "Yannick is a Customer Service Engineer at WWTS (2023–present). He diagnoses and repairs enterprise HP, Dell, and Mac hardware, and — more importantly — writes custom Bash and Python scripts to automate IT remediation and streamline asset-tracking workflows.",
  },
  {
    id: "civil-engineer",
    keywords: ["civil engineer", "febdesign", "construction", "career change", "previous career"],
    question: "Was Yannick a civil engineer before?",
    answer:
      "Yes — Yannick worked as a Civil Engineer at FebDesign (2016–2021) in Cameroon, designing and documenting construction projects and coordinating cross-functional teams. That project-management foundation informs his software engineering approach today.",
  },
  {
    id: "skills-security",
    keywords: ["security", "cybersecurity", "firewall", "encryption", "sql injection", "authentication"],
    question: "What cybersecurity skills does Yannick have?",
    answer:
      "From CU Denver's Computer Security coursework, Yannick has hands-on experience with firewall configuration, encryption and authentication protocols, SQL-injection identification and remediation, security monitoring, and network attack analysis.",
  },
  {
    id: "skills-network",
    keywords: ["network", "networking", "tcp", "udp", "socket"],
    question: "What networking experience does Yannick have?",
    answer:
      "Yannick completed Introduction to Computer Networks and built two hands-on socket-programming projects in C: a TCP stream-socket client/server system for reliable, connection-oriented exchange, and a UDP datagram system for connectionless communication.",
  },
  {
    id: "skills-database",
    keywords: ["database", "sql", "postgres", "postgresql", "3nf", "er diagram", "normalization"],
    question: "What database experience does Yannick have?",
    answer:
      "Yannick designed and built the Materials Selection Database project: a fully normalized (3NF) relational database with ER diagrams, schema architecture, and relational-algebra-formalized queries, backed by PostgreSQL and a PHP front end.",
  },
  {
    id: "skills-devops",
    keywords: ["devops", "docker", "jenkins", "ansible", "aws", "ci/cd", "automation", "cloud"],
    question: "What DevOps and automation tools does Yannick use?",
    answer:
      "Yannick works with Docker, Jenkins, and Ansible for automation and CI/CD, is AWS Certified Solutions Architect – Associate (2024), and regularly scripts infrastructure and remediation workflows using Bash and Python.",
  },
  {
    id: "projects-list",
    keywords: ["projects", "portfolio", "built", "github"],
    question: "What projects has Yannick built?",
    answer:
      "Four stand out: the Materials Selection Database (PostgreSQL/PHP), a set of Network Socket Programming Labs in C (TCP + UDP), a Modern Tetris Clone in C++ with Raylib, and the \"Wheel of Hopes\" physical interactive prototype.",
  },
  {
    id: "tetris",
    keywords: ["tetris", "game", "raylib", "c++"],
    question: "Tell me about the Tetris project.",
    answer:
      "Yannick built a fully functional Tetris clone in C++ with Raylib, applying clean OOP architecture. It includes collision detection, line-clearing, and adaptive difficulty, plus a Makefile-based build system for cross-platform compilation.",
  },
  {
    id: "wheel",
    keywords: ["wheel of hopes", "prototype", "hardware", "user testing"],
    question: "What was the \"Wheel of Hopes\" project?",
    answer:
      "A physical, interactive gaming device Yannick led end-to-end at CU Denver, designed to spark social interaction. He ran real-time user testing and pivoted the design based on that feedback — applying agile iteration in hardware.",
  },
  {
    id: "education",
    keywords: ["education", "degree", "school", "university", "gpa", "graduation", "college"],
    question: "What is Yannick's education?",
    answer:
      "Yannick is pursuing a B.A. in Computer Science at the University of Colorado Denver (GPA 3.4, anticipated graduation May 2027). He also holds an Associate of Science in Computer Science from Community College of Aurora (2022–2025).",
  },
  {
    id: "current-courses",
    keywords: ["fall", "current classes", "taking now", "this semester"],
    question: "What is Yannick studying right now?",
    answer:
      "This fall, Yannick is taking Introduction to Software Engineering, Fundamentals of UNIX, App Development for Mobile Devices, and NLP with Generative AI.",
  },
  {
    id: "certs",
    keywords: ["certification", "certified", "aws certified", "comptia"],
    question: "What certifications does Yannick hold?",
    answer:
      "AWS Certified Solutions Architect – Associate (2024) and CompTIA A+ (2024).",
  },
  {
    id: "contact",
    keywords: ["contact", "email", "phone", "reach", "hire", "available", "opportunity"],
    question: "How can I contact Yannick, and is he available?",
    answer:
      `Yannick is open to full-time opportunities and available immediately. Reach him at yankuete@gmail.com or (720) 694-2513, or connect on GitHub at github.com/ykuete.`,
  },
  {
    id: "languages",
    keywords: ["language", "programming language", "c++", "python", "bash", "javascript"],
    question: "What programming languages does Yannick know?",
    answer: "C, C++, Python, Bash, JavaScript, and SQL.",
  },
  {
    id: "location",
    keywords: ["location", "denver", "based", "colorado", "remote"],
    question: "Where is Yannick based?",
    answer: "Denver, Colorado.",
  },
];

export const suggestedQuestions = [
  "What does Yannick do at WWTS?",
  "What cybersecurity skills does he have?",
  "Tell me about his database project",
  "Is he available for hire?",
];
