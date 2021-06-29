import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardHeader } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import { Link } from "react-router-dom";


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

export default function Profile() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Avatar className={classes.avatar} alt="avatar" src="/avatargreen.jpg" />

      <CardHeader title="Janice JAY" subheader="Designer UI" />

      <CardContent variant="body2">
        <Typography>
          <LocationOnIcon style={{ color: green[500] }} />
          Texas, USA
        </Typography>
        <Typography>
          <BookmarkIcon style={{ color: green[500] }} />
          Jul 2020
        </Typography>
        <Typography>
          <CheckCircleIcon style={{ color: green[500] }}  />
          Last minute work
        </Typography>
        <Typography>
          <CheckCircleIcon style={{ color: green[500] }}  />
          Like to collaborate
        </Typography>
      </CardContent>
      <Link to="/chat">
      <button className={classes.button}>Contacter</button>
      </Link>
    </Card>
  );
}
