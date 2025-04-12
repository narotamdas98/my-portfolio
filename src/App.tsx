import Hero from "@components/Hero";
import About from "@components/About";
import Navbar from "@components/Navbar";
import Experience from "@components/Experience";
import Projects from "@components/Projects";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
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
