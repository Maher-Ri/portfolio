import Arrows from "./Arrows";
import classes from "./Cover.module.css";
import myImage from "../../assets/my-Image.jpg";
import Button from "../UI/Button";

const Cover = () => {
  function handleImageMouseOver() {
    window.getSelection().removeAllRanges();
  }
  return (
    <div className={classes.cover} id="cover" onMouseOver={handleImageMouseOver}>
      <Arrows />
      <div className={classes.profile}>
        <div className={classes.image}>
          <img 
          src={myImage}
            alt="Maher Al Rifai"
          />
        </div>
      </div>
      <div className={classes.intro}>
        <div className={classes.content}>
          <h1>Maher Al Rifai</h1>
          <p>Front-end web developer, designer and overall good human. I enjoy working with people who care on projects that make me think.</p>
        <Button to="/projects">view my projects</Button>
        </div>
        </div>
    </div>
  );
};
export default Cover;
