import { motion } from "framer-motion";
import classes from "./Roadmap.module.css";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    year: "2015 – 2019",
    title: "Sales Representative",
    company: "ABC Retail",
    desc: "Built strong client relationships and exceeded sales goals through effective communication.",
  },
  {
    year: "2019 – 2023",
    title: "Stock Controller",
    company: "XYZ Logistics",
    desc: "Managed inventory systems and optimized warehouse operations with accurate stock tracking.",
  },
  {
    year: "2023 – Present",
    title: "Frontend Developer",
    company: "Freelance / Personal Projects",
    desc: "Creating responsive, accessible web interfaces using React, TypeScript, and modern tools.",
  },
];

export default function Roadmap() {
  return (
    <section className={classes.roadmap}>
      <h2 className={classes.title}>My Career Roadmap</h2>

      <div className={classes.timeline}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={classes.card}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={classes.icon}>
              <FaBriefcase />
            </div>
            <div className={classes.content}>
              <span className={classes.year}>{exp.year}</span>
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
              <p>{exp.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className={classes.line}></div>
    </section>
  );
}
