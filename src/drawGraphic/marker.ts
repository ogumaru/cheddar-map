import Graphic from "@arcgis/core/Graphic";

type option = {
  isSetAttributes: boolean;
};

const defaultOption: option = { isSetAttributes: true } as const;

export const createMarker = (
  graphics: __esri.Collection<Graphic>,
  coordinate: __esri.PointProperties,
  option: option = defaultOption
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

  // TODO: 入力UIを用意する(とりあえずこれで入力)
  const name = option.isSetAttributes
    ? window.prompt("ポイントの名前を入力してください。")
    : undefined;

  // Canceled on prompt
  if (name === null) return;
  const pointGraphic = new Graphic({
    // @ts-ignore
    geometry: point,
    symbol: markerSymbol,
    attributes: {
      name: name,
    },
  });

  graphics.add(pointGraphic);
};
