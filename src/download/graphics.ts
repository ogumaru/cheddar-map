import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { layers } from "../layers";
import { downloadAsCSV } from "./handleBlob";

type downloadOption = {
  encoding: "utf-8";
  lineBreak: "\n" | "\r\n";
};

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
export const registerDownloadGraphicsAsCSV = (
  downloadButton: Element,
  option: downloadOption = defaultOption
): void => {
  downloadButton.addEventListener("click", (_) => {
    const header = ["名前", "緯度", "経度"].join(",");
    // @ts-expect-error
    const items = (layers[0] as GraphicsLayer).graphics.items as graphicItem[];
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
  });
};
