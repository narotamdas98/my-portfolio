import { motion } from "framer-motion";
import DownArrowButton from "./DownArrowButton";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-white via-[#f0f4ff] to-[#e0f2fe] flex items-center justify-center px-4"
    >
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <div className="text-center md:text-left max-w-2xl">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold text-text"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm <span className="text-primary">Narotam Das</span> 👋
          </motion.h1>

          <motion.p
            className="mt-4 text-lg md:text-xl text-muted leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I’m a{" "}
            <span className="text-primary font-semibold">
              Software Engineer
            </span>{" "}
            who crafts scalable, performant, and beautiful web applications —
            from clean frontends to solid backend architecture.
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center md:justify-start gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* <a
              href="#projects"
              className="bg-primary text-white px-6 py-3 rounded-full font-medium shadow-soft hover:-translate-y-1 hover:shadow-lg transition-transform duration-300"
            >
              View Projects
            </a> */}
            <a
              href="/NarotamDasResume.pdf"
              target="_blank"
              className="border border-primary text-primary px-6 py-3 rounded-full font-medium hover:bg-primary hover:text-white transition duration-300"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Arrow Button */}
        <DownArrowButton nextSection="#about" />
      </div>
    </section>
  );
};

export default Hero;
