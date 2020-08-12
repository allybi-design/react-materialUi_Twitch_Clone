import React from 'react'
import Flex from "styled-flex-component";

const index = (props) => {
  return (
    <Flex center column >
      <h2>Counter</h2>
      <Flex>
        <button onClick={props.onIncCounter}>Inc Counter</button>
        <span>{props.counter}</span>
        <button onClick={props.onDecCounter}>Dec Counter</button>
      </Flex>
    </Flex>
  );
}

export default index
