import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={985cb6eb52cf2db6fbc6ae7a2bbc73e5}`;
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div className="App">{console.log("HIIIIII")}</div>;
}

export default App;
