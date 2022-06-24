import logo from "./logo.svg";
import "./App.css";
import Box from "./component/Box";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
 
  return (
    <>
      <div>{counter}</div>
      <button onClick={increase}>클릭!</button>
    </>
  );
}

export default App;
