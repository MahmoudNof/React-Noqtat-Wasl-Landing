import React from 'react';
import { FaEye, FaRocket, FaBullseye } from 'react-icons/fa'; // أيقونات الرؤية والرسالة

const About = ({ sections }) => {
  // دالة لاختيار الأيقونة المناسبة بناءً على العنوان
  const getIcon = (title) => {
    if (title.includes("رؤيتنا")) return <FaEye className="text-3xl text-[#D4AF37]" />;
    if (title.includes("رسالتنا")) return <FaRocket className="text-3xl text-[#1f7a5a]" />;
    return <FaBullseye className="text-3xl text-blue-500" />;
  };

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-800 mb-4 font-cairo">عن مبادرة نقطة وصل</h2>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((sec, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-transparent hover:border-[#1f7a5a] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-6 p-4 bg-gray-50 rounded-2xl group-hover:bg-white transition-colors">
                {getIcon(sec.title)}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 font-cairo">{sec.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {sec.content}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default About;