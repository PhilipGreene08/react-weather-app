import React from 'react';
import { useState } from 'react';
import { searchWeather, getWeatherCode } from '../../context/WeatherActions';
import CurrentWeather from './CurrentWeather';
import FutureWeather from './FutureWeather';

function WeatherData() {
  //coordinates are a single state. setCoordinates uses latitude and longitude for values
  const [coordinates, setCoordinates] = useState({
    latitude: '',
    longitude: '',
  });

  const [currentWeather, setCurrentWeather] = useState({
    data: {},
    weatherIcon: '',
  });

  //const [weatherIcon, setWeatherIcon] = useState(''); //do i need this?

  // const [futureWeather, setFutureWeather] = useState([]);

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

      const weatherIcon = await getWeatherCode(data);

      setCurrentWeather({ data, weatherIcon });

      setCoordinates({
        latitude: 0,
        longitude: 0,
      });

      //setWeatherIcon(weatherIcon);

      return currentWeather;
    }
  };

  return (
    <div>
      <form className='search-form form-control' onSubmit={handleSubmit}>
        <div className='coordinate-container'>
          <div className='coordinates'>
            <label className='coordinate-label'>Longitude</label>
            <input
              className='coordinate-input'
              placeholder='0'
              type='number'
              value={coordinates.longitude}
              name='longitude'
              step='0.01'
              onChange={handleChange}
            />
          </div>
          <div className='coordinates'>
            <label className='coordinate-label'>Latitude</label>
            <input
              className='coordinate-input'
              placeholder='0'
              type='number'
              value={coordinates.latitude}
              name='latitude'
              step='0.01'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='search-container'>
          <button type='submit'>Search</button>
        </div>
      </form>
      <CurrentWeather currentWeather={currentWeather} />
      <FutureWeather coordinates={coordinates} />
    </div>
  );
}

export default WeatherData;
