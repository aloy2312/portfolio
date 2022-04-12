import React, { useState, useRef } from "react";

// Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/skills.module.css";
import { faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons";

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
      <FontAwesomeIcon className={styles.icon} icon={faPython} />
      Python
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={1 * 200}
      className={styles.badge}
      key="java"
    >
      <FontAwesomeIcon className={styles.icon} icon={faJava} />
      Java
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={2 * 200}
      className={styles.badge}
      key="js"
    >
      <FontAwesomeIcon className={styles.icon} icon={faJava} />
      JavaScript
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={1 * 200}
      className={styles.badge}
      key="html"
    >
      <FontAwesomeIcon className={styles.icon} icon={faPython} />
      HTML
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={2 * 200}
      className={styles.badge}
      key="css"
    >
      <FontAwesomeIcon className={styles.icon} icon={faPython} />
      CSS
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={3 * 200}
      className={styles.badge}
      key="bootstrap"
    >
      <FontAwesomeIcon className={styles.icon} icon={faPython} />
      Bootstrap
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={4 * 200}
      className={styles.badge}
      key="react"
    >
      <FontAwesomeIcon className={styles.icon} icon={faPython} />
      React
    </div>,
    <div
      data-aos="flip-down"
      data-aos-duration="200"
      data-aos-delay={5 * 200}
      className={styles.badge}
      key="android"
    >
      <FontAwesomeIcon className={styles.icon} icon={faPython} />
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
