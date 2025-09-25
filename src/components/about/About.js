import classes from "./About.module.css";
import AboutMe from "./AboutMe";
// import Container from "../UI/Container";
// import Skills from "./Skills";
const About = () => {
  return (
    <section className={classes.about}>
      <AboutMe />
      {/* <Container>
        <Skills/>
        </Container> */}
    </section>
  );
};

export default About;
