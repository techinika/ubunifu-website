import { baseUrl } from "@/app/sitemap";
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
        "The project you're looking for could not be found. Explore our software development and IT consulting services.",
    };
  }

  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
    keywords: [
      project.title,
      "Case Study",
      "Software Development",
      "IT Consulting",
      "Custom Solutions",
      "Digital Transformation",
      "Ubunifu Labs Rwanda",
      ...project.technologies,
      ...project.tags,
    ],
    openGraph: {
      title: `${project.title} | Ubunifu Labs Case Study`,
      description: project.summary,
      url: `${baseUrl}/${project.id}`,
      siteName: "Ubunifu Labs",
      locale: "en_RW",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Ubunifu Labs`,
      description: project.summary,
    },
    alternates: {
      canonical: `${baseUrl}/${project.id}`,
    },
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    project: project.id,
  }));
}

async function page({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  const projectData = projects.find((p) => p.id === project);
  
  const articleSchema = projectData ? {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: projectData.title,
    description: projectData.summary,
    url: `${baseUrl}/${projectData.id}`,
    datePublished: "2024-01-01",
    author: {
      "@type": "Organization",
      name: "Ubunifu Labs",
    },
  } : null;

  const { ProjectDetailPage } = await import("@/components/OneProject");
  
  return (
    <div>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(articleSchema),
          }}
        />
      )}
      <ProjectDetailPage project={projectData} />
    </div>
  );
}

export default page;
