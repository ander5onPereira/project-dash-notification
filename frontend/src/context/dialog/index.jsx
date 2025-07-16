import { createContext, useState } from 'react';
import DialogConfirm from '../../components/dialog/dialogConfirm';
import GenericDialog from '../../components/dialog/genericDialog';

const DialogContext = createContext({
  displayDialog: () => {},
  removeDialog: () => {},
  dialogConfirm: () => {},
});
const externalDialogCall = {
  displayDialog: () => {},
  removeDialog: () => {},
  dialogConfirm: () => {},
};
export function DialogProvider(props) {
  const { children } = props;
  const [dialogs, setDialogs] = useState([]);

  function displayDialog(dProps) {
    const dialogExists = dialogs.find(
      (dialog) => dialog.dialogId === dProps.dialogId
    );
    if (dialogExists) {
      setDialogs((current) => [
        ...[...current].filter((dialog) => dialog.dialogId !== dProps.dialogId),
        { ...dProps },
      ]);
    } else {
      setDialogs((current) => [...current, { ...dProps }]);
    }
  }
  function removeDialog(dialogId) {
    setDialogs((currentDialogs) => {
      const dialogToRemove = currentDialogs.find(
        (dialog) => dialog.dialogId === dialogId
      );
      if (dialogToRemove) {
        if (dialogToRemove?.onCloseCallback) {
          dialogToRemove.onCloseCallback();
        }
        if (dialogToRemove?.dialogProps?.onClose) {
          dialogToRemove?.dialogProps?.onClose();
        }
      }
      return currentDialogs.filter((dialog) => dialog.dialogId !== dialogId);
    });
  }
  function closeAllDialog() {
    setDialogs([]);
  }

  function displayConfirm(propsConfirm) {
    displayDialog({
      dialogId: 'CONFIRM-DIALOG',
      content: <DialogConfirm {...propsConfirm} />,
    });
  }

  externalDialogCall.displayDialog = displayDialog;
  externalDialogCall.removeDialog = removeDialog;
  externalDialogCall.dialogConfirm = displayConfirm;

  return (
    <DialogContext.Provider
      value={{
        displayDialog,
        removeDialog,
        dialogConfirm: displayConfirm,
        closeAllDialog,
      }}
    >
      {children}
      {dialogs?.map((dialog) => {
        return (
          <GenericDialog
            key={dialog.dialogId}
            {...dialog?.dialogProps}
            onClose={() => removeDialog(dialog.dialogId)}
          >
            {dialog.content}
          </GenericDialog>
        );
      })}
    </DialogContext.Provider>
  );
}
export default DialogContext;
