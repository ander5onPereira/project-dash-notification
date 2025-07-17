import { useState } from 'react';

export function useInputFile({uploadUrl,onUploadSuccess}) {
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = async (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsUploading(true);

    try {
      const formData = new FormData();
      files.forEach((file) => formData.append('file', file));

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
  return {
    handleChange,
  };
}
