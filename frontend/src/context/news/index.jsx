import { createContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import newsApi from '../../services/api/requests/news';
const NewsContext = createContext({
  setFilter: () => {},
  filter: 'all',
  isLoading: false,
  data: [],
});
export function NewsProvider({ children }) {
  const options = [
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
  const [filter, setFilter] = useState('all');
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['news-all', filter],
    queryFn:
      filter === 'all'
        ? () => newsApi.getItems()
        : () => newsApi.getListAction(filter === 'active'),
    staleTime: 60000,
  });

  return (
    <NewsContext.Provider
      value={{ data, isLoading, filter, setFilter, refetch, options }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContext;
