import React from "react";
import classes from "./ContactSection.module.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import Container from "../UI/Container";
import Title from "../UI/Title"

const ContactSection = () => {
  return (
    <Container id="contact">
      <section className={classes.contactSection} >
        <Title>Get in Touch</Title>
        <div className={classes.container}>
          <form className={classes.form}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className={classes.info}>
                    <p className={classes.subtitle}>
          I’m open to freelance or full-time opportunities. Let’s create
          something great together!
        </p>
            <a href="mailto:your.email@example.com">
              <FaEnvelope /> your.email@example.com
            </a>
            <a href="tel:+96176511394">
              <FaPhone /> +961 76 511 394
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ContactSection;
