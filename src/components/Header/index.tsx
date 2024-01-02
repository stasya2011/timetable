import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const HeaderComponent = () => {
  return (
    <div className={styles.nav}>
      <Link to={"/"}>Calendar</Link>
      <Link to={"/diagram"}>Diagram</Link>
    </div>
  );
};

export default HeaderComponent;
