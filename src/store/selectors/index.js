export const initialState = {
  counter: 10
}

export const getCounter = (state = initialState) => state.counter || initialState.counter;