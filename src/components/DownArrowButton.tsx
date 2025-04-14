import { IoIosArrowRoundDown } from "react-icons/io";

import { motion } from "framer-motion";

const DownArrowButton = ({ nextSection }: { nextSection: string }) => {
  const handleClick = () => {
    const nextSectionElement = document.querySelector(nextSection);
    if (nextSectionElement) {
      nextSectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center mt-12 md:mt-0">
      <motion.button
        onClick={handleClick}
        className="text-primary hover:text-hover"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <IoIosArrowRoundDown size={54} className="stroke-[1.5]" />
      </motion.button>
    </div>
  );
};

export default DownArrowButton;
