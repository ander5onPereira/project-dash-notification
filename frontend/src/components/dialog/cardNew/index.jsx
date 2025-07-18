import { CiEdit } from 'react-icons/ci';
import { RiDeleteBinLine } from 'react-icons/ri';
import { Divider } from '../../Divider';
import { Card } from '../card';
import { useCardNew } from './useCardNew';
export function CardNew(props) {
  const { item } = props;
  const { handlerConfirmDelete, handlerEditNew } = useCardNew();

  return (
    <Card className='max-h-[80dvh] overflow-y-auto w-[80dvw]'>
      <div className='flex justify-center pb-2'>
        <h2 className='text-primary font-bold text-2xl'>{item.title}</h2>
      </div>
      <Divider className={'border-gray-400'} />
      <div className='flex items-center justify-center py-4 w-full'>
        <img
          src={`${import.meta.env.VITE_API_URL}${item.imageKey}`}
          alt={item.title}
          className='w-full md:w-1/2 h-full object-cover '
        />
      </div>
      <Divider className={'border-gray-400'} />
      <div className='flex flex-col gap-2 py-4'>
        <p className='text-base text-gray-600 text-justify'>
          {item.description}
        </p>
      </div>
      <div className='flex justify-end gap-2'>
        <button
          type='button'
          className=' border-2 border-gray-600 hover:bg-gray-200 p-2 rounded-lg cursor-pointer'
          onClick={() => handlerConfirmDelete(item)}
        >
          <RiDeleteBinLine className='size-5' />
        </button>
        <button
          className=' border-2 border-gray-600 hover:bg-gray-200 p-2 rounded-lg cursor-pointer'
          type='button'
          onClick={() => handlerEditNew(item)}
        >
          <CiEdit className='size-5' />
        </button>
      </div>
    </Card>
  );
}
