
import Graphic from "@arcgis/core/Graphic";

export const createMarker = (
  graphics: __esri.Collection<Graphic>,
  coordinate: __esri.PointProperties
) => {
  const point = {
    type: "point",
    longitude: coordinate.longitude,
    latitude: coordinate.latitude,
  };

  const markerSymbol = {
    type: "simple-marker",
    color: "#adff2f",
  };

  const pointGraphic = new Graphic({
    // @ts-ignore
    geometry: point,
    symbol: markerSymbol,
  });

  graphics.add(pointGraphic);
}