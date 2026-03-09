import { useState } from "react";
import "./App.css";
// استيراد الصور
import { constructionNeeds, galleryData, roadMapSteps } from "./data";
import { impactStats } from "./data";

// استيراد المكونات
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Roadmap from "./Component/Roadmap";
import ImageSlider from "./Component/ImageSlider";
import Needs from "./Component/Needs";
import Impact from "./Component/Impact";
import Footer from "./Component/Footer";
// import ImpactCounters from "./Component/ImpactCounters";
import TaskSystem from "./Component/TaskSystem";
import About from "./Component/About";
import HumanDetail from "./Component/HumanDetail";
import sections from "./data";

function App() {
  return (
    <div className="App">
      <div id="navbar">
        <Navbar />
      </div>
      <div id="hero">
        <Hero />
      </div>
      <div id="gallery">
        <ImageSlider photos = {galleryData} />
      </div>
      <div>
        <Roadmap steps={roadMapSteps}/>
      </div>
      <div id="needs">
        <Needs needs={constructionNeeds} />
      </div>
      <div id="about">
        <About sections={sections} />
      </div>
      <div id="impact">
        <Impact stats={impactStats} />
      </div>
      <div id="footer">
        <Footer />
      </div>
      {/* <div id="impact">
        <ImpactCounters />
      </div> */}
      {/* <div id="humanDetail">
        <HumanDetail />
      </div> */}
      {/* {sections.map((sec, index) => (
        <About key={index} aboutTitle={sec.title} aboutContent={sec.content} />
      ))} */}
    </div>
  );
}

export default App;
