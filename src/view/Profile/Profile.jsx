import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CardHeader } from "@material-ui/core";
import { green } from '@material-ui/core/colors';
import Avatar from "@material-ui/core/Avatar";
<<<<<<< HEAD
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
=======
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BookmarkIcon from '@material-ui/icons/Bookmark';
import StarsIcon from '@material-ui/icons/Stars';
import { Link } from "react-router-dom";
>>>>>>> origin/dev


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

<<<<<<< HEAD
// const profile = [
//     {nom: 'Janne', }
// ];
=======
>>>>>>> origin/dev
export default function Profile() {
  const classes = useStyles();

  return (
<<<<<<< HEAD
    <div>
      {/* avatar */}
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
      >
        <Avatar className={classes.root} alt="avatar" src="/avatar.jpg" />
      </StyledBadge>
      
      {/* infos */}
      <Typography variant="h4">Jane Doe</Typography>
      <Typography variant="h6">Designer UI</Typography>
      <Typography variant="h7">Texas, USA</Typography><br/>
      <Typography variant="h7"><DoneIcon/>Last minute work</Typography><br/>
      <Typography variant="h7"><DoneIcon/>Like to collaborate</Typography>
        <button>contacter</button>
=======
    <Card className={classes.root}>
      <Avatar className={classes.avatar} alt="avatar" src="/avataryellow.jpg" />

      <CardHeader title="Val JAY" subheader="Designer UI" />
>>>>>>> origin/dev

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
          <StarsIcon style={{ color: green[500] }} />
          +300 works done
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
