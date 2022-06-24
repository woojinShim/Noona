import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("lat, lon", lat, lon);
    });
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div className="App">{console.log("HIIIIII")}</div>;
}

export default App;
