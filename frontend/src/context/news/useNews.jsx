import { useContext } from 'react';
import NewsContext from '.';

export function useNews() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews deve ser usado dentro de NewsProvider');
  }
  return context;
}
