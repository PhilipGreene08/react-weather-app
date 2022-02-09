import React from 'react';
import { useState } from 'react';
import { searchWeather, getWeatherCode } from '../../context/WeatherActions';
import CurrentWeather from './CurrentWeather';

function WeatherData() {
  //coordinates are a single state. setCoordinates uses latitude and longitude for values
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  const [currentWeather, setCurrentWeather] = useState({});

  //handle change is fired off whenever a new number is entered into our cordinate form
  //We take the existing state of ...cordinates, then based on the target name, we set a new value
  //as determined by target value. NOTE: IDK why we need [] for target name
  const handleChange = (e) => {
    setCoordinates({ ...coordinates, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (coordinates === '') {
      console.log(`enter coordinates`);
    } else {
      const data = await searchWeather(
        coordinates.longitude,
        coordinates.latitude
      );
      setCurrentWeather(data);
      setCoordinates({
        latitude: 0,
        longitude: 0,
      });
      getWeatherCode(data);
      return currentWeather;
    }
  };

  return (
    <div>
      <form className='search-form form-control' onSubmit={handleSubmit}>
        <label>Longitude</label>
        <input
          type='number'
          value={coordinates.longitude}
          name='longitude'
          step='0.01'
          onChange={handleChange}
        />
        <label>Latitude</label>
        <input
          type='number'
          value={coordinates.latitude}
          name='latitude'
          step='0.01'
          onChange={handleChange}
        />
        <button type='submit'>Search</button>
      </form>
      <CurrentWeather currentWeather={currentWeather} />
    </div>
  );
}

export default WeatherData;
