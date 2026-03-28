import "./App.css";
// استيراد الصور
import { constructionNeeds, galleryData, navLinks, roadMapSteps } from "./data";
import { impactStats } from "./data";

// استيراد المكونات
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Roadmap from "./Component/Roadmap";
import ImageSlider from "./Component/ImageSlider";
import Needs from "./Component/Needs";
import Impact from "./Component/Impact";
import Footer from "./Component/Footer";
import About from "./Component/About";
import sections from "./data";

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <Navbar links={navLinks} />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="gallery">
        <ImageSlider photos = {galleryData} />
      </div>
      <div id="roadmap">
        <Roadmap steps={roadMapSteps}/>
      </div>
      <div id="needs">
        <Needs needs={constructionNeeds} />
      </div>
      {/* <div id="about">
        <About sections={sections} />
      </div> */}
      <div id="impact">
        <Impact stats={impactStats} />
      </div>
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
