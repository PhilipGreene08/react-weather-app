import React from 'react';
//todo - bring in weather code from weatheractions

function CurrentWeather({ currentWeather }) {
  console.log(currentWeather.weatherIcon); //is this called currentWeather.data from WeatherData??

  return (
    <div className='current-container'>
      <h3>Currently</h3>
      <h5>{currentWeather.weatherIcon}</h5>
      {currentWeather.clouds >= 50 ? <h5>Cloudy</h5> : <h5>Beautiful Skies</h5>}

      <h5>
        {currentWeather.data.temp} <span>&#8457;</span>
      </h5>
    </div>
  );
}

export default CurrentWeather;
