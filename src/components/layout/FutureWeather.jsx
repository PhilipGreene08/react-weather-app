import React from 'react';
import { useState, useEffect } from 'react';
import { getFutureWeather } from '../../context/WeatherActions';

function FutureWeather({ coordinates }) {
  //coordinates are passed in as a prop
  console.log(coordinates);
  //use state is created with no coordinates
  const [futureWeatherCoordinates, setFutureWeatherCoordinates] = useState({
    longitude: 0,
    latitude: 0,
  });

  //everytime  'coordinates' is changed in props, this fires off and sets the coorddinates
  //that will be used in the WeatherActions context
  useEffect(() => {
    setFutureWeatherCoordinates(coordinates.longitude, coordinates.latitude);
  }, [coordinates]);

  console.log(futureWeatherCoordinates);
  return <div>FutureWeather</div>;
}

export default FutureWeather;
