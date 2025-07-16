import { useDialog } from '../../../context/dialog/useDialog';
import { useNews } from '../../../context/news/useNews';

import newsApi from '../../../services/api/requests/news';
import DialogConfirm from '../dialogConfirm';

export function useCardNew() {
  const { displayDialog, removeDialog, closeAllDialog } = useDialog();
  const { refetch } = useNews();
  function handlerEditNew(item) {
    displayDialog({
      dialogId: 'DIALOG-ADD',
      content: <FormNews onClose={() => closeAllDialog()} initialData={item} />,
    });
  }
  function handlerDelete(id) {
    newsApi.deleteItem(id, () => {
      refetch();
      closeAllDialog();
    });
  }
  function handlerConfirmDelete(item) {
    displayDialog({
      dialogId: 'CONFIRM-DIALOG',
      content: (
        <DialogConfirm
          onCancelCallBack={() => removeDialog('CONFIRM-DIALOG')}
          title='Deseja apagar a news?'
          cancelLabel='Cancelar'
          confirmLabel='Excluir'
          onConfirmCallBack={() => handlerDelete(item?.id)}
        />
      ),
    });
  }
  return {
    handlerConfirmDelete,
    handlerEditNew,
  };
}
