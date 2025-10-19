import classes from "./SideNav.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import Llogo from "../../assets/logo-light.png";
import { useState, useEffect } from "react";

const SideNav = () => {
  const navigate = useNavigate();
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

  const ComponentScroll = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -80;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 300);
    setOpen(false);
  };
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
      <div
        className={
          open
            ? [classes.links, classes.open].join(" ")
            : [classes.links, classes.close].join(" ")
        }
      >
        <NavLink to="/" onClick={() => ComponentScroll("cover")}>
          home
        </NavLink>
        <NavLink to="/" onClick={() => ComponentScroll("about")}>
          about
        </NavLink>
        <NavLink to="/" onClick={() => ComponentScroll("skills")}>
          skills
        </NavLink>
        <NavLink to="/" onClick={() => ComponentScroll("projects")}>
          projects
        </NavLink>
        <NavLink to="/" onClick={() => ComponentScroll("contact")}>
          Contact
        </NavLink>
      </div>
    </>
  );
};
export default SideNav;
