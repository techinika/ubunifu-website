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
    status: "Ongoing",
    link: "#",
  },
];
