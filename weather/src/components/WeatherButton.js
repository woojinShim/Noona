import React from "react";
import { Button } from "react-bootstrap";

export const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div>
      <Button variant="primary" onClick={() => handleCityChange("current")}>
        Curretn Location
      </Button>

      {cities.map((item) => (
        <Button variant="primary" onClick={() => setCity(item)}>
          {item}
        </Button>
      ))}
    </div>
  );
};
