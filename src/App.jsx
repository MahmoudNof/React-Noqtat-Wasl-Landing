import "./App.css";
import React,{ useState } from "react";
// استيراد الصور
import { constructionNeeds, galleryData, navLinks, roadMapSteps } from "./data.jsx";
import { impactStats } from "./data.jsx";
import { translations } from "./data";


// استيراد المكونات
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Roadmap from "./Component/Roadmap";
import ImageSlider from "./Component/ImageSlider";
import Needs from "./Component/Needs";
import Impact from "./Component/Impact";
import Footer from "./Component/Footer";



function App() {
const [lang, setLang] = useState("ar");
const t = translations[lang];
  return (
    <div className="App" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div id="navbar">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          links={t.navbar.links}
          content={t.navbar} />
      </div>
      <div id="hero">
        <Hero lang={lang} />
      </div>
      <div id="gallery">
        <ImageSlider photos = {galleryData} lang={lang} />
      </div>
      <div id="roadmap">
        <Roadmap steps={roadMapSteps} lang={lang}/>
      </div>
      <div id="needs">
        <Needs needs={constructionNeeds} lang={lang} />
      </div>
      <div id="impact">
        <Impact stats={t.impact} lang={lang} />
      </div>
      <div id="footer">
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
