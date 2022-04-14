import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/nav.module.css";

const Navigation = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <Navbar className={styles.navBar} sticky="top" bg="light" expand="lg">
      <Navbar.Brand className={styles.navBrand} href="#home">
        Aloysius Tan
      </Navbar.Brand>
      <Navbar.Toggle
        className={`navToggler ${styles.navToggler} `}
        aria-controls="basic-navbar-nav"
        onClick={toggleClass}
      >
        <span
          className={`${isActive ? "span1" : ""} ${styles.spanGroup} `}
        ></span>
        <span
          className={`${styles.spanGroup} ${styles.spanMiddle} ${
            isActive ? "span2" : ""
          }`}
        ></span>
        <span
          className={`${styles.spanGroup} ${isActive ? "span3" : ""}`}
        ></span>
      </Navbar.Toggle>
      <Navbar.Collapse className={`${styles.collapse} `} id="basic-navbar-nav">
        <Nav className={`ms-auto ${styles.dropdown}`}>
          <Nav.Link
            className={`${styles.navLinks} ${styles.aboutNavLink}`}
            href="#"
          >
            About
          </Nav.Link>
          <Nav.Link
            className={`${styles.navLinks} ${styles.skillsNavLink}`}
            href="#"
          >
            Skills
          </Nav.Link>
          <Nav.Link
            className={`${styles.navLinks} ${styles.projectsNavLink}`}
            href="#"
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className={`${styles.navLinks} ${styles.contactNavLink}`}
            href="#"
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
