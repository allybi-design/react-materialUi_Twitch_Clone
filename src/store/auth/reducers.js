import { Types } from "./actions";
import { initState } from "./selectors";

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case Types.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case Types.SIGN_IN_FAIL:
      return { ...state, isSignedIn: false };
    case Types.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    case Types.SIGN_OUT_FAIL:
      return { ...state, isSignedIn: true };
    default:
      return state;
  }
};

export default authReducer;
