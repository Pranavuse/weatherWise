/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";
import background from "./realistic-fog-background_23-2149115272.avif";


export default function Result({ weatherData }) {
  useEffect(() => {
    if (weatherData && weatherData.weather && weatherData.weather.length > 0 && weatherData.weather[0].description === "haze") {
      // Set the background image URL here
      // Set the background image URL here
      // const backgroundURL = 'your-background-image-url.jpg';

      // Update the background image of the body element
      document.body.style.backgroundImage = `url(${background})`;
      document.body.style.color="white"
    }
    else{
      document.body.style.backgroundImage = `none`;
      document.body.style.color="black"
    }
  }, [weatherData, weatherData.weather]);
 

  return (
    <div className="container result-container p-3 mb-5 ">
      {weatherData.length !== 0 ? (
        <>
        <div className="container text-center">
        <h1 className="text-center my-4 "><img  className="mx-2" />{weatherData.name}<h5>{weatherData.sys.country}</h5></h1>
        <img style={{marginTop: "-32px",}}
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt="weather type"
              />
              </div>
          <div className="row">
            <div className="col-md-6">
              <h2 className="result-subheader">
                Max Temperature: {weatherData.main.temp_max}°C
              </h2>
              <p className="result-text">
                Feels Like: {weatherData.main.feels_like}°C
              </p>
              <p className="result-text">
                Humidity: {weatherData.main.humidity}%
              </p>
              <p className="result-text">
                Wind Speed: {weatherData.wind.speed} m/s
              </p>
             
                <p className="result-text">
                  Clouds: {weatherData.clouds.all}  (last 1 hour)
                </p>
              
              
            </div>
            <div className="col-md-6 text-end">
              <h2 className="result-subheader">
                Min Temperature: {weatherData.main.temp_min}°C
              </h2>
              <p className="result-description">
                {weatherData.weather[0].description}
              </p>
            </div>
            
         
          </div>
        </>
      ) : (
        <>
          <h3 className="result-error text-center text-danger">Please enter a city name</h3>
        </>
      )}
    </div>
  );
}
