import esriConfig from "@arcgis/core/config.js";
import { mapView } from "./mapView";
import { registerDragAndDrop, registerFileSelection } from "./loadCSV";
import { createMarker } from "./drawGraphic";
import { layers } from "./layers";
import { registerDownloadGraphicsAsCSV } from "./download/graphics";
esriConfig.assetsPath = "./assets";
esriConfig.request.useIdentity = false;
esriConfig.apiKey = "ARCGIS_APIKEY";

console.log(mapView);

const mapElementSelector = "#viewDiv";
const mapElement = document.querySelector(`${mapElementSelector}`);
if (!mapElement) throw new Error(`Cannot find: ${mapElementSelector}`);
registerDragAndDrop(mapElement);

const fileInputSelector = "input[type='file']";
const fileInput = document.querySelector(fileInputSelector);
if (!fileInput) throw new Error(`Cannot find: ${fileInputSelector}`);
registerFileSelection(fileInput);

mapView.on("double-click", (event) => {
  event.stopPropagation();
  const inputIsSetAttributes = document.querySelector(
    "input[id='set-attributes']"
  ) as HTMLInputElement;
  const isSetAttributes = inputIsSetAttributes.checked;

  // @ts-expect-error
  createMarker(layers[0], event.mapPoint, { isSetAttributes: isSetAttributes });
});

const downloadGraphicSelector = "#dl-graphics";
const downloadGraphics = document.querySelector(downloadGraphicSelector);
if (!downloadGraphics)
  throw new Error(`Cannot find: ${downloadGraphicSelector}`);
registerDownloadGraphicsAsCSV(downloadGraphics);
