import { encoding_t } from "../contexts";
export const supportedEncodings: Array<{
  displayName: string;
  value: encoding_t;
}> = [
  { displayName: "UTF-8", value: "utf-8" },
  { displayName: "EUC-JP", value: "euc-jp" },
  { displayName: "Shift_JIS", value: "shift_jis" },
];
