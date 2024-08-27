import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

const AddRestaurantPage: React.FC<{
  onAdd: (restaurant: Restaurant) => void;
}> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRestaurant: Restaurant = {
      id: Date.now(),
      name,
      rating,
    };
    onAdd(newRestaurant);
    navigate("/restaurants");
  };

  return (
    <div className={styles.addRestaurantPage}>
      <div className={styles.leftPhalange}>
        <Logo />
        <LinkPages />
      </div>

      <div className={styles.addNewContainer}>
        <Headline text={"Add a New Restaurant"} />
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Restaurant Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter restaurant name"
            />
          </div>
          <div className={styles.formGroup}>
            <label>Rating:</label>
            <StarRating rating={rating} onRatingChange={handleRatingChange} />
          </div>
          <button type="submit">Add Restaurant</button>
        </form>
      </div>
    </div>
  );
};

export default AddRestaurantPage;
