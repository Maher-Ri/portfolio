import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <a
      href={props.link}
      download={props.download}
      aria-label={props.children ? props.children : "Button"}
      rel={props.download ? undefined : "noopener noreferrer"}
      className={classes.button}
    >
      <span>{props.children}</span>
    </a>
  );
};
export default Button;
