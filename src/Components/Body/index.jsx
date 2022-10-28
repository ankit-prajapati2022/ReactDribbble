import React from "react";

import Carousel from "./Carousel";
import Header from "./Header";

import "./Styles.css";

const Index = () => {
  return (
    <div>
      <div className="DriBody-main">
        <div className="DriBody-container">
          <Header />
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default Index;
