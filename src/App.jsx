import "./App.css";
import React,{ useState } from "react";
// استيراد الصور
import { translations } from "./data";
import { constructionNeeds } from "./data.jsx";


// استيراد المكونات
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Roadmap from "./Component/Roadmap";
import ImageSlider from "./Component/ImageSlider";
import Needs from "./Component/Needs";
import Impact from "./Component/Impact";
import Footer from "./Component/Footer";
import ContributionModal from "./Component/ContributionModal.jsx";



function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
const [lang, setLang] = useState("ar");
const t = translations[lang];
  return (
    <div className="App" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div id="navbar">
        <Navbar 
          lang={lang} 
          setLang={setLang} 
          links={t.navbar.links}
          content={t.navbar} 
          onOpenModal={() => setIsModalOpen(true)}/>
      </div>
      <div id="hero">
        <Hero lang={lang} 
        onOpenModal={() => setIsModalOpen(true)}/>
      </div>
      <ContributionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        lang={lang} 
      />
      <div id="gallery">
        <ImageSlider lang={lang} />
      </div>
      <div id="roadmap">
        <Roadmap  lang={lang}/>
      </div>
      <div id="needs">
        <Needs needs={constructionNeeds} lang={lang} />
      </div>
      <div id="impact">
        <Impact lang={lang} />
      </div>
      <div id="footer">
        <Footer lang={lang} />
      </div>
    </div>
  );
}

export default App;
