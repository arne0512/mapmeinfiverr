import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { teal } from '@material-ui/core/colors';
import Map from '../Map/Map';

const useStyles = makeStyles((theme) => ({
  all: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '5%',
    alignItems: 'center',

    '& button': {
      color: theme.palette.getContrastText(teal[500]),
      backgroundColor: teal[300],

      '&:hover': {
        backgroundColor: teal[700],
      },
    },
  },
  formControl: {
    margin: theme.spacing(4),
    minWidth: 300,
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "30px",
    backgroundColor: "#00732e",
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

const Search = () => {
  const classes = useStyles();

  //search for freelance speciality
  const [speciality, setSpeciality] = useState('');

  const handleChangeSpeciality = (e) => {
    setSpeciality(e.target.value);
    // console.log(speciality);
  };

  //search for a timezone
  const [timezone, setTimezone] = useState('');

  const handleChangeTimezone = (e) => {
    setTimezone(e.target.value);
  };

  //search for mission
  const [workform, setWorkform] = useState('');

  const handleChangeWorkform = (e) => {
    setWorkform(e.target.value);
  }

  const handleValidateSearch = (e) => {
    console.log(speciality, timezone);
    setAllShowFreelancers(!showAllFreelancers)
  };

  const [showAllFreelancers, setAllShowFreelancers] = useState(false);
  
  return (
    <>
      <div className={classes.all}>

        <FormControl className={classes.formControl} variant="outlined">
          <p>What are you searching for?</p>
          <Select value={speciality} onChange={handleChangeSpeciality}>
            <MenuItem value={'developer'}>Web Dev</MenuItem>
            <MenuItem value={'designer'}>Design</MenuItem>
            <MenuItem value={'translator'}>Translation</MenuItem>
            <MenuItem value={'cybersecurity'}>Cyber Security</MenuItem>
            <MenuItem value={'data'}>Data</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl} variant="outlined">
          <p>What is your time zone?</p>
          <Select value={timezone} onChange={handleChangeTimezone}>
            <MenuItem value={'Europe'}>Europe</MenuItem>
            <MenuItem value={'America'}>America</MenuItem>
            <MenuItem value={'Asia'}>Asia</MenuItem>
            <MenuItem value={'Africa'}>Africa</MenuItem>
            <MenuItem value={'Oceania'}>Oceania</MenuItem>
          </Select>
        </FormControl>

        <FormControl className={classes.formControl} variant="outlined">
          <p>What kind of mission?</p>
          <Select value={workform} onChange={handleChangeWorkform}>
            <MenuItem value={'collaboration'}>Collaboration</MenuItem>
            <MenuItem value={'subcontracting'}>Subcontracting</MenuItem>
      
          </Select>
        </FormControl>

        <button className={classes.button} onClick={handleValidateSearch}>
          Valider
        </button>
      </div>
      <div>
        <Map speciality={speciality} timezone={timezone}  workform={workform} showAllFreelancers={showAllFreelancers}/>
      </div>
    </>
  );
};

export default Search;
