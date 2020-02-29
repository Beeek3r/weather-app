import React, { createContext, useReducer } from 'react';
import { IWeatherData } from '../../App';

// Interface
export interface IState {
  loading: boolean;
  location: string;
  weatherData: IWeatherData | null;
  view: string;
  coords: {
    longitude: number;
    latitude: number;
  } | null;
  forcast: [];
}

export interface IAction {
  type: string;
  payload?: any;
}

// Inital State
export const initialState: IState = {
  loading: true,
  location: 'Gold Coast',
  weatherData: null,
  coords: null,
  view: 'current',
  forcast: []
};

// Create Context
export const GlobalContext = createContext<IState | any>(initialState);

// Reducer
export const globalReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };

    case 'FETCH_WEATHER_DATA':
      return { ...state, weatherData: action.payload };

    case 'FETCH_COORDS':
      return { ...state, coords: action.payload };

    case 'SET_VIEW':
      return { ...state, view: action.payload };

    case 'FETCH_WEATHER_FORCAST':
      return { ...state, forcast: action.payload };

    default:
      return state;
  }
};

// Context provider
const GlobalContextProvider = (props: any) => {
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return <GlobalContext.Provider value={{ state, dispatch }}>{props.children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
