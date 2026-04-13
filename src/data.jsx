// استيراد الصور أولاً لضمان عملها بعد الـ Build
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";

export const galleryImages = [img1, img2, img3, img4, img5];

import { FaUsers, FaHome, FaSun } from "react-icons/fa";

// 1. تعريف الأسعار والكميات (المصدر الوحيد للحقيقة)
const PRICES = {
  ARCH: 1000,
  LEG: 500,
  DRAIN: 400,
};

const QTY_PER_UNIT = {
  ARCHES: 2,
  LEGS: 4,
  DRAINS: 2,
};

export const CONSTRUCTION_CONFIG = {
  exchangeRate: 3,
  unitsCount: 6,
};

// 2. الحسابات التلقائية (Derivations)
// تكلفة الوحدة = (2*1000) + (4*500) + (2*400) = 4800 شيكل
const unitTotalILS =
  PRICES.ARCH * QTY_PER_UNIT.ARCHES +
  PRICES.LEG * QTY_PER_UNIT.LEGS +
  PRICES.DRAIN * QTY_PER_UNIT.DRAINS;

const totalProjectILS = unitTotalILS * CONSTRUCTION_CONFIG.unitsCount; // 28,800 شيكل

const totalProjectUSD = Math.round(
  totalProjectILS / CONSTRUCTION_CONFIG.exchangeRate,
); // 9,600 دولار
// export const CONSTRUCTION_CONFIG = {
//   exchangeRate: 3, // سعر الصرف الذي طلبته
//   unitsCount: 6,
//   totalStructureUSD: Math.round(28800 / CONSTRUCTION_CONFIG.exchangeRate), // القيمة التي ستظهر في Impact
// };

