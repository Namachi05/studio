import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-7xl py-16 px-4 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl">
          My Projects
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A collection of my work, from web applications to design systems.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
