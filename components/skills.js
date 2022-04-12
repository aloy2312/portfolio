import React, { useState, useRef } from "react";

import Python from "../public/icons/python.svg";
import Java from "../public/icons/java.svg";
import Javascript from "../public/icons/javascript.svg";
import HTML from "../public/icons/html.svg";
import CSS from "../public/icons/css3.svg";
import Bootstrap from "../public/icons/bootstrap.svg";
import ReactIcon from "../public/icons/react.svg";
import Android from "../public/icons/android.svg";

import styles from "../styles/skills.module.css";

const Skills = () => {
  const [visible, setVisible] = useState(3);
  const showMoreButton = useRef(null);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + (badgeItems.length - 3));
    showMoreButton.current.style.display = "none";
  };

  const badgeItems = [
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={0 * 200}
      className={styles.badge}
      key="python"
    >
      <Python className={styles.svg} />
      Python
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={1 * 200}
      className={styles.badge}
      key="java"
    >
      <Java className={styles.svg} />
      Java
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={2 * 200}
      className={styles.badge}
      key="js"
    >
      <Javascript className={styles.svg} />
      JavaScript
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={1 * 200}
      className={styles.badge}
      key="html"
    >
      <HTML className={styles.svg} />
      HTML
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={2 * 200}
      className={styles.badge}
      key="css"
    >
      <CSS className={styles.svg} />
      CSS
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={3 * 200}
      className={styles.badge}
      key="bootstrap"
    >
      <Bootstrap className={styles.svg} />
      Bootstrap
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={4 * 200}
      className={styles.badge}
      key="react"
    >
      <ReactIcon className={styles.svg} />
      React
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={5 * 200}
      className={styles.badge}
      key="android"
    >
      <Android className={styles.svg} />
      App Dev
    </div>,
  ];

  return (
    <div className={styles.container}>
      <div
        data-aos="fade-up"
        data-aos-duration="300"
        className={styles.skillsTitle}
      >
        Skills
      </div>
      <div className={styles.badgeList}>
        {badgeItems.slice(0, visible).map((item) => item)}
        <button
          ref={showMoreButton}
          data-aos="flip-down"
          data-aos-duration="200"
          data-aos-delay={200 * visible}
          onClick={showMoreItems}
          className={styles.badge}
        >
          + Load more
        </button>
      </div>
    </div>
  );
};

export default Skills;
