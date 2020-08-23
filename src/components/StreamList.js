import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Checkbox,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
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
  const [checked, setChecked] = React.useState([0]);

  useEffect(() => {
    onFetchStreams();
  }, [onFetchStreams]);

  const handleToggle = (stream) => () => {
    const currentIndex = checked.indexOf(stream);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(stream);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleDelete = (id) => {
    onDeleteStream(id);
  };

  const disabled = (id) => {
    return id !== currentUserId;
  };

  return (
    <div>
      <h1>Streams</h1>
      <h2>Current UserId: {currentUserId}</h2>
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
                  onClick={handleToggle(stream)}
                >
                  <FaIcon icon="fas fa-camera fa-4x" />
                  <ListItemText
                    primary={stream.title}
                    secondary={stream.description}
                  />
                  <ListItemSecondaryAction>
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(stream) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": stream.id }}
                      />
                    </ListItemIcon>
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
                    >
                      <Link to={`/streams/edit/${stream.id}`}>EDIT</Link>
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
