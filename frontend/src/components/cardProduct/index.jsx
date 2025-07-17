import { CiEdit } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FormProduct } from '../formProduct';
import { Card } from '../dialog/card';
import DialogConfirm from '../dialog/dialogConfirm';
import { useDialog } from '../../context/dialog/useDialog';
import productApi from '../../services/api/requests/product';
import { Divider } from '../Divider';
import { useProduct } from '../../context/product/useProduct';

export function CardProduct(props) {
  const { ...product } = props;
  const { displayDialog, removeDialog, closeAllDialog } = useDialog();
  const { fetchProducts } = useProduct();

  function handlerEditProduct(item) {
    displayDialog({
      dialogId: 'DIALOG-ADD',
      content: (
        <FormProduct
          onClose={() => closeAllDialog()}
          initialData={item}
          refetch={fetchProducts}
        />
      ),
    });
  }
  function handlerDelete(id) {
    productApi.deleteItem(id, () => {
      fetchProducts();
      closeAllDialog();
    });
  }
  function handlerConfirmDelete(item) {
    displayDialog({
      dialogId: 'CONFIRM-DIALOG',
      content: (
        <DialogConfirm
          onCancelCallBack={() => removeDialog('CONFIRM-DIALOG')}
          title='Deseja apagar a produto?'
          cancelLabel='Cancelar'
          confirmLabel='Excluir'
          onConfirmCallBack={() => handlerDelete(item?.id)}
        />
      ),
    });
  }
  return (
    <Card className='max-h-[80dvh] overflow-y-auto w-[80dvw]'>
      <div className='flex items-center justify-center py-4 w-full'>
        <img
          src={`${product.imageUrl}`}
          alt={product.name}
          className='w-full md:w-1/2 h-full max-h-[40dvh] object-contain '
        />
      </div>
      <Divider className={'border-gray-400'} />
      <div className='flex flex-col gap-2'>
        <p className='text-base text-gray-600 text-justify flex gap-1'>
          <strong>Nome:</strong>
          {product.name}
        </p>
      </div>
      <div className='flex flex-col gap-2 '>
        <p className='text-base text-gray-600 text-justify flex gap-1'>
          <strong>Categoria:</strong>
          {product.category}
        </p>
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-base text-gray-600 text-justify flex gap-1'>
          <strong>Preço:</strong>
          {product.price}
        </p>
      </div>
      <div className='flex flex-col gap-2 pb-4'>
        <p className='text-base text-gray-600 text-justify flex gap-1'>
          <strong>Descrição:</strong>
          {product.description}
        </p>
      </div>
      <div className='flex justify-end gap-2'>
        <button
          type='button'
          className=' border-2 border-gray-600 hover:bg-gray-200 p-2 rounded-lg cursor-pointer'
          onClick={() => handlerConfirmDelete(product)}
        >
          <RiDeleteBinLine className='size-5' />
        </button>
        <button
          className=' border-2 border-gray-600 hover:bg-gray-200 p-2 rounded-lg cursor-pointer'
          type='button'
          onClick={() => handlerEditProduct(product)}
        >
          <CiEdit className='size-5' />
        </button>
      </div>
    </Card>
  );
}
