import React from "react";
import styles from "./customizeSolution.module.scss";

const CustomizeSolution = () => {
  return (
    <div className={styles.customizeSolution}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>Customized Solutions</p>
          <h2>Innovation and Experience Solutions that Deliver Value</h2>
          <p>
            From services to team augmentation - we has the right model for your
            business and project needs
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.actions}>
            <button>Services</button>
            <button>Team Augmentation</button>
          </div>

          <div className={styles.services}>
            <div className={styles.services__intro}>
              <h4>How the End-to-End Delivery Works</h4>
              <p>
                We take care of the entire process of hiring, managing, and
                delivering the project. You get to focus on your business.
              </p>
            </div>

            <ul className={styles.services__content}>
              <li>
                <span className={styles.count}>01</span>

                <h4>Define Problem</h4>
                <div className={styles.desc}>
                  A dedicated team of experts will work with you to understand
                </div>
              </li>
              <li>
                <span className={styles.count}>02</span>

                <h4>Develop Analysis</h4>
                <div className={styles.desc}>
                  We will develop a customized solution that fits your needs
                </div>
              </li>
              <li>
                <span className={styles.count}>03</span>

                <h4>Design Solution</h4>
                <div className={styles.desc}>
                  We'll Deliver a clear and concise solution that fits your
                  needs and budget
                </div>
              </li>
              <li>
                <span className={styles.count}>04</span>

                <h4>Execute Implementation</h4>
                <div className={styles.desc}>
                  We'll partner with you to implement the solution and ensure it
                  works for you and your team
                </div>
              </li>
            </ul>
          </div>

          {/* <div className={styles.team_aug}>
            <div className={styles.team_aug__left}></div>
            <div className={styles.team_aug__right}></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CustomizeSolution;
