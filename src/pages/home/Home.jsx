import React from "react";
import styles from "./home.module.scss";
import Hero from "../../components/hero/Hero";
import Partners from "../../components/partners/Partners";
import HowItWorks from "../../components/howItWorks/HowItWorks";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <Hero />
      <Partners />
      <HowItWorks />
      <Testimonial />
    </main>
  );
};

export default Home;
