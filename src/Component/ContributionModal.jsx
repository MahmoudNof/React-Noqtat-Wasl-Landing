import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaCopy,
  FaTimes,
  FaGlobe,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { translations } from "../data";

const ContributionModal = ({ isOpen, onClose, lang }) => {
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [activeTab, setActiveTab] = useState("intl"); // intl or local
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [copied, setCopied] = useState(false);
  const t = translations[lang].contributionModal;  

  const handleConfirm = () => {
    const finalName = isAnonymous
      ? (lang === "ar"
        ? "فاعل خير"
        : "Anonymous")
      : (donorName || lang === 'ar' ? 'غير محدد' : 'Not Specified');
    const finalAmount = amount || "0";
    const method =
      activeTab === "intl" ? (lang === 'ar' ? 'دولي' : 'International') : (lang === 'ar' ? 'محلي' : 'Local');
    

    // رقم الواتساب الخاص بك (تأكد من وضع المفتاح الدولي بدون أصفار)
    const myPhoneNumber = "972598726980";

    const message =
      lang === "ar"
        ? `السلام عليكم محمود، أرغب في المساهمة في مبادرة "نقطة وصل".%0A%0A*التفاصيل:*%0A- الاسم: ${finalName}%0A- المبلغ: ${finalAmount}$%0A- الوسيلة: ${method}%0A%0Aبارك الله في جهودكم.`
        : `Hello Mahmoud, I would like to contribute to "Nuqtat Wasl".%0A%0A*Details:*%0A- Name: ${finalName}%0A- Amount: ${finalAmount}$%0A- Method: ${method}%0A%0AThank you for your efforts.`;

    window.open(`https://wa.me/${myPhoneNumber}?text=${message}`, "_blank");
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) onClose(); // 27 هو رمز زر ESC
    };
    if (isOpen) {
        window.addEventListener('keydown', handleEsc);
        // منع التمرير في الصفحة الخلفية عند فتح المودال
        document.body.style.overflow = 'hidden';
      }
      return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset'; // إعادة التمرير عند الإغلاق
    };
  }, [isOpen, onClose]);

  const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
  setCopied(true);
  
  // إعادة الأيقونة لشكلها الطبيعي بعد ثانيتين
  setTimeout(() => setCopied(false), 4000 );
};

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div onClick={onClose} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden relative"
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        >
          {/* خلفية جمالية علوية مع الساعة الرملية */}
          <div  className="bg-[#1f7a5a] p-8 text-white text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  {/* الدائرة المحيطة المتحركة */}
                  <motion.svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 absolute -top-2 -left-2"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth="2"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="48"
                      fill="none"
                      stroke="#D4AF37"
                      strokeWidth="3"
                      strokeDasharray="100 200"
                      strokeLinecap="round"
                    />
                  </motion.svg>

                  {/* الساعة الرملية */}
                  <motion.div
                    animate={{ rotate: [0, 180, 180, 360, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      times: [0, 0.4, 0.5, 0.9, 1],
                      ease: "easeInOut",
                    }}
                    className="bg-white/10 p-3 rounded-full backdrop-blur-md border border-white/20 relative z-10"
                  >
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#D4AF37]"
                    >
                      <path d="M5 2h14" />
                      <path d="M5 22h14" />
                      <path d="M6 2v6.7c0 .8.3 1.6.8 2.3l4.4 6c.5.7.8 1.5.8 2.3V22" />
                      <path d="M18 2v6.7c0 .8-.3 1.6-.8 2.3l-4.4 6c-.5.7-.8 1.5-.8 2.3V22" />
                    </svg>
                  </motion.div>
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-1">{t.title}</h2>
              <p className="text-white/80 text-sm">{t.subtitle}</p>
            </div>
          </div>

          <div className="p-6">
            {/* التبديل بين دولي ومحلي */}
            <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
              <button
                onClick={() => setActiveTab("intl")}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${activeTab === "intl" ? "bg-white shadow-sm text-[#1f7a5a] font-bold" : "text-gray-500"}`}
              >
                <FaGlobe /> {t.tabs.intl}
              </button>
              <button
                onClick={() => setActiveTab("local")}
                className={`flex-1 py-2 rounded-lg flex items-center justify-center gap-2 transition-all ${activeTab === "local" ? "bg-white shadow-sm text-[#1f7a5a] font-bold" : "text-gray-500"}`}
              >
                <FaMapMarkerAlt /> {t.tabs.local}
              </button>
            </div>

            {/* الخيارات ستظهر هنا بناءً على الـ Tab */}
            <div className="space-y-5">
              {/* خيار التبرع المخفي */}
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isAnonymous}
                    onChange={() => setIsAnonymous(!isAnonymous)}
                  />
                  <div
                    className={`w-10 h-5 rounded-full transition-colors ${isAnonymous ? "bg-[#1f7a5a]" : "bg-gray-300"}`}
                  ></div>
                  <div
                    className={`absolute top-1 left-1 w-3 h-3 bg-white rounded-full transition-transform ${isAnonymous ? "translate-x-5" : ""}`}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 font-medium">
                  {t.anonymousLabel}
                </span>
              </label>

              {/* حقول الإدخال */}
              <div className="grid grid-cols-1 gap-3">
                {!isAnonymous && (
                  <input
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f7a5a] outline-none transition-all"
                  />
                )}
                <input
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder={t.amountPlaceholder}
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1f7a5a] outline-none transition-all"
                />
              </div>

              {/* عرض وسائل الدفع بناءً على التبويب */}
              <div className="grid grid-cols-1 gap-2">
                {activeTab === "intl" ? (
                  <>
                    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-100 rounded-xl opacity-60">
                      <span className="font-bold text-blue-700">
                        {t.methods.paypal}
                      </span>
                      <div className="w-8 h-8 bg-blue-200 rounded-full animate-pulse"></div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-yellow-600 font-bold uppercase tracking-wider">
                          BNB (BEP20)
                        </span>
                        <span className="text-xs font-mono truncate w-48 text-gray-600">
                          0x6a638ec973f6febc7091856f512d42d6f5647737
                        </span>
                      </div>
                      <button onClick={() => handleCopy("0x6a638ec973f6febc7091856f512d42d6f5647737")} className="p-2 hover:bg-yellow-200 rounded-lg transition-colors text-yellow-700">
                        <FaCopy />
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center justify-between p-3 bg-green-50 border border-green-100 rounded-xl">
                      <span className="font-bold text-green-700">
                        {t.methods.jawwal}
                      </span>
                      <span className="text-xs font-mono text-gray-600">
                        0598726980
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-red-50 border border-red-100 rounded-xl">
                      <span className="font-bold text-red-700">
                        {t.methods.palpay}
                      </span>
                      <span className="text-xs font-mono text-gray-600">
                        09000043469337600400
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* زر التأكيد */}
              <button
                onClick={handleConfirm}
                className="w-full py-4 bg-[#1f7a5a] text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-[#165a42] transition-all shadow-lg shadow-green-100"
              >
                <FaWhatsapp size={20} />
                {t.confirmBtn}
              </button>
            </div>

            <button
              onClick={onClose}
              className="mt-6 w-full py-3 text-gray-400 hover:text-gray-600 font-medium transition-colors"
            >
              {t.closeBtn}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContributionModal;
