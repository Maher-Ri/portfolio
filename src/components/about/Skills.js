import classes from "./Skills.module.css";
import Container from "../UI/Container";
import SkillsBox from "../UI/SkillsBox";
const Skills = () => {
  return (
    <section className={classes.skills}>
      <h2>Skills & Technologies</h2>
      <articale className={classes.gridContainer}>
        <SkillsBox
          title={"Front-End Development"}
          skills={"React.js - JavaScript (ES6+) - HTML5 & CSS3 - Wordpress - Animated banners - Emails Templates"}
        />
        <SkillsBox
          title={"UI/UX & Design"}
          skills={
            "Figma & Adobe PS – UI/UX design - Responsive Design – Mobile-first approach, cross-browser compatibility - Styled Components - CSS Animations & Transitions – Enhancing user experience"
          }
        />
        <SkillsBox
          title={"Tools & Version Control"}
          skills={
            "Git & GitHub – Version control - VS Code – Code editing with extensions & debugging - npm - mailchimp - litmus"
          }
        />
        <SkillsBox
          title={"API & Backend Integration"}
          skills={
            "RESTful APIs – Fetching & managing data from external sources - Axios & Fetch API – Handling HTTP requests in React - Firebase – Authentication - hosting for small projects"
          }
        />
      </articale>
    </section>
  );
};

export default Skills;
