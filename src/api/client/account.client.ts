import { AuthAxiosInstance } from "../axios/auth-axios-instance.config";

export const AccountClient = AuthAxiosInstance(
  import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY
    ? `${import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY}/account`
    : import.meta.env.VITE_REACT_APP_BASE_URL_ACCOUNT || '',
  {
    'x-api-key': import.meta.env.VITE_REACT_APP_API_GATEWAY_KEY || '',
  },
);
