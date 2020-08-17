export const initState = {
  isSignedIn: null,
  userId: null,
};

export const isSignedIn = (state = initState) => state.Auth.isSignedIn
export const getUserId = (state = initState) => state.Auth.userId