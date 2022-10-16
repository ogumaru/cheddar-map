import { csvLayerFromURL } from "../layers";
import { mapView } from "../mapView";

export const isCSVItem = (item: DataTransferItem): boolean => {
  const isCSV = isCSVType(item.type);

  // Ubuntu 22.04 + Chromium環境で
  // 同じドロップ操作をしてもなぜか下記2通りになる。
  // DataTransferItem {kind: 'file', type: 'text/csv'}
  // DataTransferItem {kind: 'string', type: 'text/plain'}
  // kindがstringのときはgetAsFile()がnullになる
  // 複数のファイルをドロップ操作したとき、kindがstringの場合itemは1つしか取得できない
  const isFile = item.kind === "file";
  return isFile && isCSV;
};

export const isCSVFile = (file: File): boolean => {
  return isCSVType(file.type);
};

const isCSVType = (type: string): boolean => {
  const isCSV = [
    type === "text/plain",
    type === "text/csv",
    // Windows (Excel installed).
    type === "application/vnd.ms-excel",
    // Windows (Excel not installed).
    type === "application/octet-stream",
  ].some((result) => result === true);
  return isCSV;
};

export const loadCSV = (file: Blob): void => {
  const blobUrl = window.URL.createObjectURL(file);
  const csvLayer = csvLayerFromURL(blobUrl);
  csvLayer.renderer = {
    type: "simple",
    // @ts-ignore
    symbol: {
      type: "simple-marker",
      size: 12,
      color: "#7fffd4",
      outline: {
        width: 2,
        color: "#414141",
      },
    },
  };
  mapView.map.add(csvLayer);
};
