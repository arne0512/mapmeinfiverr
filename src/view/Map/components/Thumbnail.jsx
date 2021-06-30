import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardHeader } from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import {Link} from "react-router-dom";


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



  return (

        <Card className={classes.root}>
          <Avatar className={classes.avatar} alt="avatar" src="/avataryellow.jpg" />

          <CardHeader title="Erik Svensson" subheader="Web Developer" />

          <CardContent variant="body2">
            <Typography>
              <SupervisorAccountIcon style={{ color: green[500] }} />
              Available
            </Typography>
          </CardContent>
          <Link to="/profile">
            <button className={classes.button}>See Profile</button>
          </Link>
        </Card>

  );
}
