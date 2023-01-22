import Graphic from "@arcgis/core/Graphic";
import { layerStore } from "../layers";
import { downloadAsCSV } from "./handleBlob";
import { downloadOption } from "../contexts";
import init, { encode } from "wanco";

// TODO: 型をしっかりつける
type graphicItem = Graphic & {
  geometry: { latitude: number; longitude: number };
};

export const downloadGraphicsAsCSV = (option: downloadOption): void => {
  init().then(() => {
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
    const encoded = encode(csvContent, option.encoding);
    const saveContent = new Uint8Array(encoded.bytes);
    downloadAsCSV(saveContent);
  });
};
