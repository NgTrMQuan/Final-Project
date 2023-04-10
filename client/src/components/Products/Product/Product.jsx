import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
    const navigate = useNavigate();


    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img src={process.env.REACT_APP_STRIPE_APP_DEV_URL + data.img.data[0].attributes.url} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">${data.price}</span>
                <span className="desc">${data.desc}</span>
            </div>
        </div>
    );
};

    

export default Product;
