import React from "react";
import styles from "./styles.module.css";

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
        <span
          key={star}
          className={`${styles.star} ${rating >= star ? styles.filled : ""}`}
          onClick={() => handleRatingClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
