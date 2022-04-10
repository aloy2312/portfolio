import React from "react";
import styles from "../styles/skills.module.css";

const skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.badgeList}>
        <div className={styles.badge}>Python</div>
        <div className={styles.badge}>Java</div>
        <div className={styles.badge}>JavaScript</div>
        <div className={styles.badge}>HTML</div>
        <div className={styles.badge}>CSS</div>
        <div className={styles.badge}>Bootstrap</div>
        <div className={styles.badge}>React</div>
        <div className={styles.badge}>NextJS</div>
        <div className={styles.badge}>Android App Dev</div>
      </div>
    </div>
  );
};

export default skills;
