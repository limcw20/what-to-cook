import React from "react";
import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/main"
            >
              Main
            </NavLink>
          </li>
          {/* "Link to" just navigate to link */}
          {/* "NavLink to" returns something on the navbar*/}
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/savedlist"
            >
              List
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
