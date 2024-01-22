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
    <div className="dashboard min-h-screen flex flex-col items-center justify-center">
      <div
        className={`card w-60 ${
         dark ? "bg-stone-500" : "bg-neutral-200"
        } shadow-lg rounded-lg p-8 max-w-md`}
      >
        <div className="user flex items-center mb-4">
          <div className="info">
            <h1 className="name text-2xl text-nowrap font-bold text-green-700">
              {user.name}
            </h1>
            <p className="username text-sm text-gray-600">@{user.username}</p>
          </div>
        </div>
        <div className="weather flex items-center">
          <div className="info">
            <h2 className="city text-xl font-semibold text-gray-800">
              {user.city}
            </h2>

            <div className="details text-sm text-gray-600">
              <p className="temp font-bold">
                Temperature: {weatherData?.temp} °C{" "}
              </p>
              <p className="wind font-bold">
                Wind: {weatherData?.wind_speed} m/s
              </p>
              <p className="max-temp font-bold">
                Max Temperature:{weatherData?.max_temp} °C
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
