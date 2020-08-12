import React from "react";
import { connect } from "react-redux";
import { getCounter } from "../store/selectors";
import { incCounter, decCounter } from "../store/actions";
import Counter from "../components/Counter";

const CounterContainer = (props) => <Counter {...props} />;

const mapStateToProps = (state) => ({
  //call selectors here
  counter: getCounter(state)
});

const mapDispatchToProps = (dispatch) => ({
  // call actions here
  onIncCounter: () => dispatch(incCounter()),
  onDecCounter: () => dispatch(decCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
