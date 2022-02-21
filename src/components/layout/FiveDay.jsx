import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

function FiveDay({ futureWeather }) {
  //const [fiveDayForecast, setFiveDayForecast] = useState({})
  const futureWeatherDataArray = [futureWeather];
  const forecast = futureWeatherDataArray[0].list;
  //   const forecastArray = [];
  //   const dateArray = [];
  const filteredForecast = [];
  //foreach forecast day, if the time is 12pm....
  //   forecast.forEach((threeHourTime) => {
  //     if (threeHourTime.dt_txt.endsWith('12:00:00')) {
  //       //convert unix to milliseconds
  //       let unix_timestamp = threeHourTime.dt;
  //       const milliseconds = unix_timestamp * 1000;
  //       const dateObject = new Date(milliseconds);
  //       //push new date into dateArray array
  //       dateArray.push(
  //         dateObject.toLocaleDateString('en-US', {
  //           month: 'short',
  //           day: 'numeric',
  //           //year: '2-digit',
  //         })
  //       );
  //       forecastArray.push(threeHourTime);
  //       //console.log(forecastArray);
  //     }
  //   });

  //1)filter the three hour blocks of forecast
  forecast.filter((threeHourBlock) => {
    const noonItem = threeHourBlock.dt_txt.endsWith('12:00:00');

    if (noonItem === true) {
      filteredForecast.push(threeHourBlock);
    }
    //2) get the specific items out of the filtered array to place in the app
    filteredForecast.forEach((day) => {
      let unix_timestamp = day.dt;
      const milliseconds = unix_timestamp * 1000;
      const dateObject = new Date(milliseconds);

      const forecastDate = dateObject.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
      let temp = day.main.temp;
      let wind = day.wind.speed;
      let precipitation = day.weather[0].description;
    });
  });

  return (
    <Fragment>
      <div className='future-weather'>
        <h3 className='forecast-header'>
          Forecast for {futureWeather.city.name}, {futureWeather.city.country}
        </h3>
        <ul className='forecast-card'></ul>
      </div>
    </Fragment>
  );
}

export default FiveDay;
// {filteredArray.map((date) => (
//     <li>
//       <h3>{date}</h3>
//       <p>weather temp</p>
//       <p>wind</p>
//       <p>precipitation</p>
//     </li>
//   ))}
