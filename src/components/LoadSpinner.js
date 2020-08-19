import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import FaIcon from "components/Fa-icon";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    left: "0",
    height: "100vh",
    width: "100vw",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  }
}));

const LoadSpinner = () => {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <FaIcon icon="fas fa-spinner fa-10x fa-spin" />      
    </div>
  )
}

export default LoadSpinner