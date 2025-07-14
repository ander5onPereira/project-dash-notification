export default function HeaderStats() {
  const stats = [
    { label: 'SALDO DE TICKETS', value: 6044 },
    { label: 'VOLTAS EM JULHO', value: 58 },
    { label: 'CONSUMIDORES EM JULHO', value: 45 },
  ];

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-6'>
      {stats.map(({ label, value }) => (
        <div
          key={label}
          className='bg-white pt-1 px-2 rounded-lg shadow border-l-4 border-cyan-400'
        >
          <p className='text-xs text-cyan-400'>{label}</p>
          <p className='text-3xl font-bold mt-6 mb-2 text-gray-400'>{value}</p>
        </div>
      ))}
    </div>
  );
}
