/**
 if (response.status === 204 || response.status === 205) {
   if (response.status >= 200 && response.status < 300) {
 * Parses the JSON returned by a network request
 */

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosConfigs } from 'utils/constants';

const request = axios.create({
  baseURL: AxiosConfigs.BASE_URL,
  // timeout: AxiosConfigs.TIMEOUT,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

request.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('authToken');
    const tmpConfigs = { ...config };
    if (token) {
      tmpConfigs.headers.Authorization = `Bearer ${token}`;
    }
    return tmpConfigs;
  },
  (error) => Promise.reject(error),
);

request.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
);

export default request;
