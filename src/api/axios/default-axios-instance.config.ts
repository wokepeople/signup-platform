import axios from 'axios';

export const DefaultAxiosInstance = (
  baseURL: string,
  headers?: Record<string, unknown>,
) =>
  axios.create({
    baseURL,
    headers: headers || {},
  });
