import React, { useEffect } from "react";

import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import FaIcon from "components/Fa-icon";
import Button from "components/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      flexGrow: 1,
    },
  },
  listPadding: {
    margin: "0rem",
    paddingBottom: "0.25rem",
  },
}));

const StreamList = ({
  streams,
  currentUserId,
  onFetchStreams,
  onDeleteStream,
  history,
}) => {
  const classes = useStyles();

  useEffect(() => {
    onFetchStreams();
  }, [onFetchStreams]);

  const handleDelete = (id) => {
    history.push(`/streams/delete/${id}`);
  };

  const handleEdit = (id) => {
    history.push(`/streams/edit/${id}`);
  };

  const disabled = (id) => {
    return id !== currentUserId;
  };

  return (
    <div>
      <h1>Streams</h1>
      <h2>Current User Id: {currentUserId}</h2>
      <div className={classes.root}>
        <Divider />
        <List>
          {streams.map((stream) => {
            return (
              <React.Fragment key={stream.id}>
                <ListItem
                  role={undefined}
                  dense
                  button
                  onClick={() => history.push(`/streams/show/${stream.id}`)}
                >
                  <FaIcon icon="fas fa-camera fa-4x" />
                  <ListItemText
                    primary={stream.title}
                    secondary={stream.description}
                  />
                  <ListItemSecondaryAction>
                    <Button
                      onClick={() => handleDelete(stream.id)}
                      color="red"
                      variant="outlined"
                      disabled={disabled(stream.userId)}
                    >
                      Delete
                      <FaIcon icon="fa fa-trash" />
                    </Button>
                    <Button
                      variant="outlined"
                      disabled={disabled(stream.userId)}
                      onClick={() => handleEdit(stream.id)}
                    >
                      Edit
                      <FaIcon icon="far fa-edit" />
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </List>

        {currentUserId && (
          <Button
            onClick={() => history.push("/streams/new")}
            variant="contained"
            color="green"
          >
            <FaIcon icon="fas fa-folder-plus" />
            Create New Stream
          </Button>
        )}
      </div>
    </div>
  );
};

export default StreamList;
