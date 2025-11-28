import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import logo from "../../assets/Maher-logo.png";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
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

  const ComponentScroll = (id) => {
    navigate("/");
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <nav className={`${classes.navbar} ${scrolled ? classes.sticky : ""}`}>
      <div className={classes.logo}>
        <img src={logo} alt="Maher Al Rifai logo" />
      </div>
      <div className={classes.links}>
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
    </nav>
  );
};
export default Navbar;
