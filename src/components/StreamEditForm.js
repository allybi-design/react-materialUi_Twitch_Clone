import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { getStream } from "store/streams/selectors";
import { upDateStreamById } from "store/streams/actions";
import { fetchStreams } from "store/streams/actions";

import { makeStyles } from "@material-ui/core/styles";

import InputTextField from "components/InputTextField";
import Button from "components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

const validate = (values) => {
  const errors = {};
  const requiredFields = ["title", "description"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });

  return errors;
};

const StreamForm = (props) => {
  const classes = useStyles();

  console.log(`Props ${props}`);

  const submit = (values) => {
    props.onPostStream(values);
  };

  const { handleSubmit, pristine, submitting } = props;
  return (
    <form className={classes.root} onSubmit={handleSubmit(submit)}>
      <Field
        name="title"
        component={InputTextField}
        classes={classes}
        label="Stream Title"
      />

      {/* <FormControl fullWidth className={classes.margin} variant="outlined"> */}
      <Field
        name="description"
        component={InputTextField}
        label="Stream Description"
      />
      {/* </FormControl> */}

      <Button type="submit" disabled={pristine || submitting}>
        Submit
      </Button>
    </form>
  );
};

const StreamFormWrapper = reduxForm({
  form: "StreamForm", // a unique identifier for this form
  validate,
})(StreamForm);

const mapStateToProps = (state, {match}) => ({
  stream: getStream(state, match.params.id),
});

const mapDispatchToProps = (dispatch) => ({
  onUpDateStreamById: (values, id) => dispatch(upDateStreamById(values, id)),
  onFetchStreams: () => dispatch(fetchStreams()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StreamFormWrapper);
// export default StreamFormWrapper;
