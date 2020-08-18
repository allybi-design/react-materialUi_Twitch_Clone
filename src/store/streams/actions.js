import Api from "utils/api";

export const Types = {
  POST_STREAM: "POST_STREAM",
  FETCH_STREAMS: "FETCH_STREAMS",
  FETCH_STREAM_BY_ID: "FETCH_STREAM_BY_ID",
  UPDATE_STREAM: "UPDATE_STREAM",
  DELETE_STREAM_BY_ID: "DELETE_STREAM_BY_ID",
  STREAM_FAIL: "STREAM_FAIL",
};

export const fetchStreams = () => async (dispatch) => {
  try {
    const res = await Api.get("/streams");
    dispatch({
      type: Types.FETCH_STREAMS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error
    });
  }
};

export const fetchStreamById = (id) => async (dispatch) => {
  try {
    const res = await Api.get(`/streams/:${id}`);
    dispatch({
      type: Types.FETCH_STREAM_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error
    });
  }
};

export const postStream = (values) => async (dispatch) => {
  try {
    const res = await Api.post("/streams", values);
    console.log(res)
    dispatch({
      type: Types.POST_STREAM,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR - POST STREAM FAIL", error)
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error
    });
  }
};

export const upDateStreamById = (values, id) => async (dispatch) => {
  try {
    const res = await Api.put(`/streams/:${id}`, values);
    dispatch({
      type: Types.UPDATE_STREAM,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error
    });
  }
};

export const deleteStreamById = (id) => async (dispatch) => {
  try {
    await Api.delete(`/streams/:${id}`);
    // NB. on a APi.delete requests there is NO response object returned
    dispatch({
      type: Types.DELETE_STREAM_BY_ID,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error
    });
  }
};
