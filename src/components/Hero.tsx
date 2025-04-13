import { motion } from "framer-motion";
import { useTypewriter } from "react-simple-typewriter";
import DownArrowButton from "./DownArrowButton";

const Hero = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "React Enthusiast", "Backend Engineer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex items-center justify-center px-4"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-primary"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="">Narotam Das</span> 👋
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-gray-700 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A passionate <span className="text-accent">{text}</span> who builds
            modern and scalable web experiences.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
            >
              View Projects
            </a>
            <a
              href="/NarotamDasResume.pdf"
              target="_blank"
              className="border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
        <DownArrowButton nextSection="#about" />
      </div>
    </section>
  );
};

export default Hero;
