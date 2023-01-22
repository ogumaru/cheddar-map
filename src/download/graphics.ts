import Graphic from "@arcgis/core/Graphic";
import { layerStore } from "../layers";
import { downloadAsCSV } from "./handleBlob";
import { downloadOption } from "../contexts"

// TODO: 型をしっかりつける
type graphicItem = Graphic & {
  geometry: { latitude: number; longitude: number };
};

const defaultOption: downloadOption = {
  encoding: "utf-8",
  lineBreak: "\n",
} as const;

// TODO: Shift_JIS対応
// TextEncoderでは難しそうだった
export const downloadGraphicsAsCSV = (
  option: downloadOption = defaultOption
): void => {
  const header = ["名前", "緯度", "経度"].join(",");
  // @ts-expect-error
  const items = layerStore.graphicsLayer.graphics.items as graphicItem[];
  const content = items
    .map((item) =>
      [
        item.attributes.name,
        item.geometry.latitude,
        item.geometry.longitude,
      ].join(",")
    )
    .join(option.lineBreak);
  // Ensure to ends with blank line.
  const csvContent = [header, content, ""].join(option.lineBreak);
  downloadAsCSV(csvContent);
};
