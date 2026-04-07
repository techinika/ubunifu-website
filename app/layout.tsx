import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  title: {
    default: "Ubunifu Labs – Custom Software Development & IT Consulting in Rwanda",
    template: "%s | Ubunifu Labs",
  },
  description:
    "Ubunifu Labs is Rwanda's leading software development company. We provide custom software development, IT support outsourcing, website development, and technology consulting. Trusted by 50+ businesses. Build first, pay after.",
  keywords: [
    "Ubunifu Labs",
    "Software Development Rwanda",
    "IT Company Rwanda",
    "Custom Software Development",
    "IT Outsourcing",
    "Website Development",
    "Tech Consulting",
    "Digital Transformation",
    "IT Support",
    "Software Company Kigali",
    "Techinika",
    "Web Application Development",
    "Mobile App Development",
    "SaaS Development",
  ],
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Ubunifu Labs – Custom Software Development & IT Consulting in Rwanda",
    description:
      "Rwanda's leading software development company. Custom software, IT outsourcing, website development, and tech consulting. Trusted by 50+ businesses.",
    url: baseUrl,
    siteName: "Ubunifu Labs",
    locale: "en_RW",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubunifu Labs – Software Development & IT Consulting",
    description:
      "Rwanda's leading software company. Custom development, IT support outsourcing, and tech consulting.",
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
      "Ubunifu Labs is a technology consulting and software company providing digital solutions, consulting, and software development.",
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
