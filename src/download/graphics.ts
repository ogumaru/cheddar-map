import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import { layers } from "../layers";

export const registerDownloadGraphicsAsCSV = (
  downloadButton: Element
): void => {
  downloadButton.addEventListener("click", (_) => {
    // @ts-ignore
    const graphics = (layers[0] as GraphicsLayer).graphics._items;
    console.log(graphics);
  });
};
