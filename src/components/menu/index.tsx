import { downloadGraphicsAsCSV } from "../../download/graphics";
import { handleSelection } from "../../loadCSV";
import { useContext } from "react";
import { MenuContext } from "../../contexts";
import {
  CalciteBlock,
  CalciteBlockSection,
  CalciteIcon,
  CalciteNotice,
} from "@esri/calcite-components-react";

export const Menu = () => {
  const context = useContext(MenuContext);
  return (
    <>
      <CalciteBlock collapsible heading="メニュー" style={{ margin: 0 }}>
        <CalciteIcon scale="m" slot="icon" icon="hamburger"></CalciteIcon>
        <div id="menu">
          <CalciteBlockSection text="インポート">
            <label htmlFor="fileselect-csv">Choose CSV</label>
            <input
              id="fileselect-csv"
              type="file"
              multiple={true}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={handleSelection}
            />
          </CalciteBlockSection>
          <CalciteBlockSection text="エクスポート">
            <button id="dl-graphics" onClick={() => downloadGraphicsAsCSV()}>
              Download
            </button>
          </CalciteBlockSection>
          <CalciteBlockSection text="設定">
            <label htmlFor="set-attributes">Set Attribute</label>
            <input
              id="set-attributes"
              type="checkbox"
              checked={context.isSetAttr}
              onChange={(e) => context.setIsSetAttr(e.target.checked)}
            />
          </CalciteBlockSection>
        </div>
      </CalciteBlock>
    </>
  );
};
