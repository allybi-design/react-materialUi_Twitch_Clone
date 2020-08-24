import Api from "utils/api";
import history from "history.js";
import { v4 } from "uuid";

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
      payload: error,
    });
  }
};

export const fetchStreamById = (id) => async (dispatch) => {
  try {
    const res = await Api.get(`/streams/${id}`);
    dispatch({
      type: Types.FETCH_STREAM_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error,
    });
  }
};

export const postStream = (values) => async (dispatch, getState) => {
  try {
    const { userId } = getState().auth;
    const res = await Api.post("/streams", { ...values, userId, id: v4() });
    console.log(res);
    dispatch({
      type: Types.POST_STREAM,
      payload: res.data,
    });

    history.push("/");
  } catch (error) {
    console.log("ERROR - POST STREAM FAIL", error);
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error,
    });
  }
};

export const upDateStreamById = (values, id) => async (dispatch,  getState) => {
  // console.log(values)
  try {
    const { userId } = getState().auth;
    console.log(userId, id)
    const res = await Api.patch(`/streams/${id}`,values);
    dispatch({
      type: Types.UPDATE_STREAM,
      payload: res.data,
    });

    history.push("/");

  } catch (error) {
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error,
    });
  }
};

export const deleteStreamById = (id) => async (dispatch) => {
  console.log(`Deleted stream ${id}`)
  try {
    await Api.delete(`/streams/${id}`);
    // NB. on a APi.delete requests there is NO response object returned
    dispatch({
      type: Types.DELETE_STREAM_BY_ID,
      payload: id,
    });

    history.push("/")
    
  } catch (error) {
    dispatch({
      type: Types.STREAM_FAIL,
      payload: error,
    });
  }
};
