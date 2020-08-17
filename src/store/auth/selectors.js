export const initState = {
  isSignedIn: null,
  userId: null,
};

export const isSignedIn = (state = initState) => state.auth.isSignedIn
export const getUserId = (state = initState) => state.auth.userId