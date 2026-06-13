import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ubunifu Labs – Tech Support & Managed IT Services in Rwanda",
    short_name: "Ubunifu Labs",
    description: "Professional IT support and managed IT services for SMEs in Rwanda.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0d9488",
    icons: [
      { src: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
  };
}
