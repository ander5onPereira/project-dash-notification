import { useState } from 'react';

export function InputFile({
  label,
  name,
  uploadUrl,
  accept = '*',
  multiple = false,
  onUploadSuccess,
}) {
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append(name, file));

      const response = await fetch(uploadUrl, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        onUploadSuccess?.(result);
      } else {
        console.error('Erro ao fazer upload:', result);
      }
    } catch (err) {
      console.error('Erro ao enviar arquivos:', err);
    } finally {
      setIsUploading(false);
    }
  };
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
