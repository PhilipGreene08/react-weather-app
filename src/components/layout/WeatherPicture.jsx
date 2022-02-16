import rain from './assets/rain.jpg';
import WeatherData from './WeatherData';
import FutureWeather from './FutureWeather';

import { useState } from 'react';

function WeatherPicture() {
  return (
    <div className='picture-container'>
      <div className='hero-image'>
        <div className='hero-text'>
          <WeatherData />
        </div>
      </div>
    </div>
  );
}

export default WeatherPicture;
