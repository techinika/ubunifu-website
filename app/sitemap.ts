import { projects } from "@/data/projects";

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://ubunifu.techinika.co.rw";

export default async function sitemap() {
  const staticEntries = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/new`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];

  const projectsEntries = projects.map((proj) => ({
    url: `${baseUrl}/${proj?.id}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [...staticEntries, ...projectsEntries];
}
