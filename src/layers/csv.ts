import CSVLayer from "@arcgis/core/layers/CSVLayer";
export const csvLayerFromURL = (url: string) => {
  const layer = new CSVLayer({
    url: url,
    latitudeField: "緯度",
    longitudeField: "経度",
  });
  return layer;
};
