import React from "react";
import classes from "./EmailersTab.module.css"

const EmailersTab = () => {
  const emails = [
    { id: 1, title: "Newsletter Campaign", img: "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/Light-Playful-Email-Newsletter-Template.png", url: "#" },
    { id: 2, title: "Product Launch", img: "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/Light-Playful-Email-Newsletter-Template.png", url: "#" },
    { id: 3, title: "Promotional Offer", img: "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/Light-Playful-Email-Newsletter-Template.png", url: "#" },
    { id: 4, title: "Event Invitation", img: "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/Light-Playful-Email-Newsletter-Template.png", url: "#" },
    // { id: 5, title: "Seasonal Sale", img: "https://venngage-wordpress.s3.amazonaws.com/uploads/2022/09/Light-Playful-Email-Newsletter-Template.png", url: "#" },
  ];

  return (
    <div className={classes.emailsContainer}>
      {/* Shared Intro */}
      <h2 className={classes.emailsTitle}>Email Templates</h2>
      <p className={classes.emailsIntro}>
        I create responsive HTML email templates optimized for a maximum width of 640px, ensuring they render seamlessly across the majority of email clients. Each design is mobile-friendly, with adaptive layouts that support both light and dark modes for enhanced accessibility.
        <br/><br/>
        To guarantee reliability, all templates are tested on Litmus and Mailchimp for cross-client consistency. I leverage nested tables to handle intricate layouts while maintaining full compatibility. These templates combine pixel-perfect design with functional code, making them ready for real campaign use.
      </p>

      {/* Emails Grid */}
      <div className={classes.emailsGrid}>
        {emails.map((email) => (
          <div key={email.id} className={classes.emailCard}>
            <div className={classes.emailImageWrapper}>
              <img src={email.img} alt={email.title} className={classes.emailImg} />
            </div>
            <h3 className={classes.emailTitle}>{email.title}</h3>
            <div className={classes.emailLink}>
            <a href={email.url} target="_blank" rel="noreferrer" >
              View Full Template →
            </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailersTab;
