import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardHeader } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import Popover from "@material-ui/core/Popover";
import {Link} from "react-router-dom";
import { Marker } from 'react-simple-maps';

const useStyles = makeStyles((theme) => ({
  //centrer card material ui
  root: {
    maxWidth: 500,
    margin: "auto",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justify: "center",
  },
  avatar: {
    marginTop: "10px",
    width: "200px",
    height: "200px",
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "30px",
    backgroundColor: "#1dbf73",
    color: "white",
    border: "none",
    width: "200px",
    height: "45px",
    marginTop: "30px",
    textTransform: "uppercase",
    "&:hover": {
      backgroundColor: "#003912",
    },
  },
}));

export default function Thumbnail() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
 
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card className={classes.root}>
          <Avatar className={classes.avatar} alt="avatar" src="/avatar.jpg" />

          <CardHeader title="Janice JAY" subheader="Designer UI" />

          <CardContent variant="body2">
            <Typography>
              <SupervisorAccountIcon style={{ color: green[500] }} />
              Disponible
            </Typography>
          </CardContent>
          <Link to="/profile">
            <button className={classes.button}>Contacter</button>
          </Link>
        </Card>
      </Popover>
    </>
  );
}
