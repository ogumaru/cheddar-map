import { graphicsLayer } from "./graphics";
import { csvLayerFromURL } from "./csv";

const layers = [] as __esri.Layer[];

layers.push(graphicsLayer);
export { layers, csvLayerFromURL };
