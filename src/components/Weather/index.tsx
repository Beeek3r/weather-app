import React, { useContext } from 'react';
import WeatherTile from './WeatherTile';
import { GlobalContext } from '../context/GlobalContext';
import ViewToggler from '../ViewToggler';
import WeatherForcastBlock from './WeatherForcastBlock';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import './index.scss';

const WeatherInfoBlock = () => {
  // Context
  const { state } = useContext(GlobalContext);
  // JSX
  return (
    <div className="Weather-Wrapper">
      {state.loading && <Loader type="ThreeDots" color="#487eb1" height={50} width={50} />}

      {state.view === 'current' && !state.loading && state.weatherData && <WeatherTile />}
      {state.view === 'forecast' && !state.loading && state.weatherData && <WeatherForcastBlock />}
      {state.weatherData && <ViewToggler />}
    </div>
  );
};

export default WeatherInfoBlock;
