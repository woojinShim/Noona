import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  let { id } = useParams();
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getProductDetail;
  }, []);
  return <div>ProductDetail</div>;
};
