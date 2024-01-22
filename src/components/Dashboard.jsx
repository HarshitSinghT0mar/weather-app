// Import React and useState and useEffect hooks
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { api } from "../services/apiConfig";

const Dashboard = ({ dark }) => {
  const { user } = useAuth();
  const [weatherData, setWeatherData] = useState([]);
  useEffect(() => {
    const fetchData = async (city) => {
      try {
        const res = await api.get("/weather", { params: { city } });

        setWeatherData(res?.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(user.city);
  }, [user]);

  return (
    <div className="dashboard flex flex-col h-[calc(100vh-60px)] items-center justify-center">
      <div
        className={`card w-70 ${
          dark ? "bg-stone-500" : "bg-neutral-200"
        } shadow-lg rounded-lg p-8 max-w-md bg-cover bg-center`}
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1518467946652-b194dd6dd321?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <div className="user flex items-center mb-4">
          <div className="info">
            <h1 className="name text-2xl text-nowrap font-bold text-amber-100">
              {user.name}
            </h1>
            <p className="username text-sm text-amber-300">@{user.username}</p>
          </div>
        </div>
        <div className="weather flex items-center">
          <div className="info">
            <h2 className="city text-xl mb-2 font-semibold text-lime-200">
              {user.city}
            </h2>

            <div className="details w-full flex flex-col gap-2 text-sm text-white">
              <p className="temp font-bold">
                Current Temperature: {weatherData?.temp} °C
              </p>
              <p className="max-temp font-bold">
                Max Temperature: {weatherData?.max_temp} °C
              </p>
              <p className="max-temp font-bold">
                Min Temperature: {weatherData?.min_temp} °C
              </p>
              <p className="wind font-bold">
                Wind: {weatherData?.wind_speed} m/s
              </p>
              <p className="max-temp font-bold">
                Humidity: {weatherData?.humidity} g/m3
              </p>
              <p className="max-temp font-bold">
                Feels Like: {weatherData?.feels_like} °C
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the dashboard component
export default Dashboard;
