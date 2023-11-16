import React, { useContext } from "react";
import ColorContext from "./testColor";

const TestColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <div>
      <div>
        <div
          style={{
            width: "64px",
            height: "64px",

            background: state.color,
          }}
        ></div>
        <div
          style={{
            width: "32px",
            height: "32px",
            background: state.subcolor,
          }}
        ></div>
        <div
          style={{
            width: "128px",
            height: "128px",
            background: state.subcolor,
          }}
        ></div>
        <div
          style={{
            width: "256px",
            height: "256px",
            background: state.subcolor,
          }}
        ></div>
      </div>
    </div>
  );
};

export default TestColorBox;
