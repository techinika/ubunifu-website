import { Project } from "@/types/main";

export const projects: Project[] = [
  {
    id: "techinika",
    title: "Techinika",
    description: `
      <p>Techinika is Rwanda's #1 technology news, insights, and opportunities platform. It provides up-to-date coverage of technology events, innovations, and thought leadership in Rwanda and beyond.</p>
      <p>The platform was built with a fully custom content management system to allow seamless publishing and management of articles, newsletters, and multimedia content.</p>
    `,
    tags: ["Media", "News", "Education", "Technology"],
    isOurOwn: true,
    summary:
      "Rwanda’s leading tech news and insights platform with a custom CMS built using modern web technologies.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Gemini AI",
      "Shadcn UI",
      "Netlify",
      "Supabase",
      "GitHub",
    ],
    duration: "Ongoing (initial version completed)",
    status: "Internal",
    type: "Software Development",
    link: "https://techinika.com",
    client: "Techinika",
  },
  {
    id: "securedot",
    title: "SecureDot",
    description: `
      <p>SecureDot is a website security and performance platform designed to help website owners scan their sites for vulnerabilities, improve SSL and SEO, and enhance overall online visibility.</p>
      <p>It is an evolving product under continuous development, integrating tools for security assessment, monitoring, and reporting to keep websites safe and optimized.</p>
    `,
    tags: ["Security", "Web", "Performance", "Analysis"],
    isOurOwn: true,
    summary:
      "A platform for website security scanning, performance analysis, and visibility improvement, built for modern web owners.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "GitHub",
    ],
    duration: "Ongoing",
    status: "Internal",
    type: "Software Development",
    link: "https://securedot.tech",
    client: "Techinika",
  },
  {
    id: "yali-alumni-system",
    title: "YALI Rwanda Alumni Management System",
    description: `
      <p>The Alumni Management System for the YALI Rwanda Chapter is designed to maintain up-to-date alumni information and foster community engagement through features like profiles, directories, and integrated chat functionality.</p>
      <p>It provides a centralized and secure platform for YALI alumni to connect, collaborate, and stay informed about opportunities and events.</p>
    `,
    tags: ["Community", "Management", "Communication", "Alumni"],
    isOurOwn: false,
    client: "YALI Rwanda Chapter",
    summary:
      "A platform to manage alumni information and facilitate communication within the YALI Rwanda Chapter community.",
    technologies: [
      "Node.js",
      "Next.js",
      "PostgreSQL",
      "Material UI",
      "DigitalOcean",
      "Docker",
      "GitHub",
    ],
    duration: "Ongoing",
    type: "Software Development",
    status: "Ongoing",
    link: "#",
  },
  {
    id: "coemika-sms",
    title: "COEMIKA Bulk SMS Communication Strategy",
    client: "COEMIKA COOPERATIVE",
    summary:
      "Consultancy for establishing a reliable Bulk SMS service for member communication, including vendor selection and regulatory compliance.",
    description: `
        <p>COEMIKA COOPERATIVE approached Ubunifu Labs to solve a critical communication challenge: reaching their large member base quickly and affordably. Our goal was to establish a reliable, compliant Bulk SMS service.</p>
        <p>We conducted a thorough consultation, explaining the entire process, including regulatory requirements (Sender ID approval from RURA) and operational costs. We then provided strategic guidance on selecting the optimal service provider (Call Africa).</p>
        <p>Our ongoing role includes documentation, process assistance, and continuous follow-up to ensure a smooth transition to the new communication channel once regulatory approval is secured. This project highlights our ability to deliver technical strategy and implementation support, not just code.</p>
    `,
    technologies: [
      "Strategic Consulting",
      "Vendor Evaluation",
      "Regulatory Compliance",
      "Process Documentation",
    ],
    duration: "1 Month",
    status: "Completed",
    tags: ["Consulting", "Telecommunication", "Strategy", "Client Work"],
    isOurOwn: false,
    type: "Consulting",
    link: "#",
  },
  {
    id: "achille-songa-website-2025",
    title: "Cishahayo Songa Achille Personal Website",
    description: `<p>A high-impact, modern personal portfolio and professional hub designed to showcase expertise, manage bookings, and facilitate direct collaboration for a software engineer and tech entrepreneur.</p> <p>The primary function is to drive user engagement and convert visitors into collaborators or clients through a streamlined booking and contact process.</p>`,
    tags: [
      "Portfolio",
      "Booking Platform",
      "Tech Entrepreneurship",
      "Personal Branding",
      "Lead Generation",
    ],
    isOurOwn: false,
    client: "Cishahayo Songa Achille",
    summary:
      "The project serves as the central digital hub for Cishahayo Songa Achille, consolidating his profile as an engineer, speaker, and entrepreneur. ",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "State Management (Local/Context)",
    ],
    duration: "1 Week",
    status: "Completed",
    type: "Software Development",
    link: "https://achillesonga.netlify.app",
  },
  {
    id: "ijwi-language-collective",
    title: "Ijwi Language Collective Website",
    description: `
    <p>
      A modern, user-focused website built for Ijwi Language Collective to support 
      tourists and Kinyarwanda learners in discovering language services, learning 
      about the organization, and applying for programs directly online.
    </p>
    <p>
      The platform centralizes information, service requests, and communication — 
      eliminating reliance on scattered social media channels and creating a single, 
      trusted point of contact for prospective clients.
    </p>
  `,
    tags: [
      "Educational Website",
      "Language Learning",
      "Tourism Support",
      "Service Application",
      "Digital Transformation",
    ],
    isOurOwn: false,
    client: "Ijwi Language Collective",
    summary:
      "A centralized digital platform that helps Ijwi Language Collective connect with tourists and Kinyarwanda learners, manage service inquiries, and communicate professionally through a single, well-structured website.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Form Handling & Validation",
      "Content Management",
    ],
    duration: "2 Weeks",
    status: "Completed",
    type: "Software Development",
    link: "https://ijwi.netlify.app",
  },
];
