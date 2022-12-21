import React from "react";
import Additionalinfo from "../components/layout/Additionalinfo";
import Advertise from "../components/layout/Advertise";
import Banner from "../components/layout/Banner";
import Bestsellers from "../components/layout/Bestsellers";
import Footer from "../components/layout/Footer";
import Lastad from "../components/layout/Lastad";
import Newarraivals from "../components/layout/Newarraivals";
import Special from "../components/layout/Special";

const Home = () => {
  return (
    <>
      <Banner />
      <Additionalinfo />
      <Advertise />
      <Newarraivals />
      <Bestsellers />
      <Lastad />
      <Special />
      <Footer />
    </>
  );
};

export default Home;
