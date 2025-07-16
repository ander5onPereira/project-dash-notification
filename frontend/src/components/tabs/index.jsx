import { useNews } from "../../context/news/useNews";

export default function NewsTabs() {
  const { setFilter, filter, options } = useNews();

  return (
    <div className='p-4'>
      <div className='flex space-x-2 mb-4'>
        {options.map((opt) => (
          <button
            data-testid={`filter-${opt.value}`}
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
