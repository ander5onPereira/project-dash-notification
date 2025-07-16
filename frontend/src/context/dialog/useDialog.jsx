import { useContext } from 'react';
import DialogContext from '.';

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog deve ser usado dentro de DialogProvider');
  }
  return context;
}
