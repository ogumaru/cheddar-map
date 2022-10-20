import { createMarker } from "./drawGraphic";
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { layers } from "./layers";

export const map = new Map({
  basemap: "arcgis-topographic",
  layers: layers,
});

export const mapView = new MapView({
  map: map,
  center: [139.80566054418858, 36.31244412415885],
  zoom: 16,
});

export const setupMapView = () => {
  mapView.set("container", "viewDiv");
  mapView.on("double-click", (event) => {
    event.stopPropagation();
    const inputIsSetAttributes = document.querySelector(
      "input[id='set-attributes']"
    ) as HTMLInputElement;
    const isSetAttributes = inputIsSetAttributes.checked;

    // @ts-expect-error
    createMarker(layers[0], event.mapPoint, {
      isSetAttributes: isSetAttributes,
    });
  });
};
