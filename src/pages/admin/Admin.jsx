import React from "react";
import styles from "./admin.module.scss";
import Logo from "../../assets/logo.png";

const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.left__container}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img src={Logo} alt="the-work-labs-logo" />
              </div>
            </div>
            <nav className={styles.bottom}>
              <ul>
                <li>Home</li>
                <li>Freelancers</li>
                <li>Organizations</li>
                <li>Setting</li>
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.right}>
            
        </div>
      </div>
    </div>
  );
};

export default Admin;
