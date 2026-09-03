/**
 * portfolio-data.ts
 * -----------------
 * Single source of truth for all portfolio content.
 * Edit the values below to personalize every section of the site —
 * no component changes needed.
 */

export const profile = {
  name: "Yanga Gamede",
  title: "BCom Accounting & Finance Graduate | CAPACITI AI Skills Accelerator Participant",
  elevatorPitch:
    "Energetic BCom Accounting & Finance graduate equipped with practical AI capabilities through the CAPACITI AI Skills Acceleration program. Dedicated to leveraging financial knowledge and modern digital tools for creative problem-solving in fast-paced team environments.",
  email: "yangagamede@gmail.com",
  github: "https://github.com/yangagamede-hue",
  linkedin: "https://www.linkedin.com/in/yanga-gamede-3980bb370?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  location: "Johannesburg, South Africa",
  cvUrl: "/cv.pdf", // replace public/cv.pdf with your real CV
};

export const about = {
  paragraphs: [
    "I am a BCom Accounting & Finance graduate from the University of the Witwatersrand, where I developed a strong foundation in financial analysis, accounting principles, and business decision-making. My academic training taught me to work with precision, interpret complex data, and communicate insights clearly.",
    "Complementing my finance background, I completed the CAPACITI AI Skills Acceleration program, gaining hands-on experience with practical AI tooling, workflow automation, and digital productivity platforms. This blend of financial expertise and modern tech skills allows me to approach problems creatively and add value in dynamic, data-driven environments.",
    "I thrive in collaborative settings, enjoy learning new tools, and am eager to contribute to teams that value accuracy, adaptability, and fresh thinking.",
  ],
  badges: [
    { icon: "MapPin", label: "Location", value: "Johannesburg, SA" },
    { icon: "Languages", label: "Languages", value: "English, Zulu, Xhosa" },
    { icon: "GraduationCap", label: "Education", value: "BCom (Wits University)" },
    { icon: "Rocket", label: "Specialized Training", value: "CAPACITI AI Accelerator" },
  ],
};

export const skillCategories: { category: string; skills: string[] }[] = [
  {
    category: "Finance & Business",
    skills: ["Accounting & Financial Analysis", "Inventory & Stock Control", "Retail Management"],
  },
  {
    category: "Digital & AI Capabilities",
    skills: ["Practical AI Tooling", "Google AI Essentials", "Workflows & Prompting", "Microsoft Office Suite"],
  },
  {
    category: "Soft Skills",
    skills: ["Customer Service", "Team Collaboration", "Creative Problem-Solving", "Time Management", "High-Volume Communication"],
  },
];

export const projects = [
  {
    title: "AI-Driven Financial & Administrative Workflows",
    summary:
      "A CAPACITI project demonstrating how AI tools can streamline business operations — from task scheduling and document preparation to reporting efficiency.",
    features: [
      "Automated business task scheduling using AI-assisted workflows",
      "Document preparation and templating with generative AI tools",
      "Improved reporting efficiency through structured prompting and automation",
    ],
    stack: ["Google AI Essentials", "AI Workflows", "Prompt Engineering", "Business Automation"],
    liveUrl: "#",
    codeUrl: "https://github.com/yangagamede",
  },
  {
    title: "Financial Accounting Case Studies & Analysis",
    summary:
      "Analytical financial modeling and accounting case studies developed during BCom coursework at the University of the Witwatersrand.",
    features: [
      "Financial statement analysis and ratio interpretation",
      "Budgeting, forecasting, and investment appraisal models",
      "Case-study driven reporting aligned with real business scenarios",
    ],
    stack: ["Financial Analysis", "Accounting", "Excel", "Business Modeling"],
    liveUrl: "#",
    codeUrl: "https://github.com/yangagamede",
  },
  {
    title: "Retail Inventory & Sales Optimization System",
    summary:
      "A practical framework built from real-world retail experience, focused on stock control logic, transaction accuracy, and sales performance.",
    features: [
      "Stock control logic to reduce waste and improve inventory tracking",
      "High-volume transaction handling with accuracy and accountability",
      "Sales and promotional support tied to revenue growth",
    ],
    stack: ["Inventory Management", "Stock Control", "Retail Operations", "Sales Support"],
    liveUrl: "#",
    codeUrl: "https://github.com/yangagamede",
  },
];

export const experience = [
  {
    role: "Cashier & Sales Representative",
    company: "The Shawarma Guys",
    period: "May 2025 – Dec 2025",
    points: [
      "Delivered high-quality customer service while efficiently handling high-volume financial transactions.",
      "Applied effective stock control measures to reduce waste and increase inventory tracking accuracy.",
      "Supported sales and marketing promotions, directly contributing to revenue growth.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Commerce (BCom) in Accounting & Finance",
    institution: "University of the Witwatersrand",
    year: "Graduated 2025",
    details: "Comprehensive training in accounting, financial analysis, business law, taxation, and corporate finance.",
  },
  {
    degree: "AI Skills Acceleration Program",
    institution: "CAPACITI Tech Talent Accelerator",
    year: "Completed 2026",
    details: "Intensive, hands-on training in practical AI tooling, workflow automation, prompting, and digital productivity.",
  },
];

export const certifications = [
  {
    name: "Google AI Essentials",
    issuer: "Google",
    date: "2026",
    credentialUrl: "#",
  },
  {
    name: "National Senior Certificate",
    issuer: "Little Flower Secondary School",
    date: "2019",
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
