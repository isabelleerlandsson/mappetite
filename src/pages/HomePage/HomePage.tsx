import React from "react";
import styles from "./styles.module.css";
import LinkPages from "../../components/LinkPages/LInkPages";
import Logo from "../../components/Logo/Logo";
// import { IoIosRestaurant as RestaurantIcon } from "react-icons/io";
// import { IoFastFoodOutline as RestaurantIcon } from "react-icons/io5";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <Logo />
      </div>

      <div className={styles.links}>
        <LinkPages />
      </div>
    </div>
  );
};

export default HomePage;
