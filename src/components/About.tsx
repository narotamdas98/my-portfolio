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
} from "react-icons/si";

const About = () => {
  const techStack = [
    { name: "React", icon: <SiReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
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
    // { name: "Material UI", icon: <SiMaterialui className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-500" /> },
    { name: "HTML", icon: <SiHtml5 className="text-orange-600" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-600" /> },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm a Full Stack Developer with hands-on experience building scalable
          applications using modern technologies like React, Next.js, Node.js,
          and GCP. I specialize in crafting efficient backends and responsive
          frontends, and I enjoy solving real-world problems with clean code.
        </motion.p>

        <motion.div
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {techStack.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center space-y-2 bg-blue-50 px-4 py-3 rounded shadow-sm hover:shadow-md hover:bg-blue-200 transition duration-200"
            >
              <div className="text-3xl">{icon}</div>
              <div className="text-sm font-medium text-gray-800">{name}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
