import React, { useEffect, useState } from "react";
import styles from "./join.module.scss";
import { IoIosMale, IoIosFemale, IoIosArrowBack } from "react-icons/io";
import { IoMaleFemaleOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import JoinImg from "../../assets/join.png";
import { Link } from "react-router-dom";
import axios from "axios";

const BASEURL = import.meta.env.VITE_BASE_URL;

const Organization = () => {
  const [companyName, setCompanyName] = useState("");
  const [tradeName, setTradeName] = useState("");
  const [gstin, setGstin] = useState("");
  const [yearOfIncorporation, setYearOfIncorporation] = useState("");
  const [relationshipToCompany, setRelationshipToCompany] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [contactPersonEmail, setContactPersonEmail] = useState("");
  const [numberOfEmployees, setNumberOfEmployees] = useState("");
  const [typeOfCompany, setTypeOfCompany] = useState("");
  const [emailDirector, setEmailDirector] = useState("");
  const [phoneNumberDirector, setPhoneNumberDirector] = useState("");
  const [industry, setIndustry] = useState("");
  const [sector, setSector] = useState("");
  const [website, setWebsite] = useState("");
  const [about, setAbout] = useState("");
  const [annualTurnover, setAnnualTurnover] = useState("");
  const [servicesToExplore, setServicesToExplore] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const organizationData = {
      companyName,
      tradeName,
      GSTIN: gstin,
      yearOfIncorporation,
      relationshipToCompany,
      contactPersonPhoneNumber: contactPerson,
      contactPersonEmail,
      numberOfEmployees,
      typeOfCompany,
      companyDirectorEmail: emailDirector,
      companyDirectorPhoneNumber: phoneNumberDirector,
      industry,
      sector,
      companyWebsite: website,
      aboutCompany: about,
      annualTurnover,
      servicesToExplore,
    };

    try {
      const response = await axios.post(
        `${BASEURL}/api/organization/register`,
        organizationData
      );

      if (response.status === 200) {
        alert("Your data has been submitted successfully");
        setCompanyName("");
        setTradeName("");
        setGstin("");
        setYearOfIncorporation("");
        setRelationshipToCompany("");
        setContactPerson("");
        setContactPersonEmail("");
        setNumberOfEmployees("");
        setTypeOfCompany("");
        setEmailDirector("");
        setPhoneNumberDirector("");
        setIndustry("");
        setSector("");
        setWebsite("");
        setAbout("");
        setAnnualTurnover("");
        setServicesToExplore("");
      } else if (response.status === 201) {
        alert(response.data.error);
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              {/* Company Name  */}
              <div className={`${styles.input}`}>
                <div className={`${styles.item}`}>
                  <label htmlFor="companyName" className={styles.input__label}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Trade name / Doing Business as Name:  */}
              <div className={styles.input}>
                <div className={`${styles.item}`}>
                  <label htmlFor="tradeName" className={styles.input__label}>
                    Trade name / Doing Business as Name{" "}
                  </label>
                  <input
                    type="text"
                    id="tradeName"
                    placeholder="Trade name / Doing Business as Name"
                    value={tradeName}
                    onChange={(e) => setTradeName(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.input}`}>
                {/* GSTIN */}
                <div className={`${styles.item}`}>
                  <label htmlFor="gstin" className={styles.input__label}>
                    GSTIN
                  </label>
                  <input
                    type="text"
                    id="gstin"
                    placeholder="GSTIN"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                    required
                  />
                </div>

                {/* Year of Incorporation */}
                <div className={`${styles.item}`}>
                  <label htmlFor="year" className={styles.input__label}>
                    Year of Incorporation{" "}
                  </label>
                  <input
                    type="date"
                    id="year"
                    placeholder="Year of Incorporation"
                    value={yearOfIncorporation}
                    onChange={(e) => setYearOfIncorporation(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.input}`}>
                {/* Relationship to company */}
                <div className={`${styles.item}`}>
                  <label htmlFor="relationship" className={styles.input__label}>
                    Relationship to company{" "}
                  </label>
                  <input
                    type="text"
                    id="relationship"
                    placeholder="Relationship to company"
                    value={relationshipToCompany}
                    onChange={(e) => setRelationshipToCompany(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className={`${styles.input}`}>
                {/* Phone number of contact Person */}
                <div className={`${styles.item}`}>
                  <label
                    htmlFor="contactPerson"
                    className={styles.input__label}
                  >
                    Phone number of contact Person{" "}
                  </label>
                  <input
                    type="text"
                    id="contactPerson"
                    placeholder="Phone number of contact Person"
                    value={contactPerson}
                    onChange={(e) => setContactPerson(e.target.value)}
                    required
                  />
                </div>

                {/* Email ID of the contact person */}
                <div className={`${styles.item}`}>
                  <label
                    htmlFor="contactPersonEmail"
                    className={styles.input__label}
                  >
                    Email ID of the contact person
                  </label>
                  <input
                    type="email"
                    id="contactPersonEmail"
                    placeholder="Email ID of the contact person"
                    value={contactPersonEmail}
                    onChange={(e) => setContactPersonEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Number of employees: */}
              <div className={`${styles.input}`}>
                <div className={`${styles.item}`}>
                  <label
                    htmlFor="numberofEmployees"
                    className={styles.input__label}
                  >
                    Number of employees
                  </label>
                  <input
                    type="number"
                    id="numberofEmployees"
                    placeholder="0-1000"
                    value={numberOfEmployees}
                    onChange={(e) => setNumberOfEmployees(e.target.value)}
                  />
                </div>

                {/* Type of Company: Sole, LLP, Private, Public */}
                <div className={styles.item}>
                  <label
                    htmlFor="typeOfCompany"
                    className={styles.input__label}
                  >
                    Type of Company: Sole, LLP, Private, Public{" "}
                  </label>
                  <input
                    type="text"
                    id="typeOfCompany"
                    placeholder=" Type of Company"
                    value={typeOfCompany}
                    onChange={(e) => setTypeOfCompany(e.target.value)}
                  />
                </div>
              </div>

              <div className={`${styles.input}`}>
                {/* Email ID of Company Director:  */}
                <div className={`${styles.item}`}>
                  <label
                    htmlFor="emailDirector"
                    className={styles.input__label}
                  >
                    Email ID of Company Director{" "}
                  </label>
                  <input
                    type="email"
                    id="emailDirector"
                    placeholder="Email ID of Company Director"
                    value={emailDirector}
                    onChange={(e) => setEmailDirector(e.target.value)}
                    required
                  />
                </div>

                {/* Phone Number of Company Director:  */}
                <div className={`${styles.item}`}>
                  <label
                    htmlFor="phoneNumberDirector"
                    className={styles.input__label}
                  >
                    Phone Number of Company Director{" "}
                  </label>
                  <input
                    type="number"
                    id="phoneNumberDirector"
                    placeholder="Phone Number of Company Director:"
                    value={phoneNumberDirector}
                    onChange={(e) => setPhoneNumberDirector(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Industry  */}
              <div className={styles.input}>
                <div className={styles.item}>
                  <label htmlFor="industry" className={styles.input__label}>
                    Industry
                  </label>
                  <input
                    type="text"
                    id="industry"
                    placeholder="Industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                  />
                </div>
              </div>

              {/* Sector:  */}
              <div className={styles.input}>
                <div className={styles.item}>
                  <label htmlFor="sector" className={styles.input__label}>
                    Sector
                  </label>
                  <input
                    type="text"
                    id="sector"
                    placeholder="Sector"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                  />
                </div>
              </div>

              {/* Website of the company:  */}
              <div className={styles.input}>
                <div className={styles.item}>
                  <label htmlFor="website" className={styles.input__label}>
                    Website of the company
                  </label>
                  <input
                    type="text"
                    id="website"
                    placeholder="Website of the company"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
              </div>

              {/* About the Company: */}
              <div className={styles.input}>
                <div className={styles.item}>
                  <label htmlFor="about" className={styles.input__label}>
                    About the Company
                  </label>
                  <textarea
                    type="text"
                    id="about"
                    rows={4}
                    cols={50}
                    placeholder="About the Company"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                    style={{ resize: "none" }}
                  />
                </div>
              </div>

              {/* Annual Turnover  */}
              <div className={styles.input}>
                <div className={styles.item}>
                  <label htmlFor="turnover" className={styles.input__label}>
                    Annual Turnover{" "}
                  </label>
                  <input
                    type="text"
                    id="turnover"
                    placeholder="Annual Turnover"
                    value={annualTurnover}
                    onChange={(e) => setAnnualTurnover(e.target.value)}
                  />
                </div>
              </div>

              {/* What are the services would you like to explore? */}
              <div className={styles.input}>
                <div className={styles.item}>
                  <label htmlFor="explore" className={styles.input__label}>
                    What are the services would you like to explore?{" "}
                  </label>
                  <textarea
                    type="text"
                    id="explore"
                    rows={4}
                    cols={50}
                    placeholder="What are the services would you like to explore?"
                    value={servicesToExplore}
                    onChange={(e) => setServicesToExplore(e.target.value)}
                    style={{ resize: "none" }}
                  />
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

export default Organization;
