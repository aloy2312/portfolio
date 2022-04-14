import React, { useState } from "react";
import styles from "../styles/nav2.module.css";

const Nav2 = () => {
  const [toggle, toggleNav] = useState(false);

  const [clickable, setClickable] = useState(true);

  return (
    <>
      <nav className={styles.navBar}>
        <h1>CSS Tricks</h1>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <a target="#" href="https://www.instagram.com/igor_dumencic/">
              About
            </a>
          </li>
          <li className={styles.navListItem}>
            <a target="#" href="https://www.behance.net/igordumencic">
              Skills
            </a>
          </li>
          <li className={styles.navListItem}>
            <a target="#" href="https://github.com/Igor178">
              Projects
            </a>
          </li>
          <li className={styles.navListItem}>
            <a target="#" href="https://github.com/Igor178">
              Contact
            </a>
          </li>
        </ul>
        <button
          className={styles.navToggler}
          canclick={clickable}
          onClick={() => {
            toggleNav(!toggle),
              setClickable(!clickable),
              setTimeout(() => {
                setClickable(clickable);
              }, 700);
          }}
        >
          <span className={styles.navTogglerSpan} open={toggle} />
          <span className={styles.navTogglerSpan} open={toggle} />
          <span className={styles.navTogglerSpan} open={toggle} />
        </button>
      </nav>
      <div open={toggle}>
        <ul open={toggle}>
          <li>
            <a
              className="about"
              target="#"
              href="https://www.instagram.com/igor_dumencic/"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="skills"
              target="#"
              href="https://www.behance.net/igordumencic"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="projects"
              target="#"
              href="https://github.com/Igor178"
            >
              Projects
            </a>
          </li>
          <li>
            <a className="contact" target="#" href="https://github.com/Igor178">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Nav2;
