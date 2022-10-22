import esriConfig from "@arcgis/core/config.js";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const appRootSelector = "div#app";
const appRoot = document.querySelector(appRootSelector);
if (!appRoot) throw new Error(`error: ${appRootSelector} not found`);
const root = createRoot(appRoot);
root.render(<App />);

esriConfig.assetsPath = "./assets";
esriConfig.request.useIdentity = false;
esriConfig.apiKey = "ARCGIS_APIKEY";
