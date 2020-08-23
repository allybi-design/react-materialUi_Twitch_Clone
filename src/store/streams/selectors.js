export const initialState = {}

export const getStreams = (state = initialState) => Object.values(state.streams)
export const getStream = (state = initialState, id) => state.streams[id]