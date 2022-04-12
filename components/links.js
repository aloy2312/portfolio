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
        <a href="https://www.linkedin.com/in/aloysiustanrs/">
          <button className={styles.contactButton}>
            <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />{" "}
            Linkedin
          </button>
        </a>
        <a href="https://twitter.com/aloysiustanrs">
          <button className={styles.contactButton}>
            <FontAwesomeIcon className={styles.icon} icon={faTwitter} /> Twitter
          </button>
        </a>
        <a href="https://github.com/aloysiustanrs">
          <button className={styles.contactButton}>
            <FontAwesomeIcon className={styles.icon} icon={faGithub} /> Github
          </button>
        </a>
        {/* <a href="">
          <button className={styles.contactButton}>
            <FontAwesomeIcon className={styles.icon} icon={faMedium} /> Medium
          </button>
        </a>
        <a href="mailto:aloysiustanrs@gmail.com">
          <button className={styles.contactButton}>
            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} /> Mail
          </button>
        </a> */}
      </div>
    </div>
  );
};

export default Links;
