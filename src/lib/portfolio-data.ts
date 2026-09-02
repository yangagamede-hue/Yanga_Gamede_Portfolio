/**
 * portfolio-data.ts
 * -----------------
 * Single source of truth for all portfolio content.
 * Edit the values below to personalize every section of the site —
 * no component changes needed.
 */

export const profile = {
  name: "Your Name",
  title: "Full-Stack Developer | Problem Solver",
  elevatorPitch:
    "I build fast, accessible web applications with modern JavaScript tooling and a strong eye for design. I love turning ambiguous problems into clean, working software — and I'm looking for a team where I can keep learning while shipping real value.",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  location: "Johannesburg, South Africa",
  cvUrl: "/cv.pdf", // replace public/cv.pdf with your real CV
};

export const about = {
  paragraphs: [
    "I'm a software developer with a passion for building products that feel effortless to use. My journey started with curiosity — taking apart how websites worked — and grew into a disciplined practice of designing, building, and shipping full-stack applications.",
    "I care deeply about clean architecture, readable code, and the small details that make an interface feel polished. Whether it's a database schema or a button hover state, I believe quality compounds.",
    "My goal is to join a team where I can contribute to meaningful projects, learn from experienced engineers, and grow into a well-rounded product engineer.",
  ],
  values: [
    { title: "Craft", description: "Clean, maintainable code over quick hacks." },
    { title: "Curiosity", description: "Always learning a new tool, pattern, or domain." },
    { title: "Ownership", description: "I treat every project like it's my own product." },
    { title: "Collaboration", description: "Great software is built by great teams." },
  ],
};

export const technicalSkills: { category: string; skills: string[] }[] = [
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "React Native"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git & GitHub", "Docker", "Vite", "Figma", "Postman", "Linux"],
  },
  {
    category: "Databases & Cloud",
    skills: ["PostgreSQL", "MongoDB", "Supabase", "Firebase", "AWS basics"],
  },
];

export const softSkills = [
  { icon: "MessageSquare", title: "Communication", description: "Clear written and verbal communication with technical and non-technical stakeholders." },
  { icon: "Users", title: "Teamwork", description: "Comfortable in agile teams — pair programming, code reviews, and shared ownership." },
  { icon: "Lightbulb", title: "Problem Solving", description: "Breaks complex problems into small, testable pieces before writing code." },
  { icon: "Clock", title: "Time Management", description: "Balances coursework, projects, and deadlines with disciplined planning." },
  { icon: "RefreshCcw", title: "Adaptability", description: "Picks up new frameworks and domains quickly; thrives on change." },
  { icon: "Target", title: "Attention to Detail", description: "Sweats the edge cases — from validation states to pixel alignment." },
] as const;

export const projects = [
  {
    title: "TaskFlow — Project Management App",
    summary:
      "A full-stack kanban board for small teams with drag-and-drop tasks, real-time updates, and role-based access.",
    features: [
      "Drag-and-drop kanban with optimistic UI updates",
      "Real-time collaboration via WebSockets",
      "JWT auth with role-based permissions",
    ],
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/taskflow",
  },
  {
    title: "ShopLite — E-Commerce Storefront",
    summary:
      "A performant storefront with cart, checkout flow, and an admin dashboard for managing products and orders.",
    features: [
      "Server-side rendering for sub-second page loads",
      "Stripe-powered checkout with webhooks",
      "Admin dashboard with sales analytics",
    ],
    stack: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/shoplite",
  },
  {
    title: "WeatherNow — Forecast PWA",
    summary:
      "A mobile-first progressive web app delivering hyperlocal weather forecasts, installable and fully offline-capable.",
    features: [
      "Offline-first with service worker caching",
      "Geolocation-based automatic forecasts",
      "Lighthouse score of 98+ across all categories",
    ],
    stack: ["React", "Vite", "OpenWeather API", "PWA"],
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/yourusername/weathernow",
  },
];

export const experience = [
  {
    role: "Freelance Web Developer",
    company: "Self-employed",
    period: "2025 — Present",
    points: [
      "Designed and shipped landing pages and dashboards for 3 local small businesses.",
      "Improved one client's page load time by 60% through image optimization and code splitting.",
      "Managed the full client lifecycle: scoping, design, development, deployment, and handover.",
    ],
  },
  {
    role: "IT Support Intern",
    company: "TechHub Solutions",
    period: "Jun 2024 — Dec 2024",
    points: [
      "Resolved 200+ support tickets while maintaining a 95% satisfaction rating.",
      "Automated repetitive onboarding tasks with Python scripts, saving ~4 hours per week.",
      "Documented internal processes that reduced new-hire ramp-up time.",
    ],
  },
];

// Shown when formal work experience is still pending — toggle in Experience.tsx
export const academicExperience = [
  {
    role: "Capstone Project — Campus Event Platform",
    company: "University Coursework",
    period: "2025",
    points: [
      "Led a 4-person team building an event discovery app used in a live pilot by 300+ students.",
      "Designed the PostgreSQL schema and REST API; wrote 80% of the backend code.",
      "Presented the project to faculty and industry judges, earning top marks.",
    ],
  },
  {
    role: "Hackathon Finalist — FinTech Challenge",
    company: "JHB DevFest Hackathon",
    period: "2024",
    points: [
      "Built a budgeting tool prototype in 48 hours with a team of 3.",
      "Pitched to a panel of judges and placed in the top 5 of 40 teams.",
    ],
  },
];

export const education = [
  {
    degree: "BSc Computer Science",
    institution: "University of the Witwatersrand",
    year: "2023 — 2026 (expected)",
    details: "Focus on software engineering, databases, and distributed systems.",
  },
  {
    degree: "National Senior Certificate",
    institution: "Your High School",
    year: "2022",
    details: "Bachelor's pass with distinctions in Mathematics and Physical Sciences.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialUrl: "#",
  },
  {
    name: "Meta Front-End Developer",
    issuer: "Coursera / Meta",
    date: "2024",
    credentialUrl: "#",
  },
  {
    name: "Google Data Analytics",
    issuer: "Coursera / Google",
    date: "2024",
    credentialUrl: "#",
  },
  {
    name: "freeCodeCamp JavaScript Algorithms",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialUrl: "#",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
