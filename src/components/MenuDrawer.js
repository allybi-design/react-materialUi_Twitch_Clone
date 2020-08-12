import React from "react";
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import { Drawer, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

import FaIcon from "components/Fa-icon"

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  }
}));

const MenuDrawer = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="temporary"
        anchor="left"
        open={props.drawerState}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={props.closeDrawer}>
            <FaIcon icon="fas fa-times-circle" />
          </IconButton>
        </div>

        <Divider />

        <List>
        <ListItem >
            <ListItemIcon>
              <FaIcon icon="far fa-circle" />
            </ListItemIcon>
            <Link to="/">
            <ListItemText primary="Home" />
            </Link>
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <FaIcon icon="far fa-circle" />
            </ListItemIcon>
            <Link to="/streams/new">
            <ListItemText primary="Create New" />
            </Link>
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <FaIcon icon="far fa-circle" />
            </ListItemIcon>
            <Link to="/streams/edit">
            <ListItemText primary="Edit" />
            </Link>
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <FaIcon icon="far fa-circle" />
            </ListItemIcon>
            <Link to="/streams/delete">
            <ListItemText primary="Delete" />
            </Link>
          </ListItem>

          <ListItem >
            <ListItemIcon>
              <FaIcon icon="far fa-circle" />
            </ListItemIcon>
            <Link to="/streams/show">
            <ListItemText primary="Show" />
            </Link>
          </ListItem>
        </List>
        
      </Drawer>
    </div>
  )
}

export default MenuDrawer