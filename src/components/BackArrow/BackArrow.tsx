import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const BackArrow: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.backArrow} onClick={() => navigate(-1)}>
      ←
    </div>
  );
};

export default BackArrow;
