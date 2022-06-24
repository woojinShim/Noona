import React from "react";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Show ProductDetailPage {id}</h1>
    </div>
  );
};
