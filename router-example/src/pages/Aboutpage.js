import React from "react";
import { useNavigate } from "react-router-dom";

export const Aboutpage = () => {
  const usenavigate = useNavigate();

  const goToHomePage = () => {
    usenavigate("/");
  };

  return (
    <div>
      <h1>aboutPage</h1>
      <button onClick={goToHomePage}>go to home page</button>
    </div>
  );
};
