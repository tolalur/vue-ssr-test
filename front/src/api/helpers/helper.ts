import {axios} from './axios';
import {Method} from 'axios';

const baseURL = process.env.IS_SERVER ? 'http://localhost:3001/' : '/api/';

export default function request<T>(
  {url, method, data}: { url: string, method: Method, data?: any }
) {
  return axios.request<T>({baseURL, url, method, data});
}
