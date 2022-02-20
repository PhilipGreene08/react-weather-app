import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

function FiveDay({ futureWeather }) {
  const futureWeatherDataArray = [futureWeather];
  const forecast = futureWeatherDataArray[0].list;
  const dateArray = [];
  //could have used filter - search forecast and put afternoon time stamps into an array
  forecast.forEach((threeHourTime) => {
    if (threeHourTime.dt_txt.endsWith('12:00:00')) {
      dateArray.push(threeHourTime.dt);
    }
    //return dateArray;
  });
  console.log(dateArray);
  dateArray.forEach((timeStamp) => {
    const date = new Date(timeStamp * 1000);
    date.getMonth();
    console.log(date);
  });
  //   let unix_timestamp = 1645326000;
  //   // Create a new JavaScript Date object based on the timestamp
  //   // multiplied by 1000 so that the argument is in milliseconds, not seconds.
  //   const date = new Date(unix_timestamp * 1000);
  //   // Hours part from the timestamp
  //   const hours = date.getHours();
  //   // Minutes part from the timestamp
  //   const minutes = '0' + date.getMinutes();
  //   // Seconds part from the timestamp
  //   const seconds = '0' + date.getSeconds();
  //   const day = date.getDate();
  //   const month = date.getMonth();
  //   // Will display time in 10:30:23 format
  //   const formattedTime =
  //     month +
  //     '/' +
  //     day +
  //     ' ' +
  //     hours +
  //     ':' +
  //     minutes.substr(-2) +
  //     ':' +
  //     seconds.substr(-2);

  return (
    <Fragment>
      <div className='future-weather'>
        <h3 className='forecast-header'>
          Forecast for {futureWeather.city.name}, {futureWeather.city.country}
        </h3>
        <ul className='forecast-card'>
          {dateArray.map((date) => (
            <li key={date}>
              <h3>{date}</h3>
              <p>weather temp</p>
              <p>wind</p>
              <p>precipitation</p>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default FiveDay;
