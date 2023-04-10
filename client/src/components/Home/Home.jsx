import React, { useEffect, useContext, useRef } from "react";
import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

const getProducts = (setProducts) => {
  fetchDataFromApi("/api/products?populate=*").then((res) => {
    setProducts(res);
  });
};

const getCategories = (setCategories) => {
  fetchDataFromApi("/api/categories?populate=*").then((res) => {
    setCategories(res);
  });
};

const Home = () => {
  const { products, setProducts, categories, setCategories } = useContext(
    Context
  );

  const productsRef = useRef(null);

  useEffect(() => {
    getProducts(setProducts);
    getCategories(setCategories);
  }, [setProducts, setCategories]);

  const handleShopNowClick = () => {
    productsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Banner onShopNowClick={handleShopNowClick} />
      <div className="main-content" ref={productsRef}>
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
