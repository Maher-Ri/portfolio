// 
// Button.jsx
import React from "react";
import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const Button = ({ to, link, download, children }) => {
  // For internal navigation (React Router)
  if (to) {
    return (
      <Link to={to} className={classes.button}>
        <span>{children}</span>
      </Link>
    );
  }

  // For external / download links
  return (
    <a
      href={link}
      download={download}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noopener noreferrer"}
      className={classes.button}
    >
      <span>{children}</span>
    </a>
  );
};

export default Button;
// import classes from "./Button.module.css";
// const Button = (props) => {
//   return (
//     <a
//       href={props.link}
//       download={props.download}
//       aria-label={props.children ? props.children : "Button"}
//       rel={props.download ? undefined : "noopener noreferrer"}
//       className={classes.button}
//     >
//       <span>{props.children}</span>
//     </a>
//   );
// };
// export default Button;