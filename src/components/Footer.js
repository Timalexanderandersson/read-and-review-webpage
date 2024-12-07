import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <p className={`${styles.textingstyle} d-flex justify-content-center`}>
          Follow us on social media
        </p>
        <div className={styles.centerblock}>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            aria-label="visit instagram"
            rel="noopener"
            className={styles.iconsfooter}
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://sv-se.facebook.com/"
            aria-label="visit facebook"
            target="_blank"
            rel="noopener"
            className={styles.iconsfooter}
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            aria-label="visit youtube"
            target="_blank"
            rel="noopener"
            className={styles.iconsfooter}
          >
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;