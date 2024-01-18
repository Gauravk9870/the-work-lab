import React, { useEffect, useState } from "react";
import styles from "./join.module.scss";
import { IoIosMale, IoIosFemale, IoIosArrowBack } from "react-icons/io";
import { IoMaleFemaleOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import JoinImg from "../../assets/join.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Join = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [shortBio, setShortBio] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [expertise, setExpertise] = useState("");
  const [projectPreference, setProjectPreference] = useState("");
  const [freelancerInterest, setFreelancerInterest] = useState("");
  const [remoteWorkSuccessKey, setRemoteWorkSuccessKey] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      dateOfBirth,
      gender,
      email,
      password,
      resume,
      country,
      city,
      shortBio,
      yearsOfExperience: selectedExperience,
      expertise,
      interestedProducts: projectPreference,
      freelancerInterest,
      remoteWorkSuccessKey,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/freelancer/register",
        userData
      );


      if (response.status === 200) {
        alert("Your data has been submitted successfully");
        setFirstName(""); 
        setLastName("");
        setDateOfBirth("");
        setGender("");
        setEmail("");
        setResume("");
        setCountry("");
        setCity("");
        setShortBio("");
        setSelectedExperience("");
        setExpertise("");
        setProjectPreference("");
        setFreelancerInterest("");
        setRemoteWorkSuccessKey("");
        setPassword("");

      } else if (response.status === 201) {
        alert(response.data.error);
      }
      else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(dateOfBirth);
  }, [dateOfBirth]);

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
            <form onSubmit={handleSubmit}>
              {/* Name  */}
              <div className={`${styles.input}`}>
                <div className={`${styles.item}`}>
                  <label htmlFor="firstName" className={styles.input__label}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>

                <div className={`${styles.item}`}>
                  <label htmlFor="lastName" className={styles.input__label}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              {/* DOB & Gender  */}
              <div className={styles.input}>
                <div className={`${styles.item}`}>
                  <label htmlFor="dateofbirth" className={styles.input__label}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dateofbirth"
                    placeholder="Date of Birth"
                    value={dateOfBirth || ""}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
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
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="others" className={styles.gender__label}>
                        <IoMaleFemaleOutline />
                        Others
                      </label>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`${styles.input}`}>
                {/* Password */}
                <div className={`${styles.item}`}>
                  <label htmlFor="password" className={styles.input__label}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.input}`}>
                {/* Email */}
                <div className={`${styles.item}`}>
                  <label htmlFor="email" className={styles.input__label}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="username@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Resume URL */}
                <div className={`${styles.item}`}>
                  <label htmlFor="resume" className={styles.input__label}>
                    Resume URL
                  </label>
                  <input
                    type="text"
                    id="resume"
                    placeholder="https://example.com/resume.pdf"
                    value={resume}
                    onChange={(e) => setResume(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* shortBio */}
              <div className={`${styles.input}`}>
                <div className={`${styles.item}`}>
                  <label htmlFor="shortBio" className={styles.input__label}>
                    Short Bio
                  </label>
                  <textarea
                    id="shortBio"
                    name="shortBio"
                    rows={4}
                    cols={50}
                    placeholder="Share your thoughts about yourself."
                    style={{ resize: "none" }}
                    value={shortBio}
                    onChange={(e) => setShortBio(e.target.value)}
                  ></textarea>
                </div>
              </div>

              {/* Location */}
              <div className={`${styles.input}`}>
                <div className={`${styles.item}`}>
                  <label htmlFor="country" className={styles.input__label}>
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>

                <div className={styles.item}>
                  <label htmlFor="city" className={styles.input__label}>
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className={`${styles.input} ${styles.additional}`}>
                <h4 className={styles.input__heading}>
                  Tell us about your professional experience{" "}
                </h4>

                {/* Experience  */}
                <div className={styles.item}>
                  <label htmlFor="experience" className={styles.input__label}>
                    How many years of professional experience do you have in
                    your field overall?
                  </label>
                  <select
                    name="experience"
                    id="experience"
                    value={selectedExperience}
                    onChange={(e) => setSelectedExperience(e.target.value)}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="less than 1 year">Less than 1 year</option>
                    <option value="1 to 2 years">1 to 2 years</option>
                    <option value="2 to 3 years">2 to 3 years</option>
                    <option value="3 to 5 years">3 to 5 years</option>
                    <option value="5 to 8 years">5 to 8 years</option>
                    <option value="more than 8 years">More than 8 years</option>
                  </select>
                </div>
              </div>

              {/* Expertise  */}
              <div className={styles.input}>
                <div className={styles.item}>
                  <label htmlFor="" className={styles.input__label}>
                    Area of Expertise (seprated by ' , ')
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your all expertise"
                    value={expertise}
                    onChange={(e) => setExpertise(e.target.value)}
                  />
                </div>
              </div>

              <div className={`${styles.input} ${styles.additional}`}>
                <h4 className={styles.input__heading}>
                  Tell us about your freelancing preferences
                </h4>

                {/* interestedProducts                 */}
                <div className={styles.item}>
                  <label className={styles.input__label}>
                    What type of products are you interested in working on?
                  </label>
                  <textarea
                    id="projectPreference"
                    name="projectPreference"
                    rows={4}
                    cols={50}
                    placeholder="Share your thoughts about the types of projects you would like to work on."
                    style={{ resize: "none" }} // Disable textarea resizing
                    value={projectPreference}
                    onChange={(e) => setProjectPreference(e.target.value)}
                  ></textarea>
                </div>

                {/* freelancerInterest */}
                <div className={styles.item}>
                  <label className={styles.input__label}>
                    What interests you the most about building a freelance
                    career?
                  </label>
                  <textarea
                    id="freelancerInterest"
                    name="freelancerInterest"
                    rows={4}
                    cols={50}
                    placeholder="Share your thoughts about  What interests you the most about building a freelance career."
                    style={{ resize: "none" }} // Disable textarea resizing
                    value={freelancerInterest}
                    onChange={(e) => setFreelancerInterest(e.target.value)}
                  ></textarea>
                </div>

                {/* remoteWorkSuccessKey */}
                <div className={styles.item}>
                  <label className={styles.input__label}>
                    When working with client remotely, what do you consider the
                    key to success?
                  </label>
                  <textarea
                    id="remoteWorkSuccessKey"
                    name="remoteWorkSuccessKey"
                    rows={4}
                    cols={50}
                    placeholder="Share your thoughts about  What you consider the key to success when working with client remotely."
                    style={{ resize: "none" }} // Disable textarea resizing
                    value={remoteWorkSuccessKey}
                    onChange={(e) => setRemoteWorkSuccessKey(e.target.value)}
                  ></textarea>
                </div>
              </div>

              <div className={`${styles.input}`}>
                <button type="submit" className={styles.submit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
