import React from "react";
import history from "../history";

import {
  // Checkbox,
  List,
  ListItem,
  ListItemText,
  // ListItemIcon,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";

import FaIcon from "components/Fa-icon";
import Button from "components/Button";

class StreamList extends React.Component {
  // const [checked, setChecked] = useState([0]);

  // useEffect(() => {
  //   onFetchStreams();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // handleToggle = (stream) => () => {
  //   const currentIndex = checked.indexOf(this.props.stream);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(stream);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }
  //   setChecked(newChecked);
  // };

  componentDidMount() {
    this.props.onFetchStreams();
  }

  handleDelete = (id) => {
    this.props.onDeleteStream(id);
  };

  disabled = (id) => {
    return id !== this.props.currentUserId;
  };

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <React.Fragment>
          <Button
            onClick={() => history.push(`/streams/delete/${stream.id}`)}
            color="red"
            variant="outlined"
            // disabled={disabled(stream.userId)}
          >
            Delete
            <FaIcon icon="fa fa-trash" />
          </Button>
          <Button
            onClick={() => history.push(`/streams/edit/${stream.id}`)}
            variant="outlined"
            // disabled={disabled(stream.userId)}
          >
            EDIT
            <FaIcon icon="far fa-edit" />
          </Button>
        </React.Fragment>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Streams</h1>
        <h2>Current UserId: {this.props.currentUserId}</h2>
        <div>
          <Divider />
          <List>
            {this.props.streams.map((stream) => {
              return (
                <React.Fragment key={stream.id}>
                  <ListItem
                    role={undefined}
                    dense
                    button
                    // onClick={handleToggle(stream)}
                  >
                    <FaIcon icon="fas fa-camera fa-4x" />
                    <ListItemText
                      primary={stream.title}
                      secondary={stream.description}
                    />
                    <ListItemSecondaryAction>
                      {/* <ListItemIcon>
                        <Checkbox
                          edge="start"
                          // checked={checked.indexOf(stream) !== -1}
                          tabIndex={-1}
                          disableRipple
                          inputProps={{ "aria-labelledby": stream.id }}
                        />
                      </ListItemIcon> */}

                      {this.renderAdmin(stream)}
                    </ListItemSecondaryAction>
                  </ListItem>
                  <Divider />
                </React.Fragment>
              );
            })}
          </List>

          {this.props.currentUserId && (
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
  }
}

export default StreamList;
