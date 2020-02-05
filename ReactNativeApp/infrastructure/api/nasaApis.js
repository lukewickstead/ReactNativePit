import axios from 'axios';
import {NASA_API_KEY} from './apiKeys';

export function getAstronomyPictureOfTheDay(date) {
  return axios.get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`);
}
