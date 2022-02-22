import React from 'react';

import { Fragment } from 'react/cjs/react.production.min';

function FiveDay({ futureWeather }) {
  const futureWeatherDataArray = [futureWeather];
  const forecast = futureWeatherDataArray[0].list;

  const filteredForecast = [];
  //foreach forecast day, if the time is 12pm....

  //1)filter the three hour blocks of forecast
  forecast.filter((threeHourBlock) => {
    const noonItem = threeHourBlock.dt_txt.endsWith('12:00:00');

    if (noonItem === true) {
      filteredForecast.push(threeHourBlock);
    }
    return filteredForecast;
  });

  //2) get the specific time out of the filtered array to place in the app

  const getForecastTime = (time) => {
    const milliseconds = time * 1000;
    const dateObject = new Date(milliseconds);
    const forecastDate = dateObject.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
    return forecastDate;
  };

  return (
    <Fragment>
      <div className='future-weather'>
        <h3 className='forecast-header'>
          Forecast for {futureWeather.city.name}, {futureWeather.city.country}
        </h3>
        <ul className='forecast-card'>
          {filteredForecast.map((date) => (
            <li key={date.dt}>
              <h3>Date: {getForecastTime(date.dt)}</h3>
              <p>
                Temp: {date.main.temp} <span>&#8457;</span>
              </p>
              <p>Wind: {date.wind.speed} MPH</p>
              <p>{date.weather[0].description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default FiveDay;
// {filteredForecast.map((date) => (
//     <li>
//       <h3>{date}</h3>
//       <p>weather temp</p>
//       <p>wind</p>
//       <p>precipitation</p>
//     </li>
//   ))}
