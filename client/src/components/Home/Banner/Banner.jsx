import React from "react";
import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import { useNavigate } from "react-router-dom";

const Banner = ({ onShopNowClick }) => {
    const handleShopNowClick = () => {
      onShopNowClick();
    };
    const navigate = useNavigate();
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Hi !</h1>
          <p>
            WELCOME TO MY WEBSITE . WE PROVIDE THE TECHNOLOGY DEVICES WHICH ARE
            HEADPHONE WITH THE BEST PRICE IN THE WORLD
          </p>
          <div className="ctas">
            <button onClick={() => navigate("/intro")}>Read More</button>
            <button onClick={onShopNowClick}>Shop Now</button>
          </div>
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
