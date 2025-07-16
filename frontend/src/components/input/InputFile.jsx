import { useInputFile } from './useInputFile';

export function InputFile(props) {
  const { label, name, accept = '*', multiple = false, ...restProps } = props;
  const { handleChange } = useInputFile(restProps);
  return (
    <div className='flex flex-col space-y-1'>
      {label && (
        <label htmlFor={name} className='text-sm font-medium text-gray-700'>
          {label}
        </label>
      )}

      <div className='relative'>
        <input
          type='file'
          id={name}
          name={name}
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className='absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10'
        />
        <div className='border border-gray-300 rounded px-4 py-2 bg-white text-gray-700 text-sm pointer-events-none'>
          Clique para escolher {multiple ? 'arquivos' : 'um arquivo'}
        </div>
      </div>
    </div>
  );
}
