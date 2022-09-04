import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import { getToken } from './token';
import { errorsToShow } from '../const';
import { store } from '../store';
import { setError } from '../store/action';

const BACK_URL = 'https://10.react.pages.academy/wtw';
const REQ_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACK_URL,
    timeout: REQ_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const token = getToken();
      if (token) { config.headers['x-token'] = token; }

      return config;
    }
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response && errorsToShow.includes(error.response.status)) {
        store.dispatch(setError({text: error.response.data.error, code: error.response.status}));
        setTimeout(() => store.dispatch(setError(null)), 5000);
      }
    }
  );
  return api;
};
