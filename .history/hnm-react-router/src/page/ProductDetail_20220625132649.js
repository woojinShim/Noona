import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  let { id } = useParams();
  const getProductDetail = () => {
    let url = `http://localhost:5000/products/${id}`;
  };
  useEffect(() => {
    getProductDetail;
  }, []);
  return <div>ProductDetail</div>;
};
