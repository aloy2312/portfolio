import React from "react";
import styles from "../styles/links.module.css";

//Font Awesome Icons for brands
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Links = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactButtons}>
        <button className={styles.contactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} /> Linkedin
        </button>
        <button className={styles.contactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} /> Twitter
        </button>
        <button className={styles.contactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faGithub} /> Github
        </button>
        {/* <button className={styles.contactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faMedium} /> Medium
        </button> */}
        <button className={styles.contactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} /> Mail
        </button>
      </div>
    </div>
  );
};

export default Links;
