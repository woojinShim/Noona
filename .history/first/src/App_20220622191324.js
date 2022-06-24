import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("useEffect 1");
  }, []);

  useEffect(() => {
    console.log("use2", counter);
  }, [counter]);

  return (
    <>
      {console.log("render123")}
      <div>{counter}</div>
      <button onClick={increase}>클릭!</button>
    </>
  );
}

export default App;
