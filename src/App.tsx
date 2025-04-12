import Hero from "@components/Hero";
import About from "@components/About";
import Navbar from "@components/Navbar";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Analytics />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
