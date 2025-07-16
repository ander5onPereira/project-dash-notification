export function useDialogConfirm({
  onCancelCallBack,
  onConfirmCallBack,
}) {
  const handleCancel = () => {
    onCancelCallBack()
  }

  const handleConfirm = () => {
    onConfirmCallBack()
  }

  return {
    handleCancel,
    handleConfirm,
  }
}
