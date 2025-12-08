import React from "react";
import { motion } from "framer-motion";
import classes from "./OtherWorks.module.css";
import Button from "../UI/Button";
import litmus from "../../assets/litmus-logo.png";
import gwd from "../../assets/gwd-logo.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const OtherWork = () => {
  return (
    <section className={classes.otherWork}>
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        Other Creative Work
      </motion.h2>
      <div className={classes.grid}>
        <motion.div
          className={classes.box}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.4}
        >
          <div className={classes.wrapper}>
            <h3>Email Templates</h3>
            <p>
              I design responsive HTML email templates that render flawlessly
              across major clients. Each template adapts to mobile, supports
              light and dark modes, and is fully tested on Litmus and Mailchimp
              for consistent delivery and design accuracy.
            </p>
            <div className={classes.tech}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
                alt="HTML5 Logo"
                title="HTML5"
              />
              <img src={litmus} alt="Litmus Logo" title="Litmus" />
              <img
                src="https://images.icon-icons.com/2407/PNG/512/mailchimp_icon_146054.png"
                alt="Mailchimp Logo"
                title="Mailchimp"
              /></div>
              <Button link={"https://maher-ri.github.io/Email-templates/"}>
                View Gallery
              </Button>
            
          </div>
        </motion.div>

        <motion.div
          className={classes.box}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0.6}
        >
          <div className={classes.wrapper}>
            <h3>Animated Banners</h3>
            <p>
              I create lightweight, responsive HTML5 banners using Google Web
              Designer. Each banner features smooth animations, clear calls to
              action, and is optimized for fast loading and compatibility with
              major ad networks.
            </p>
            <div className={classes.tech}>
              <img
                src={gwd}
                alt="Google Web Designer Logo"
                title="Google Web Designer"
              /></div>
              <Button link={""}>View Gallery</Button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OtherWork;
