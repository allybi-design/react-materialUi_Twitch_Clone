import React from "react";
import ReactDOM from "react-dom";

import {
  Backdrop,
  Card,
  CardHeader,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import Button from "components/Button";
const useStyles = makeStyles({
  root: {
    minWidth: 450,
  },
  title: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
    textAlign: "center",
  },
});

const Model = () => {
  const classes = useStyles();
  return ReactDOM.createPortal(
    <Backdrop className={classes.backdrop} open={true}>
      <Card className={classes.root}>
        <CardHeader></CardHeader>
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            Confirm Delete Stream
          </Typography>
          <Typography className={classes.pos} color="textSecondary" variant="body1">
            Are you sure you wish to Delete this stream
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="red">
            Delete
          </Button>
          <Button size="small">Cancel</Button>
        </CardActions>
      </Card>
    </Backdrop>,
    document.querySelector("#modal")
  );
};

export default Model;
