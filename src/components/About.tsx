import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiReactquery,
  SiSocketdotio,
  SiStripe,
  SiDocker,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGithub,
  SiAmazon,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiNestjs,
} from "react-icons/si";

const About = () => {
  const techStack = [
    { name: "React", icon: <SiReact className="text-[#5bc2da]" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
    { name: "NestJS", icon: <SiNestjs className="text-[#ea2b58]" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-700" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React Query", icon: <SiReactquery className="text-pink-500" /> },
    { name: "Socket.io", icon: <SiSocketdotio className="text-black" /> },
    { name: "Stripe", icon: <SiStripe className="text-indigo-500" /> },
    { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-700" /> },
    { name: "MySQL", icon: <SiMysql className="text-orange-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600" /> },
    { name: "GitHub", icon: <SiGithub className="text-black" /> },
    { name: "AWS", icon: <SiAmazon className="text-orange-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-r from-white to-bg"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-text mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-muted leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m a passionate{" "}
          <span className="text-primary font-semibold">
            Full Stack Software Engineer
          </span>{" "}
          focused on building fast, scalable, and user-centric web applications.
          With a strong foundation in both frontend and backend technologies, I
          thrive in architecting systems that are robust, maintainable, and
          performant.
        </motion.p>

        <motion.p
          className="text-base text-muted mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I’ve worked with a wide range of modern tools and frameworks—from
          React and TypeScript to NestJS and GCP—bringing real-world projects to
          life with clean, efficient code.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {techStack.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center space-y-2 bg-white px-4 py-3 rounded-xl shadow-soft hover:shadow-lg hover:bg-blue-50 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="text-3xl">{icon}</div>
              <div className="text-sm font-medium text-text">{name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
