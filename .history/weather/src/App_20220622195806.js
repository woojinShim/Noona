import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const getCurrentLocation = () => {
      console.log("getCurrentLocation");
    };
    getCurrentLocation();
  }, []);
  return <div className="App">{console.log("HIIIIII")}</div>;
}

export default App;
