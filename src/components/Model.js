import React from "react";
import ReactDOM from "react-dom";

import { Backdrop, Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 450,
  },
});

const Model = (props) => {
  const classes = useStyles();
  return ReactDOM.createPortal(
    <Backdrop onClick={props.onDismiss} open={props}>
      <Card className={classes.root} onClick={(e) => e.stopPropagation()}>
        {props.children}
      </Card>
    </Backdrop>,
    document.querySelector("#modal")
  );
};

export default Model;
