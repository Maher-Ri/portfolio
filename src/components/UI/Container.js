import classes from "./Container.module.css";
const Container = (porps) => {
  return <div className={classes.container}>{porps.children}</div>;
};
export default Container;
