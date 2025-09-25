import classes from "./Cover.module.css";
const Arrows = () => {
  const items = new Array(100).fill(null);
  return (
    <ul >
      {items.map((item, index) => {
        let x = Math.floor(Math.random() * window.innerWidth);
        let y = Math.floor(Math.random() * 100);
        let duration = Math.random() * 100;
        let size = Math.random() * 2;
        let styles = {
          left: `${x}px`,
          top: `${y}%`,
          fontSize: `calc(${size}rem + 1rem)`,
          animationDuration: `${duration}s`,
        };
        return (
          <li
            key={index}
            className={index % 2 === 0 ? classes.toRight : classes.toLeft}
            style={styles}
          >
            {index % 2 === 0 ? ">" : "<"}
          </li>
        );
      })}
    </ul>
  );
};
export default Arrows;