import React from "react";
import AboutShop from "../AboutShop/AboutShop";
import HOmeProducts from "../HOmeProducts/HOmeProducts";
import ProductReview from "../ProductReview/ProductReview";
import Header from "../Shared/Header/Header";
import IntroSection from "./Home/IntroSection/IntroSection";

const HomePage = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <IntroSection></IntroSection>
      <HOmeProducts></HOmeProducts>
      <ProductReview></ProductReview>
      <AboutShop></AboutShop>
    </div>
  );
};

export default HomePage;
