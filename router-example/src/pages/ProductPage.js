import React from "react";
import { useSearchParams } from "react-router-dom";

export const ProductPage = () => {
  let [query, setQuery] = useSearchParams();
  console.log(query.get("q"));
  return (
    <div>
      <h1>ProductPage</h1>
    </div>
  );
};
