import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "../styles/nav.module.css";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

const Navigation = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const isTablet = useMediaQuery({
    query: "(max-width: 991px)",
  });

  return (
    <Navbar className={styles.navBar} sticky="top" bg="light" expand="lg">
      <Link
        to="hero"
        spy={true}
        smooth={true}
        offset={-350}
        duration={800}
        className={styles.navBrand}
      >
        Aloysius Tan
      </Link>
      <Navbar.Toggle
        className={`navToggler ${styles.navToggler} `}
        aria-controls="basic-navbar-nav"
        onClick={toggleClass}
      >
        <span
          className={styles.spanGroup}
          style={
            isActive
              ? { transform: "translate(0px, -2px) rotate(45deg)" }
              : { backgroundColor: "white" }
          }
        ></span>
        <span
          className={` ${styles.spanGroup} ${styles.spanMiddle} `}
          style={
            isActive
              ? { transform: "translateX(15px)", opacity: "0" }
              : { backgroundColor: "white" }
          }
        ></span>
        <span
          className={styles.spanGroup}
          style={
            isActive
              ? {
                  transform: "translate(-3px, 3px) rotate(-45deg)",
                }
              : { backgroundColor: "white" }
          }
        ></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`ms-auto ${styles.dropdown}`}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={isTablet ? -90 : -300}
            duration={800}
            className={`${styles.navLinks} ${styles.aboutNavLink}`}
          >
            About
          </Link>

          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={isTablet ? -200 : -300}
            duration={800}
            className={`${styles.navLinks} ${styles.skillsNavLink}`}
          >
            Skills
          </Link>

          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={isTablet ? -100 : -300}
            duration={800}
            className={`${styles.navLinks} ${styles.projectsNavLink}`}
          >
            Projects
          </Link>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-200}
            duration={800}
            className={`${styles.navLinks} ${styles.contactNavLink}`}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
