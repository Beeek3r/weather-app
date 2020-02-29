import axios from 'axios';
import { IWeatherData } from '../../App';

export interface IPosition {
  longitude: number;
  latitude: number;
}

class Weather {
  key: string; // OpenWeatherData API Key

  constructor() {
    this.key = 'a05e16e0743848e50a1d85870a6820c8';
  }

  // Get current weather for city via search query
  async getCurrentByCity(city: string): Promise<any> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.key}&units=metric`).then((res: IWeatherData) => {
      console.log('yeet', res.data);
      return res.data;
    });
  }

  // Get weather forecast for a city via search query
  async getForecastByCity(city: string): Promise<any> {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.key}&units=metric`).then((res: any) => {
      return res.data.list;
    });
  }

  //  Get current weather for city via coords
  getCurrentByCoords(position: IPosition): Promise<any> {
    return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.latitude}&lon=${position.longitude}&APPID=${this.key}&units=metric`).then((res: IWeatherData) => {
      return res.data;
    });
  }

  //  Get weather forecast for city via coords
  getForecastByCoords(position: IPosition): Promise<any> {
    return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${position.latitude}&lon=${position.longitude}&appid=${this.key}&units=metric`).then((res: any) => {
      return res.data.list;
    });
  }
}

export const weather = new Weather();
