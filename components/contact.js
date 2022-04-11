import React from "react";
import styles from "../styles/contact.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import {
  faGithub,
  faLinkedin,
  faMedium,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"; // import the icons you need
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contactTitle}>Contact Me</div>
      <div className={styles.contactTexts}>
        <p className={styles.contactMessage}>
          Feel free to reach out to me at any time!
        </p>
        <p className={styles.contactName}>Aloysius Tan</p>
        <a className={styles.contactEmail}>aloysiustanrs@gmail.com</a>
      </div>
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
        <button className={styles.contactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faMedium} /> Medium
        </button>
        <button className={styles.contactButton}>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} /> Mail
        </button>
      </div>
    </div>
  );
};

export default contact;
