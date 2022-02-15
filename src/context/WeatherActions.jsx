const API_KEY = process.env.REACT_APP_API_KEY;
const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;

//search weather - lon and lat passed in from coordinate search
export const searchWeather = async (longitude, latitude) => {
  const response = await fetch(
    `${WEATHER_URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&appid=${API_KEY}`
  );

  const data = await response.json();

  return data.current;
};

export const getWeatherCode = async (data) => {
  let iconCode = data.weather[0].icon;
  let response = await fetch(
    `http://openweathermap.org/img/wn/${iconCode}@2x.png`
  );

  const weatherIcon = response.url;
  return weatherIcon;
};

export const getFutureWeather = async (longitude, latitude) => {
  const response = await fetch(
    `api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longitude}&cnt=7&appid=${API_KEY}`
  );

  const data = await response.json();
  console.log(data);
  return data;
};
