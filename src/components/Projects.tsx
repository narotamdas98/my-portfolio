import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

interface Project {
  title: string;
  description: string;
  banner: string;
  images: string[];
  tech: string[];
  bullets: string[];
  liveLink?: string;
  codeLink?: string;
}

const projectData: Project[] = [
  {
    title: "Harbour Nest",
    description:
      "A scalable SaaS property management platform with tools for tenants and admins — from property tracking to maintenance scheduling.",
    banner: "/images/harbournest/image1.png",
    images: [
      "/images/harbournest/image1.png",
      "/images/harbournest/image2.png",
      "/images/harbournest/image3.png",
      "/images/harbournest/image4.png",
      "/images/harbournest/image5.png",
    ],
    tech: ["reactjs", "Nestjs", "MySQL", "Stripe", "GCP"],
    bullets: [
      "Developed a full-featured property management system with task scheduling and user dashboards using React (Vite) and Tailwind CSS, powered by a robust NestJS backend on GCP.",
      "Integrated Google OAuth for seamless authentication and enabled Stripe-based payments to support a subscription model.",
      "Designed a scalable MySQL-backed system with plans for real-time notifications to enhance tenant–admin communication and workflow efficiency.",
    ],
  },
  {
    title: "The Thread",
    description:
      "A streamlined campaign and talent management platform built for influencer agencies to manage creators and simplify collaboration.",
    banner: "/images/thethread/image1.png",
    images: [
      "/images/thethread/image1.png",
      "/images/thethread/image2.png",
      "/images/thethread/image3.png",
      "/images/thethread/image4.png",
    ],
    tech: ["Nestjs", "GraphQL", "MySQL", "Stripe", "Socket.IO", "GCP"],
    bullets: [
      "Implemented the transformation of a single-vendor application into a scalable SaaS-based platform, accommodating multiple organizations. Established an efficient backend to seamlessly serve the frontend.",
      "Integrated Stripe's subscription-based payment module to enable clients to subscribe to and upgrade paid features within the web app.",
      "Implemented a real-time chat support system using Socket.io and Slack APIs to facilitate seamless communication between users and support teams.",
    ],
    codeLink: "the-thread.co",
  },
  {
    title: "Wedding Day Timeline",
    description:
      "The first and only patent-pending AI powered wedding timeline tool that can give you a minute-by-minute timeline in 5 minutes.",
    banner: "/images/weddingdaytimeline/image1.png",
    images: [
      "/images/weddingdaytimeline/image1.png",
      "/images/weddingdaytimeline/image2.png",
      "/images/weddingdaytimeline/image3.png",
      "/images/weddingdaytimeline/image4.png",
    ],
    tech: ["Nestjs", "Nodejs", "AWS", "PostgreSQL", "Stripe"],
    bullets: [
      "Built a model that automatically calculates the baby’s age during pregnancy by analyzing ultrasound videos — no manual work needed.",
      "Unlike past work that used still images, our system works on full videos in real time, making it more accurate and reliable.",
      "Designed to be easily integrated into websites or apps — faster, cheaper, and more accurate than manual ultrasound analysis.",
    ],
    codeLink: "weddingdaytimeline.com",
  },
  {
    title: "Fetusound",
    description:
      "AI-driven ultrasound assistant that predicts fetal age from video — no probe precision, no manual effort.",
    banner: "/images/fetusound/image1.png",
    images: [
      "/images/fetusound/image1.png",
      "/images/fetusound/image2.png",
      "/images/fetusound/image3.png",
      "/images/fetusound/image4.png",
    ],
    tech: ["Python", "TensorFlow"],
    bullets: [
      "Built a model that automatically calculates the baby’s age during pregnancy by analyzing ultrasound videos — no manual work needed.",
      "Unlike past work that used still images, our system works on full videos in real time, making it more accurate and reliable.",
      "Designed to be easily integrated into websites or apps — faster, cheaper, and more accurate than manual ultrasound analysis.",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          Projects
        </h2>
        <p className="text-center text-muted mb-6 max-w-xl mx-auto">
          I've worked on several real-world projects across AI, full-stack
          development, and cloud — here are a few handpicked ones.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectData.map((project, i) => (
            <ProjectCard
              key={i}
              title={project.title}
              image={project.banner}
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
