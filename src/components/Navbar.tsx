import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: "Home", to: "#home" },
    { id: 2, name: "About", to: "#about" },
    { id: 3, name: "Experience", to: "#experience" },
    { id: 4, name: "Projects", to: "#projects" },
    { id: 5, name: "Skills", to: "#skills" },
    { id: 6, name: "Contact", to: "#contact" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md text-text">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-text hover:opacity-90 transition"
        >
          <span className="text-xl font-bold bg-text text-white px-3 py-3 rounded-full shadow-md">
            ND
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.to}
                className="relative text-text hover:text-hover transition duration-300 group font-medium"
              >
                {link.name}
                <span className="block h-0.5 bg-hover scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden z-10 cursor-pointer"
          onClick={() => setNav(!nav)}
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 shadow-lg md:hidden"
        >
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.to}
                className="text-lg text-text hover:text-hover transition duration-300"
                onClick={() => setNav(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </header>
  );
};

export default Navbar;
