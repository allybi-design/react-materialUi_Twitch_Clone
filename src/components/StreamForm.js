import React from "react";
import { Field, reduxForm } from "redux-form";

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
  console.log(props);
  const classes = useStyles();

  const submit = (values) => {
    props.onSubmit(values, props.match.params.id);
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

      <Field
        name="description"
        component={InputTextField}
        label="Stream Description"
      />

      <Button type="submit" disabled={pristine || submitting}>
        Submit
      </Button>
    </form>
  );
};

export default reduxForm({
  form: "StreamForm", // a unique identifier for this form
  validate,
})(StreamForm);
