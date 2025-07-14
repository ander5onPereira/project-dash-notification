import { createContext } from 'react';

export const NewsContext = createContext({
  setFilter: () => {},
  filter: 'all',
  isLoading: false,
  data: [],
});