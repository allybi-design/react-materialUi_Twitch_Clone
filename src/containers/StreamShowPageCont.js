import React from "react";
import { connect } from "react-redux";
import { getStream } from "store/streams/selectors";

// import { fetchStreams} from "store/streams/actions";
import StreamShowPage from "pages/StreamShowPage";

const StreamShowPageContainer = (props) => <StreamShowPage {...props} />;

const mapStateToProps = (state, {match}) => ({
  stream: getStream(state,  match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  // onFetchStreams: () => dispatch(fetchStreams()),
  
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamShowPageContainer);

