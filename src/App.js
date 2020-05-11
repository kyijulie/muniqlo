import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import MenuBar from "./components/MenuBar/MenuBar";
import { BrowserRouter } from "react-router-dom";
import Carousel from "./components/MainCenter/Carousel";
import Recommendations from "./components/MainCenter/Recommendations";
import FeaturedNav from "./components/Featured/FeaturedNav";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <MenuBar />
          <Carousel />
          <Recommendations />
          <FeaturedNav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
