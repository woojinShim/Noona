import React from "react";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src="https://w.namu.la/s/13142cc3185e8aab50bc52e53ed9c38d201e9a1b7f5ce073b4d5df348695ca4141f88267baddde34ebd30b789aafa3cf84e8e96b9382bc55678a0e3aa62e2b5f3b9495371774d7ebf89908543a7c6054"
      />
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
