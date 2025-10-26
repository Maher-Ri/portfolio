import classes from "./SingleProject.module.css";
import { FaGithub } from "react-icons/fa";
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
          <strong>Quality:</strong> {props.project.quality}
        </p>

        <div className={classes.links}>
          <a
            href={props.project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.linkButton}
          >
            <span>Live Demo &#9658;</span>
          </a>
          <a
            href={props.project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project code on GitHub"
            className={classes.gitButton}
          >
            <FaGithub size={36} />
          </a>
        </div>
      </div>
    </article>
  );
};
export default SingleProject;
