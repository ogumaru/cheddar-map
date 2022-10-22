import { createContext } from "react";

type MenuContext = {
  isSetAttr: boolean;
  setIsSetAttr: (isSet: boolean) => void;
};

export const defaultContext: MenuContext = {
  isSetAttr: false,
  setIsSetAttr: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
};

export const MenuContext = createContext<MenuContext>(defaultContext);
