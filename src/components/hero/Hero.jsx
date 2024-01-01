import React from "react";
import styles from "./hero.module.scss";
import RightImg from "../../assets/right-img.png";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>
            Find and Hire Freelancers
            <br />
            that perfectly fits your
            <br />
            business needs.
          </h1>

          <p>
            Hire proven pros with confidence using the world’s largest, remote
            talent platform.
          </p>

          <ul className={styles.quotes}>
            <li>Success of distributed teams</li>
            <li>Easy onboarding and payment</li>
          </ul>

          <ul className={styles.buttons}>
            <button>Hire Now</button>
            <button>Apply for jobs</button>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.image}>
            <img src={RightImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
