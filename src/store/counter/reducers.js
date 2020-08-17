import { initialState } from "./selectors";

import { INC_COUNTER, DEC_COUNTER } from "./actions";

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};

export default counterReducer;