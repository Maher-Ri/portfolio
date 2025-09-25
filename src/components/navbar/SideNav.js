import classes from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Dlogo from "../../assets/logo-dark.png"
import Llogo from "../../assets/logo-light.png";
import { useState } from "react";

const SideNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={classes.navbar}>
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
        <a href="#about">services</a>
        <a href="#about">projects</a>
        <a href="#about">contact</a>
      </div>
    </>
  );
};
export default SideNav;
