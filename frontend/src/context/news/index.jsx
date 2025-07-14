import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import newsApi from '../../services/api/requests/news';
import { NewsContext } from './newsContext';

export default function NewsProvider({ children }) {
  const [filter, setFilter] = useState('all');
  const { data,refetch, isLoading, } = useQuery({
    queryKey: ['news-all', filter],
    queryFn:
      filter === 'all'
        ? () => newsApi.getItems()
        : () => newsApi.getListAction(filter === 'active'),
    staleTime: 60000,
  });


  return (
    <NewsContext.Provider value={{ data, isLoading, filter, setFilter,refetch }}>
      {children}
    </NewsContext.Provider>
  );
}
