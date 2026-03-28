import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion"; // استيراد المكتبة
const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1, // لعمل تتابع في ظهور الروابط
      },
    },
  };

  const itemVariants = {
    closed: { x: -20, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };
  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
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
        <ul className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className="hover:text-[#1f7a5a] transition-all duration-200 ease-in-out
"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* زر التبرع */}
        <button
          className="hidden md:block bg-[#1f7a5a] text-white px-6 py-2 rounded-full font-bold hover:bg-[#165a42] transition-all duration-300 ease-in-out
  transform hover:scale-105 shadow-md"
        >
          تبرع الآن
        </button>

        {/* زر المينيو - Mobile */}
        <button
          className="md:hidden text-2xl hover:text-[#1f7a5a] "
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.div>{" "}
        </button>
      </div>

      {/* القائمة - Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-white shadow-md px-4 py-4 space-y-4 overflow-hidden"
          >
            <motion.ul className="flex flex-col gap-4">
              {links.map((link) => (
                <motion.li key={link.id} variants={itemVariants}>
                  <a
                    href={link.href}
                    className="block hover:text-[#1f7a5a] transition-all duration-300 ease-in-out font-bold"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <motion.button
              variants={itemVariants}
              className="w-full bg-[#1f7a5a] text-white py-2 rounded-full font-bold shadow-sm active:scale-95 transition-transform"
            >
              تبرع الآن
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
