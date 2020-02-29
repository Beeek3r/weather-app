import React, { useContext, Fragment } from 'react';
import { GlobalContext } from './context/GlobalContext';
import moment from 'moment';

// CONDITIONAL RENDER THIS BECAUSE SYS
const WeatherForcastBlock = () => {
  const { state } = useContext(GlobalContext);
  const { name: location } = state.weatherData;
  const { country } = state.weatherData.sys;
  const { forcast } = state;

  let currentDateTime = ''; // Used to check if a table header needs to be created

  return (
    <div className="Weather-Forecast-Block-Wrapper">
      <h2 className="Weather-Location">
        {location}, {country}
      </h2>
      <table className="Weather-Forcast-Table">
        {/* Loops through each forecast item and returns a table row and/or header */}
        {forcast.map((forcastItem: any) => {
          // Convert UNIX timestamp to local time
          let gmtDateTime = moment.unix(forcastItem.dt);
          let localDateTime = gmtDateTime.local().format('dddd Do MMMM YYYY');
          let localTime = gmtDateTime.format('HH:mm');

          if (currentDateTime !== localDateTime) {
            currentDateTime = localDateTime; // Update
            return (
              <Fragment>
                <tr className="Weather-Forecast-Row-Header">
                  <th colSpan={5} className="Weather-Forecast-Row-Date">
                    {localDateTime}
                  </th>
                </tr>
                <tr>
                  <td className="Weather-Forecast-TD-Info">{localTime}</td>
                  <td className="Weather-Forecast-TD-Info">
                    <img className="Weather-Forecast-TD-Icon" src={`http://openweathermap.org/img/wn/${forcastItem.weather[0].icon}@2x.png`} />
                  </td>
                  <td className="Weather-Forecast-TD-Info">
                    <i className="fas fa-temperature-low fa-lg" /> {Math.round(forcastItem.main.temp)}&#176;C
                  </td>
                  <td className="Weather-Forecast-TD-Info Weather-Forecast-TD-Stats-Icon">
                    <i className="fas fa-wind fa-lg" /> {Math.round(forcastItem.wind.speed)}m/s
                  </td>
                  <td className="Weather-Forecast-TD-Info">
                    <i className="fas fa-cloud fa-lg" /> {forcastItem.clouds.all}%
                  </td>
                </tr>
              </Fragment>
            );
          } else {
            return (
              <tr>
                <td className="Weather-Forecast-TD-Info">{localTime}</td>
                <td className="Weather-Forecast-TD-Info">
                  <img className="Weather-Forecast-TD-Icon" src={`http://openweathermap.org/img/wn/${forcastItem.weather[0].icon}@2x.png`} />
                </td>
                <td className="Weather-Forecast-TD-Info">
                  <i className="fas fa-temperature-low fa-lg" /> {Math.round(forcastItem.main.temp)}&#176;C
                </td>
                <td className="Weather-Forecast-TD-Info Weather-Forecast-TD-Stats-Icon">
                  <i className="fas fa-wind fa-lg" /> {Math.round(forcastItem.wind.speed)}m/s
                </td>
                <td className="Weather-Forecast-TD-Info">
                  <i className="fas fa-cloud fa-lg" /> {forcastItem.clouds.all}%
                </td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
};

export default WeatherForcastBlock;
