import React from "react";
import styles from "./styles.module.css";
import { IoIosStar as Star } from "react-icons/io";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange }) => {
  const handleRatingClick = (value: number) => {
    if (onRatingChange) {
      onRatingChange(value);
    }
  };

  return (
    <div className={styles.stars}>
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${styles.star} ${rating >= star ? styles.filled : ""}`}
          onClick={() => handleRatingClick(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
