import mpcImage from "../assets/projects/MPC.png";
import bookImage from "../assets/projects/book.png";
import shopImage from "../assets/projects/shop.png";
import quarterImage from "../assets/projects/quarter.png";
// import jawadImage from "../assets/projects/jawad.png";

// const ProjectsData = [
//   {
//     name: "Masdar Parts Company",
//     image: mpcImage,
//     description: "A responsive and visually appealing website for a car parts company, built using HTML, CSS, and JavaScript. The site features a modern design with intuitive navigation, showcasing a wide range of automotive parts.",
//     link: "https://example.com/portfolio",
//   },
//   {
//     name: "Book Store",
//     image: bookImage,
//     description: "This project is a website for an online bookstore, developed using HTML, CSS, and JavaScript. It features a user-friendly interface to browse and search for books, view details, and add items to the cart, with a responsive design for a seamless experience on all devices.",
//     link: "https://example.com/store",
//   },
//   {
//     name: "Shop.co",
//     image: shopImage,
//     description: "This project is an e-commerce clothing store built with React JS, featuring a dynamic, responsive design. It uses React's component-based architecture and Hooks for efficient UI rendering and state management, ensuring an optimal shopping experience across devices.",
//     link: "https://example.com/blog",
//   },
//   {
//     name: "The Quarter",
//     image: quarterImage,
//     description: "This project is a responsive e-commerce platform built with React.js, featuring React Hooks for state management, styled-components for modular styling, and React Router for smooth navigation. It offers home appliances, electronics, and sports equipment.",
//     link: "https://example.com/store",
//   },
//   {
//     name: "Jawad and Majed",
//     image: jawadImage,
//     description: "This project is a website for a vegetable export and import company, built using HTML, CSS, and JavaScript. It allows users to explore various vegetable products and learn about the company's services with an interactive, responsive design.",
//     link: "https://example.com/store",
//   },
// ];

// export default ProjectsData;
const projects = [
  {
    id: 1,
    title: "Portfolio Landing",
    image: mpcImage,
    desc: "Responsive portfolio landing page with animated hero and accessible navigation.",
    tech: ["React", "TypeScript", "CSS"],
    impact: "Improved LCP by 30% using optimized images & lazy loading.",
    github: "https://github.com/username/portfolio-landing",
    demo: "https://username.github.io/portfolio-landing"
  },
  {
    id: 2,
    title: "Task Manager App",
     image: bookImage,
    desc: "CRUD task manager with offline support and local storage synchronization.",
    tech: ["React", "Vite", "IndexedDB"],
    impact: "Reduced API calls by 40% using local-first sync strategy.",
    github: "https://github.com/username/task-manager",
    demo: "https://username.github.io/task-manager"
  },
  {
    id: 3,
    title: "E-commerce UI",
    image: shopImage,
    desc: "Product grid with filter, sort, and accessible keyboard navigation.",
    tech: ["React", "Tailwind", "Framer Motion"],
    impact: "Improved conversion-ready layout and reduced bundle by 18%.",
    github: "https://github.com/username/ecommerce-ui",
    demo: "https://username.github.io/ecommerce-ui"
  },
  {
    id: 4,
    title: "Charts Dashboard",
    image: quarterImage,
    desc: "Admin dashboard with interactive charts and responsive tables.",
    tech: ["React", "Recharts", "SWR"],
    impact: "Faster dashboard load time by streaming critical data.",
    github: "https://github.com/username/charts-dashboard",
    demo: "https://username.github.io/charts-dashboard"
  }
];

export default projects;
