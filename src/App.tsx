import { useEffect } from "react";
import { Menu } from "./components/menu";
import { handleDragOver, handleDrop } from "./loadCSV";
import { setupMapView } from "./mapView";

export const App = () => {
  useEffect(setupMapView, []);
  return (
    <>
      <Menu></Menu>
      <div onDragOver={handleDragOver} onDrop={handleDrop} id="viewDiv"></div>;
    </>
  );
};
