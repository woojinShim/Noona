import React from "react";

export const ProductCard = ({ item }) => {
  return (
    <div>
      <img src={item?.img}></img>
      <div>Conscious choice</div>
      <div>{item?.title}</div>
      <div>${item?.price</div>
      <div>신제품</div>
    </div>
  );
};
