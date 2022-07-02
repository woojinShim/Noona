import React from "react";

export const ProductCard = ({ item }) => {
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
