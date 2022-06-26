import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ item }) => {
  const navi = useNavigate();
  const showDetail = () => {
    navi(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img}></img>
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>${item?.price}</div>
      <div>{item?.new == true ? "신제품" : ""}</div>
    </div>
  );
};
