import React from "react";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
  },
}));

const InputTextField = ({
  label,
  input,
  value,
  meta: { touched, invalid, error },
  ...custom
}) => {
  
  const classes = useStyles();

  return (
    <FormControl className={classes.root} fullWidth variant="outlined">
      <InputLabel>{label}</InputLabel>
      <OutlinedInput
        label={label}
        placeholder={label}
        error={touched && invalid}
        {...input}
        {...custom}
      />
    </FormControl>
  );
};

export default InputTextField;
