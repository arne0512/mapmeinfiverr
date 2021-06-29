import React from 'react';
import { useState } from 'react';
import { createUseStyles } from 'react-jss';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Marker,
} from 'react-simple-maps';

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

function Map() {
  const classes = useStyles();

  const [markers, setMarkers] = useState([
    { name: 'Bogota', coordinates: [-74.0721, 4.711] },
    { name: 'Quito', coordinates: [-78.4678, -0.1807] },
    { name: 'Asuncion', coordinates: [-57.5759, -25.2637] },
    { name: 'Paramaribo', coordinates: [-55.2038, 5.852] },
    { name: 'Montevideo', coordinates: [-56.1645, -34.9011] },
    { name: 'Caracas', coordinates: [-66.9036, 10.4806] },
    { name: 'Lima', coordinates: [-77.0428, -12.0464] },
  ]);

  const handleValidateSearch = () => {
    setMarkers([
      { name: 'La Paz', coordinates: [-68.1193, -16.4897] },
      { name: 'Brasilia', coordinates: [-47.8825, -15.7942] },
      { name: 'Santiago', coordinates: [-70.6693, -33.4489] },
    ]);
    console.log(markers);
  };

  return (
    <div>
      <div>
        <ComposableMap width="1200">
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
            {markers.map(({ name, coordinates, markerOffset }) => (
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
        <button onClick={handleValidateSearch}>Valider</button>
      </div>
    </div>
  );
}

export default Map;
