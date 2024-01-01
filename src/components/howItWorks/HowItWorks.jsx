import React from "react";
import styles from "./howItWorks.module.scss";

const HowItWorks = () => {
  return (
    <div className={styles.howitworks}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Working Process</p>
          <h2>How it works</h2>
        </div>

        <div className={styles.content}>
          <ul>
            <li>
              <span className={styles.count}>01</span>

              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 22h14a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v4" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="m3 15 2 2 4-4" />
                </svg>
              </div>
              <h4 className={styles.title}>Register Your Account</h4>
              <div className={styles.desc}>
                you need to create an account to apply job
              </div>
            </li>
            <li>
              <span className={styles.count}>02</span>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  <polyline points="11 3 11 11 14 8 17 11 17 3" />
                </svg>
              </div>
              <h4 className={styles.title}>Apply for the Job</h4>
              <div className={styles.desc}>
                apply for the job you preferred which suits your skills
              </div>
            </li>
            <li>
              <span className={styles.count}>03</span>
              <div className={styles.icon}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                  <path d="M12 12v9" />
                  <path d="m16 16-4-4-4 4" />
                </svg>
              </div>
              <h4 className={styles.title}>Upload Your Portfolio</h4>
              <div className={styles.desc}>
                upload your portfolio to get more chance to get hired
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
