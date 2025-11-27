import Arrows from "./Arrows";
import classes from "./Cover.module.css";
// import myImage from "../../assets/my-Image.jpg";
import profile from "../../assets/profile.png";
import Button from "../UI/Button";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
const Cover = () => {
  function handleImageMouseOver() {
    window.getSelection().removeAllRanges();
  }
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Front-End Developer",
        "React.js Enthusiast",
        "UI/UX Builder",
        "Passionate about Clean Code",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    };

    typed.current = new Typed(el.current, options);

    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div
      className={classes.cover}
      id="cover"
      onMouseOver={handleImageMouseOver}
    >
      <Arrows />

        <div className={classes.image}>
          <img src={profile} alt="Maher Al Rifai" />
        </div>

      <div className={classes.intro}>
        <div className={classes.content}>
          <h1>Maher Al Rifai</h1>
          <span className={classes.typed} ref={el}></span>
          <p>
            Front-end web developer, designer and overall good human. I enjoy
            working with people who care on projects that make me think.
          </p>
          <Button to="/projects">view my projects</Button>
        </div>
      </div>
    </div>
  );
};
export default Cover;
