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
  CalciteDropdown,
  CalciteDropdownGroup,
  CalciteDropdownItem,
} from "@esri/calcite-components-react";

export const Menu = () => {
  const context = useContext(MenuContext);
  const marginEachComponents = "0.5em";
  return (
    <>
      <CalciteBlock
        collapsible
        heading="メニュー"
        style={{
          margin: 0,
          position: "absolute",
          top: 0,
          zIndex: 2,
        }}
      >
        <CalciteIcon scale="m" slot="icon" icon="hamburger"></CalciteIcon>
        <CalcitePanel id="menu" style={{ overflow: "visible" }}>
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
          <CalciteDropdown>
            <CalciteButton
              slot="dropdown-trigger"
              style={{ margin: marginEachComponents }}
            >
              CSVエクスポート設定
            </CalciteButton>
            <CalciteDropdownGroup
              selection-mode="single"
              group-title="文字エンコーディング"
            >
              <CalciteDropdownItem selected>UTF-8</CalciteDropdownItem>
              <CalciteDropdownItem>EUC-JP</CalciteDropdownItem>
              <CalciteDropdownItem>Shift_JIS</CalciteDropdownItem>
            </CalciteDropdownGroup>
          </CalciteDropdown>
        </CalcitePanel>
      </CalciteBlock>
    </>
  );
};
