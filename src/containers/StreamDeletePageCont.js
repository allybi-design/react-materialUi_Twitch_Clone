import React from "react";
import { connect } from "react-redux";

import { deleteStreamById } from "store/streams/actions";
import { getStream } from "store/streams/selectors";

import StreamDeletePage from "pages/StreamDeletePage";

const StreamDeletePageCont = (props) => <StreamDeletePage {...props} />;

const mapStateToProps = (state, { match }) => ({
  stream: getStream(state, match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteStream: (id) => dispatch(deleteStreamById(id)),
  // onDeleteStream: (id) => console.log(deleteStreamById(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StreamDeletePageCont);
