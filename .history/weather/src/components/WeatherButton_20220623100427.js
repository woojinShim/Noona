import React from "react";
import { Button } from "react-bootstrap";

export const WeatherButton = ({ cities }) => {
  console.log(cities);
  return (
    <div>
      <Button variant="primary">Curretn Location</Button>{" "}
      <Button variant="primary">New York</Button>{" "}
      <Button variant="primary">Seoul</Button>{" "}
    </div>
  );
};
