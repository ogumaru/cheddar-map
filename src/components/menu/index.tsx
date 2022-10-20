import { downloadGraphicsAsCSV } from "../../download/graphics";
import { handleSelection } from "../../loadCSV";

export const Menu = () => {
  return (
    <>
      <div id="menu">
        <label htmlFor="fileselect-csv">Choose CSV</label>
        <input
          id="fileselect-csv"
          type="file"
          multiple={true}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          onChange={handleSelection}
        />
        <button id="dl-graphics" onClick={() => downloadGraphicsAsCSV()}>
          Download
        </button>
        <label htmlFor="set-attributes">Set Attribute</label>
        <input id="set-attributes" type="checkbox" />
      </div>
    </>
  );
};
