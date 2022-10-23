import { graphicsLabelLayer, graphicsLayer } from "./graphics";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
export { csvLayerFromURL } from "./csv";

export class LayerStore {
  public graphicsLayer: GraphicsLayer;
  public graphicsLabelLayer: GraphicsLayer;

  constructor(prop: {
    graphicsLayer: GraphicsLayer;
    graphicsLabelLayer: GraphicsLayer;
  }) {
    this.graphicsLayer = prop.graphicsLayer;
    this.graphicsLabelLayer = prop.graphicsLabelLayer;
  }

  public get layers(): Array<__esri.Layer> {
    return [this.graphicsLayer, this.graphicsLabelLayer];
  }
}

export const layerStore = new LayerStore({
  graphicsLayer,
  graphicsLabelLayer,
});
