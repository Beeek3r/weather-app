import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalContext';
import './index.scss';

const WeatherTile: React.FC = () => {
  // Context & Data destructing
  const { state } = useContext(GlobalContext);
  const { temp, feels_like, temp_min, temp_max, pressure, humidity } = state.weatherData.main;
  const { icon } = state.weatherData.weather[0];
  const { name: location } = state.weatherData; // name: location is using renaming the destructed name to locaion
  const { country } = state.weatherData.sys;

  return (
    <div className="Weather-Tile-Wrapper">
      <h2 className="Weather-Location">
        {location}, {country}
      </h2>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="Raining" />
      <p className="Weather-Statistics-Names">
        Tempature: <span className="Weather-Statistics-Stats">{Math.round(temp)}&#176;C</span>
      </p>
      <p className="Weather-Statistics-Names">
        Feels Like: <span className="Weather-Statistics-Stats">{Math.round(feels_like)}&#176;C</span>
      </p>
      <p className="Weather-Statistics-Names">
        Minimum Temperature: <span className="Weather-Statistics-Stats">{Math.round(temp_min)}&#176;C</span>
      </p>
      <p className="Weather-Statistics-Names">
        Maximum Temperature: <span className="Weather-Statistics-Stats">{Math.round(temp_max)}&#176;C</span>
      </p>
      <p className="Weather-Statistics-Names">
        Humidity: <span className="Weather-Statistics-Stats">{humidity}%</span>
      </p>
      <p className="Weather-Statistics-Names">
        Atmospheric preassure: <span className="Weather-Statistics-Stats">{pressure}</span>
      </p>
      <p className="Weather-Statistics-Names">
        Wind: <span className="Weather-Statistics-Stats">{state.weatherData.wind.speed}m/s</span>
      </p>
    </div>
  );
};

export default WeatherTile;
