import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";
import { layerStore } from "./layers";

export const map = new Map({
  basemap: "arcgis-topographic",
  layers: layerStore.layers,
});

export const mapView = new MapView({
  map: map,
  center: [139.80566054418858, 36.31244412415885],
  zoom: 16,
});
