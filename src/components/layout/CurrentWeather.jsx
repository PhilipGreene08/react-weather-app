import React from 'react';
import { getWeatherCode } from '../../context/WeatherActions';
//todo - bring in weather code from weatheractions

function CurrentWeather({ currentWeather }) {
  return (
    <div className='current-container'>
      <h3>Currently</h3>
      {currentWeather.clouds >= 50 ? <h5>Cloudy</h5> : <h5>Beautiful Skies</h5>}
      <h5>
        {currentWeather.temp} <span>&#8457;</span>
      </h5>
    </div>
  );
}

export default CurrentWeather;
