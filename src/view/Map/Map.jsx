import React from 'react';
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

const freelancers = [
  {
    id: 1,
    firstname: "Joe",
    lastname: "Vegas",
    speciality: "designer",
    localisation: "Los Angeles",
    coordinates: [-118.242766, 34.0033],
    timezone: "America",
    deadline: 6,
    workform: "collaboration"
},
{
    id: 2,
    firstname: "Nha",
    lastname: "Vo",
    speciality: "developer",
    localisation: "Nhatrang",
    coordinates: [109.194, 12.2451],
    timezone: "Asia",
    deadline: 12,
    workform: "subcontracting"     
},
{
    id: 3,
    firstname: "Nelson",
    lastname: "Diaz",
    speciality: "designer",
    localisation: "Bogota",
    coordinates: [-74.0721, 4.711],
    timezone: "America",
    deadline: 18,
    workform: "collaboration"
},
{
    id: 4,
    firstname: "Carlos",
    lastname: "Bueno",
    speciality: "developer",
    localisation: "Quito",
    coordinates: [-78.4678, -0.1807],
    timezone: "America",
    deadline: 24,
    workform: "subcontracting"
},
{
    id: 5,
    firstname: "Dimitri",
    lastname: "Karkov",
    speciality: "translator",
    localisation: "Saint-Pertersburg",
    coordinates: [30.335099, 59.93428],
    timezone: "Europe",
    deadline: 6,
    workform: "collaboration"
},
{
    id: 6,
    firstname: "Diego",
    lastname: "Godin",
    speciality: "designer",
    localisation: "Montevideo",
    coordinates: [-56.1645, -34.9011],
    timezone: "America",
    deadline: 12,
    workform: "subcontracting"
},
{
    id: 7,
    firstname: "Han",
    lastname: "Lee",
    speciality: "developer",
    localisation: "Pékin",
    coordinates: [104.16580199999999, 34.668138],
    timezone: "Asia",
    deadline: 18,
    workform: "collaboration"
},
{
    id: 8,
    firstname: "Ajay",
    lastname: "Punjab",
    speciality: "developer",
    localisation: "Bombay",
    coordinates: [72.8773928, 19.0759899],
    timezone: "Asia",
    deadline: 24,
    workform: "subcontracting"
},
{
    id: 9,
    firstname: "Haresh",
    lastname: "Bumul",
    speciality: "developer",
    localisation: "New Delhi",
    coordinates: [77.2090057, 28.6138954],
    timezone: "Asia",
    deadline: 6,
    workform: "collaboration"
},
{
    id: 10,
    firstname: "Pedro",
    lastname: "Valero",
    speciality: "translator",
    localisation: "Madrid",
    coordinates: [3.7035825, 40.4167047],
    timezone: "Europe",
    deadline: 12,
    workform: "subcontracting"
},
{
    id: 11,
    firstname: "Julien",
    lastname: "Dupond",
    speciality: "translator",
    localisation: "Paris",
    coordinates: [2.3514616, 48.8566969],
    timezone: "Europe",
    deadline: 18,
    workform: "collaboration"
},
{
    id: 12,
    firstname: "Maxime",
    lastname: "Frange",
    speciality: "designer",
    localisation: "Bordeaux",
    coordinates: [-0.5800364, 44.841225],
    timezone: "Europe",
    deadline: 24,
    workform: "collaboration"
},
{
    id: 13,
    firstname: "Mike",
    lastname: "Bradley",
    speciality: "designer",
    localisation: "New York",
    coordinates: [-74.0060152, 40.7127281],
    timezone: "America",
    deadline: 6,
    workform: "subcontracting"
},
{
    id: 14,
    firstname: "Bob",
    lastname: "Burnley",
    speciality: "developer",
    localisation: "Chicago",
    coordinates: [-87.6244212, 41.8755616],
    timezone: "America",
    deadline: 12,
    workform: "collaboration"
},
{
    id: 15,
    firstname: "Samuel",
    lastname: "Marks",
    speciality: "developer",
    localisation: "San Francisco",
    coordinates: [-122.419906, 37.7790262],
    timezone: "America",
    deadline: 18,
    workform: "subcontracting"
},
{
    id: 16,
    firstname: "Rick",
    lastname: "Dicker",
    speciality: "designer",
    localisation: "Toronto",
    coordinates: [-79.3839347, 43.6534817],
    timezone: "America",
    deadline: 24,
    workform: "collaboration"
},
{
    id: 17,
    firstname: "Fabian",
    lastname: "Hulm",
    speciality: "developer",
    localisation: "Berlin",
    coordinates: [13.3888599, 52.5170365],
    timezone: "Europe",
    deadline: 6,
    workform: "subcontracting"
},
{
    id: 18,
    firstname: "Alex",
    lastname: "Chang",
    speciality: "translator",
    localisation: "Shangai",
    coordinates: [121.4890497, 31.2252985],
    timezone: "Asia",
    deadline: 12,
    workform: "collaboration"
},
{
    id: 19,
    firstname: "Sophia",
    lastname: "Wurst",
    speciality: "designer",
    localisation: "Vienne",
    coordinates: [16.3725042, 48.2083537],
    timezone: "Europe",
    deadline: 18,
    workform: "subcontracting"
},
{
    id: 20,
    firstname: "Julia",
    lastname: "Menini",
    speciality: "developer",
    localisation: "Rome",
    coordinates: [12.4829321, 41.8933203],
    timezone: "Europe",
    deadline: 24,
    workform: "collaboration"
},
{
    id: 21,
    firstname: "Kevin",
    lastname: "Vandenbosch",
    speciality: "translator",
    localisation: "Bruxelles",
    coordinates: [4.351697, 50.8465573],
    timezone: "Europe",
    deadline: 6,
    workform: "subcontracting"
},
{
    id: 22,
    firstname: "Demir",
    lastname: "Sukur",
    speciality: "designer",
    localisation: "Istanbul",
    coordinates: [19.8333731, 41.3213939],
    timezone: "Asia",
    deadline: 12,
    workform: "collaboration"
},
{
    id: 23,
    firstname: "Houssem",
    lastname: "Loussaïef",
    speciality: "developer",
    localisation: "Tunis",
    coordinates: [9.400138, 33.8439408],
    timezone: "Africa",
    deadline: 24,
    workform: "subcontracting"
},
{
    id: 24,
    firstname: "Abdel",
    lastname: "Malek",
    speciality: "translator",
    localisation: "Le Caire",
    coordinates: [31.2357257, 30.0443879],
    timezone: "Africa",
    deadline: 6,
    workform: "collaboration"
},
{
    id: 25,
    firstname: "Kulap",
    lastname: "Pong",
    speciality: "designer",
    localisation: "Bangkok",
    coordinates: [100.4930399, 13.7544238],
    timezone: "Asia",
    deadline: 12,
    workform: "subcontracting"
},
{
    id: 26,
    firstname: "Mick",
    lastname: "Fanning",
    speciality: "developer",
    localisation: "Sydney",
    coordinates: [151.2164539, -33.8548157],
    timezone: "Oceania",
    deadline: 18,
    workform: "collaboration"
},
{
    id: 27,
    firstname: "Albert",
    lastname: "Thomas",
    speciality: "translator",
    localisation: "Le Cap",
    coordinates: [18.417396, -33.928992],
    timezone: "Africa",
    deadline: 24,
    workform: "subcontracting"
},
{
    id: 28,
    firstname: "Brad",
    lastname: "Rivers",
    speciality: "designer",
    localisation: "Dallas",
    coordinates: [-96.7968559, 32.7762719],
    timezone: "America",
    deadline: 6,
    workform: "collaboration"
},
{
    id: 29,
    firstname: "Sandra",
    lastname: "Mango",
    speciality: "developer",
    localisation: "Miami",
    coordinates: [-80.19362, 25.7741728],
    timezone: "America",
    deadline: 12,
    workform: "subcontracting"
},
{
    id: 30,
    firstname: "Dave",
    lastname: "James",
    speciality: "translator",
    localisation: "Londres",
    coordinates: [-0.1276474, 51.5073219],
    timezone: "Europe",
    deadline: 18,
    workform: "collaboration"
},
{
    id: 31,
    firstname: "Erik",
    lastname: "Svensson",
    speciality: "designer",
    localisation: "Stockholm",
    coordinates: [18.0710935, 59.3251172],
    timezone: "Europe",
    deadline: 24,
    workform: "subcontracting"
},
{
    id: 32,
    firstname: "Torje",
    lastname: "Mund",
    speciality: "developer",
    localisation: "Oslo",
    coordinates: [10.7389701, 59.9133301],
    timezone: "Europe",
    deadline: 6,
    workform: "collaboration"
},
{
    id: 33,
    firstname: "Christina",
    lastname: "Danielsen",
    speciality: "translator",
    localisation: "Copenhague",
    coordinates: [12.5700724, 55.6867243],
    timezone: "Europe",
    deadline: 12,
    workform: "subcontracting"
},
{
    id: 34,
    firstname: "Fabrice",
    lastname: "Levain",
    speciality: "designer",
    localisation: "Marseille",
    coordinates: [5.3699525, 43.2961743],
    timezone: "Europe",
    deadline: 18,
    workform: "collaboration"
},
{
    id: 35,
    firstname: "Iker",
    lastname: "Delmoral",
    speciality: "developer",
    localisation: "Barcelone",
    coordinates: [2.1774322, 41.3828939],
    timezone: "Europe",
    deadline: 24,
    workform: "subcontracting"
},
{
    id: 36,
    firstname: "Timu",
    lastname: "Tainio",
    speciality: "translator",
    localisation: "Helsinki",
    coordinates: [24.9427473, 60.1674881],
    timezone: "Europe",
    deadline: 6,
    workform: "collaboration"
},
{
    id: 37,
    firstname: "Igor",
    lastname: "Podolski",
    speciality: "designer",
    localisation: "Varsovie",
    coordinates: [21.0067249, 52.2319581],
    timezone: "Europe",
    deadline: 12,
    workform: "subcontracting"
},
{
    id: 38,
    firstname: "Kirgios",
    lastname: "Salakis",
    speciality: "developer",
    localisation: "Athènes",
    coordinates: [23.7283052, 37.9839412],
    timezone: "Europe",
    deadline: 18,
    workform: "collaboration"
},
{
    id: 39,
    firstname: "Adam",
    lastname: "Brown",
    speciality: "translator",
    localisation: "Washington",
    coordinates: [-77.0365427, 38.8950368],
    timezone: "America",
    deadline: 24,
    workform: "subcontracting"
},
{
    id: 40,
    firstname: "Raphael",
    lastname: "Marquez",
    speciality: "designer",
    localisation: "Mexico",
    coordinates: [-99.1331785, 19.4326296],
    timezone: "America",
    deadline: 6,
    workform: "collaboration"
},
 
];

function Map({ speciality, timezone, workform, showAllFreelancers }) {
  const classes = useStyles();

  console.log(speciality, timezone);

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
              .filter(
                (freelance) =>
                  !showAllFreelancers ||
                  (freelance.speciality === speciality &&
                    freelance.timezone === timezone && freelance.workform === workform)
              )
              .map(({ id, coordinates }) => (
                <Marker key={freelancers.id} coordinates={coordinates}>
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
      </div>
    </div>
  );
}

export default Map;
