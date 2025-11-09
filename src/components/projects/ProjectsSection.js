import Title from "../UI/Title";
import SingleProject from "./SingleProject";
import projects from "../../Data/ProjectsData";
import classes from "./ProjectsSection.module.css";
import Container from "../UI/Container";
import OtherWork from "./OtherWorks";
import Button from "../UI/Button";
const ProjectsTabs = () => {
  return (
    <section className={classes.projects} id="projects">
      <Container>
        <Title>Selected Projects</Title>
        <div className={classes.webProjects}>
          <div className={classes.grid}>
            {projects.slice(0, 4).map((p) => (
              <SingleProject key={p.id} project={p} />
            ))}
          </div>
          <Button to="/projects">View All Projects</Button>
        </div>
        <OtherWork />
      </Container>
    </section>
  );
};

export default ProjectsTabs;
