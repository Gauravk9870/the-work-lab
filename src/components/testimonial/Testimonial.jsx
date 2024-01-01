import React from "react";
import styles from "./testimonial.module.scss";
import User1 from "../../assets/users/1.png";
import User2 from "../../assets/users/2.png";
import User3 from "../../assets/users/3.png";

const Testimonial = () => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.container}>
        <div className={styles.title}>
          <p>What our clients say</p>
          <h2>Client Testimonial</h2>
        </div>

        <div className={styles.content}>
          <ul>
            <li>
              <div className={styles.stars}>
                &#9733;&#9733;&#9733;&#9733;&#9734;
              </div>
              <p>
                XYZ Company impresses with swift, expert solutions. Highly
                recommended for their professionalism and top-tier service.
                Impressive reliability!
              </p>

              <div className={styles.user}>
                <div className={styles.logo}>
                  <img src={User1} alt="user" />
                </div>
                <div className={styles.designation}>
                  <h4>John Doe</h4>
                  <span>CEO, ABC Company</span>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.stars}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p>
                "Dedication shines at XYZ Company. Quick, detailed solutions
                highlight their commitment. Endorsed for reliable, professional
                service.
              </p>
              <div className={styles.user}>
                <div className={styles.logo}>
                  <img src={User2} alt="user" />
                </div>
                <div className={styles.designation}>
                  <h4>Alex Johnson</h4>
                  <p>IT Manager </p>
                </div>
              </div>
            </li>
            <li>
              <div className={styles.stars}>
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </div>
              <p>
                Consistently impressed by XYZ Company's expertise. Reliable,
                efficient service makes them the go-to choice. Highly
                recommended for professionalism
              </p>
              <div className={styles.user}>
                <div className={styles.logo}>
                  <img src={User3} alt="user" />
                </div>
                <div className={styles.designation}>
                  <h4>Sarah Smith</h4>
                  <span>Customer Relations Representative</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
