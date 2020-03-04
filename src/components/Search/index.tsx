import React, { useContext, FormEvent, useState } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { weather } from '../context/actions';
import './index.scss';

const Search = () => {
  // Context & Component State
  const { state, dispatch } = useContext(GlobalContext);
  const [query, setQuery] = useState('');

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });
    dispatch({ type: 'SET_ERROR', payload: null });

    // Fetch current weather
    await weather
      .getCurrentByCity(query)
      .then(weatherData => {
        dispatch({ type: 'FETCH_WEATHER_DATA', payload: weatherData });
      })
      .catch(xxx => {
        dispatch({ type: 'SET_LOADING', payload: false });
      });

    // Fetch weather forecast
    await weather
      .getForecastByCity(query)
      .then(weatherData => {
        dispatch({ type: 'FETCH_WEATHER_FORCAST', payload: weatherData });
        dispatch({ type: 'SET_LOADING', payload: false });
      })
      .catch(error => {
        dispatch({ type: 'SET_LOADING', payload: false });
        dispatch({ type: 'SET_ERROR', payload: 'City not found. Please enter another one or check for typing errors.' });
      });
  };

  const handleChange = (query: string): void => {
    setQuery(query);
  };

  return (
    <div className="Search-Wrapper">
      <form
        className="Search-Form"
        onSubmit={event => {
          handleSubmit(event);
        }}>
        <input
          id="Search-Input"
          type="text"
          placeholder="Enter a location"
          onChange={event => {
            handleChange(event.target.value);
          }}
        />
        <button type="submit" className="Search-Submit">
          Search
        </button>
      </form>
      {state.error && (
        <div className="Search-Error-Message">
          <i className="fas fa-exclamation-triangle" /> {state.error}
        </div>
      )}
    </div>
  );
};

export default Search;
