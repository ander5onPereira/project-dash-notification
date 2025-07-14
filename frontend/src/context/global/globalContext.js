import { createContext } from "react";

export const GlobalContext = createContext({
  toogleMenu: () => {},
  menuMobile: false,
  appType: 'mobile',
  screen: 'xs',
});