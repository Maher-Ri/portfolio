import classes from "./Navbar.module.css";
// import Dlogo from "../../assets/logo-dark.png"
import Llogo from "../../assets/logo-light.png";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Llogo} alt="logo" />
      </div>
      <div className={classes.links}>
        <a href="#home">home</a>
        <a href="#about">about</a>
        <a href="#about">services</a>
        <a href="#about">projects</a>
        <a href="#about">contact</a>
      </div>
    </div>
  );
};
export default Navbar;
