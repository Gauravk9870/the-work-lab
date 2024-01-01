import React from "react";
import styles from "./footer.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link to="/">
                <img src={Logo} alt="the-work-labs-logo" />
              </Link>{" "}
            </div>
          </div>
          <div className={styles.right}>
            <ul>
              <li className={styles.heading}>About us</li>

              <li>Policy</li>
              <li>Popluar Jobs</li>
              <li>Career</li>
              <li>Our Mission</li>
            </ul>
            <ul>
              <li className={styles.heading}>Help & Support</li>

              <li>Help & Support</li>
              <li>Contact</li>
              <li>Trust & Safety</li>
              <li>Live Support</li>
              <li>Security</li>
            </ul>
            <ul>
              <li className={styles.heading}>Quick Links</li>

              <li>All Job</li>
              <li>Graphic Design</li>
              <li>Programming and Tech</li>
              <li>Motion Graphic</li>
              <li>Project Management</li>
              <li>Web Design & Development</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.copyright}>
            <p>&#169; Copyright {new Date().getFullYear()} | The Work Labs</p>
          </div>

          <ul>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </li>

            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
