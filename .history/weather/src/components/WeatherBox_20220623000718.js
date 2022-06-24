import React from "react";

export const WeatherBox = ({ weather }) => {
  console.log("weather?", weather);
  return (
    <div className="weather-box">
      <div>{weather?.name}</div>
      <h2>{weather?.main.temp}도</h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};
