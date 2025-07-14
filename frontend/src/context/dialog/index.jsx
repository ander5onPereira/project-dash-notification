import { useState } from 'react';
import DialogConfirmDialog from '../../components/dialog/confirm';
import GenericDialog from '../../components/dialog/genericDialog';
import { DialogContext } from './dialogContext';
import { externalDialogCall } from './externalDialogCall';
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
      content: <DialogConfirmDialog {...propsConfirm} />,
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
