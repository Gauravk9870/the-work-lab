import React from "react";
import styles from "./navbar.module.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [clicked, setClicked] = React.useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/">
            <img src={Logo} alt="the-work-labs-logo" />
          </Link>
        </div>

        <ul className={styles.nav__links}>
          <li className={styles.active}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Post a Job</Link>
          </li>
          <li>
            <Link to="/">
              <Link to="/">Find a Client</Link>
            </Link>
          </li>
          <li>
            <Link to="/">
              <Link to="/">How it works</Link>
            </Link>
          </li>
        </ul>

        <ul className={styles.actions}>
          <li className={styles.login}>
            <button>Log in</button>
          </li>
          <li className={styles.join}>
            <button>Join</button>
          </li>
        </ul>

        <div
          className={`${styles.hamburger} ${clicked ? styles.clicked : ""}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
