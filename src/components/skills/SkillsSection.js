import React, { useEffect, useRef } from "react";
import Container from "../UI/Container";
import Title from "../UI/Title";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPhp, FaFigma, FaAngular, FaTools,FaCode,FaEnvelope } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiGit, SiVite, SiMailchimp, SiWordpress,SiBootstrap,SiVisualstudiocode  } from "react-icons/si";
import classes from "./Skills.module.css";

const categories = [
  {
    title: "Frontend Development",
    skills: [
{ icon: <FaHtml5 />, name: "HTML5", desc: "Semantic markup", level: "Expert" },
{ icon: <FaCss3Alt />, name: "CSS3", desc: "Responsive & animations", level: "Expert" },
{ icon: <SiJavascript />, name: "JavaScript", desc: "DOM & ES6+", level: "Expert" },
{ icon: <FaReact />, name: "React.js", desc: "Components & hooks", level: "Expert" },
{ icon: <SiTypescript />, name: "TypeScript", desc: "Static typing", level: "Intermediate" },
{ icon: <FaCode />, name: "Redux", desc: "State management", level: "Intermediate" },
{ icon: <SiBootstrap />, name: "Bootstrap", desc: "Responsive components", level: "Intermediate" },
{ icon: <SiBootstrap />, name: "Tailwind CSS", desc: "Utility-first", level: "Intermediate" },
{ icon: <FaCode />, name: "REST APIs", desc: "API integration", level: "Intermediate" },
// { icon: <SiVite />, name: "Vite", desc: "Dev server & bundler", level: "Intermediate" },
    //   { icon: <FaAngular />, name: "Angular", desc: "Basic SPA", level: "Basic" },
    //   { icon: "📡", name: "Axios", desc: "HTTP requests", level: "Intermediate" },
    //   { icon: "🗄️", name: "JSON", desc: "Data format", level: "Expert" },
    //   { icon: "💅", name: "Sass", desc: "SCSS styling", level: "Intermediate" },
    //   { icon: "🎯", name: "jQuery", desc: "DOM manipulation", level: "Basic" },
    ],
  },
  {
    title: "Backend / CMS",
    skills: [
      { icon: <FaNodeJs />, name: "Node.js", desc: "Server setup", level: "Basic" },
      { icon: <FaPhp />, name: "PHP", desc: "Dynamic scripting", level: "Basic" },
      { icon: <SiWordpress />, name: "CMS", desc: "WordPress basics", level: "Intermediate" },
    ],
  },
//   {
//     title: "Design & Email Campaigns",
//     skills: [
//       { icon: <FaFigma />, name: "Figma / PSD", desc: "UI/UX & banners", level: "Intermediate" },
//       { icon: "📧", name: "Email Templates", desc: "Responsive & tested", level: "Intermediate" },
//       { icon: <SiMailchimp />, name: "Mailchimp", desc: "Campaigns & automation", level: "Intermediate" },
//     ],
//   },
  {
    title: "Tools & Workflow",
    skills: [
      { icon: <SiGit />, name: "Git/GitHub", desc: "Version control", level: "Expert" },
      { icon: <FaTools />, name: "Vite/Webpack", desc: "Dev tooling", level: "Intermediate" },
      { icon: <FaCode/>, name: "VS Code", desc: "IDE & productivity", level: "Expert" },
      { icon: <FaEnvelope/>, name: "Email Testing", desc: "Litmus & Mailchimp", level: "Intermediate" },
    ],
  },
];
const SkillsSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll(`.${classes.skillCard}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(classes.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={classes.demo} ref={sectionRef}>
        <Container>
            <Title>Skills & Expertise</Title>
      {categories.map((cat, i) => (
        <div key={i} className={classes.category}>
          <h3 className={classes.catTitle}>{cat.title}</h3>
          <div className={classes.skillGrid}>
            {cat.skills.map((skill, index) => (
              <div key={index} className={`${classes.skillCard} ${classes.hidden}`}>
                <div className={classes.icon}>{skill.icon}</div>
                <h4>{skill.name}</h4>
                <p>{skill.desc}</p>
                <span className={classes.level}>{skill.level}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      </Container>
    </section>
  );
};

export default SkillsSection;
