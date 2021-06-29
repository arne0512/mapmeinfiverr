import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { teal } from "@material-ui/core/colors";
import ButtonCommon from "../../common/ButtonCommon";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  all: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginTop: "10%",
    alignItems: "center",
    "& button": {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[300],
      "&:hover": {
        backgroundColor: teal[700],
      },
    },
  },
  formControl: {
    margin: theme.spacing(4),
    minWidth: 300,
  },
}));

export default function Search() {
  const classes = useStyles();
  //search for freelance
  const [freelancer, setFreelancer] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleChange = (event) => {
    setFreelancer(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  //set timing
  const [timing, setTiming] = React.useState("");
  const [openTime, setOpenTime] = React.useState(false);
  const handleChangeTime = (event) => {
    setTiming(event.target.value);
  };
  const handleCloseTime = () => {
    setOpenTime(false);
  };
  const handleOpenTime = () => {
    setOpenTime(true);
  };

  //localisation
  const [loc, setLoc] = React.useState("");
  const [openLoc, setOpenLoc] = React.useState(false);
  const handleChangeLoc = (event) => {
    setLoc(event.target.value);
  };
  const handleCloseLoc = () => {
    setOpenLoc(false);
  };
  const handleOpenLoc = () => {
    setOpenLoc(true);
  };
  return (
    <div className={classes.all}>
      <FormControl className={classes.formControl} variant="outlined">
      What are you searching for?
        <Select
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={freelancer}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Developer</MenuItem>
          <MenuItem value={20}>Designer</MenuItem>
          <MenuItem value={30}>Translator</MenuItem>
        </Select>
      </FormControl>
      <br />

      <FormControl className={classes.formControl} variant="outlined">
       When do you need it to be done?
        <Select
          open={openTime}
          onClose={handleCloseTime}
          onOpen={handleOpenTime}
          value={timing}
          onChange={handleChangeTime}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>in 6 hours!</MenuItem>
          <MenuItem value={20}>in 12 hours</MenuItem>
          <MenuItem value={30}>in 24 hours</MenuItem>
        </Select>
      </FormControl>

      <br />

      <FormControl className={classes.formControl} variant="outlined">
        Where is your location?
        <Select
          open={openLoc}
          onClose={handleCloseLoc}
          onOpen={handleOpenLoc}
          value={loc}
          onChange={handleChangeLoc}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>France</MenuItem>
          <MenuItem value={20}>Budapest</MenuItem>
          <MenuItem value={30}>Iceland</MenuItem>
        </Select>
      </FormControl>
      <br />
      <Link to="/map">
      <ButtonCommon action="Valider" />
      </Link>
    
    </div>
  );
}