
import NavBar from "./components/NavBar";
import About from './components/About';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      {/* <div className="loader-container">
        <div className="spinner"></div>
      </div> */}
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Footer />

    </>

  );
}

export default App;
