import { downloadGraphicsAsCSV } from "../../download/graphics";
import { handleSelection } from "../../loadCSV";
import { useContext } from "react";
import { MenuContext, csvEncodingSetting_t } from "../../contexts";
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
import { supportedEncodings } from "../../download/settings";

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
            onClick={() => downloadGraphicsAsCSV(context.csvExportSetting)}
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
          <CalciteDropdown
            onCalciteDropdownSelect={(e) => {
              // TODO: 実装の検討 (1/2)
              {/* @ts-ignore */}
              const encoding = e.target.selectedItems[0].attributes[0]
                .nodeValue as csvEncodingSetting_t;
              context.setCsvExportEncoding(encoding);
            }}
          >
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
              {
                /* 
              TODO: 実装の検討 (2/2)
              CalciteDropdownItem に value に当たる属性が見つからず、選択時に textContent などから取得する方法しか浮かばなかった。
              型情報を保持するためにReactコンポーネントの属性情報として保持するため、
              defaultValueを利用するが、正しい利用方法か不明
              */
                supportedEncodings.map((encoding) => {
                  const selected = context.csvExportSetting.encoding === encoding.value
                  return (
                    <CalciteDropdownItem
                      defaultValue={encoding.value}
                      key={encoding.value}
                      selected={ selected }
                    >
                      {encoding.displayName}
                    </CalciteDropdownItem>
                  );
                })
              }
            </CalciteDropdownGroup>
          </CalciteDropdown>
        </CalcitePanel>
      </CalciteBlock>
    </>
  );
};
