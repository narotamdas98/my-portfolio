import Hero from '@components/Hero';
import About from '@components/About';
import Navbar from '@components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Experience from './components/Experience';
// import Projects from './components/Projects';
// import Skills from './components/Skills';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 text-gray-800">
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="abouts"><About /></div>
      {/* <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
