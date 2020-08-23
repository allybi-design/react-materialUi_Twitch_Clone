import React from "react";
import { connect } from "react-redux";
import { postStream } from "store/streams/actions";
import StreamForm from "components/StreamForm";

const StreamCreateCont = (props) => <StreamForm {...props} />;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values) => dispatch(postStream(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamCreateCont);
