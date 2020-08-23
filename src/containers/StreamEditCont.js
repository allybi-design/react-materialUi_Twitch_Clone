import React from "react";
import { connect } from "react-redux";
import _ from "lodash"
import { upDateStreamById } from "store/streams/actions";
import { getStream } from "store/streams/selectors";
import StreamForm from "components/StreamForm";

// const StreamEditCont = (props) => <StreamForm initialValues={{title: "dfdfss", description: "dfsdaffdasfd"}} {...props} />;

const StreamEditCont = (props) => <StreamForm initialValues={_.pick(props.stream, "title", "description")} {...props} />;

const mapStateToProps = (state, { match }) => ({ 
  stream: getStream(state, match.params.id)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (values, id) => dispatch(upDateStreamById(values, id))
  
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamEditCont);
