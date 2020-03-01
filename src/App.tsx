import React, { useEffect, useContext } from 'react';
import './app.scss';
import Header from './components/Header';
import Search from './components/Search';
import WeatherInfoBlock from './components/WeatherInfoBlock';
import { GlobalContext } from './components/context/GlobalContext';
import Footer from './components/Footer';
import { weather } from './components/context/actions';

const App: React.FC = () => {
  // Context
  const { dispatch } = useContext(GlobalContext);

  // Hooks
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getCoordsSuccess, getCoordsError);
  }, []);

  const getCoordsSuccess = async (position: any): Promise<void> => {
    const { longitude, latitude } = position.coords;

    // Get weather data for current location and dispatch
    const currentWeather = await weather.getCurrentByCoords({ latitude: latitude, longitude: longitude });
    dispatch({ type: 'FETCH_WEATHER_DATA', payload: currentWeather });

    // Get weather forecast for current location and dispatch
    const currentWeatherForecast = await weather.getForecastByCoords({ latitude: latitude, longitude: longitude });
    dispatch({ type: 'FETCH_WEATHER_FORCAST', payload: currentWeatherForecast });
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  const getCoordsError = () => {
    dispatch({ type: 'SET_LOADING', payload: false });
  };

  // JSX
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <Search />
        <WeatherInfoBlock />
        <Footer />
      </div>
    </div>
  );
};

export default App;

export interface IWeatherData {
  data: {
    name: string;
    weather: Array<IWeatherMain>;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };
  };
}

interface IWeatherMain {
  id: number;
  main: string;
  description: string;
  icon: string;
}
