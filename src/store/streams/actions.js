import Api from "utils/api";

export const Types = {
  NEW_STREAM: "NEW_STREAM",
  NEW_STREAM_FAIL: "NEW_STREAM_FAIL",
  GET_STREAMS: "GET_STREAMS",
};

export const newStream = values => async (dispatch) => {
  try {
    await Api.post("/streams", values);
    dispatch({
      type: Types.NEW_STREAM,
      payload: "",
    });
    //window.gapi.auth2.getAuthInstance()
  } catch (error) {
    console.log(error);
    dispatch({
      type: Types.NEW_STREAM_FAIL,
    });
  }
};