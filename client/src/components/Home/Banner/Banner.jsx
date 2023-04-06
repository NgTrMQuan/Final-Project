import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";
import Product from "../../Products/Product/Product";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Hi !</h1>
                    <p>
                       WELCOME TO MY WEBSITE . WE PROVIDE THE TECHNOLOGY DEVICES WHICH ARE HEADPHONE WITH THE BEST PRICE IN THE WORLD
                    </p>
                    <div className="ctas">
                        <button>Read More</button>
                        <Product text="shop Now"/>
                    </div>
                    <div class="pyramid-loader">
                        <div class="wrapper">
                            <span class="side side1"></span>
                            <span class="side side2"></span>
                            <span class="side side3"></span>
                            <span class="side side4"></span>
                            <span class="shadow"></span>
                        </div>  
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt=""/>
            </div>
        </div>
    );
};

export default Banner;
