import axios from 'axios';

const API_KEY = 'a39bf42f530592e8ea221692d4f03f5f';

export const fetchWeather = async (city) => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt_br`
  );
  return response.data;
};
