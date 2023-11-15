import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <div className="relative flex flex-col space-y-20 min-h-screen z-10 bg-dark">
      <NavBar />
      <div className="max-w-screen-lg mx-auto flex flex-col space-y-20">
        <Hero />
        <Skills />
        <Work />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
