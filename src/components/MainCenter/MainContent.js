import React from "react";
import Carousel from "../MainCenter/Carousel";
import Recommendations from "../MainCenter/Recommendations";

const MainContent = () => {
  return (
    <div className="main-content">
      <Carousel />
      <Recommendations />
    </div>
  );
};

export default MainContent;
