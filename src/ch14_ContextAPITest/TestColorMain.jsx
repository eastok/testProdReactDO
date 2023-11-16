import React from "react";
import { ColorProvider } from "./testColor";
import TestColorBox from "./TestColorBox";
import TestSelectColors from "./TestSelectColors";

const TestColorMain = () => {
  return (
    <ColorProvider>
      <TestSelectColors />
      <TestColorBox />
    </ColorProvider>
  );
};

export default TestColorMain;
