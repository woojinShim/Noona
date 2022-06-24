import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const getCurrentLocation = () => {
    console.log("getCurrentLocation");
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return <div className="App">{console.log("HIIIIII")}</div>;
}

export default App;
