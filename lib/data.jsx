import { FaHtml5, FaCss3, FaCss3Alt, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiMui, SiSass, SiShadcnui, SiFirebase } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandRedux } from "react-icons/tb";

// ==========================
// 1. RESUME PAGE DATA
// ==========================

export const about = {
  title: "About me",
  description: 'I am a passionate Front-End Developer with a strong focus on building responsive, performant, and beautifully designed web experiences. I constantly push myself to learn new technologies and improve my craft.',
  info: [
    { fieldName: "Name", fieldValue: "Beshir-Swed" },
    { fieldName: "Phone", fieldValue: "+905377906230" },
    { fieldName: "Experience", fieldValue: "3+ years" },
    { fieldName: "Nationality", fieldValue: "Syria" },
    { fieldName: "Email", fieldValue: "beshirswed07@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "Arabic, Turkish, English" },
  ]
};

export const experience = {
  icon: '',
  title: "My Experience",
  description: "Self-taught Front-End Web Developer with hands-on experience in HTML, CSS, React, TypeScript, Tailwind CSS, JavaScript, Next.js, and more. I have been working as a Freelance Front-End Developer, and I also completed a Front-End Internship at Codeway Group where I worked on real-world projects like E-commerce, E-learning, ERP, and CRM systems.",
  items: [
    {
      company: 'Freelance',
      position: 'Front-End Developer',
      duration: '2025 – Present',
    },
    {
      company: 'Codeway Group',
      position: 'Front-End Intern',
      duration: '6 Months',
    }
  ]
};

export const education = {
  icon: '',
  title: "My Education",
  description: "I believe in continuous learning. My journey includes formal education and numerous professional courses to stay updated with modern web technologies.",
  items: [
    {
      institution: 'Al-Mahmoudiyah School for Imams and Preachers',
      degree: 'Completed 10th Grade (Islamic Studies focus)',
      duration: 'Until 2023',
    },
    {
      institution: 'Osama Elzero & Ibrahim Adel',
      degree: 'Python Course & Certificate',
      duration: '2024',
    },
    {
      institution: 'Arabian Systems Academy',
      degree: 'Front-End Development Course (Instructor: Malek)',
      duration: '2025 – Ongoing',
    },
  ]
};

export const skills = {
  title: "My Skills",
  description: "Front-End Developer | Building fast, modern websites with Next.js & TypeScript, optimized for SEO. Below is a list of the core technologies I work with daily.",
  skillList: [
    { icon: <FaHtml5 />, name: 'html 5' },
    { icon: <FaCss3 />, name: 'css 3' },
    { icon: <FaJs />, name: 'javascript' },
    { icon: <FaReact />, name: 'react' },
    { icon: <RiNextjsLine />, name: 'next js' },
    { icon: <SiTypescript />, name: 'typescript' },
    { icon: <SiTailwindcss />, name: 'tailwindcss' },
    { icon: <FaBootstrap />, name: 'bootstrap' },
    { icon: <SiMui />, name: 'material ui' },
    { icon: <SiShadcnui />, name: 'shadcn ui' },
    { icon: <SiSass />, name: 'sass' },
    { icon: <TbBrandRedux />, name: 'redux toolkit' }
  ]
};


// ==========================
// 2. SERVICES PAGE DATA
// ==========================

export const services = [
  {
    num: '01',
    title: 'Front-End Development',
    description: 'I create stunning, responsive, and high-performance web interfaces using React.js, Next.js, and Tailwind CSS. My focus is on delivering smooth user experiences, modern designs, and pixel-perfect layouts that make websites shine.',
    href: '/contact'
  },
  {
    num: '02',
    title: 'Clean & Organized Code',
    description: 'I write clean, maintainable, and highly readable code that follows industry best practices. Every line is carefully structured to ensure your project is scalable, efficient, and easy for teams to understand and extend.',
    href: '/contact'
  },
  {
    num: '03',
    title: 'Systematic Work',
    description: 'I approach each project with a structured and methodical mindset, prioritizing tasks effectively and maintaining consistent quality. This ensures smooth workflows, timely delivery, and professional outcomes that exceed expectations.',
    href: '/contact'
  },
  {
    num: '04',
    title: 'Technical SEO',
    description: 'I optimize your website from a technical standpoint to improve visibility and performance. From enhancing site speed and structure to accessibility improvements, I ensure your website ranks better and delivers an outstanding user experience.',
    href: '/contact'
  }
];


// ==========================
// 3. WORK / PROJECTS PAGE DATA
// ==========================

export const projects = [
  {
    num: "01",
    category: "Front-End",
    title: "yasmine-alshaam",
    description: "A simple personal website built with React.js",
    stack: [
      { name: 'Html 5', icon: <FaHtml5 /> },
      { name: 'Css 3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <FaReact /> }
    ],
    image: "/yasmin.png",
    live: "https://yasmeen-alsham.vercel.app/",
    github: 'https://github.com/beshirswed1/YASMEEN_ALSHAM'
  },
  {
    num: "02",
    category: "Front-End",
    title: "book-vault",
    description: "A simple personal website built with javaScript",
    stack: [
      { name: 'Html 5', icon: <FaHtml5 /> },
      { name: 'Css 3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <SiJavascript /> }
    ],
    image: "/book.png",
    live: "https://book-vault-three.vercel.app/",
    github: 'https://github.com/beshirswed1/book-vaulet'
  },
  {
    num: "03",
    category: "Front-End",
    title: "foot craft",
    description: "A simple personal website built with React and Next.js",
    stack: [
      { name: 'Html 5', icon: <FaHtml5 /> },
      { name: 'Css 3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <SiNextdotjs /> }
    ],
    image: "/foot.png",
    live: "https://footcraft.vercel.app/",
    github: 'https://github.com/beshirswed1/FOOTCRAFT'
  },
  {
    num: "04",
    category: "Front-End",
    title: "khair-alquron",
    description: "A simple personal website built with JavaScript",
    stack: [
      { name: 'Html 5', icon: <FaHtml5 /> },
      { name: 'Css 3', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <FaReact /> }
    ],
    image: "/alqron.png",
    live: "https://khair-alquron.vercel.app/",
    github: 'https://github.com/beshirswed1/khair-alquron'
  },
  {
    num: "05",
    category: "Full-Stack",
    title: "Athar - Digital Library Management",
    description: "A comprehensive web platform for managing your personal library digitally. It solves the problem of losing track of read and to-read books, providing a categorization system, reading status tracking, and precise statistics.",
    stack: [
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'React', icon: <FaReact /> },
      { name: 'Redux Toolkit', icon: <TbBrandRedux /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> }
    ],
    image: "https://catalog-beshir.vercel.app/images/athar.png",
    live: "",
    github: ""
  },
  {
    num: "06",
    category: "E-Commerce",
    title: "E-Commerce Store with Dashboard",
    description: "A complete e-commerce platform with a clear separation between the presentation and data layers. It offers advanced filtering, dynamic categorization, and shopping cart management, along with a comprehensive administrative dashboard.",
    stack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Redux Toolkit', icon: <TbBrandRedux /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      { name: 'Axios', icon: <SiJavascript /> }
    ],
    image: "https://catalog-beshir.vercel.app/images/ecommerce.png",
    live: "https://e-commerce-seven-blue-67.vercel.app/",
    github: "https://github.com/beshirswed1/e-commerce"
  },
  {
    num: "07",
    category: "Full-Stack",
    title: "Katmerci Emre",
    description: "A complete menu and restaurant management website with integrated order management. It offers a seamless experience with features like multi-language support (6+ languages), inventory management, and order fulfillment with enjoyable monitoring dashboards.",
    stack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> },
      { name: 'Redux Toolkit', icon: <TbBrandRedux /> }
    ],
    image: "/assets/katmerci_emre.png",
    live: "https://katmerci-emre.vercel.app/",
    github: "https://github.com/beshirswed1/KATMERCI-EMRE"
  },
  {
    num: "08",
    category: "Entertainment",
    title: "SYRBEAST",
    description: "A comprehensive movies and TV series website featuring ratings, a full sorting and filtering system, and recommendations integrated with external REST APIs. The site is smooth, simple, and handles huge data in an organized and structured way.",
    stack: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'TailwindCSS', icon: <SiTailwindcss /> }
    ],
    image: "/assets/syrbeast.png",
    live: "https://syrbeast.vercel.app/",
    github: "https://github.com/beshirswed1/SYRBEAST"
  }
];
