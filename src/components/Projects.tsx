import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  bullets: string[];
  liveLink?: string;
  codeLink?: string;
}

const projectData: Project[] = [
  {
    title: "SaaS Dashboard",
    description: "Multi-tenant SaaS app with real-time features.",
    images: ["/images/project1.png", "/images/project1s.png"],
    tech: ["React", "NestJS", "Stripe"],
    bullets: [
      "Stripe-based billing setup.",
      "Admin & tenant RBAC logic.",
      "Real-time chat via Socket.io.",
    ],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Multi-tenant SaaS app with real-time features.",
    images: ["/images/project1.png", "/images/project1s.png"],
    tech: ["React", "NestJS", "Stripe"],
    bullets: [
      "Stripe-based billing setup.",
      "Admin & tenant RBAC logic.",
      "Real-time chat via Socket.io.",
    ],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Multi-tenant SaaS app with real-time features.",
    images: ["/images/project1.png", "/images/project1s.png"],
    tech: ["React", "NestJS", "Stripe"],
    bullets: [
      "Stripe-based billing setup.",
      "Admin & tenant RBAC logic.",
      "Real-time chat via Socket.io.",
    ],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "SaaS Dashboard",
    description: "Multi-tenant SaaS app with real-time features.",
    images: ["/images/project1.png", "/images/project1s.png"],
    tech: ["React", "NestJS", "Stripe"],
    bullets: [
      "Stripe-based billing setup.",
      "Admin & tenant RBAC logic.",
      "Real-time chat via Socket.io.",
    ],
    liveLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              image={project.images[0]}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
