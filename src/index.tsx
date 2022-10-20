import esriConfig from "@arcgis/core/config.js";
import { mapView } from "./mapView";
import { createMarker } from "./drawGraphic";
import { layers } from "./layers";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const root = createRoot(document.querySelector("div#app"));
root.render(<App />);

esriConfig.assetsPath = "./assets";
esriConfig.request.useIdentity = false;
esriConfig.apiKey = "ARCGIS_APIKEY";
console.log(mapView);

mapView.on("double-click", (event) => {
  event.stopPropagation();
  const inputIsSetAttributes = document.querySelector(
    "input[id='set-attributes']"
  ) as HTMLInputElement;
  const isSetAttributes = inputIsSetAttributes.checked;

  // @ts-expect-error
  createMarker(layers[0], event.mapPoint, { isSetAttributes: isSetAttributes });
});
