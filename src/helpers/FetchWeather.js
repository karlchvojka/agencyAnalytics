// fetchWeather fetches data from the API and saves it into state
import axios from 'axios';

export const FetchWeather = async (lat, long) => {
  const result = await axios(
  `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
  );
  // Set Weather info into state, set selected date.
  return result
};
