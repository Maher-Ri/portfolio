import Container from "../components/UI/Container";
import { FaGithub } from "react-icons/fa";
import classes from "../components/projects/Projects.module.css";
import Hero from "../assets/projects-hero.svg";
import SingleProject from "../components/projects/SingleProject";
import projects from "./../Data/ProjectsData";
const Projects = () => {
  return (
    <Container>
      <div className={classes.head}>
        <div className={classes.content}>
          <h1>Latest Projects</h1>
          <p className={classes.desc}>
            I build responsive, accessible interfaces using modern front-end
            tools.
            <br />
            Below are some of my favorite projects that highlight my approach to
            clean code and effective design.
          </p>
          <span>
            These projects are demos to showcase my skills and do not reflect
            real brands. Each card includes a <FaGithub /> icon linking to the
            code.
          </span>
        </div>
        <div className={classes.image}>
          <img src={Hero} alt="Maher Al Rifai Projects" />
        </div>
      </div>
      <div className="">
        <div className={classes.webProjects}>
          <div className={classes.grid}>
            {projects.map((p) => (
              <SingleProject key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Projects;
