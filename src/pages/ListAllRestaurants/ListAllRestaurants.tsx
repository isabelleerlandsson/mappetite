import React from "react";
import { Link } from "react-router-dom";
import Headline from "../../components/Headline/Headline";
import LinkPages from "../../components/LinkPages/LInkPages";
import Logo from "../../components/Logo/Logo";
import StarRating from "../../components/Rating/Rating";
import styles from "./styles.module.css";

interface Restaurant {
  id: number;
  name: string;
  rating: number;
}

const RestaurantListPage: React.FC<{ restaurants: Restaurant[] }> = ({
  restaurants,
}) => {
  return (
    <div className={styles.restaurantListPage}>
      <div className={styles.leftPhalange}>
        <Logo />
        <LinkPages />
      </div>

      <div className={styles.listAllContainer}>
        <Headline text={"Restaurant List"} />
        <div className={styles.restaurantList}>
          {restaurants.map((restaurant) => (
            <>
              <div className={styles.restaurant}>
                <Link
                  to={`/restaurants/${restaurant.id}`}
                  key={restaurant.id}
                  className={styles.restaurantItem}
                >
                  <p>{restaurant.name}</p>
                </Link>
                <StarRating rating={restaurant.rating} />
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantListPage;
