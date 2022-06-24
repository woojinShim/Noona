import { useState } from "react";
import "./App.css";
import Box from "./components/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://etherrock.com/0.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://w.namu.la/s/13142cc3185e8aab50bc52e53ed9c38d201e9a1b7f5ce073b4d5df348695ca4141f88267baddde34ebd30b789aafa3cf84e8e96b9382bc55678a0e3aa62e2b5f3b9495371774d7ebf89908543a7c6054",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    console.log("선택됨", userChoice);
  };

  return (
    <>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </>
  );
}

export default App;
