import React from 'react';
// import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';
import { useContext } from 'react';

import FreelancersContext from '../../contexts/FreelancersContext';

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const useStyles = createUseStyles({
  test: {
    stroke: 'white',
    strokeOpacity: '20',
    strokeWidth: '0.5px',
    fill: '#d0f7e6',
  },
});

const freelancers = [
  {
    id: 1,
    firstname: "Dimitri",
    lastname: "Karkov",
    speciality: "translator",
    localisation: "Saint-Petersbourg",
    coordinates: [30.335099, 59.934280],
    timezone: "Moscow",
    availability: true,
    deadline:"12",
    workform:"collab"
  },
  {
    id: 2,
    firstname: "Joe",
    lastname: "Vegas",
    speciality: "designer",
    localisation: "Los Angeles",
    coordinates: [34.003342, -118.485832],
    timezone: "Los Angeles",
    availability: true,
    deadline:"24",
    workform:"collab"
  },
  {
    id: 3,
    firstname: "Nha",
    lastname: "Vo",
    speciality: "developer",
    localisation: "Natrang",
    coordinates: [12.24507, 109.19432],
    timezone: "Ho Chi Minh",
    availability: true,
    deadline:"12",
    workform:"collab"
  },
  {
    id: 4,
    firstname: "Nha",
    lastname: "Vo",
    speciality: "translator",
    localisation: "Natrang",
    coordinates: [109.19432, 12.24507],
    timezone: "Ho Chi Minh",
    availability: true,
    deadline:"12",
    workform:"collab"
  }
]

function Map() {
  const classes = useStyles();

  //  const [markers, setMarkers] = useState([
  //   { name: 'La Paz', coordinates: [-68.1193, -16.4897] },
  //   { name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
  //   { name: 'Santiago', coordinates: [-70.6693, -33.4489] },
  //  ]);
   
  //  const extractCoordonates = () => {
  //   freelancers.map((marker) => {
  //     markers.push(marker.coordinates);
      
  //   });
  //   console.log(markers);
  // }

  // const handleValidateSearch = () => {
  //   setMarkers([]);
  //   console.log(markers);
  // };

  return (
    <div>
      <div>
        <ComposableMap>
          <ZoomableGroup>
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={classes.test}
                  />
                ))
              }
            </Geographies>
            {freelancers
            .filter((freelance) => freelance.speciality === "translator" && freelance.timezone === 'Moscow')
            .map(({name, coordinates }) => (
        <Marker key={name} coordinates={coordinates}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          
        </Marker>
      ))}
      
          </ZoomableGroup>
        </ComposableMap>
        {/* <button onClick={handleValidateSearch}>Valider</button> */}
      </div>
    </div>
  );
}

export default Map;
