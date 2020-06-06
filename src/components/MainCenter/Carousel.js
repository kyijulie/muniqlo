import React from "react";
import clothes1 from "../../img/clothes1.jpeg";
import carousel1 from "../../img/uniqloreopen.png";

const Carousel = () => {
  const carouselStyle = {
    backgroundColor: "#c1e0ff",
    // width: "70%",
    height: "80vh",
    marginLeft: "25px",
    marginRight: "25px",
  };
  const carouselControlsLeft = {
    marginLeft: "-125px",
    filter: "invert(100%)",
  };
  const carouselControlsRight = {
    marginRight: "-125px",
    filter: "invert(100%)",
  };
  const carouselImg = {
    // display: "block",
    height: "100%",
    // maxWidth: "100%",
    // lineHeight: 1,
    // margin: "auto",
    width: "100%",
    // "margin-bottom": "50px",
  };
  const carouselIndicators = {
    bottom: "-50px",
    backgroundColor: "transparent",
  };
  const carouselIndicatorsLI = {
    // width: "4px",
    // height: "4px",
    // "border-radius": "100%",
    display: "inline-block",
    width: "4px",
    height: "4px",
    margin: "10px",
    textIndent: "0",
    cursor: "pointer",
    border: "none",
    borderRadius: "50%",
    backgroundColor: "black",
    boxShadow: "inset 1px 1px 1px 1px rgba(0,0,0,0.5)",
  };
  //   .carousel-indicators li {
  // }
  // .carousel-indicators .active {
  //   width: 48px;
  //   height: 48px;
  //   margin: 10px;
  //   background-color: #ffff99;
  // }
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
      style={carouselStyle}
    >
      <ol className="carousel-indicators" style={carouselIndicators}>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
          style={carouselIndicatorsLI}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
          style={carouselIndicatorsLI}
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="2"
          style={carouselIndicatorsLI}
        ></li>
      </ol>
      <div className="carousel-inner" style={carouselImg}>
        <div className="carousel-item active">
          <a href="https://www.uniqlo.com/us/en/news/topics/2020050801/">
            <img src={carousel1} className="d-block w-100" alt="clothes1" />
          </a>
        </div>
        <div className="carousel-item" style={carouselImg}>
          <img src={clothes1} className="d-block w-100" alt="clothes2" />
        </div>
        <div className="carousel-item" style={carouselImg}>
          <img src="" className="d-block w-100" alt="clothes3" />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
        style={carouselControlsLeft}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
        style={carouselControlsRight}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Carousel;
