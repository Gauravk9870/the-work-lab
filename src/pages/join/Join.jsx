import React, { useEffect, useState } from "react";
import styles from "./join.module.scss";
import { IoIosMale, IoIosFemale, IoIosArrowBack } from "react-icons/io";
import { IoMaleFemaleOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import JoinImg from "../../assets/join.png";
import { Link } from "react-router-dom";

const Join = () => {
  const [gender, setGender] = useState("");
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  useEffect(() => {
    console.log("SELECTED GENDER : ", gender);
  }, [gender]);
  return (
    <div className={styles.join}>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles[`left-container`]}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img src={Logo} alt="the-work-labs" />
              </div>

              <div className={styles.back}>
                <Link to="/">
                  <button>
                    <IoIosArrowBack className={styles.icon} />
                    Home
                  </button>
                </Link>
              </div>
            </div>
            <h1>
              Welcome to <br /> <span> The Work Labs</span>
            </h1>
            <p>
              Join us to build the future together. We're excited to have you on
              board!
            </p>{" "}
            <div className={styles.info}>
              <h2>Fill Out All Required Fields</h2>
              <p>
                Please ensure that all required fields are filled out before
                submitting the form.
              </p>
              <p>Required fields are indicated with an asterisk (*).</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles[`right-container`]}>
            <form>
              <div className={`${styles.input} ${styles.name}`}>
                <div className={`${styles.firstName} ${styles.item}`}>
                  <label htmlFor="firstName" className={styles.input__label}>
                    First Name
                  </label>
                  <input type="text" id="firstName" placeholder="First Name" />
                </div>

                <div className={`${styles.lastName} ${styles.item}`}>
                  <label htmlFor="lastName" className={styles.input__label}>
                    Last Name
                  </label>
                  <input type="text" id="lastName" placeholder="Last Name" />
                </div>
              </div>

              <div className={styles.input}>
                <div className={`${styles.dateofbirth} ${styles.item}`}>
                  <label htmlFor="dateofbirth" className={styles.input__label}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateofbirth"
                    placeholder="Date of Birth"
                  />
                </div>

                <div className={`${styles.gender} ${styles.item}`}>
                  <label className={styles.input__label}>Gender</label>

                  <ul>
                    <li>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        className={styles.visuallyHidden}
                        onChange={handleGenderChange}
                      />
                      <label htmlFor="male" className={styles.gender__label}>
                        <IoIosMale />
                        Male
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        className={styles.visuallyHidden}
                        onChange={handleGenderChange}
                      />
                      <label htmlFor="female" className={styles.gender__label}>
                        <IoIosFemale />
                        Female
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="gender"
                        value="others"
                        id="others"
                        className={styles.visuallyHidden}
                        onChange={handleGenderChange}
                      />
                      <label htmlFor="others" className={styles.gender__label}>
                        <IoMaleFemaleOutline />
                        Others
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`${styles.input} ${styles.email}`}>
                <div className={`${styles.email} ${styles.item}`}>
                  <label htmlFor="email" className={styles.input__label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="username@gmail.com"
                  />
                </div>
              </div>

              <div className={`${styles.input}`}>
                <div className={`${styles.linkedin} ${styles.item}`}>
                  <label htmlFor="linkedin" className={styles.input__label}>
                    Linkedin
                  </label>
                  <input
                    type="text"
                    id="linkedin"
                    placeholder="https://www.portfolio.com"
                  />
                </div>
                <div className={`${styles.resume} ${styles.item}`}>
                  <label htmlFor="resume" className={styles.input__label}>
                    Resume
                  </label>
                  <input type="text" id="resume" placeholder="Resume URL" />
                </div>
              </div>

              <div className={`${styles.input}`}>
                <div className={`${styles.portfolio} ${styles.item}`}>
                  <label htmlFor="portfolio" className={styles.input__label}>
                    Portfolio
                  </label>
                  <input
                    type="text"
                    id="college"
                    placeholder="https://www.portfolio.com"
                  />
                </div>
                <div className={`${styles.experience} ${styles.item}`}>
                  <label htmlFor="experience" className={styles.input__label}>
                    Years of Experience
                  </label>
                  <input type="number" id="experience" placeholder="0-10" />
                </div>
              </div>

              <div className={`${styles.input}`}>
                <button className={styles.submit}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
