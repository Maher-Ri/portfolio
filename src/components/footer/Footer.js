import React from "react";
import classes from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import Container from "../UI/Container";

const Footer = () => {
  return (
    <Container>
    <footer className={classes.footer}>
      <div className={classes.social}>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
          <FaGithub size={26}/>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <FaLinkedin size={26}/>
        </a>
        <a href="tel:+96176511394" target="_blank" rel="noopener noreferrer" aria-label="Call Maher Al Rifai">
          <FaPhone size={26}/>
        </a>
        <a href="mailto:your.email@example.com" aria-label="Email Maher Al Rifai">
          <FaEnvelope size={26}/>
        </a>
      </div>
      <div className={classes.copy}>
        © {new Date().getFullYear()} Maher Al Rifai. Designed & coded by me.
      </div>
    </footer>
    </Container>
  );
};

export default Footer;
