import classes from "./Container.module.css";
const Container = (props) => {
  return <div className={classes.container} id={props.id}>{props.children}</div>;
};
export default Container;
