import React from "react";
import styles from "./partners.module.scss";
import Amazon from "../../assets/partners/1.png";
import Microsoft from "../../assets/partners/2.png";
import Netflix from "../../assets/partners/3.png";
import Airbnb from "../../assets/partners/4.png";
import Google from "../../assets/partners/5.png";

const data = [
  {
    id: 1,
    name: "amazon",
    img: Amazon,
  },
  {
    id: 2,
    name: "microsoft",
    img: Microsoft,
  },
  {
    id: 3,
    name: "netflix",
    img: Netflix,
  },
  {
    id: 4,
    name: "airbnb",
    img: Airbnb,
  },
  {
    id: 5,
    name: "google",
    img: Google,
  },
];

const Partners = () => {
  return (
    <div className={styles.partners}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h2>
            Trusted by <br /> <span> Industry Experts</span>
          </h2>
        </div>
        <div className={styles.right}>
          <ul>
            {data.map((item) => (
              <li>
                <img src={item.img} alt="" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
