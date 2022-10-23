import esriConfig from "@arcgis/core/config.js";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { setAssetPath } from "@esri/calcite-components/dist/components";
import "@esri/calcite-components/dist/calcite/calcite.css";

const appRootSelector = "div#app";
const appRoot = document.querySelector(appRootSelector);
if (!appRoot) throw new Error(`error: ${appRootSelector} not found`);
const root = createRoot(appRoot);
root.render(<App />);

setAssetPath("/calcite");
esriConfig.assetsPath = "/core";
esriConfig.request.useIdentity = false;
esriConfig.apiKey = process.env.ARCGIS_APIKEY as string;
