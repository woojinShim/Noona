import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Homepage = () => {
  const navi = useNavigate();
  const goToProductPage = () => {
    navi("/products?q=pants");
  };
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/about">go to about page</Link>
      <button onClick={goToProductPage}>go to product page</button>
    </div>
  );
};
