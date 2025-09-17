import Container from "../UI/Container";
import classes from "./Projects.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SingleProject from "./SingleProject";
import ProjectsData from "../../Data/ProjectsData";
import Title from "../UI/Title";
const Projects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <Container>
      <Title>Recent Projects</Title>
        {ProjectsData && 
        <Carousel responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        infinite={true}
        >
        {ProjectsData.map((project, index) => (
          <SingleProject project={project} key={index}/>
        ))}
        </Carousel>}
    </Container>
  );
};
export default Projects;
