import React from 'react';
import { useState, useEffect } from 'react';
import { handleChange } from './WeatherData';
import { getFutureWeather } from '../../context/WeatherActions';
import WeatherData from './WeatherData';

function FutureWeather({ futureWeather }) {
  console.log(futureWeather);
  return <div>FutureWeather</div>;
}

export default FutureWeather;
