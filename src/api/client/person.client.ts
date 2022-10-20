import { AuthAxiosInstance } from "../axios/auth-axios-instance.config";

export const PersonClient = AuthAxiosInstance(
  import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY
    ? `${import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY}/person`
    : `${import.meta.env.VITE_REACT_APP_BASE_URL_PERSON}/person`,
  {
    'x-api-key': import.meta.env.VITE_REACT_APP_API_GATEWAY_KEY || '',
  },
);
