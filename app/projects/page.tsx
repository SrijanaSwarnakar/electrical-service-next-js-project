import ProjectGallery from "@/components/ProjectGallery";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="pt-20 md:pt-24">
        <ProjectGallery showAll />
      </div>
    </main>
  );
}
