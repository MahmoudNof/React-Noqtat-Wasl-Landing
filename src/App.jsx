import "./App.css";
import React, { useState, useEffect } from "react";
// استيراد الصور
import { translations } from "./data";

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

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <div id="navbar">
        <Navbar
          lang={lang}
          setLang={setLang}
          links={t.navbar.links}
          content={t.navbar}
          onOpenModal={handleOpenModal}
        />
      </div>
      <main>
        <div id="hero">
          <Hero lang={lang} onOpenModal={handleOpenModal} />
        </div>
        <div id="gallery">
          <ImageSlider lang={lang} />
        </div>
        <div id="roadmap">
          <Roadmap lang={lang} />
        </div>
        <div id="needs">
          <Needs lang={lang} onOpenModal={handleOpenModal} />
        </div>
        <div id="impact">
          <Impact lang={lang} />
        </div>
      </main>
      <div id="footer">
        <Footer lang={lang} />
      </div>
      <ContributionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        lang={lang}
      />
    </div>
  );
}

export default App;
