import Headline from "../Headline/Headline";
import styles from "./styles.module.css";
import { IoRestaurantOutline as RestaurantIcon } from "react-icons/io5";

const Logo = () => {
  return (
    <div className={styles.headContainer}>
      <Headline text={"Mappetite"} />
      <div>
        <RestaurantIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default Logo;
