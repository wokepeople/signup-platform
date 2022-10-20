import axios from 'axios';


export const AuthAxiosInstance = (
  baseURL: string,
  headers?: Record<string, unknown>,
) => {
  const AxiosInstance = axios.create({
    baseURL,
    headers: headers || {},
  });

  AxiosInstance.interceptors.request.use(request => {

    return request;
  });

  AxiosInstance.interceptors.response.use(
    response => response,
    error => {
      if (!error.response) {
        return new Promise((resolve, reject) => reject(error));
      }

      if (
        error.response.status === 401 &&
        !(
          window.location.pathname.includes('/signin') ||
          window.location.pathname.includes('/recruitment/signup')
        )
      ) {
        window.location.pathname = window.location.pathname.includes('/career')
          ? '/career/signin'
          : '/signin';

        return new Promise((resolve, reject) => reject(error));
      }

      return new Promise((resolve, reject) => reject(error));
    },
  );

  return AxiosInstance;
};
