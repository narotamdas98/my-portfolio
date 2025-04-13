import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export const ProjectCard = ({ title, image, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      className="bg-gray-50 rounded-lg shadow hover:shadow-lg overflow-hidden transition cursor-pointer"
      whileHover={{ scale: 1.02 }}
      onClick={onClick}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-800">{title}</h3>
      </div>
    </motion.div>
  );
};
