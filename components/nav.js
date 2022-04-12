import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/nav.module.css";
import { Link } from "react-scroll";

import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar expand="xxl" className={styles.nav} sticky="top" variant="dark">
      <Navbar.Brand className={styles.navName} href="/">
        ALOYSIUS TAN
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={styles.navToggler}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto justify-content-end" style={{ width: "100%" }}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-350}
            duration={800}
            className={styles.navLinks}
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-350}
            duration={800}
            className={styles.navLinks}
          >
            Skills
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-200}
            duration={800}
            className={styles.navLinks}
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-200}
            duration={800}
            className={styles.navLinks}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
