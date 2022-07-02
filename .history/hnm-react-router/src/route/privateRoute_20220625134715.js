import React from "react";
import { Navigate } from "react-router-dom";
import { ProductDetail } from "../page/ProductDetail";

export const privateRoute = ({ authenticate }) => {
  return authenticate == true ? <ProductDetail /> : <Navigate to="/login" />;
};
