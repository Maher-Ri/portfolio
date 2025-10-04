import classes from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Dlogo from "../../assets/logo-dark.png"
import Llogo from "../../assets/logo-light.png";
import { useState, useEffect } from "react";

const SideNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

      useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 80) setScrolled(true);
        else setScrolled(false);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
  return (
    <>
      <div className={`${classes.navbar} ${scrolled ? classes.sticky : ""}`}>
        <div className={classes.logo}>
          <img src={Llogo} alt="logo" />
        </div>
        <div className={classes.icon}>
          <FontAwesomeIcon
            icon={faBars}
            className="fa-lg"
            onClick={() => {
              setOpen(!open);
            }}
          />
        </div>
      </div>
      <div className={open ? [classes.links,classes.open].join(' ') : [classes.links,classes.close].join(' ')}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#about">skills</a>
        <a href="#about">projects</a>
        <a href="#about">contact</a>
      </div>
    </>
  );
};
export default SideNav;
