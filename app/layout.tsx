import type { Metadata } from "next";
import "./globals.css";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  title: "Ubunifu Labs – Research, Development & Software Consulting",
  description:
    "Ubunifu Labs is a Techinika initiative focused on research, software development, and technology consulting. We design and build digital solutions that help businesses innovate, scale, and stay secure in the modern digital era.",
  keywords: [
    "Ubunifu Labs",
    "Techinika",
    "Software Development Rwanda",
    "IT Consulting",
    "Digital Transformation",
    "Web Applications",
    "System Design",
    "Technology Solutions",
    "Research and Development"
  ],
  openGraph: {
    title: "Ubunifu Labs – Research, Development & Software Consulting",
    description:
      "A Techinika initiative specializing in software solutions, system development, and technology consulting for forward-thinking organizations.",
    url: baseUrl,
    siteName: "Ubunifu Labs",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Ubunifu Labs – Software Solutions & Consulting",
    description:
      "Ubunifu Labs helps organizations research, build, and scale powerful software and digital solutions.",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
