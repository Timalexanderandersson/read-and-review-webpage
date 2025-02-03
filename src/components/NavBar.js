import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/Navbar.module.css";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { CurrentUserInfo, SetCurrentUserInfo } from "../users/userInformation";

/**
 *
 * NavBar contains all the links in the navigation field.
 * - If not sign in ( Home, Explore now, Sign in, Register)
 * - If sign in (Home, Explore now, Add review, Sign out)
 * usernow contains the current user information.
 * setUserdata for updating information
 *
 */
export const NavBar = () => {
  const userNow = useContext(CurrentUserInfo);
  const setUserdata = useContext(SetCurrentUserInfo);
  const navigate = useNavigate();
  /**
   * handleLogout function for logging out.
   * This function send a request for signing out from the webpage to the API.
   * If successful logout, user gets redirected to Homepage.
   * localStorage removes the user when logged out.
   */
  const handleLogout = async () => {
    try {
      await axios.post("/dj-rest-auth/logout/");
      localStorage.removeItem("currentUser");
      setUserdata(null);
      navigate("/");
    } catch (err) {}
  };

  return (
    <div className={styles.headbackground}>
      <h1 className={`d-flex justify-content-center pt-3 ${styles.bigtext}`}>
        Read & Review
      </h1>

      <div className={`d-flex justify-content-center ${styles.navcolor}`}>
        {userNow ? (
          <Nav defaultActiveKey="/home" as="ul" className={styles.linkshiding}>
            <Nav.Item as="li">
              <Link to="/" className={styles.linktext}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/explore-new" className={styles.linktext}>
                Explore new
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/add-review" className={styles.linktext}>
                Add review
                <i
                  className={`fa-solid fa-camera-retro ${styles.iconmoved}`}
                ></i>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link
                to="/logout"
                onClick={handleLogout}
                className={styles.linktext}
              >
                Sign out
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/Contact" className={styles.linktext}>
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        ) : (
          <Nav defaultActiveKey="/home" as="ul" className={styles.linkshiding}>
            <Nav.Item as="li">
              <Link to="/" className={styles.linktext}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/explore-new" className={styles.linktext}>
                Explore new
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/signin" className={styles.linktext}>
                Sign in
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/Register" className={styles.linktext}>
                Register
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="/Contact" className={styles.linktext}>
                Contact
              </Link>
            </Nav.Item>
          </Nav>
        )}

        <Dropdown className={styles.hidelink}>
          <Dropdown.Toggle
            id="dropdown-autoclose-true"
            as="span"
            className={styles.iconbutton}
          >
            <i className="fa-regular fa-circle-down"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {userNow ? (
              <>
                <Link className={styles.smallnavlink} to="/">
                  Home
                </Link>
                <Link className={styles.smallnavlink} to="/explore-new">
                  Explore new
                </Link>
                <Link className={styles.smallnavlink} to="/add-review">
                  Add review
                  <i
                    className={`fa-solid fa-camera-retro ${styles.iconmoved}`}
                  ></i>
                </Link>
                <Link
                  className={styles.smallnavlink}
                  onClick={handleLogout}
                  to="/logout"
                >
                  Sign out
                </Link>{" "}
                <Link className={styles.smallnavlink} to="/Contact">
                  Contact
                </Link>
              </>
            ) : (
              <>
                <Link className={styles.smallnavlink} to="/">
                  Home
                </Link>
                <Link className={styles.smallnavlink} to="/explore-new">
                  Explore new
                </Link>
                <Link className={styles.smallnavlink} to="/signin">
                  Sign in
                </Link>
                <Link className={styles.smallnavlink} to="/Register">
                  Register
                </Link>{" "}
                <Link className={styles.smallnavlink} to="/Contact">
                  Contact
                </Link>
              </>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};
