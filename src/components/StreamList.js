import React, { useEffect } from "react";

import {
  Button,
  // Checkbox,
  // IconButton,
  List,
  ListItem,
  ListItemText,
  // ListItemIcon,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";
// import CommentIcon from "@material-ui/icons/Comment";
import { makeStyles } from "@material-ui/core/styles";

import FaIcon from "components/Fa-icon";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      flexGrow: 1,
    },
  },
  listPadding: {
    margin: "0rem",
    paddingBottom: "0.25rem",
  },
}));

const StreamList = (props) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  useEffect(() => {
    props.onFetchStreams();
  }, []);

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

  const disabled = (id) => {
    return id !== props.currentUserId
  }

  return (
    <div>
      <h1>Streams</h1>
      <h2>Current UserId: {props.currentUserId}</h2>
      <div className={classes.root}>
        <Divider />
        <List>
          {props.streams.map((stream) => {
            return (
              <React.Fragment key={stream.id}>
                <ListItem
                  role={undefined}
                  dense
                  button
                  onClick={handleToggle(stream)}
                  // onClick={() => console.log(stream.id)}
                >
                  <FaIcon icon="fas fa-camera fa-4x" />
                  <ListItemText
                    primary={stream.title}
                    secondary={stream.description}
                  />
                  {/* <ListItemIcon>
                    <Checkbox
                      edge="start"
                      checked={checked.indexOf(stream) !== -1}
                      tabIndex={-1}
                      disableRipple
                      inputProps={{ "aria-labelledby": stream.id }}
                    />
                  </ListItemIcon> */}
                  <ListItemSecondaryAction>
                    <Button style={{marginLeft: "1rem"}} variant="outlined" disabled={disabled(stream.userId)}>
                      Delete
                      <FaIcon icon="fa fa-trash" />
                    </Button>
                    <Button style={{marginLeft: "1rem"}} variant="outlined" disabled={disabled(stream.userId)}>
                      Edit
                      <FaIcon icon="far fa-edit" />
                    </Button>
                    {/* <IconButton edge="end" aria-label="comments">
                      <CommentIcon />
                    </IconButton> */}
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
        </List>
      </div>
    </div>
  );
};

export default StreamList;
