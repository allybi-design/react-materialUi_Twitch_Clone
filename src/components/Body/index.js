import React from "react";
import Flex, { FlexItem } from "styled-flex-component";
import Counter from "../../containers/CountCont";

const Body = () => {
  return (
    <Flex center full>
      <Counter />
      <Flex column>
        <h1>h1...size 28px</h1>
        <h2>h2...size 21px</h2>
        <h3>h3...size 16px</h3>
        <h4>h4...size 14px</h4>
        <h5>h5...size 12px</h5>
        <h6>h6...size 11px</h6>
        <p>p...size 14px</p>
        <span>Span...14px</span>
      </Flex>
    </Flex>
  );
};

export default Body;
