import ContactPage from "@/components/NewProjectPage";
import { baseUrl } from "../sitemap";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get IT Support – Tech Support & Managed IT Services in Rwanda",
  description:
    "Need IT support in Rwanda? Tell us about your technology problem. We offer one-time fixes and monthly managed IT services for SMEs. Fast response, clear pricing, no hidden fees.",
  keywords: [
    "IT Support",
    "Tech Support",
    "Managed IT Services",
    "Computer Repair",
    "IT Help Kigali",
    "Website Repair",
    "Email Support",
    "Network Fix",
    "IT Services Rwanda",
    "Business IT Support",
  ],
  openGraph: {
    title: "Get IT Support – Ubunifu Labs",
    description:
      "Professional IT support for Rwandan businesses. One-time fixes and monthly managed IT services. We fix tech problems before they break your business.",
    url: `${baseUrl}/new`,
    siteName: "Ubunifu Labs",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get IT Support – Ubunifu Labs",
    description:
      "Professional IT support for Rwandan businesses. We fix slow websites, broken email, and unreliable systems.",
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
