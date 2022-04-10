import React from "react";
import styles from "../styles/projects.module.css";

const projects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.projectsTitle}>Projects</div>
      <div className="projectGroup">
        <div className="projectText"></div>
        <div className="projectImage"></div>
      </div>
    </div>
  );
};

export default projects;
