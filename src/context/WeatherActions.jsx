const API_KEY = process.env.REACT_APP_API_KEY;
const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;

//search weather - lon and lat passed in from coordinate search
export const searchWeather = async (longitude, latitude) => {
  const response = await fetch(
    `${WEATHER_URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );

  const data = await response.json();

  return data;
};
