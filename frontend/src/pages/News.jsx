import { FiPlus } from 'react-icons/fi';
import { CardNew } from '../components/dialog/cardNew';
import { Divider } from '../components/Divider';
import { FormNews } from '../components/form/FormNews';
import Loading from '../components/loading';
import NewsTabs from '../components/tabs';
import { useDialog } from '../Hooks/useDialog';
import { useNews } from '../Hooks/useNews';

export function NewsPage() {
  const { displayDialog, removeDialog } = useDialog();
  const { data, isLoading } = useNews();

  function handlerAddNew() {
    displayDialog({
      dialogId: 'DIALOG-ADD',
      content: <FormNews onClose={() => removeDialog('DIALOG-ADD')} />,
    });
  }

  function handlerDetail(item) {
    displayDialog({
      dialogId: 'SIDE-MENU',
      content: <CardNew item={item} />,
    });
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div className='flex w-full justify-end pb-2'>
        <button
          onClick={handlerAddNew}
          className='bg-primary cursor-pointer flex items-center gap-1 bg-primary-arp hover:bg-primary-hover-arp px-3 py-1.5 rounded-md text-white font-semibold capitalize'
        >
          <FiPlus size={20} />
          add
        </button>
      </div>
      <Divider className={'border-gray-300'} />
      <div className='flex items-center justify-center'>
        <NewsTabs />
      </div>
      <div
        className='flex gap-10 justify-center flex-wrap py-4'
        hidden={!data?.length}
      >
        {data?.map((item) => (
          <button
            key={item.id}
            className='w-full sm:w-60  flex flex-col bg-white rounded-xl shadow-md cursor-pointer hover:shadow-lg overflow-hidden border border-gray-200'
            onClick={() => handlerDetail(item)}
          >
            <div className='text-center py-4 flex w-full items-center justify-center bg-gray-200/80  border-b-2 border-gray-300'>
              <h3 className='font-bold text-xl text-primary'>{item.title}</h3>
            </div>
            <div className='relative group w-full h-full overflow-hidden rounded-xl p-4'>
              <img
                src={`${import.meta.env.VITE_API_URL}${item.imageKey}`}
                alt={item.title}
                className='w-full h-full object-cover '
              />
            </div>

            <div className='text-center py-4 flex w-full items-center justify-center  border-t-2 border-gray-300'>
              <h3 className='font-semibold text-base'>{item.resume}</h3>
            </div>
          </button>
        ))}
      </div>
      <div
        className='flex gap-10 justify-center flex-wrap py-4'
        hidden={!!data?.length}
      >
        <h2 className='text-2xl text-gray-400'>
          Nenhuma notificação encontrada
        </h2>
      </div>
    </section>
  );
}
