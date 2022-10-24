import { useEffect, useState } from "react";
import { Menu } from "./components/menu";
import { handleDragOver, handleDrop } from "./loadCSV";
import { mapView } from "./mapView";
import { MenuContext } from "./contexts";
import { createMarker } from "./drawGraphic";
import { layerStore } from "./layers";

export const App = () => {
  const [isSetAttributes, setIsSetAttributes] = useState(false);

  useEffect(() => {
    mapView.set("container", "viewDiv");
    mapView.on("double-click", (event) => {
      event.stopPropagation();
      // @ts-expect-error
      createMarker(layerStore.graphicsLayer, event.mapPoint, {
        isSetAttributes,
      });
    });
  }, [isSetAttributes]);
  return (
    <>
      <MenuContext.Provider
        value={{ isSetAttr: isSetAttributes, setIsSetAttr: setIsSetAttributes }}
      >
        <Menu />
        <div onDragOver={handleDragOver} onDrop={handleDrop} id="viewDiv"></div>
      </MenuContext.Provider>
    </>
  );
};
