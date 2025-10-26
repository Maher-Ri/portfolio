import classes from "./About.module.css";
import AboutMe from "./AboutMe";
const About = () => {
  return (
    <section className={classes.about} id="about">
      <AboutMe />
    </section>
  );
};

export default About;
