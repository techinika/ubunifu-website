import { ProjectDetailPage } from "@/components/OneProject";

async function page({ params }: { params: Promise<{ project: string }> }) {
  const { project } = await params;
  return (
    <div>
      <ProjectDetailPage projectSlug={project} />
    </div>
  );
}

export default page;
