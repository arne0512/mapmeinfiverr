import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { teal } from '@material-ui/core/colors';
import { useState } from 'react';
import FreelancersContext from '../../contexts/FreelancersContext';


const useStyles = makeStyles((theme) => ({
  all: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: '10%',
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
    borderRadius: '30px',
    backgroundColor: '#B6C867',
    color: 'white',
    border: 'none',
    width: '200px',
    height: '45px',
    marginTop: '30px',
    textTransform: 'uppercase',
    '&:hover': {
      backgroundColor: '#01937C',
    },
  },
}));

 const Search = () => {
  const classes = useStyles();

  //search for freelance
  const [speciality, setSpeciality] = useState('');
  
  const handleChangeSpeciality = (event) => {
    setSpeciality(event.target.value);
    // console.log(speciality);
  };

  //timing
  const [timing, setTiming] = useState('');
  const handleChangeTiming = (event) => {
    setTiming(event.target.value);
    // console.log(timing);
  };

  //timezone
  const [timezone, setTimezone] = useState('');

  const handleChangeTimezone = (event) => {
    setTimezone(event.target.value);
  };

  const handleValidateSearch = (e) => {
    console.log(speciality, timing, timezone);
  };

  return (
    <FreelancersContext.Provider value={{speciality: speciality}}>

    <div className={classes.all}>
      <FormControl className={classes.formControl} variant="outlined">
        <p>What are you searching for?</p>
        <Select value={speciality} onChange={handleChangeSpeciality}>
          <MenuItem value={'developper'}>Developer</MenuItem>
          <MenuItem value={'designer'}>Designer</MenuItem>
          <MenuItem value={'translator'}>Translator</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className={classes.formControl} variant="outlined">
        <p>When do you need it to be done?</p>
        <Select value={timing} onChange={handleChangeTiming}>
          <MenuItem value={6}>in 6 hours!</MenuItem>
          <MenuItem value={12}>in 12 hours</MenuItem>
          <MenuItem value={18}>in 18 hours</MenuItem>
          <MenuItem value={24}>in 24 hours</MenuItem>
        </Select>
      </FormControl>
      <br />
      <FormControl className={classes.formControl} variant="outlined">
        <p>What is your time zone?</p>
        <Select value={timezone} onChange={handleChangeTimezone}>
          <MenuItem value={'paris'}>Paris</MenuItem>
          <MenuItem value={'moscow'}>Moscou</MenuItem>
          <MenuItem value={'pekin'}>Pékin</MenuItem>
        </Select>
      </FormControl>
      <br />
      <button className={classes.button} onClick={handleValidateSearch}>
        Valider
      </button>
    </div> 

    </FreelancersContext.Provider>
  );
}

export default Search;
