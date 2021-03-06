import React from "react";
import { loadCSS } from "fg-loadcss";
import { makeStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 1rem",
    "& > .fa": {
      margin: theme.spacing(2),
    },
  },
}));

const FaIcon = (props) => {
  const classes = useStyles();

  React.useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <div className={classes.root}>
      <div>
        <Icon className={props.icon} {...props} />
      </div>
    </div>
  );
};

export default FaIcon;
