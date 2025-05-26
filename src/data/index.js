import * as image from "../assets/images/index.js";
import * as project from "../assets/images/project/index.js";

export const navLinks = [
  {
    id: "hero",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },

  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const projects = [
  {
    name: "CineRanker",
    tags: ["Web Development", "Designs"],
    description: "A movie rating platform with NextJS and TMDB API",
    url: "https://github.com/kruizo/cine-ranker-tmdb",
    image: [project.r1, project.r2, project.r3, project.r4],
    text: [
      image.tailwind,
      image.typescript,
      image.next,
      image.js,
      image.nodejs,
    ],
  },
  {
    name: "Find AI",
    tags: ["Web Development", "Systems"],

    description: "A web search UI template with React",
    url: "https://github.com/kruizo/find-ai",
    image: [project.findai_home1, project.findai_home2, project.findai_content],
    // text: ["react", "vite", "tailwind", "javascript", "shadcn"],
    text: [image.tailwind, image.react, image.js, image.nodejs],
  },
  {
    name: " E-commerce Management System",
    tags: ["Web Development", "Systems"],
    description:
      "A sales and record tracking system for a water refilling station.",
    url: "https://github.com/kruizo/sales-record-sys",
    image: [
      project.adelfor_1,
      project.adelfor_2,
      project.adelfor_3,
      project.ad1,
      project.ad2,
      project.adelfor_4,
    ],
    text: [image.php, image.laravel, image.xampp, image.sql],
  },
  {
    name: "FishNet+",
    tags: ["Web Development", "Systems"],
    description:
      "Fish Specie Recognition System with Machine Learning using Python and Flask",
    url: "https://github.com/kruizo/fish-specie-recognition",
    image: [project.f1, project.f2, project.f3, project.f4, project.f5],
    text: [image.python, image.tailwind, image.html, image.css],
  },
  {
    name: "Astro Blog",
    tags: ["Web Development"],
    description: "A simple blog made with Astro & Vue.",
    url: "https://github.com/kruizo/blog-astro-vue",
    image: [project.b1, project.b2],
    text: [image.vue, image.astro, image.tailwind],
  },
  {
    name: "Global Chat App",
    tags: ["Web Development, System"],
    description:
      "A dockerized global chat app made with NGINX, ExpressJS, React, and Socket.IO.",
    url: "https://github.com/kruizo/wgl-chat-app",
    image: [project.i1],
    text: [
      image.nginx,
      image.docker,
      image.express,
      image.typescript,
      image.nodejs,
      image.tailwind,
    ],
  },
  {
    name: "Dynaform",
    tags: ["Web Development", "Systems"],
    description:
      "A interactive form builder with drag-and-drop, collaboritive editing, Google signin, built with HTMX, MongoDB, and Node.js.",
    url: "https://github.com/kruizo/DynaForm",
    image: [project.d1, project.d2, project.d3, project.d4],
    text: [
      image.htmx,
      image.express,
      image.mongo,
      image.nodejs,
      image.js,
      image.tailwind,
    ],
  },
  {
    name: "Artify",
    tags: ["Andriod", "Systems"],
    description: "A andriod art shop gallery made with Flutter and Firebase.",
    url: "https://github.com/kruizo/flutter-artshop-app",
    image: [
      project.artify_home,
      project.artify_2,
      project.artify_3,
      project.artify_4,
    ],
    text: [image.dart, image.flutter, image.firebase],
  },
  {
    name: "Frepo",
    tags: ["Web Development", "Systems"],
    description:
      "Fast-Repo - instant creation and deletion of GitHub repositories.",
    url: "https://github.com/kruizo/frepo",
    image: [project.fr1, project.fr2, project.fr3, project.fr4],
    text: [image.js, image.nodejs],
  },
  {
    name: "Image to Text Extention",
    tags: ["Web Development", "Systems"],
    description: "A simple integration of Teserract OCR to a Chrome extention",
    url: "https://github.com/kruizo/image-to-text-ext",
    image: [project.it1, project.it2, project.it3],
    text: [image.js, image.nodejs],
  },
];
export const skills = [
  {
    name: "HTML",
    image: image.html,
    progress: 0.923,
    description:
      "Proficient in crafting structured and semantic markup for web development projects. Experienced in utilizing HTML5 features and best practices to create modern and responsive web interfaces.",
  },
  {
    name: "CSS",
    image: image.css,
    progress: 0.76,
    description:
      "Skilled in styling and layout design to create visually appealing and responsive user interfaces, using CSS preprocessors like Sass for efficient styling management. Experienced in implementing CSS frameworks such as Tailwind to streamline development and ensure cross-browser compatibility.",
  },
  {
    name: "React",
    image: image.react,
    progress: 0.6321,
    description:
      "Experienced in building dynamic frontend applications with React.js for enhanced user experience, utilizing features like hooks, state management and component composition. Proficient in optimizing React applications for performance and scalability using techniques like code splitting and lazy loading.",
  },
  {
    name: "Java",
    image: image.java,
    progress: 0.67,
    description:
      "Capable of developing backend systems using Java for reliability and performance, leveraging frameworks like Spring Boot for rapid application development.",
  },
  {
    name: "Javascript",
    image: image.js,
    progress: 0.753,
    description:
      "Proficient in implementing client-side logic and dynamic behavior with JavaScript for engaging web applications, utilizing modern ES6+ features like arrow functions and destructuring. Experienced in working with JavaScript libraries and frameworks such as jQuery and NextJS to simplify DOM manipulation and state management.",
  },
  {
    name: "Laravel",
    image: image.laravel,
    progress: 0.724,
    description:
      "Skilled in developing efficient and maintainable PHP-based web applications using Laravel for code readability and elegance, utilizing features like Blade templating engine for dynamic content rendering. Experienced in building RESTful APIs and implementing authentication and authorization mechanisms.",
  },
  {
    name: "Next",
    image: image.next,
    progress: 0.535,
    description:
      "Knowledgeable in leveraging Next.js features for server-side rendering and building optimized React applications. Experienced in implementing data fetching strategies like server-side rendering and static site generation to enhance application performance and user experience.",
  },
  {
    name: "NodeJS",
    image: image.nodejs,
    progress: 0.555,
    description:
      "Experienced in developing server-side applications and APIs with Node.js for its asynchronous and event-driven architecture, utilizing frameworks like Express.js for routing and middleware management. Proficient in integrating with NoSQL and SQL databases like MongoDB and MySQL for data storage and retrieval.",
  },
  {
    name: "PHP",
    image: image.php,
    progress: 0.65,
    description:
      "Knowledgable in developing server-side scripts and dynamic web applications using PHP for seamless integration with databases. Experienced in implementing PHP extensions like GD for image manipulation and processing. Leveraging frameworks such as Laravel for rapid and robust application development",
  },
  {
    name: "Python",
    image: image.python,
    progress: 0.621,
    description:
      "Skilled in utilizing Python's versatility for web development, and automation tasks, leveraging frameworks like Django for building scalable and maintainable web applications. Experienced in working with libraries like NumPy and pandas for data manipulation and analysis in scientific computing and machine learning projects.",
  },
  {
    name: "MySQL",
    image: image.sql,
    progress: 0.816,
    description:
      "Experienced in designing and managing relational databases with MySQL for efficient data storage and retrieval, optimizing database schema and queries for performance. Proficient in implementing data integrity constraints and transactions to maintain data consistency and reliability.",
  },
  {
    name: "Firebase",
    image: image.firebase,
    progress: 0.413,
    description:
      "Knowledgeable in integrating Firebase services for authentication, data storage, and real-time database management, enabling rapid development and deployment of web and mobile applications. Experienced in utilizing Firestore and Realtime Database for scalable and synchronized data storage, and Firebase Authentication for secure user authentication.",
  },
  {
    name: "C#",
    image: image.cs,
    progress: 0.4,
    description:
      "Has experience  in developing desktop, web, and mobile applications with C#, focusing on performance and scalability. My expertise includes optimizing algorithms and exploring scalable design patterns.",
  },
];

// export const skills = {
//   html: { name: "HTML", image: image.html },
//   css: { name: "CSS", image: image.css },
//   react: { name: "React", image: image.react },
//   java: { name: "Java", image: image.java },
//   javascript: { name: "Javascript", image: image.js },
//   laravel: { name: "Laravel", image: image.laravel },
//   next: { name: "Next", image: image.next },
//   nodejs: { name: "NodeJS", image: image.nodejs },
//   php: { name: "PHP", image: image.php },
//   python: { name: "Python", image: image.python },
//   mysql: { name: "MySQL", image: image.sql },
//   firebase: { name: "Firebase", image: image.firebase },
// };

export const cardImages = [
  {
    url: "../public/download.jpg",
  },
  {
    url: "../public/card1.jpg",
  },
  {
    url: "../public/download.jpg",
  },
  {
    url: "../public/card1.jpg",
  },
  {
    url: "../public/download.jpg",
  },
  {
    url: "../public/card1.jpg",
  },
  {
    url: "../public/download.jpg",
  },
  {
    url: "../public/card1.jpg",
  },
];

const experiences = [
  {
    title: "YouTube Content Creator",
    company_name: "Self Employed",
    date: "2016 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Indie",
    date: "2019 - 2023",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Prime 3",
    date: "2018 - 2019",
    details: [
      "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Computer Science",
    company_name: "ODU",
    date: "2015 - 2018",
    details: [
      "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
      "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
      "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
    ],
  },
];

const portfolio = [
  {
    name: "Open Source Computer Science Repo",
    description:
      "A GitHub repo with over 17,000 stars containing a curated list of free online courses from reputable universities that satisfy undergraduate computer science requirements.",
    // image: oscs,
  },
  {
    name: "Dev Notes",
    description:
      "A newsletter with over 6,000 readers made for software developers to keep up with this rapidly evolving industry, with a sister platform in progress.",
    // image: devnotes,
  },
  {
    name: "Visually Understanding Algorithms",
    description:
      "A showcase of animated algorithms coded using TypeScript, with the video garnering over 400,000 views.",
    // image: algorithms,
  },
];

export { experiences, portfolio };
