import React, { useEffect, useState } from "react";
import "../css/clima.css"
import Descriptions from "./Descriptions";
import { getFormattedWeatherData } from "../assets/weatherService";

const Clima = () => {
  const [city, setCity] = useState("Buenos Aires");
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric');
  

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

  
    };

    fetchWeatherData();
  }, [units, city]);

  const handleUnitsClick = () => {
    setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));
  };

  const enterKeyPressed = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div>
      {/* Navbar */}
      <div className="navbar-wrapper">
      
      </div>

      <div className="clima">
        <div>
          {weather && (
            <div className="container-clima">
              <div className="section section-inputs">
                <input
                  onKeyDown={enterKeyPressed}
                  type="text"
                  name="city"
                  placeholder="Enter City..."
                />
                <button onClick={handleUnitsClick}>
                  {units === "metric" ? "°F" : "°C"}
                </button>
              </div>

              <div className="section section-temperature">
                <div className="icon">
                  <h3>{`${weather.name}, ${weather.country}`}</h3>
                  <img src={weather.iconURL} alt="weatherIcon" />
                  <h3>{weather.description}</h3>
                </div>
                <div className="temperature">
                  <h2>
                    {`${weather.temp.toFixed()}°${units === 'metric' ? "C" : "F"}`}
                  </h2>
                </div>
              </div>

              {/* bottom description */}
              <Descriptions weather={weather} units={units} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Clima;
