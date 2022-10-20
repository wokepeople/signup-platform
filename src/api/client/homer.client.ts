import { AuthAxiosInstance } from "../axios/auth-axios-instance.config";


export const HomerClient = AuthAxiosInstance(
  import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY
    ? `${import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY}/homer`
    : import.meta.env.VITE_REACT_APP_BASE_URL_HOMER || '',
  {
    'x-api-key': import.meta.env.VITE_REACT_APP_API_GATEWAY_KEY || '',
  },
);
