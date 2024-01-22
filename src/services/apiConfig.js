import axios from "axios";

export const api = axios.create({
  baseURL: "https://weather-by-api-ninjas.p.rapidapi.com/v1", // Remove "/weather" from baseURL
});

api.interceptors.request.use(
  (config) => {
    // Set headers properly
    config.headers["X-RapidAPI-Key"] = import.meta.env.VITE_API_KEY;
    config.headers["X-RapidAPI-Host"] = "weather-by-api-ninjas.p.rapidapi.com";
    
    return config;
  },
  (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
  }
);