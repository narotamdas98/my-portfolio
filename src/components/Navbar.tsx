import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: 'Home', to: '#home' },
    { id: 2, name: 'About', to: '#about' },
    { id: 3, name: 'Experience', to: '#experience' },
    { id: 4, name: 'Projects', to: '#projects' },
    { id: 5, name: 'Skills', to: '#skills' },
    { id: 6, name: 'Contact', to: '#contact' },
  ];

  return (
    <div className="fixed w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-blue-900">Narotam</a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6">
          {links.map(link => (
            <li key={link.id}>
              <a href={link.to} className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div className="md:hidden z-10" onClick={() => setNav(!nav)}>
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {nav && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-white flex flex-col items-center py-4 space-y-4 shadow-lg md:hidden"
        >
          {links.map(link => (
            <li key={link.id}>
              <a
                href={link.to}
                className="text-gray-700 text-lg hover:text-blue-600"
                onClick={() => setNav(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </div>
  );
};

export default Navbar;
