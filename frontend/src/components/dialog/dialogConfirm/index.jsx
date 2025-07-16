import Dialog from '..';
import { Card } from '../card';
import { useDialogConfirm } from './useDialogConfirm';

export default function DialogConfirm(props) {
  const {
    title,
    cancelLabel,
    confirmLabel,
    children,
  } = props;

 const { handleCancel, handleConfirm } = useDialogConfirm(props)

  return (
    <Dialog onClose={() => handleCancel()}>
      <Card className='max-w-[50dvw] w-full min-h-fit flex justify-between flex-col'>
        <div className='mb-5'>
          <h2 className='text-xl'>{title}</h2>
        </div>
        <div className='flex flex-1 h-full'>{children}</div>
        <div className='flex gap-4 '>
          <div className='w-full'>
            <button
              type='button'
              className='w-full text-center border-2 rounded-lg border-gray-400 hover:bg-gray-200 py-2 cursor-pointer'
              onClick={() => handleCancel()}
            >
              {cancelLabel}
            </button>
          </div>
          <div className='w-full'>
            <button
              type='button'
              className='w-full text-center border-2 rounded-lg border-gray-400 bg-primary text-white hover:bg-blue-600 py-2 cursor-pointer'
              onClick={() => handleConfirm()}
            >
              {confirmLabel}
            </button>
          </div>
        </div>
      </Card>
    </Dialog>
  );
}
