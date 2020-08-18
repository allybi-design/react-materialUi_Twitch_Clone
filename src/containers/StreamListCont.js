import React from "react";
import { connect } from "react-redux";
// import { getStreams } from "store/streams/selectors";
import { fetchStreams } from "store/streams/actions";
import StreamList from "components/StreamList";

const StreamListContainer = (props) => <StreamList {...props} />;

const mapStateToProps = (state) => {
  // return {streams: Object.values(state.streams)}
};

const mapDispatchToProps = (dispatch) => ({
  onFetchStreams: () => dispatch(fetchStreams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamListContainer);
