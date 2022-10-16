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
  container: "viewDiv",
});
