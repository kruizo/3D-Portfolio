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
    name: "Find AI",
    tags: ["Web Development", "Systems"],

    description: "Search for over 300+ AI's online.",
    url: "https://github.com/kruizo/find.ai",
    image: [project.findai_home1, project.findai_home2, project.findai_content],
    // text: ["react", "vite", "tailwind", "javascript", "shadcn"],
    text: [image.tailwind, image.react, image.js, image.nodejs],
  },
  {
    name: "Artify",
    tags: ["Andriod", "Systems"],
    description: "A andriod art shop gallery made with flutter.",
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
    name: "MovieNext",
    tags: ["Web Development", "Designs"],
    description: "A movie rating platform with NextJS and IMDB API",
    url: "https://github.com/kruizo/MovieNext",
    image: [project.next_home, project.next_home2],
    text: [
      image.tailwind,
      image.typescript,
      image.next,
      image.js,
      image.nodejs,
    ],
  },
  {
    name: "Adelfor Station",
    tags: ["Web Development", "Systems"],
    description:
      "A sales and record tracking system for a water refilling station.",
    url: "https://github.com/kruizo/adelforstation",
    image: [
      project.adelfor_1,
      project.adelfor_2,
      project.adelfor_3,
      project.adelfor_4,
      project.adelfor_5,
      project.adelfor_6,
    ],
    text: [image.php, image.laravel, image.xampp, image.sql],
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
