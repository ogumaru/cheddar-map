import { downloadGraphicsAsCSV } from "../../download/graphics";
import { handleSelection } from "../../loadCSV";
import { useContext } from "react";
import { MenuContext } from "../../contexts";
import {
  CalciteBlock,
  CalciteIcon,
  CalciteSwitch,
  CalciteLabel,
  CalciteButton,
  CalcitePanel,
} from "@esri/calcite-components-react";

export const Menu = () => {
  const context = useContext(MenuContext);
  const marginEachComponents = "0.5em";
  return (
    <>
      <CalciteBlock collapsible heading="メニュー" style={{ margin: 0 }}>
        <CalciteIcon scale="m" slot="icon" icon="hamburger"></CalciteIcon>
        <CalcitePanel id="menu">
          {/* CalciteInputがfileのmultipleをサポートしていないため素のinput */}
          <div style={{ margin: marginEachComponents }}>
            <label htmlFor="fileselect-csv">CSVファイルのインポート</label>
            <input
              id="fileselect-csv"
              type="file"
              multiple={true}
              accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
              onChange={handleSelection}
            />
          </div>
          <CalciteButton
            style={{ margin: marginEachComponents }}
            id="dl-graphics"
            onClick={() => downloadGraphicsAsCSV()}
          >
            CSVファイルのエクスポート
          </CalciteButton>
          <CalciteLabel
            layout="inline"
            style={{ margin: marginEachComponents }}
          >
            ポイントへ属性情報を追加
            <CalciteSwitch
              id="set-attributes"
              onCalciteSwitchChange={(e) => {
                const input = e.target;
                context.setIsSetAttr(input.checked);
              }}
            />
          </CalciteLabel>
        </CalcitePanel>
      </CalciteBlock>
    </>
  );
};
