import React from "react";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/Navbar.module.css";
import { Dropdown } from "react-bootstrap";

export const NavBar = () => {
  return (
    <div className={styles.headbackground}>
      <h1 className={`d-flex justify-content-center pt-3 ${styles.bigtext}`}>
        Read & Review
      </h1>

      <div className={`d-flex justify-content-center ${styles.navcolor}`}>
        <Nav defaultActiveKey="/home" as="ul" className={styles.linkshiding}>
          <Nav.Item as="li">
            <Nav.Link href="/home" className={styles.linktext}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" className={styles.linktext}>
              Explore new
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2" className={styles.linktext}>
              Sign in
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-3" className={styles.linktext}>
              Register
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Dropdown className={styles.hidelink}>
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Home</Dropdown.Item>
            <Dropdown.Item href="#">Explore new</Dropdown.Item>
            <Dropdown.Item href="#">Sign in</Dropdown.Item>
            <Dropdown.Item href="#">Register</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
