import classes from "./About.module.css";
import profile from "../../assets/profile.png";
import Container from "../UI/Container"
const AboutMe = () => {
  return (
    <Container>
    <articale className={classes.aboutMe}>
      <div className={classes.text}>
        <h1>Who am I?</h1>
        <h2>Hi, I'm Maher</h2>
        <p>
          I'm a passionate Front-End Developer with 2 years of experience in
          building dynamic and user-friendly web applications. I love solving
          problems with clean and efficient code.
        </p>
        <div className={classes.skills}>
          <img
            loading="lazy"
            src="https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png"
            alt="JS"
            width={50}
          />
          <img
            loading="lazy"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt="React JS"
            width={40}
          />
          <img
            loading="lazy"
            src="https://images.icon-icons.com/2415/PNG/512/typescript_original_logo_icon_146317.png"
            alt="TypeScript"
            width={40}
          />
          <img
            loading="lazy"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            alt="Tailwind css"
            width={50}
          />
        </div>

        <button type="button">Download my CV</button>
      </div>
      <div className={classes.profile}>
        <img src={profile} alt="f" />
      </div>
    </articale>
    </Container>
  );
};
export default AboutMe;
