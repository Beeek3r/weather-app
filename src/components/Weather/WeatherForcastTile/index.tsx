import React from 'react';

const WeatherForcastTile = (props: any) => {
  return (
    <div className="Weather-Forcast-Tile">
      {/* <p className="Weather-Forcast-Tile-Day">{day}</p> */}
      <p className="Weather-Forcast-Tile-Day">{props.day}</p>
      <img className="Weather-Forcast-Tile-Icon" src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} />
      <p className="Weather-Statistics-Names">
        Avg. Temp: <span className="Weather-Statistics-Stats">{Math.round(props.temp)}&#176;C</span>
      </p>
      <p className="Weather-Statistics-Names">
        Humidity: <span className="Weather-Statistics-Stats">{props.humidity}%</span>
      </p>
      <p className="Weather-Statistics-Names">
        Wind: <span className="Weather-Statistics-Stats">{Math.round(props.wind)}km/h</span>
      </p>
    </div>
  );
};

export default WeatherForcastTile;
