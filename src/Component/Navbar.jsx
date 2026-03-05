import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* اللوجو أو اسم المبادرة */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#1f7a5a] rounded-lg flex items-center justify-center text-white font-bold text-xl">
            ن
          </div>
          <span className="text-xl font-bold text-[#1f7a5a] hidden md:block">
            نقطة وصل
          </span>
        </div>

        {/* الروابط */}
        <ul className="flex items-center gap-6 text-gray-600 font-medium">
          <li className="hover:text-[#1f7a5a] cursor-pointer transition-colors">
            <a href="#about">عن المبادرة</a>
          </li>
          <li className="hover:text-[#1f7a5a] cursor-pointer transition-colors">
            <a href="#impact">أثرنا</a>
          </li>
          <li className="hidden sm:block hover:text-[#1f7a5a] cursor-pointer transition-colors">
            <a href="#tasks">المهام</a>
          </li>
        </ul>

        {/* زر التبرع */}
        <button className="bg-[#1f7a5a] text-white px-6 py-2 rounded-full font-bold hover:bg-[#165a42] transition-all transform hover:scale-105 shadow-md">
          تبرع الآن
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
