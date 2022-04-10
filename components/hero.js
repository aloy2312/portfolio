import React from "react";
import styles from "../styles/hero.module.css";
const hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textbox}>
        <div className={styles.text1}>Hi , my name is Aloysius Tan</div>
        <hr className={styles.horizontal}></hr>
        <div className={styles.text2}>I'm a Software Engineer</div>
      </div>
    </div>
  );
};

export default hero;