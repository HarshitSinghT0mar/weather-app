import axios from "axios";

export const fetchData = async (city) => {
  const options = {
    method: "GET",
    url: "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather",
    params: {city:  city },
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
