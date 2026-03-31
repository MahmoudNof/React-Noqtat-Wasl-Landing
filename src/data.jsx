// استيراد الصور أولاً لضمان عملها بعد الـ Build
import img1 from "./assets/img1.jpeg";
import img2 from "./assets/img2.jpeg";
import img3 from "./assets/img3.jpeg";
import img4 from "./assets/img4.jpeg";
import img5 from "./assets/img5.jpeg";

import { FaUsers, FaHome, FaSun } from "react-icons/fa";

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
  },
};

export const galleryImages = [img1, img2, img3, img4, img5];

export const constructionNeeds = [
  {
    id: 1,
    item: "أقواس حديد",
    quantity: 5,
    cost: 8000,
    status: "pending",
    progress: 20,
  },
  {
    id: 2,
    item: "جسور حديدية",
    quantity: 8,
    cost: 4000,
    status: "urgent",
    progress: 0,
  },
  {
    id: 3,
    item: "الشادر / التغطية",
    quantity: "تغطية كاملة",
    cost: 6000,
    status: "pending",
    progress: 10,
  },
  {
    id: 4,
    item: "تركيب وتشطيب",
    quantity: "كامل",
    cost: 2000,
    status: "pending",
    progress: 0,
  },
];
// استبدل مصفوفة impactStats الحالية بهذا التعديل
export const impactStats = [
  {
    id: 1,
    label: "طالب مستهدف",
    value: "500+",
    icon: <FaUsers size={45} />,
  },
  {
    id: 2,
    label: "تجهيز الهيكل والبناء",
    value: "$6000",
    icon: <FaHome size={45} />,
  },
  {
    id: 3,
    label: "الطاقة والإنترنت",
    value: "$4000",
    icon: <FaSun size={45} />,
  },
];

export const sections = [
  {
    title: "مبادرة نقطة وصل",
    content: `مساحة تعليمية مجتمعية تُعيد للطلاب حقهم في التعلّم، وتمنحهم بيئة آمنة ومستقرة للاستمرار رغم كل الظروف.`,
  },
  {
    title: "نداء إنساني",
    content: `في غزة اليوم، لم يعد السؤال: كيف نُطوّر التعليم؟ بل كيف نُبقيه حيّاً.

آلاف الطلاب يقفون على حافة الانقطاع الكامل عن التعليم، ليس بسبب ضعف الرغبة أو الطموح، بل بسبب غياب أبسط المقومات: كهرباء، إنترنت، ومكان هادئ يشعر فيه الطالب أنه ما زال طالباً، وأن مستقبله لم يُسلب منه بعد.
`,
  },
  {
    title: "عن مبادرة نقطة وصل",
    content: `نقطة وصل هي مبادرة تعليمية مجتمعية تنطلق من حاجة حقيقية وملحّة، وتهدف إلى توفير مساحة تعليمية مستقرة تعمل بالطاقة الشمسية، وتُخصّص بالدرجة الأولى لدعم طلاب المدارس والجامعات لمتابعة تعليمهم الحضوري والإلكتروني.

كما توفّر المبادرة دعماً مكمّلاً ومحدوداً لفئة العاملين عن بُعد، بما يساهم في تعزيز صمود العائلات دون التأثير على الهدف التعليمي الأساسي.
`,
  },
  {
    title: "لماذا نحتاج نقطة وصل الآن؟",
    content: `الحرب دمّرت المدارس، وأغلقت الجامعات، وجعلت البيوت أماكن غير صالحة للتعلّم. ومع اقتراب عام دراسي جديد، يواجه مئات الطلاب خطر فقدان عامهم الدراسي بالكامل.

نقطة وصل ليست مشروع رفاهية، بل محاولة جادة لإنقاذ ما يمكن إنقاذه من المسار التعليمي لجيل كامل.
`,
  },
  {
    title: "ما الذي نوفّره من خلال دعمكم؟",
    content: `- مساحة هادئة ومهيأة للمذاكرة والمتابعة الأكاديمية
- مكاتب ومقاعد دراسية مناسبة
- إنترنت مستقر لمتابعة الدروس والمحاضرات
- منظومة طاقة شمسية تضمن الاستمرارية

كل عنصر من هذه العناصر يمثّل فارقاً حقيقياً في حياة طالب.
`,
  },
  {
    title: "الأثر المتوقع",
    content: `دعمكم، نُعيد للطالب شعوره بالاستقرار، ونحميه من الانقطاع، ونمنحه فرصة حقيقية لمواصلة طريقه التعليمي وبناء مستقبله رغم كل التحديات.`,
  },
  {
    title: "ندعوكم للشراكة",
    content: `تبرعكم ليس مجرد دعم مالي، بل موقف إنساني واضح إلى جانب التعليم، وإيمان بأن إنقاذ طالب اليوم هو استثمار في مجتمع الغد.

نرحب بجميع أشكال الدعم، سواء بالتبرع المالي، أو الشراكات التعليمية، أو المساهمة في تجهيز المساحة.
`,
  },
];
