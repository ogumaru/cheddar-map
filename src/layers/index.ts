import { graphicsLabelLayer, graphicsLayer } from "./graphics";
export { csvLayerFromURL } from "./csv";

export const layers = [] as __esri.Layer[];

layers.push(graphicsLayer);
layers.push(graphicsLabelLayer);
