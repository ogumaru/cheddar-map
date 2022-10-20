import { Menu } from "./components/menu";
import { handleDragOver, handleDrop } from "./loadCSV";

export const App = () => {
  return (
    <>
      <Menu></Menu>
      <div onDragOver={handleDragOver} onDrop={handleDrop} id="viewDiv"></div>;
    </>
  );
};
