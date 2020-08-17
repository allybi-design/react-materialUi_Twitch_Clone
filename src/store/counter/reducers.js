import { initialState } from "./selectors";

import { Types } from "./actions";

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.INC_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case Types.DEC_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
