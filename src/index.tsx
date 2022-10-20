import esriConfig from "@arcgis/core/config.js";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.querySelector("div#app"));
root.render(<App />);

esriConfig.assetsPath = "./assets";
esriConfig.request.useIdentity = false;
esriConfig.apiKey = "ARCGIS_APIKEY";
