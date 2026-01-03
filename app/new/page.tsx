import ContactPage from "@/components/NewProjectPage";
import { baseUrl } from "../sitemap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a consulting, research or development project with Ubunifu Labs",
  description:
    "Start your next digital transformation project with Ubunifu Labs. Submit your project request to our team of software developers and technology consultants for tailored, innovative solutions.",
  keywords: [
    "Project Request",
    "Ubunifu Labs",
    "Software Development",
    "IT Consulting",
    "Web App Development",
    "Custom Software",
    "Digital Transformation",
    "Technology Solutions",
    "System Design",
    "Innovation Lab",
  ],
  openGraph: {
    title: "Start a consulting, research or development project with Ubunifu Labs",
    description:
      "Work with Ubunifu Labs to design, build, and scale custom software and technology solutions for your business or organization.",
    url: `${baseUrl}/new`,
    siteName: "Ubunifu Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Project with Ubunifu Labs",
    description:
      "Tell us about your idea or business challenge, and our team will help you craft a powerful digital solution.",
  },
};

function page() {
  return (
    <div>
      <ContactPage />
    </div>
  );
}

export default page;
