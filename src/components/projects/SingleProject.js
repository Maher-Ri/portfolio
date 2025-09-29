import classes from "./SingleProject.module.css";
import github from "../../assets/github.png"
const SingleProject = (props) => {
  return (
    <article className={classes.card}>
      <div className={classes.imageWrapper}>
        <img
          src={props.project.image}
          alt={props.project.name}
          loading="lazy"
        />
      </div>

      <div className={classes.cardBody}>
        <h3 className={classes.cardTitle}>{props.project.title}</h3>
        <p className={classes.cardDesc}>{props.project.desc}</p>
        <div className={classes.techRow}>
          {props.project.tech.map((t) => (
            <span key={t} className={classes.techBadge}>
              {t}
            </span>
          ))}
        </div>

        <p className={classes.impact}>
          <strong>Impact:</strong> {props.project.impact}
        </p>

        <div className={classes.links}>
          
          <a
            href={props.project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkButton}
          >
            Live Demo 
            <img src="https://cdn-icons-png.flaticon.com/512/0/375.png" alt="" width={17} />
          </a>
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.gitButton}
          >
            <img src={github} alt="github" width={36}/>
          </a>
        </div>
      </div>
    </article>
  );
};
export default SingleProject;
