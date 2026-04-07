import ContactPage from "@/components/NewProjectPage";
import { baseUrl } from "../sitemap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start Your Project – Custom Software Development & IT Consulting",
  description:
    "Start your software development or IT consulting project with Rwanda's leading tech company. Get a working demo before you pay. Custom web apps, mobile apps, IT support, and digital transformation services.",
  keywords: [
    "Start Project",
    "Software Development",
    "IT Consulting",
    "Web App Development",
    "Custom Software",
    "Digital Transformation",
    "IT Outsourcing",
    "Tech Consulting",
    "Project Request",
    "Ugandan Software Company",
    "East Africa Software",
  ],
  openGraph: {
    title: "Start Your Project with Ubunifu Labs",
    description:
      "Work with Rwanda's top software company to build custom software, get IT support, or transform your business digitally.",
    url: `${baseUrl}/new`,
    siteName: "Ubunifu Labs",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Start Your Project – Ubunifu Labs",
    description:
      "Get a working demo before you pay. Custom software, IT support, and consulting from Rwanda's trusted tech partner.",
  },
  alternates: {
    canonical: `${baseUrl}/new`,
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
