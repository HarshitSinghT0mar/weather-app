// Import React and useState and useEffect hooks
import React, { useEffect, useState } from "react";
import { useAuth } from "../contexts/AuthContext";


const Dashboard=({dark})=>{
     const {user}=useAuth()

     const [apiData, setApiData] = useState(null);
     const [error, setError] = useState(null);
   
     const handleFetchData = async () => {
       try {
         const data = await fetchData(city);
         setApiData(data);
         setError(null);
       } catch (error) {
         setApiData(null);
         setError("Error fetching data. Please try again.");
       }
     };

     useEffect(()=>{
         handleFetchData()
     },[user])

 
  return (
    <div className="dashboard min-h-screen flex flex-col items-center justify-center">
      <div className={`card w-60 ${dark? 'bg-stone-400' : 'bg-neutral-200'} shadow-lg rounded-lg p-8 max-w-md`}>
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
                <p className="temp">
                  Temperature: {}
                </p>
                <p className="wind">Wind 40 m/s</p>
                <p className="max-temp">
                  Max Temperature: 43°C
                </p>
              </div>
        
          </div>
        </div>
      </div>
    </div>
  );

}






// Export the dashboard component
export default Dashboard;
