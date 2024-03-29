import { useEffect, useState } from "react";
import { Menu } from "./components/menu";
import { handleDragOver, handleDrop } from "./loadCSV";
import { mapView } from "./mapView";
import { MenuContext } from "./contexts";
import { createMarker } from "./drawGraphic";
import { layerStore } from "./layers";
import { encoding_t } from "./contexts";

export const App = () => {
  const [isSetAttributes, setIsSetAttributes] = useState(false);
  const [csvExportEncoding, setCsvExportEncoding] = useState(
    "utf-8" as encoding_t
  );

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
        value={{
          isSetAttr: isSetAttributes,
          setIsSetAttr: setIsSetAttributes,
          csvExportSetting: {
            encoding: csvExportEncoding,
            lineBreak: "\n",
          },
          setCsvExportEncoding: setCsvExportEncoding,
        }}
      >
        <Menu />
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          id="viewDiv"
          style={{
            padding: 0,
            margin: 0,
            height: "100%",
            width: "100%",
          }}
        ></div>
      </MenuContext.Provider>
    </>
  );
};
