import React from "react";
import { useParams } from "react-router-dom";
import StarRating from "../../components/Rating/Rating";
import styles from "./styles.module.css";

interface Restaurant {
  id: number;
  name: string;
  rating: number;
}

const RestaurantDetailPage: React.FC<{ restaurants: Restaurant[] }> = ({
  restaurants,
}) => {
  const { id } = useParams<{ id: string }>();
  const restaurant = restaurants.find((rest) => rest.id === Number(id));

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  return (
    <div className={styles.restaurantDetailPage}>
      <h1>{restaurant.name}</h1>
      <StarRating rating={restaurant.rating} />
    </div>
  );
};

export default RestaurantDetailPage;
