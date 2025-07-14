import { useState } from 'react';
import { toastError, toastSuccess } from '../../function/notifications';
import { useDialog } from '../../Hooks/useDialog';
import { useNews } from '../../Hooks/useNews';
import newsApi from '../../services/api/requests/news';
import { Card } from '../dialog/card';
import { InputFile } from '../input/InputFile';
import { InputToggle } from '../input/InputToggle';
const newData = {
  isActive: false,
  imageKey: '',
  title: '',
  resume: '',
  description: '',
};
export function FormNews({ onClose, initialData }) {
  const [formData, setFormData] = useState(initialData || newData);
  const { displayDialog } = useDialog();
  const { refetch } = useNews();
  const handleSubmit = (e) => {
    e.preventDefault();
    newsApi.submitForm(
      formData,
      () => {
        refetch();
        setFormData(initialData);
        onClose();
      },
      () => {
        toastError(<span>Error</span>);
      }
    );
  };
  function updateField(fieldName, value) {
    setFormData((prevItem) => ({ ...prevItem, [fieldName]: value }));
  }
  function uploadFile(res) {
    if (res?.fileUrl && res?.success) {
      toastSuccess(<span>Upload realizado com sucesso</span>);
      updateField('imageKey', res.fileUrl);
    } else {
      toastError(<span>Upload falhou</span>);
    }
  }
  function handlerViewImage() {
    displayDialog({
      dialogId: 'VIEW_IMAGE',
      content: (
        <Card className={' flex items-center justify-center w-full h-full'}>
          <img
            src={`${import.meta.env.VITE_API_URL}${formData?.imageKey}`}
            alt='imagem'
          />
        </Card>
      ),
    });
  }
  return (
    <Card className={'w-95 '}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Título
        </label>
        <input
          type='text'
          name='title'
          value={formData.title}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Resume
        </label>
        <input
          type='text'
          name='resume'
          value={formData.resume}
          onChange={({ target }) => {
            updateField(target.name, target.value);
          }}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4'
        />

        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Description
        </label>
        <textarea
          value={formData.description}
          name='description'
          onChange={({ target }) => updateField(target.name, target.value)}
          className='w-full px-3 py-2 border border-gray-300 rounded mb-4 resize-y min-h-[100px]'
        />
        <InputFile
          name='file'
          label='Selecionar Imagem'
          uploadUrl={`${import.meta.env.VITE_API_URL}/api/upload`}
          accept='image/*'
          multiple={false}
          onUploadSuccess={uploadFile}
        />
        <div hidden={!formData?.imageKey}>
          <button type='button' onClick={handlerViewImage}>
            Ver image
          </button>
        </div>
        <div className='pt-4'>
          <InputToggle
            label='isActive'
            name='isActive'
            value={formData.isActive}
            onChange={({ target }) => {
              updateField(target.name, target.value);
            }}
          />
        </div>
        <div>
          <button
            type='submit'
            disabled={
              !formData.title ||
              !formData.description ||
              !formData.imageKey ||
              !formData.resume
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
