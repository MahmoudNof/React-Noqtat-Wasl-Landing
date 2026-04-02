import React from "react";
import { motion } from "framer-motion";
import { translations } from "../data";

const Hero = ({ lang, onOpenModal }) => {
  const t = translations[lang].hero;

  // إعدادات أنيميشن الحروف (Typewriter effect)
  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.04, // السرعة بين كل حرف والآخر
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-20">
      <div className="max-w-4xl mx-auto px-4 text-center z-10">
        
        {/* العنوان الرئيسي مع تأثير الكتابة */}
        <motion.h1
          key={lang} // تغيير اللغة يعيد تشغيل الأنيميشن
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl md:text-6xl font-black text-[#1f7a5a] mb-6 leading-tight"
        >
          {t.title.split("").map((char, index) => (
            <motion.span key={index} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* الوصف - يظهر بهدوء بعد انتهاء الكتابة */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium"
        >
          {t.subtitle}
        </motion.p>

        {/* الأزرار */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button onClick={onOpenModal} className="bg-[#1f7a5a] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#165a42] transition-all transform hover:scale-105 shadow-lg">
            {t.mainBtn}
          </button>
          <button className="border-2 border-[#1f7a5a] text-[#1f7a5a] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all">
            {t.secondaryBtn}
          </button>
        </motion.div>
      </div>

      {/* لمسة فنية في الخلفية توحي بالهندسة (أقواس المبادرة) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.03] pointer-events-none -z-0">
         <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#1f7a5a" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.1,-0.9C83.4,13.8,76.6,27.7,68.4,40.1C60.2,52.5,50.6,63.4,38.7,70.9C26.8,78.3,13.4,82.4,-0.6,83.4C-14.6,84.4,-29.2,82.4,-42.2,75.7C-55.2,69.1,-66.6,57.7,-74.4,44.3C-82.2,30.9,-86.3,15.5,-85.7,0.4C-85.1,-14.7,-79.8,-29.4,-71.4,-42.2C-63,-55.1,-51.5,-66.1,-38.1,-73.3C-24.7,-80.5,-12.3,-84,2.2,-87.8C16.7,-91.6,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
         </svg>
      </div>
    </section>
  );
};

export default Hero;