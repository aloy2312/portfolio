import React from "react";
import styles from "../styles/contact.module.css";

// Tool Tip from react strap
import { UncontrolledTooltip } from "reactstrap";

const Contact = () => {
  return (
    <div id="contact" className={styles.container}>
      <div className={styles.contactTitle}>Contact Me</div>
      <div className={styles.contactTexts}>
        <p className={styles.contactMessage}>
          Feel free to reach out to me at any time!
        </p>
        <p className={styles.contactName}>Aloysius Tan</p>
        <a
          id="email"
          className={styles.contactEmail}
          onClick={() =>
            navigator.clipboard.writeText("aloysiustanrs@gmail.com")
          }
        >
          aloysiustanrs@gmail.com
        </a>
        <UncontrolledTooltip delay={0} placement="right" target="email">
          Copy me!
        </UncontrolledTooltip>
      </div>
    </div>
  );
};

export default Contact;
