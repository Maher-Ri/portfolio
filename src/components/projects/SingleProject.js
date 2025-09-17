import classes from "./Projects.module.css";
const SingleProject = (props) => {
  return (
    <div className={classes.projectBox}>
      <div className={classes.details}>
        <div className={classes.image}>
        <img src={props.project.image} alt={props.project.name} />
        </div>
        <h2>{props.project.name}</h2>
        <p>{props.project.description}</p>
      </div>
      <a href={props.project.link}>View Project</a>
    </div>
  );
};
export default SingleProject;
