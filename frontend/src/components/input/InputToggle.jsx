export function InputToggle({ id,label, value, name, onChange }) {
  return (
    <label className='inline-flex items-center space-x-2 cursor-pointer select-none z-20'>
      {name && (
         <input
          type="checkbox"
          hidden
          name={name}
          value={value ? true : false}

        />
      )}
      <div
        data-testid={`toggle-${name}`}
        className={`w-10 h-5 flex items-center border-gray-300 border-2 rounded-full p-1 transition duration-300 `}
        onClick={() => onChange({ target: { id, name, value: !value } })}
      >
        <div
          className={`bg-gray-400/80 w-3.5 h-3.5 rounded-full shadow-md transform transition-transform duration-300 ${
            value ? 'translate-x-4.5' : '-translate-x-0.5'
          }`}
        />
      </div>
      {label && <span className='text-gray-500/70 font-medium'>{label}</span>}
    </label>
  );
}
