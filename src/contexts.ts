import { createContext } from "react";

export type encoding_t = "utf-8" | "euc-jp" | "shift_jis";
type lineBreak_t = "\n" | "\r\n";
export type csvEncodingSetting_t = {
  encoding: encoding_t;
};
export type downloadOption = {
  encoding: encoding_t;
  lineBreak: lineBreak_t;
};

type MenuContext = {
  isSetAttr: boolean;
  setIsSetAttr: (isSet: boolean) => void;
  csvExportSetting: downloadOption;
  setCsvExportEncoding: (setting: csvEncodingSetting_t) => void;
};

export const defaultContext: MenuContext = {
  isSetAttr: false,
  setIsSetAttr: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  csvExportSetting: { encoding: "utf-8", lineBreak: "\n" },
  setCsvExportEncoding: (() => {}) as React.Dispatch<
    React.SetStateAction<csvEncodingSetting_t>
  >,
};

export const MenuContext = createContext<MenuContext>(defaultContext);
