import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { WeatherBox } from "./components/WeatherBox";
import { WeatherButton } from "./components/WeatherButton";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=985cb6eb52cf2db6fbc6ae7a2bbc73e5`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div className="App">
      <WeatherBox />
      <WeatherButton />
    </div>
  );
}

export default App;
