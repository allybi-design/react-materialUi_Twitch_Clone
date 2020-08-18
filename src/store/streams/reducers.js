import _ from "lodash";

import { initialState } from "./selectors";
import { Types } from "./actions";

const streamReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.FETCH_STREAMS:
      return {
        ..._.mapKeys(payload, "id")
      };
    case Types.FETCH_STREAM_BY_ID:
      return {
        ...state,
        [payload.id]: payload,
      };
    case Types.POST_STREAM:
      return {
        ...state,
        [payload.id]: payload,
      };
    case Types.UPDATE_STREAM:
      return {
        ...state,
        [payload.id]: payload,
      };
    case Types.DELETE_STREAM_BY_ID:
      return _.omit(state, payload);
    case Types.STREAM_FAIL:
      return {
        ...state,
        [payload.id]: payload,
      };
    default:
      return state;
  }
};

export default streamReducer;
