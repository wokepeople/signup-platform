import ga from 'ga-lite'

export const WOKE_PLUGIN_TRACKER = "woke_plugin_tracker";

export const initializeGa = () => {
  ga("create", import.meta.env.VITE_REACT_APP_GA_TRACKING_ID, {
    name: WOKE_PLUGIN_TRACKER,
  });
};
