import React from "react";
import { connect } from "react-redux";
import { getStream } from "store/streams/selectors";
import {fetchStreamById} from "store/streams/actions"

// import { fetchStreams} from "store/streams/actions";
import StreamShowPage from "pages/StreamShowPage";

const StreamShowPageContainer = (props) => <StreamShowPage {...props} />;

const mapStateToProps = (state, {match}) => ({
  stream: getStream(state,  match.params.id),
});

const mapDispatchToProps = (dispatch, {match}) => ({
  onLoadfetchStream: () => dispatch(fetchStreamById(match.params.id)),  
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamShowPageContainer);

