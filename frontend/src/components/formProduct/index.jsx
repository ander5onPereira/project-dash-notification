
import { useState } from 'react';
import { Card } from '../dialog/card';
import { useDialog } from '../../context/dialog/useDialog';
import productApi from '../../services/api/requests/product';

const newData = {
  imageUrl: '',
  name: '',
  price: 0,
  description: '',
};

export function FormProduct({ onClose, initialData, refetch }) {
  const [formData, setFormData] = useState(initialData || newData);
  const { displayDialog } = useDialog();

  const handleSubmit = (e) => {
    e.preventDefault();
    productApi.submitForm(
      formData,
      () => {
        refetch();
        setFormData(newData);
        onClose();
      },
      () => {
        toastError(<span>Error</span>);
      },
    );
  };
  function updateField(fieldName, value) {
    setFormData((prevItem) => ({ ...prevItem, [fieldName]: value }));
  }
  function handlerViewImage() {
    displayDialog({
      dialogId: 'VIEW_IMAGE',
      content: (
        <Card className={' flex items-center justify-center w-full h-full'}>
          <img src={`${formData?.imageUrl}`} alt='imagem' />
        </Card>
      ),
    });
  }
  return (
    <Card className={'w-[50dvw] '}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Name
        </label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          category
        </label>
        <input
          type='text'
          name='category'
          value={formData.category}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Price
        </label>
        <input
          type='number'
          name='price'
          value={formData.price}
          onChange={({ target }) => {
            updateField(target.name, Number(target.value));
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          ImageUrl
        </label>
        <input
          type='text'
          name='imageUrl'
          value={formData.imageUrl}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-1'
        />
        <div hidden={!formData?.imageUrl} className='mb-3'>
          <button
            type='button'
            onClick={handlerViewImage}
            className='underline'
          >
            Ver image
          </button>
        </div>

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Description
        </label>
        <textarea
          value={formData.description}
          name='description'
          onChange={({ target }) => updateField(target.name, target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4 resize-y min-h-[100px]'
        />

        <div>
          <button
            type='submit'
            disabled={
              !formData.name ||
              !formData.category ||
              !formData.price ||
              !formData.imageUrl ||
              !formData.description
            }
            className='bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-pointer  disabled:opacity-50 disabled:cursor-not-allowed'
          >
            enviar
          </button>
        </div>
      </form>
    </Card>
  );
}
