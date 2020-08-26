import React from "react";
import history from "../history";

import {
  Typography,
  CardContent,
  CardActions,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "components/Model";
import Button from "components/Button";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
    textAlign: "center",
  },
});

const onDismiss = () => history.goBack();

const StreamDeletePage = (props) => {
  const classes = useStyles();

  const Content = (
    <React.Fragment>
      <CardHeader className={classes.title} title={"Confirm Delete Stream"} />
      <CardContent>
        <Typography className={classes.pos} color="textPrimary" variant="body1">
          Are you sure you wish to Delete stream.
        </Typography>
        <Typography className={classes.pos} color="textSecondary" variant="body2">
          ID: ${props.match.params.id}`
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="red"
          onClick={() => props.onDeleteStream(props.match.params.id)}
        >
          Delete
        </Button>
        <Button size="small" onClick={onDismiss}>
          Cancel
        </Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <Modal open={true} onDismiss={onDismiss}>
      {Content}
    </Modal>
  );
};

export default StreamDeletePage;
