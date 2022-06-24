import React from "react";

export const WeatherBox = ({ weather }) => {
  console.log("weather", weather);
  return (
    <div className="weather-box">
      <div>seoul</div>
      <h2>30</h2>
      <h3>sky</h3>
    </div>
  );
};
