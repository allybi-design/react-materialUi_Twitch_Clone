import React from "react";
import { connect } from "react-redux";
import { getStreams } from "store/streams/selectors";
import { getUserId} from "store/auth/selectors"
import { fetchStreams,  deleteStreamById } from "store/streams/actions";
import StreamList from "components/StreamList";

const StreamListContainer = (props) => <StreamList {...props} />;

const mapStateToProps = (state) => ({
  streams: getStreams(state),
  currentUserId: getUserId(state)
});

const mapDispatchToProps = (dispatch) => ({
  onFetchStreams: () => dispatch(fetchStreams()),
  onDeleteStream: (id) => dispatch( deleteStreamById(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamListContainer);

