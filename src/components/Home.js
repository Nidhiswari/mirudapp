import React from "react";
import "./Home.css";
import HomeBottom from "./HomeBottom";
import ImageGallery from "./ImageGallery";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home1">
        <div className="bike_info">
          <p>
            <h1 className="brand_text">TRIUMPH </h1>
          </p>
          <h2 className="coloor">SPEED TRIPLE 1200 RR</h2>
          <p className="bike_lines">
          Combining distinctive British elegance and style with exhilarating real-world performance, the Speed Triple 1200 RR is the ultimate sport bike for the road
          </p>

          <Link to="/bikes">
            <button id="browse_bikes">BROWSE MORE</button>
          </Link>
        </div>
      </div>

      <div className="empty"></div>
      <ImageGallery />

      <div className="empty"></div>
      <HomeBottom />
    </div>
  );
}

export default Home;