import React from "react";
import clothes1 from "../../img/clothes1.jpeg";
const Carousel = () => {
  const carouselStyle = {
    backgroundColor: "#c1e0ff",
    width: "100%",
    height: "500px",
  };
  const carouselImg = {
    // display: "block",
    height: "100%",
    // maxWidth: "100%",
    // lineHeight: 1,
    // margin: "auto",
    width: "100%",
  };
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      style={carouselStyle}
    >
      <div className="carousel-inner" style={carouselImg}>
        <div className="carousel-item active">
          <img src={clothes1} className="d-block w-50" alt="clothes1" />
          <img src={clothes1} className="d-block w-50" alt="clothes1" />
        </div>
        <div className="carousel-item">
          <img src={clothes1} className="d-block w-100" alt="clothes2" />
        </div>
        <div className="carousel-item">
          <img src="..." className="d-block w-100" alt="clothes3" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
