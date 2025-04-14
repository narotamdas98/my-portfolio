import { motion } from "framer-motion";

const experiences = [
  {
    company: "Invision Solutions",
    location: "Karachi, Pakistan",
    title: "Software Engineer",
    duration: "Jul 2023 – Present",
    bullets: [
      "Migrated a monolithic app to a scalable multi-tenant SaaS platform, improving maintainability and onboarding efficiency.",
      "Integrated Stripe to automate recurring billing and invoice management for customers.",
      "Developed a real-time support chat using Socket.io and Slack API, significantly improving customer engagement and support responsiveness.",
    ],
  },
  {
    company: "Tech Labs",
    location: "Karachi, Pakistan",
    title: "Full Stack Developer",
    duration: "Nov 2022 – Jul 2023",
    bullets: [
      "Built optimized UIs using Next.js and TailwindCSS, resulting in noticeably faster page loads and a smoother user experience.",
      "Converted Figma designs into pixel-perfect, interactive interfaces.",
      "Developed and deployed serverless features with AWS Amplify, enabling faster feature rollouts.",
    ],
  },
  {
    company: "IO Digital",
    location: "Karachi, Pakistan",
    title: "Full Stack Developer",
    duration: "Feb 2022 – Nov 2022",
    bullets: [
      "Built a robust employee management portal to streamline HR and admin operations",
      "Implemented role-based access control (RBAC) in React to enforce granular permissions.",
      "Designed RESTful APIs using Node.js + MongoDB to support seamless frontend-backend communication.",
    ],
  },
  {
    company: "Code Clan",
    location: "Karachi, Pakistan",
    title: "Full Stack Developer",
    duration: "Jun 2021 – Feb 2022",
    bullets: [
      "Modernized frontend using React, TypeScript, and React Query, improving code readability and maintainability.",
      "Built real-time support chat with WebSockets, reducing average customer wait time.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-50 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                <div>
                  <h3 className="text-xl font-semibold text-primary leading-tight">
                    {exp.title} @ {exp.company}
                  </h3>
                  <p className="text-gray-600">{exp.location}</p>
                </div>
                <span className="text-sm text-gray-500 mt-2 md:mt-0">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-6 list-disc list-inside space-y-2 text-gray-700 text-sm">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
