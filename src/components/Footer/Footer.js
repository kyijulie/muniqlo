import React from "react";
import styles from "../css/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles["page-footer"]}>
      <div className={styles["footer-site"]}>
        <ul className={styles["footer-first"]}>
          <li>
            <a>CAREERS</a>
          </li>
          <li>
            <a>STORE LOCATOR</a>
          </li>
          <li>
            <a>STORE FEEDBACK</a>
          </li>
          <li>
            <a>SITE FEEDBACK</a>
          </li>
          <li>
            <a>BUY A GIFT CARD</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-about"]}>
        <h3 className="title">ABOUT UNIQLO</h3>

        <ul className={styles["footer-list"]}>
          <li>
            <a>Who We Are</a>
          </li>
          <li>
            <a>Our Stores</a>
          </li>
          <li>
            <a>Sustainability</a>
          </li>
          <li>
            <a>Careers - Work With Us!</a>
          </li>
          <li>
            <a>UNIQLO News</a>
          </li>
          <li>
            <a>UNIQLO Global Brand Ambassadors</a>
          </li>
          <li>
            <a>Corporate Information</a>
          </li>
          <li>
            <a>Group Companies</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-help"]}>
        <h3 className="title">HELP</h3>
        <ul className={styles["footer-list"]}>
          <li>
            <a>FAQ</a>
          </li>
          <li>
            <a>Shipping</a>
          </li>
          <li>
            <a>Returns</a>
          </li>
          <li>
            <a>Order Status</a>
          </li>
          <li>
            <a>Gift Card Balance</a>
          </li>
          <li>
            <a>Accessibility</a>
          </li>
          <li>
            <a>Subscribe</a>
          </li>
          <li>
            <a>Unsubscribe</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
          <li>
            <a>Give $10, Get $10</a>
          </li>
        </ul>
      </div>
      <div className={styles["footer-follow"]}>
        <h3 className="title">FOLLOW US</h3>
        <ul className={styles["footer-social-media"]}>
          <li><a>Facebook</a></li>
          <li><a>Instagram</a></li>
          <li><a>Pinterest</a></li>
          <li><a>YouTube</a></li>
          <li><a>Twitter</a></li>
        </ul>
      </div>
      <div className={styles["footer-member"]}>
        <h3 className="title">UNIQLO E-MEMBER</h3>
        <p>
          Sign up for Uniqlo News and get a special WELCOME OFFER within 24
          hours.
        </p>
        <input
          className={styles["footer-email-input"]}
          type="text"
          placeholder="Enter Email"
        />
        <input
          className={styles["footer-email-submit"]}
          type="button"
          alt="Submit"
          value="SIGN UP"
        />
      </div>
    </div>
  );
};

export default Footer;
