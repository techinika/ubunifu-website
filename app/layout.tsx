import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  title: {
    default: "Ubunifu Labs – Tech Support & Managed IT Services in Rwanda",
    template: "%s | Ubunifu Labs",
  },
  description:
    "Is your business held back by slow websites, broken email, or unreliable systems? Ubunifu Labs provides professional IT support and managed IT services for SMEs in Rwanda. We fix tech problems before they break your business.",
  keywords: [
    "Ubunifu Labs",
    "IT Support Rwanda",
    "Managed IT Services",
    "Tech Support Kigali",
    "IT Company Rwanda",
    "Website Repair",
    "Email Fix",
    "Network Maintenance",
    "IT Outsourcing Rwanda",
    "SME IT Support",
    "Computer Repair Kigali",
    "System Maintenance",
    "IT Consulting Rwanda",
    "Techinika",
  ],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Ubunifu Labs – Tech Support & Managed IT Services in Rwanda",
    description:
      "Professional IT support and managed IT services for SMEs in Rwanda. We fix slow websites, broken email, and unreliable systems before they cost you business.",
    url: baseUrl,
    siteName: "Ubunifu Labs",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubunifu Labs – Tech Support & Managed IT",
    description:
      "Fixing tech problems before they break your business. IT support and managed services for Rwandan SMEs.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "your-google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ubunifu Labs",
    alternateName: "Ubunifu Labs",
    url: "https://ubunifu.techinika.co.rw",
    description:
      "Ubunifu Labs is a managed IT services company providing professional tech support, system maintenance, and IT solutions for small and medium businesses in Rwanda.",
    sameAs: [
      "https://www.linkedin.com/showcase/ubunifulabs",
      "https://x.com/techinika",
      "https://www.facebook.com/techinika",
      "https://www.instagram.com/techinika",
      "https://www.youtube.com/@techinika",
    ],
  };
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
