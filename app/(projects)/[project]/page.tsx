import { baseUrl } from "@/app/sitemap";
import { ProjectDetailPage } from "@/components/OneProject";
import { projects } from "@/data/projects";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ project: string }>;
}): Promise<Metadata> {
  const { project: slug } = await params;
  const project = projects.find((p) => p.id === slug);

  if (!project) {
    return {
      title: "Project Not Found | Ubunifu Labs",
      description:
        "The project you’re looking for could not be found. Explore more solutions from Ubunifu Labs.",
    };
  }

  return {
    title: `${project.title} | Ubunifu Labs`,
    description: project.summary,
    keywords: [
      project.title,
      ...project.technologies,
      ...project.tags,
      "Ubunifu Labs",
      "Software Development",
      "IT Consulting",
      "Custom Solutions",
      "Digital Transformation",
    ],
    openGraph: {
      title: `${project.title} | Ubunifu Labs`,
      description: project.summary,
      url: `${baseUrl}/${project.id}`,
      siteName: "Ubunifu Labs",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ubunifu Labs`,
      description: project.summary,
    },
  };
}

async function page({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  return (
    <div>
      <ProjectDetailPage projectSlug={project} />
    </div>
  );
}

export default page;
