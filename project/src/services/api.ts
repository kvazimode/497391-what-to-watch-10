import axios, {AxiosInstance} from 'axios';

const BACK_URL = 'https://10.react.pages.academy/wtw';
const REQ_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACK_URL,
    timeout: REQ_TIMEOUT,
  });

  return api;
};
