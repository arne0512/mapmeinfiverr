import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import DoneIcon from '@material-ui/icons/Done';
import ButtonCommon from "../../common/ButtonCommon";

//coin du style
const StyledBadge = withStyles((theme) => ({
  badge: {
    width: "15px",
    height: "15px",
    borderRadius: "40px",
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "200px",
    height: "200px",
  },
}));
//bouchon

const profile = [
    {nom: 'Janne', }
];
export default function Profile() {
  const classes = useStyles();

  return (
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
        <ButtonCommon action="contacter" />

      
    </div>
  );
}
