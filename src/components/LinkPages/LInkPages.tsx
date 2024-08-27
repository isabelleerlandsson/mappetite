import React from "react";
import { Link, useLocation } from "react-router-dom";
import BackArrow from "../BackArrow/BackArrow"; // Se till att importera BackArrow-komponenten
import styles from "./styles.module.css";

const LinkPages: React.FC = () => {
  const location = useLocation();
  const showBackArrow =
    location.pathname === "/add-restaurant" ||
    location.pathname === "/restaurants";

  return (
    <nav className={styles.pages}>
      {showBackArrow && <BackArrow />}
      <Link className={styles.linkStyle} to="/add-restaurant">
        Add a New Restaurant
      </Link>
      <Link className={styles.linkStyle} to="/restaurants">
        View All Restaurants
      </Link>
      <Link className={styles.linkStyle} to="">
        Explore
      </Link>
    </nav>
  );
};

export default LinkPages;
