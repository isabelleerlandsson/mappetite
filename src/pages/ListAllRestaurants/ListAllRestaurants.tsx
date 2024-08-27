import React from "react";
import { Link } from "react-router-dom";
import LinkPages from "../../components/LinkPages/LInkPages";
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
      <h1>Restaurants List</h1>
      <LinkPages />
      <div className={styles.restaurantList}>
        {restaurants.map((restaurant) => (
          <>
            <Link
              to={`/restaurants/${restaurant.id}`}
              key={restaurant.id}
              className={styles.restaurantItem}
            >
              <h2>{restaurant.name}</h2>
            </Link>
            <StarRating rating={restaurant.rating} />
          </>
        ))}
      </div>
    </div>
  );
};

export default RestaurantListPage;
