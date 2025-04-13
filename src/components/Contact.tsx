import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_72jhx2f", // e.g., service_qwe123
        "template_904k5dc", // e.g., template_xyz456
        formRef.current,
        "GUWDE5539NUa-3tAv" // e.g., o_TsEXAMPLEkey
      )
      .then(
        () => {
          setIsLoading(false);
          toast.success("Message sent successfully! 🎉");
          formRef.current?.reset();
        },
        (error) => {
          console.error("Failed to send message:", error);
          toast.error("Oops! Failed to send message. Please try again.");
          setIsLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-4xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white p-6 rounded-lg shadow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                className="w-full mt-1 p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            className="flex flex-col justify-center items-center gap-6 text-2xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <p className="text-gray-700 text-lg text-center">
              Or connect with me here:
            </p>
            <div className="flex gap-6">
              <a href="mailto:narotamdas98@gmail.com" title="Email">
                <FaEnvelope style={{ color: "#D44638" }} />
              </a>
              <a
                href="https://github.com/narotamdas98"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <FaGithub style={{ color: "#000000" }} />
              </a>
              <a
                href="https://linkedin.com/in/narotam-das"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <FaLinkedin style={{ color: "#0A66C2" }} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
