import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  codeLink?: string;
};

const projects: Project[] = [
  {
    title: "Multi-Tenant SaaS Platform",
    description:
      "Built a scalable platform with organization-based access, real-time support, and Stripe billing integration.",
    image: "/images/project1.png", // Put your screenshots in /public/images/
    tech: ["React", "NestJS", "Stripe", "Socket.io", "MySQL"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Employee Management System",
    description:
      "Designed and implemented a portal for managing profiles, attendance, and leave with secure RBAC.",
    image: "/images/project2.png",
    tech: ["Next.js", "Node.js", "MongoDB", "RBAC"],
    liveLink: "#",
    codeLink: "#",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Integrated a socket-based support system to improve user communication and response times.",
    image: "/images/project3.png",
    tech: ["React", "Socket.io", "TypeScript"],
    liveLink: "#",
    codeLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md hover:shadow-lg overflow-hidden transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-800">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm mt-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="text-sm text-blue-600 underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      className="text-sm text-gray-600 underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
