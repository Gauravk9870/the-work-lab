import React from "react";
import styles from "./popup.module.scss";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Popup = ({ closePopup }) => {
  return (
    <>
      {createPortal(
        <div className={styles.popup}>
          <div className={styles.container}>
            <div className={styles.close}>
              <button onClick={closePopup}>
                <IoMdClose className={styles.icon} />
              </button>
            </div>
            <h1>Who are you ? </h1>
            <ul className={styles.content}>
              <li>
                <Link to="/join/freelancer">
                  <button>Freelancer</button>
                </Link>
              </li>
              <li>
                <Link to="/join/organization">
                  <button>Organization</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Popup;
