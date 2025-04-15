import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}

interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  bullets: string[];
  liveLink?: string;
  codeLink?: string;
}

export const ProjectModal = ({
  isOpen,
  onClose,
  project,
}: ProjectModalProps) => {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    if (!project) return;
    setIndex((prev) => (prev + 1) % project.images.length);
  }, [project]);

  const prev = useCallback(() => {
    if (!project) return;
    setIndex(
      (prev) => (prev - 1 + project.images.length) % project.images.length
    );
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose, prev, next]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     next();
  //   }, 5000);
  //   return () => clearInterval(timer);
  // }, [next]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-4xl max-h-full overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 z-10"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="h-6 w-6 text-gray-700 hover:text-red-500" />
          </button>

          {/* Title */}
          <h2 className="mb-4 text-2xl font-bold text-primary">
            {project.title}
          </h2>

          {/* Carousel */}
          <div className="relative aspect-video w-full rounded-md bg-gray-100 overflow-hidden mb-6">
            <AnimatePresence mode="wait">
              <motion.img
                key={project.images[index]}
                src={project.images[index]}
                alt={`Project Screenshot ${index + 1}`}
                className="absolute top-0 left-0 h-full w-full object-contain"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>

            <button
              onClick={prev}
              className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow hover:bg-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Description */}
          <p className="mb-3 text-gray-700">{project.description}</p>

          {/* Bullet Points */}
          <ul className="mb-4 list-inside list-disc text-sm text-gray-700">
            {project.bullets.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="mb-4 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-800"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* External Links */}
          <div className="flex flex-wrap gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-600 underline hover:text-blue-800"
              >
                Live Demo
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 underline hover:text-gray-800"
              >
                GitHub
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
