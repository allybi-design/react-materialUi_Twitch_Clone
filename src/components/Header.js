import React, { useState, useEffect, useRef } from "react";

import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import MenuDrawer from "components/MenuDrawer";
import FaIcon from "components/Fa-icon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const bodyClicked = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", bodyClicked);

    return () => {
      document.body.removeEventListener("click", bodyClicked);
    };
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div ref={ref} className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <FaIcon icon="fas fa-bars" />
          </IconButton>

          <Typography variant="h6" className={classes.title}>
            Material-Ui-Twitch Clone
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <MenuDrawer
        drawerState={open}
        closeDrawer={handleDrawerClose}
        onClick={handleDrawerOpen}
      />
    </div>
  );
};

export default ButtonAppBar;
