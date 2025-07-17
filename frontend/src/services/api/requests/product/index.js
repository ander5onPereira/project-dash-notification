import { api } from '../..';
import {
  toastError,
  toastInfo,
  toastSuccess,
} from '../../../../function/notifications';
import { urls } from '../../urls';

async function getItems(params) {
  return api.get(urls.product.getAll, { params }).then((res) => {
    return res.data;
  });
}
async function submitForm(formData, successCallBack, errorCallBack) {
  if (formData?.id) {
    await api
      .patch(urls.product.update.replace('{{id}}', `${formData.id}`), formData)
      .then(() => {
        if (successCallBack) {
          successCallBack();
        }
        toastSuccess('atualizado com sucesso!');
      })
      .catch(() => {
        if (errorCallBack) {
          errorCallBack();
        }
        toastError('error ocorreu ao atualizar!');
      });
  } else {
    await api
      .post(urls.product.create, formData)
      .then(() => {
        if (successCallBack) {
          successCallBack();
        }
        toastSuccess('cadastro realizado com sucesso!');
      })
      .catch(() => {
        if (errorCallBack) {
          errorCallBack();
        }
        toastError('error ocorreu ao cadastrar!');
      });
  }
}
async function deleteItem(id, successCallBack, errorCallBack) {
  await api
    .delete(urls.product.delete.replace('{{id}}', `${id}`))
    .then(() => {
      if (successCallBack) {
        successCallBack();
      }
      toastInfo('deletado com sucesso!');
    })
    .catch((err) => {
      if (errorCallBack) {
        errorCallBack();
      }
      toastError('error ocorreu ao deletar!');
    });
}

const productApi = {
  getItems,
  submitForm,
  deleteItem,
};

export default productApi;
