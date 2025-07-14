import { createContext } from "react";

export const DialogContext = createContext({
  displayDialog: () => {},
  removeDialog: () => {},
  dialogConfirm: () => {},
});