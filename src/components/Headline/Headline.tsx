import React from "react";
import styles from "./styles.module.css";

interface HeadlineProps {
  text: string;
}

const Headline: React.FC<HeadlineProps> = ({ text }) => {
  return <h1 className={styles.headline}>{text}</h1>;
};

export default Headline;
