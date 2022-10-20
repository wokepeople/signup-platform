/* @refresh reload */
import { render } from "solid-js/web";
import { initializeGa } from "./api/config/googleAnalytics";
import App from "./App";

initializeGa();

render(() => <App />, document.getElementById("root")!);
