import React, { useState, useRef } from "react";

import styles from "../styles/skills.module.css";

const Skills = () => {
  const [visible, setVisible] = useState(3);

  const showMoreButton = useRef(null);

  const badgeItems = [
    "Python",
    "Java",
    "JavaScript",
    "HTML",
    "CSS",
    "Bootstrap",
    "React",
    "NextJS",
    "Android App Dev",
  ];

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + (badgeItems.length - 3));
    showMoreButton.current.style.display = "none";
  };

  return (
    <div className={styles.container}>
      <div className={styles.skillsTitle}>Skills</div>
      <div className={styles.badgeList}>
        {badgeItems.slice(0, visible).map((item) => (
          <div key={item.toString} className={styles.badge}>
            {item}
          </div>
        ))}
        <button
          ref={showMoreButton}
          onClick={showMoreItems}
          className={styles.showMoreButton}
        >
          + Load more
        </button>
      </div>
    </div>
  );
};

export default Skills;
