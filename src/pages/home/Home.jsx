import React from "react";
import styles from "./home.module.scss";
import Hero from "../../components/hero/Hero";
import Partners from "../../components/partners/Partners";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import Testimonial from "../../components/testimonial/Testimonial";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Popup from "../../components/popup/Popup";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const openPopup = () => {
    setIsPopupOpen(true);
  };
  return (
    <>
      <Navbar openPopup={openPopup} />
      {isPopupOpen && <Popup closePopup={closePopup} />}
      <main>
        <Hero />
        <Partners />
        <HowItWorks />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default Home;
