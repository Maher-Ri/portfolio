import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import Llogo from "../../assets/logo-light.png";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${classes.navbar} ${scrolled ? classes.sticky : ""}`}>
      <div className={classes.logo}>
        <img src={Llogo} alt="logo" />
      </div>
      <div className={classes.links}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#about">skills</a>
        <a href="#about">projects</a>
        <a href="#about">contact</a>
      </div>
    </div>
  );
};
export default Navbar;
