import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme)=> ({
    button: {
        margin: theme.spacing(1),
      borderRadius: "30px",
      backgroundColor: "#B6C867",
      color: "white",
      border: "none",
      width: "200px",
      height: "45px",
      marginTop: '30px',
      textTransform: "uppercase",
      "&:hover": {
        backgroundColor: "#01937C",
      },
    }
}))
function ButtonCommon({action}) {
    const classes = useStyles();

    return (
        <div>
            <button className={classes.button} >{action}</button>
        </div>
    );
}

export default ButtonCommon;