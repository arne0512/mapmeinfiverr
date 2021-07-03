import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    logo: {
        width: '150px',
        height: '150px',
        marginLeft: '46%',
        marginTop:'50px'
    }
}))
function Header(props) {
    const classes = useStyles();
    return (
        <div className="header">
            <img src={process.env.PUBLIC_URL+ '/Green_RGB.png'} alt="" className={classes.logo} />

        </div>
    );
}

export default Header;