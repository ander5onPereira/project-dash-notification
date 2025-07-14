import { useNews } from '../../Hooks/useNews';

const OPTIONS = [
  {
    label: 'Todos',
    value: 'all',
  },
  {
    label: 'Ativos',
    value: 'active',
  },
  {
    label: 'Inativos',
    value: 'inactive',
  },
];
export default function NewsTabs() {
  const { setFilter, filter } = useNews();

  return (
    <div className='p-4'>
      <div className='flex space-x-2 mb-4'>
        {OPTIONS.map((opt) => (
          <button
            onClick={() => setFilter(opt.value)}
            key={opt.value}
            className={`px-4 py-2 rounded-lg  ${
              filter === opt.value
                ? 'bg-primary text-white'
                : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
