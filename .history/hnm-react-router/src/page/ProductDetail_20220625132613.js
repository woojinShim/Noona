import React, { useEffect } from "react";
import {useParams}

export const ProductDetail = () => {
  const getProductDetail = () => {
    let url = `http://localhost:5000/products/${}`;
  };
  useEffect(() => {
    getProductDetail;
  }, []);
  return <div>ProductDetail</div>;
};
