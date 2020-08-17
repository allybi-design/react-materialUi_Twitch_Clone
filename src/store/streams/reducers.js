import { initialState } from "./selectors";
import {Types} from "./actions"


const counterReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case Types.NEW_STREAMS:
      return {
        ...state,
        streams: payload
      };
    
    default:
      return state;
  }
};

export default counterReducer;