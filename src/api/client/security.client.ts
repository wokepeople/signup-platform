import { AuthAxiosInstance } from "../axios/auth-axios-instance.config";
import { DefaultAxiosInstance } from "../axios/default-axios-instance.config";


export const SecurityClient = AuthAxiosInstance(
  import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY
    ? `${import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY}/security`
    : import.meta.env.VITE_REACT_APP_BASE_URL_SECURITY || "",
  {
    "x-api-key": import.meta.env.VITE_REACT_APP_API_GATEWAY_KEY || "",
  }
);


export const PublicSecurityClient = DefaultAxiosInstance(
  import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY
    ? `${import.meta.env.VITE_REACT_APP_BASE_URL_API_GATEWAY}/security`
    : import.meta.env.VITE_REACT_APP_BASE_URL_SECURITY || '',
  {
    'x-api-key': import.meta.env.VITE_REACT_APP_API_GATEWAY_KEY || '',
  },
);
