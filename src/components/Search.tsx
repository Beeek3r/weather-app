import React, { useContext, FormEvent, useState } from 'react';
import { GlobalContext } from './context/GlobalContext';
import { weather } from './context/actions';

const Search = () => {
  // Context & Component State
  const { dispatch } = useContext(GlobalContext);
  const [query, setQuery] = useState('');

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    dispatch({ type: 'SET_LOADING', payload: true });

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
      .catch(xxx => {
        dispatch({ type: 'SET_LOADING', payload: false });
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
    </div>
  );
};

export default Search;
