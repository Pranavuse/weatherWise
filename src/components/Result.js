import React, { useEffect } from "react";
import background from "./realistic-fog-background_23-2149115272.avif";

const Result = ({ weatherData }) => {
  useEffect(() => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0 && weatherData.weather[0].description === "haze") {
      document.body.style.backgroundImage = `url(${background})`;
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundImage = "none";
      document.body.style.color = "black";
    }
  }, [weatherData, weatherData.weather]);

  // let sunriseApi = {weatherData.sys.sunrise};

  return (
    <div className="container result-container p-3 mb-5">
      {weatherData.length !== 0 ? (
        <>
          <div className="text-center">
            <h1 className="result-header mb-4">
              <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather type" className="weather-icon" />
              {weatherData.name}, {weatherData.sys.country}
            <h3>{new Date(weatherData.timezone * 1000).toLocaleTimeString()}</h3>
            </h1>

          </div>
          <div className="row">
            <div className="col-md-6">
              <h2 className="result-subheader">Max Temperature: {weatherData.main.temp_max}°C</h2>
              <p className="result-text">Feels Like: {weatherData.main.feels_like}°C</p>
              <p className="result-text">Humidity: {weatherData.main.humidity}%</p>
              <p className="result-text">Wind Speed: {weatherData.wind.speed} m/s</p>
              <p className="result-text">Clouds: {weatherData.clouds.all} (last 1 hour)</p>
            </div>
            <div className="col-md-6 text-end">
              <h2 className="result-subheader">Min Temperature: {weatherData.main.temp_min}°C</h2>
              <p className="result-description">{weatherData.weather[0].description}</p>
              <p>{weatherData.sys.sunrise}</p>
              <div>
  <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
  <p>sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
</div>

            </div>
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3 className="result-error text-danger">Please enter a city name</h3>
        </div>
      )}
    </div>
  );
};

export default Result;
