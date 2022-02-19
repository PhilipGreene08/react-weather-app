import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

function FiveDay({ futureWeather }) {
  const futureWeatherDataArray = [futureWeather];
  console.log(futureWeatherDataArray[0].city);
  return (
    <Fragment>
      <div className='future-weather'>
        <h3 className='forecast-header'>
          Forecast for {futureWeather.city.name},{futureWeather.city.country}
        </h3>
        <ul></ul>
      </div>
    </Fragment>
  );
}

export default FiveDay;
