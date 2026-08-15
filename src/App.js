import "./App.css";

import Hero from "./component/Hero";
import Herosection from "./component/Herosection";
import Navbar from "./component/Navbar";
import AboutMe from "./component/AboutMe";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <div className="bg-hero">
        <Navbar />
        <Hero />
        <Herosection />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
