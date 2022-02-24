import React from 'react';
//todo - bring in weather code from weatheractions

function CurrentWeather({ currentWeather }) {
  return (
    <div className='current-container'>
      {currentWeather.weatherIcon !== '' ? (
        <div>
          <h3>Currently</h3>
          <img src={currentWeather.weatherIcon}></img>
          <div className='current-weather-data'>
            {currentWeather.clouds >= 50 ? <h5>Cloudy</h5> : <h5>Beautiful</h5>}
          </div>

          <div className='current-weather-output'>
            <p>
              Temperature: {currentWeather.data.temp} <span>&#8457;</span>
            </p>
            <p>Wind Speed: {currentWeather.data.wind_speed} MPH</p>
            <p>Wind Gusts Up To: {currentWeather.data.wind_gust} MPH</p>
          </div>
        </div>
      ) : (
        <h5>Enter Coordinates</h5>
      )}
    </div>
  );
}

export default CurrentWeather;
