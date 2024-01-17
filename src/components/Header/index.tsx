import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const HeaderComponent = () => {
  return (
    <div className={styles.nav}>
      <NavLink
        to={"/"}
        className={(link) =>
          link.isActive ? styles.activeLink : styles.defaultLink
        }
      >
        Calendar
      </NavLink>
      <NavLink
        to={"/diagram"}
        className={(link) =>
          link.isActive ? styles.activeLink : styles.defaultLink
        }
      >
        Task's Chart
      </NavLink>
    </div>
  );
};

export default HeaderComponent;
