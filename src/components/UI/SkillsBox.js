import classes from "./SkillsBox.module.css";
const SkillsBox = (props) => {
  return (
    <articale className={classes.skills}>
        <h4>{props.title}</h4>
      <div className={classes.content}>
     {props.skills}
      </div>
    </articale>
  );
};

export default SkillsBox;
