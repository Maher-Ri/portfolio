import classes from "./About.module.css";
import profile from "../../assets/profile.png";
import Container from "../UI/Container";
// import wave from "../../assets/wave.png"
const AboutMe = () => {
  return (
    <articale className={classes.aboutMe}>
      <div className={classes.text}>
        <h1>About Me</h1>
        <h2>Hi, I'm Maher</h2>
        <p>
          I'm a passionate Front-End Developer with 2 years of experience in
          building dynamic and user-friendly web applications. I love solving
          problems with clean and efficient code.
        </p>
        <button type="button">Download CV</button>
      </div>
      <div className={classes.profile}>
        <img src={profile} alt="f" />
      </div>
    </articale>
  );
};
export default AboutMe;
