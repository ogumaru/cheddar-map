import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import SimpleMarkerSymbol from "@arcgis/core/symbols/SimpleMarkerSymbol";
import PopupTemplate from "@arcgis/core/PopupTemplate";
import FieldInfo from "@arcgis/core/popup/FieldInfo";

type option = {
  isSetAttributes: boolean;
};

const defaultOption: option = { isSetAttributes: true } as const;

export const createMarker = (
  graphics: __esri.Collection<Graphic>,
  coordinate: __esri.PointProperties,
  option: option = defaultOption
) => {
  const point = new Point({
    longitude: coordinate.longitude,
    latitude: coordinate.latitude,
    // WGS84
    spatialReference: new SpatialReference({ wkid: 4326 }),
  });

  const markerSymbol = new SimpleMarkerSymbol({
    color: "#adff2f",
  });

  // TODO: 入力UIを用意する(とりあえずこれで入力)
  const name = option.isSetAttributes
    ? window.prompt("ポイントの名前を入力してください。")
    : undefined;

  // Canceled on prompt
  if (name === null) return;

  const attributes = {
    name: name,
  };

  const pointGraphic = new Graphic({
    // @ts-ignore
    geometry: point,
    symbol: markerSymbol,
    attributes: attributes,
  });

  // Show popup
  if (option.isSetAttributes) {
    const info = new PopupTemplate({
      title: name,
      content: [
        {
          type: "fields",
          fieldInfos: [
            new FieldInfo({
              fieldName: "name",
              label: "名前",
            }),
          ],
        },
      ],
    });
    pointGraphic.popupTemplate = info;
  }

  graphics.add(pointGraphic);
};
