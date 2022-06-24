import React from "react";
import { Button } from "react-bootstrap";

export const WeatherButton = ({ cities }) => {
  console.log(cities);
  return (
    <div>
      <Button variant="primary">Curretn Location</Button>
      {cities.map((item) => (
        <Button variant="primary">{item}</Button>
      ))}
    </div>
  );
};
