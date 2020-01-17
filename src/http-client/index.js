import axios from 'axios';
import { environment } from '../environments';

export default () => {
  // TMDB API url
  const _baseURL = 'https://api.themoviedb.org/3/';

  // TMDB token
  const token = environment.API_TOKEN;

  // Axios client config
  const httpClient = axios.create({
    baseURL: _baseURL,
  });

  // Set Bearer token as default header
  if (token) {
    httpClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    throw new Error(
      'You must provide a Bearer token on your .env config file.',
    );
  }

  return httpClient;
};
