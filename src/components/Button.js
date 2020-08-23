import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MuiButton from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: (props) =>
      props.color === 'red'
        ? 'linear-gradient(top, #DD380D, #B12E0B)'
        : 'linear-gradient(top, #99C624, #4E6611)',
    border: 5,
    borderRadius: 4,
    boxShadow: '0 3px 5px 2px rgba(0,0,0, .3)',
    color: 'white',
    height: 48,
    padding: '0 1.5rem',
    margin: "1rem"
  },
});

const Button = (props) => {
  const { color, ...other } = props;
  const classes = useStyles(props);
  return <MuiButton className={classes.root} {...other} />;
}

export default Button 
