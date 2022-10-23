import Graphic from "@arcgis/core/Graphic";
import Point from "@arcgis/core/geometry/Point";
import TextSymbol from "@arcgis/core/symbols/TextSymbol";
import { graphicsLabelLayer } from "../layers/graphics";

export const addLabelWithPoint = (
  point: Point,
  text: string,
  option: __esri.TextSymbolProperties
) => {
  const textSymbol = new TextSymbol({
    text: text,
    font: {
      size: 12,
    },
    yoffset: option.yoffset,
  });
  const labelGraphis = new Graphic({
    // @ts-ignore
    geometry: point,
    symbol: textSymbol,
  });
  graphicsLabelLayer.add(labelGraphis);
};
