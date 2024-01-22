import React from "react";
import styles from "./success.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className={styles.success}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={Logo} alt="" />
        </div>
        <h1>Thank you for submitting the form!</h1>
        <p>
          We appreciate your input. We will review it and get back to you as
          soon as possible.
        </p>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
