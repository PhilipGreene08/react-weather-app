import React from 'react';
import { useState, useEffect } from 'react';
import { handleChange } from './WeatherData';
import { getFutureWeather } from '../../context/WeatherActions';
import WeatherData from './WeatherData';
import FiveDay from './FiveDay';
import { Fragment } from 'react/cjs/react.production.min';

function FutureWeather({ futureWeather }) {
  return (
    <Fragment>
      <div>
        {futureWeather.cod === '200' ? (
          <FiveDay futureWeather={futureWeather} />
        ) : (
          <p>No Data</p>
        )}
      </div>
    </Fragment>
  );
}

export default FutureWeather;
