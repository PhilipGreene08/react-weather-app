const API_KEY = process.env.REACT_APP_API_KEY;
const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
export const searchWeather = async (latitude, longitude) => {
  console.log(latitude);
  const response = await fetch(
    `${WEATHER_URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    //`${WEATHER_URL}/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
  );

  const data = await response.json();
  console.log(data.current);
};
