import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <a href="https://www.facebook.com/profile.php?id=100008237531643">
                        <div className="icon">
                            <FaFacebookF size={14} />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/_min.kuan_/">
                        <div className="icon">
                            <FaInstagram size={14} />
                        </div>
                    </a>
                    <a href="https://www.youtube.com/">
                    <div className="icon">
                        <FaYoutube size={14} />
                    </div>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;
