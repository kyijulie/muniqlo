import React from "react";
import styles from "../css/Footer.module.scss";
import Facebook from "../../img/icons8-facebook-50.png";
import Instagram from "../../img/icons8-instagram-50.png";
import Pinterest from "../../img/icons8-pinterest-50.png";
import Youtube from "../../img/icons8-youtube-50.png";
import Twitter from "../../img/icons8-twitter-50.png";
import { ReactComponent as Briefcase } from "../../icons/icon-briefcase.svg";
import { ReactComponent as Location } from "../../icons/icon-location.svg";
import { ReactComponent as Comment } from "../../icons/icon-comment.svg";
import { ReactComponent as Dollar } from "../../icons/icon-currency-dollar.svg";

const Footer = () => {
  return (
    <div className={styles["page-footer"]}>
      <div className={styles["footer-site"]}>
        <ul className={styles["footer-first"]}>
          <li>
            <Briefcase fill="red" />
            <a>CAREERS</a>
          </li>
          <li>
            <Location fill="red" />
            <a>STORE LOCATOR</a>
          </li>
          <li>
            <Comment fill="red" />
            <a>STORE FEEDBACK</a>
          </li>
          <li>
            <Comment fill="red" />
            <a>SITE FEEDBACK</a>
          </li>
          <li>
            <Dollar fill="red" />
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
          <li>
            <a>
              <img src={Facebook} />
            </a>
          </li>
          <li>
            <a>
              <img src={Instagram} />
            </a>
          </li>
          <li>
            <a>
              <img src={Youtube} />
            </a>
          </li>
          <li>
            <a>
              <img src={Pinterest} />
            </a>
          </li>
          <li>
            <a>
              <img src={Twitter} />
            </a>
          </li>
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
