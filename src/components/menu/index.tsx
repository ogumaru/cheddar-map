import { downloadGraphicsAsCSV } from "../../download/graphics";
import { handleSelection } from "../../loadCSV";
import { useContext } from "react";
import { MenuContext } from "../../contexts";
import { CalciteBlock, CalciteIcon } from "@esri/calcite-components-react";

export const Menu = () => {
  const context = useContext(MenuContext);
  return (
    <>
      <CalciteBlock collapsible heading="メニュー" style={{ margin: 0 }}>
        <CalciteIcon scale="m" slot="icon" icon="hamburger"></CalciteIcon>
        <div id="menu">
          <label htmlFor="fileselect-csv">CSVファイルのインポート</label>
          <input
            id="fileselect-csv"
            type="file"
            multiple={true}
            accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
            onChange={handleSelection}
          />
          <button id="dl-graphics" onClick={() => downloadGraphicsAsCSV()}>
            CSVファイルのエクスポート
          </button>
          <label htmlFor="set-attributes">ポイントへ属性情報を追加</label>
          <input
            id="set-attributes"
            type="checkbox"
            checked={context.isSetAttr}
            onChange={(e) => context.setIsSetAttr(e.target.checked)}
          />
        </div>
      </CalciteBlock>
    </>
  );
};