export const translations = {
  ar: {
    navbar: {
      logo: "ن",
      title: "نقطة وصل",
      donate: "ساهم",
      links: [
        { id: 1, name: "الرئيسية", href: "#hero", showInFooter: true },
        { id: 2, name: "الميدان", href: "#gallery", showInFooter: true },
        { id: 3, name: "خارطة الطريق", href: "#roadmap", showInFooter: true },
        { id: 4, name: "الاحتياجات", href: "#needs", showInFooter: true },
        { id: 5, name: "تواصل معنا", href: "#footer", showInFooter: false },
      ],
    },
    hero: {
      title: "لأن التعليم لا ينتظر.. نمدُّ جسور الأمل",
      subtitle:
        "من قلب خانيونس، ننشئ مساحة تعليمية تعمل بالطاقة الشمسية لضمان استمرار مئات الطلاب في مسيرتهم التعليمية رغم التحديات.",
      mainBtn: "كن جزءاً من البناء",
      secondaryBtn: "تعرف على المبادرة",
    },
    gallery: {
      title: "معرض",
      highlight: "الميدان",
      description: "توثيق حي للمساحة المتاحة في خانيونس وخطواتنا الأولى",
      // ترجمة وصف الصور داخل المعرض
      photos: [
        { id: 1, caption: "المساحة المتاحة في خانيونس" },
        { id: 2, caption: "المساحة تم تأمينها" },
        { id: 3, caption: "نقطة وصــل تجمع الطلاب" },
        { id: 4, caption: "بسواعدكم نعمرها" },
        { id: 5, caption: "نقطة وصل - الأمل المستمر" },
      ],
    },
    roadmap: {
      title: "خارطة طريق",
      highlight: "المبادرة",
      steps: [
        {
          id: 1,
          title: "تأمين الموقع",
          desc: "تم حجز وتأمين المساحة الميدانية في خانيونس لبدء العمل.",
          status: "done",
        },
        {
          id: 2,
          title: "الإنشاء والتجهيز",
          desc: "بناء الهيكل وتوفير المقاعد الدراسية حسب الموارد المتاحة.",
          status: "active",
        },
        {
          id: 3,
          title: "التشغيل والتمكين",
          desc: "تركيب الطاقة الشمسية، الإنترنت الفضائي، واستقبال الطلاب.",
          status: "pending",
        },
      ],
    },
    needs: {
      title: "تحليل تكلفة الوحدة النمطية",
      badge: "مكونات الوحدة النمطية",
      description:
        "نعتمد نظام الوحدات المتكاملة، حيث تتكون كل وحدة من هيكل أساسي يضمن الصمود والاستدامة.",
      unitTotalLabel: "إجمالي تكلفة الوحدة:",
      fullProjectLabel: "إجمالي الهيكل والبناء (6 وحدات)",
      totalUnitsLabel: "عدد الوحدات المطلوبة",
      estimatedUSD: "التقدير بالدولار",
      sponsorBtn: "تبنّ تكلفة وحدة كاملة",
      unitSuffix: "وحدات متصلة",
      currency: "₪",
      // تعريف المكونات هنا ليتم عمل map لها لاحقاً
      items: [
        {
          id: 1,
          label: `${QTY_PER_UNIT.ARCHES} قوس معدني`,
          price: PRICES.ARCH * QTY_PER_UNIT.ARCHES,
          icon: "FaArchway",
        },
        {
          id: 2,
          label: `${QTY_PER_UNIT.LEGS} أرجل بقواعد`,
          price: PRICES.LEG * QTY_PER_UNIT.LEGS,
          icon: "FaColumns",
        },
        {
          id: 3,
          label: `${QTY_PER_UNIT.DRAINS} مجاري مياه`,
          price: PRICES.DRAIN * QTY_PER_UNIT.DRAINS,
          icon: "FaWater",
        },
      ],
      unitTotal: unitTotalILS,
      usdTotal: totalProjectUSD,
    },
    impact: {
      title: "ميزانية التشغيل المقدرة",
      subtitle: "المرحلة الأولى: التأسيس والتشغيل",
      goalLabel: "هدف التمويل",
      stats: [
        {
          id: 1,
          label: "سعة تعليمية شهرياً", // بدلاً من طالب مستهدف فقط
          value: "+5,000",
          icon: <FaUsers size={45} />,
        },
        {
          id: 2,
          label: "تجهيز الهيكل والبناء",
          value: `$${totalProjectUSD}`,
          icon: <FaHome size={45} />,
        },
        {
          id: 3,
          label: "الطاقة والإنترنت",
          value: "قيد التقدير",
          icon: <FaSun size={45} />,
        },
      ],
    },
    footer: {
      location: "موقع المبادرة - خانيونس",
      titleMain: "نقطة",
      titleSub: "وصل",
      description:
        "مبادرة تهدف لربط الطلاب بفرصهم التعليمية من خلال توفير بيئة تقنية متكاملة وطاقة مستدامة وسط أصعب الظروف.",
      quickAccess: "وصول سريع",
      leaveImpact: "اترك أثراً",
      whatsapp: "تواصل عبر واتساب",
      telegram: "قناة التليجرام",
      rights: "جميع الحقوق محفوظة لمبادرة نقطة وصل",
      madeWith: "صُنع بشغف في غزة",
      country: "فلسطين 🇵🇸",
    },
    contributionModal: {
      title: "ساهم في نقطة وصل",
      subtitle: "دعمكم هو الوقود لاستمرار رحلة طلابنا",
      anonymousLabel: "تبرع كفاعل خير (إخفاء الاسم)",
      namePlaceholder: "الاسم الكامل",
      amountPlaceholder: "قيمة المساهمة ($)",
      tabs: {
        intl: "دولي",
        local: "محلي",
      },
      methods: {
        paypal: "PayPal (قريباً)",
        binance: "Binance (USDT)",
        bank: "تحويل بنكي",
        jawwal: "Jawwal Pay",
        palpay: "PalPay",
        community: "رابط التمويل",
      },
      confirmBtn: "تأكيد المساهمة عبر واتساب",
      closeBtn: "إغلاق",
    },
  },
  de: {
    navbar: {
      logo: "N",
      title: "Noqtat Wasl",
      donate: "Jetzt Spenden",
      links: [
        { id: 1, name: "Startseite", href: "#hero", showInFooter: true },
        { id: 2, name: "Vor Ort", href: "#gallery", showInFooter: true },
        { id: 3, name: "Roadmap", href: "#roadmap", showInFooter: true },
        { id: 4, name: "Bedarf", href: "#needs", showInFooter: true },
        { id: 5, name: "Kontakt", href: "#footer", showInFooter: false },
      ],
    },
    hero: {
      title: "Weil Bildung nicht wartet.. bauen wir Brücken der Hoffnung",
      subtitle:
        "Im Herzen von Khan Younis schaffen wir einen solarbetriebenen Lernraum, um Hunderten von Schülern trotz aller Herausforderungen den Weg in die Zukunft zu ebnen.",
      mainBtn: "Werde Teil des Aufbaus",
      secondaryBtn: "Über die Initiative",
    },
    gallery: {
      title: "Galerie des",
      highlight: "Feldes",
      description:
        "Eine Live-Dokumentation des verfügbaren Raums in Khan Younis und unserer ersten Schritte",
      photos: [
        { id: 1, caption: "Der verfügbare Raum in Khan Younis" },
        { id: 2, caption: "Der Raum wurde gesichert" },
        { id: 3, caption: "Noqtat Wasl bringt Studenten zusammen" },
        { id: 4, caption: "Mit eurer Hilfe bauen wir es auf" },
        { id: 5, caption: "Noqtat Wasl - Die fortدauernde Hoffnung" },
      ],
    },
    roadmap: {
      title: "Roadmap der",
      highlight: "Initiative",
      steps: [
        {
          id: 1,
          title: "Sicherung des Standorts",
          desc: "Der Raum in Khan Younis wurde reserviert und gesichert.",
          status: "done",
        },
        {
          id: 2,
          title: "Aufbau & Ausstattung",
          desc: "Bau der Struktur und Bereitstellung von Sitzplätzen.",
          status: "active",
        },
        {
          id: 3,
          title: "Betrieb & Ermöglichung",
          desc: "Installation von Solarstrom, Satelliten-Internet.",
          status: "pending",
        },
      ],
    },
    needs: {
      title: "Modulare Kostenanalyse",
      badge: "Modulkomponenten",
      description:
        "Wir verwenden ein integriertes Modulares System, bei dem jede Einheit aus einer Grundstruktur besteht.",
      unitTotalLabel: "Gesamtkosten pro Einheit:",
      fullProjectLabel: "Gesamtstruktur & Bau (6 Einheiten)",
      totalUnitsLabel: "Anzahl der benötigten Einheiten",
      estimatedUSD: "Geschätzte USD",
      sponsorBtn: "Sponsoren Sie eine Einheit",
      unitSuffix: "Verbundene Einheiten",
      currency: "₪",
      items: [
        {
          id: 1,
          label: `${QTY_PER_UNIT.ARCHES} Metallbögen`,
          price: PRICES.ARCH * QTY_PER_UNIT.ARCHES,
          icon: "FaArchway",
        },

        {
          id: 2,
          label: `${QTY_PER_UNIT.LEGS} Stützbeine mit Sockel`,
          price: PRICES.LEG * QTY_PER_UNIT.LEGS,
          icon: "FaColumns",
        },
        {
          id: 3,
          label: `${QTY_PER_UNIT.DRAINS} Wasserabläufe (3m)`,
          price: PRICES.DRAIN * QTY_PER_UNIT.DRAINS,
          icon: "FaWater",
        },
      ],
      unitTotal: unitTotalILS,
      usdTotal: totalProjectUSD,
    },
    impact: {
      title: "Geschätztes Betriebsbudget",
      subtitle: "Phase 1: Gründung und Betrieb",
      goalLabel: "Finanzierungsziel",
      stats: [
        {
          id: 1,
          label: "Monatliche Kapazität",
          value: "+5.000",
          icon: <FaUsers size={45} />,
        },
        {
          id: 2,
          label: "Struktur & Bau",
          value: `$${totalProjectUSD}`,
          icon: <FaHome size={45} />,
        },
        {
          id: 3,
          label: "Strom & Internet",
          value: "In Planung",
          icon: <FaSun size={45} />,
        },
      ],
    },
    footer: {
      location: "Initiativstandort - Khan Yunis",
      titleMain: "Noqtat",
      titleSub: "Wasl",
      description:
        "Eine Initiative, die darauf abzielt, Studenten mit ihren Bildungschancen zu verbinden, indem sie eine integrierte technische Umgebung und nachhaltige Energie unter schwierigsten Bedingungen bereitstellt.",
      quickAccess: "Schnellzugriff",
      leaveImpact: "Spuren hinterlassen",
      whatsapp: "Kontakt per WhatsApp",
      telegram: "Telegram-Kanal",
      rights: "Alle Rechte vorbehalten – Noqtat Wasl Initiative",
      madeWith: "Mit Leidenschaft in Gaza erstellt",
      country: "Palästina 🇵🇸",
    },
    contributionModal: {
      title: "Unterstützen Sie Nuqtat Wasl",
      subtitle: "Ihre Unterstützung sichert die Zukunft unserer Schüler",
      anonymousLabel: "Anonym spenden",
      namePlaceholder: "Vollständiger Name",
      amountPlaceholder: "Betrag ($)",
      tabs: {
        intl: "International",
        local: "Lokal",
      },
      methods: {
        paypal: "PayPal (Demnächst)",
        binance: "Binance (USDT)",
        bank: "Banküberweisung",
        jawwal: "Jawwal Pay",
        palpay: "PalPay",
        community: "Funding-Link",
      },
      confirmBtn: "Per WhatsApp bestätigen",
      closeBtn: "Schließen",
      copyMsg: "Kopiert!",
    },
  },
  en: {
    navbar: {
      logo: "N",
      title: "Noqtat Wasl",
      donate: "Donate Now",
      links: [
        { id: 1, name: "Home", href: "#hero", showInFooter: true },
        { id: 2, name: "Field", href: "#gallery", showInFooter: true },
        { id: 3, name: "Roadmap", href: "#roadmap", showInFooter: true },
        { id: 4, name: "Needs", href: "#needs", showInFooter: true },
        { id: 5, name: "Contact Us", href: "#footer", showInFooter: false },
      ],
    },
    hero: {
      title: "Because Education Doesn't Wait.. We Build Bridges of Hope",
      subtitle:
        "From the heart of Khan Younis, we are creating a solar-powered educational space to ensure hundreds of students continue their journey despite the challenges.",
      mainBtn: "Be Part of the Build",
      secondaryBtn: "Learn More",
    },
    gallery: {
      title: "Field",
      highlight: "Gallery",
      description:
        "Live documentation of the available space in Khan Younis and our first steps",
      photos: [
        { id: 1, caption: "Available space in Khan Younis" },
        { id: 2, caption: "The space has been secured" },
        { id: 3, caption: "Noqtat Wasl brings students together" },
        { id: 4, caption: "With your support, we build" },
        { id: 5, caption: "Noqtat Wasl - Continuing Hope" },
      ],
    },
    roadmap: {
      title: "Project",
      highlight: "Roadmap",
      steps: [
        {
          id: 1,
          title: "Site Securing",
          desc: "The field space in Khan Younis has been secured.",
          status: "done",
        },
        {
          id: 2,
          title: "Construction",
          desc: "Building the structure and providing study seats.",
          status: "active",
        },
        {
          id: 3,
          title: "Operation",
          desc: "Solar power, Satellite Internet, and welcoming students.",
          status: "pending",
        },
      ],
    },
    needs: {
      title: "Modular Cost Analysis",
      badge: "Module Components",
      description:
        "We adopt an integrated modular system, where each unit consists of a core structure ensuring durability.",
      unitTotalLabel: "Total Unit Cost:",
      fullProjectLabel: "Total Structure & Construction (6 Units)",
      totalUnitsLabel: "Total Units Required",
      estimatedUSD: "Estimated USD",
      sponsorBtn: "Sponsor a Full Unit",
      unitSuffix: "Connected Units",
      currency: "₪",
      items: [
        {
          id: 1,
          label: `${QTY_PER_UNIT.ARCHES} Metal Arches`,
          price: PRICES.ARCH * QTY_PER_UNIT.ARCHES,
          icon: "FaArchway",
        },
        {
          id: 2,
          label: `${QTY_PER_UNIT.LEGS} Legs with Integrated Bases`,
          price: PRICES.LEG * QTY_PER_UNIT.LEGS,
          icon: "FaColumns",
        },
        {
          id: 3,
          label: `${QTY_PER_UNIT.DRAINS} Water Drains (3m)`,
          price: PRICES.DRAIN * QTY_PER_UNIT.DRAINS,
          icon: "FaWater",
        },
      ],
      unitTotal: unitTotalILS,
      usdTotal: totalProjectUSD,
    },
    impact: {
      title: "Estimated Operating Budget",
      subtitle: "Phase 1: Foundation and Operation",
      goalLabel: "Funding Goal",
      stats: [
        {
          id: 1,
          label: "Monthly Capacity",
          value: "+5,000",
          icon: <FaUsers size={45} />,
        },
        {
          id: 2,
          label: "Structure & Construction",
          value: `$${totalProjectUSD}`,
          icon: <FaHome size={45} />,
        },
        {
          id: 3,
          label: "Power & Internet",
          value: "TBD",
          icon: <FaSun size={45} />,
        },
      ],
    },
    footer: {
      location: "Initiative Location - Khan Younis",
      titleMain: "Noqtat",
      titleSub: "Wasl",
      description:
        "An initiative aimed at connecting students with educational opportunities by providing an integrated technical environment and sustainable energy under the harshest conditions.",
      quickAccess: "Quick Access",
      leaveImpact: "Leave an Impact",
      whatsapp: "Contact via WhatsApp",
      telegram: "Telegram Channel",
      rights: "All Rights Reserved - Noqtat Wasl Initiative",
      madeWith: "Made with passion in Gaza",
      country: "Palestine 🇵🇸",
    },
    contributionModal: {
      title: "Contribute to Nuqtat Wasl",
      subtitle: "Your support fuels our students' journey",
      anonymousLabel: "Donate anonymously",
      namePlaceholder: "Full Name",
      amountPlaceholder: "Amount ($)",
      tabs: {
        intl: "International",
        local: "Local",
      },
      methods: {
        paypal: "PayPal (Soon)",
        binance: "Binance (USDT)",
        bank: "Bank Transfer",
        jawwal: "Jawwal Pay",
        palpay: "PalPay",
        community: "Funding Link",
      },
      confirmBtn: "Confirm via WhatsApp",
      closeBtn: "Close",
    },
  },
};
