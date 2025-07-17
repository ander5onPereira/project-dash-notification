import { createContext, useState } from 'react';
import { TbHeader } from './header';
import { TbBody } from './body';
import { TbFooter } from './footer';

const DataGridContext = createContext({
  filters: {},
  setFilter: () => {},
  setFilters: () => {},
  data: [],
  paginatedData: [],
  columns: [],
  totalPages: 0,
  itemsPerPage: 0,
  setItemsPerPage: () => {},
  currentPage: 0,
  setCurrentPage: () => {},
  sortState: {},
  setSortState: () => {},
});

export function DataTable(props) {
  const { columns, data, onRowClick } = props;
  // Estado dos filtros
  const [filters, setFilters] = useState({});

  const [sortState, setSortState] = useState({});
  // Estado da paginação
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Aplicando os filtros
  const filteredData = data.filter((item) => {
    return columns.every((col) => {
      if (!col.filter) return true;

      // Filtro de range
      if (col.filterType === 'range') {
        const min = filters[`${col.key}_min`]
          ? parseFloat(filters[`${col.key}_min`])
          : null;
        const max = filters[`${col.key}_max`]
          ? parseFloat(filters[`${col.key}_max`])
          : null;
        const value = parseFloat(item[col.key]);

        if (min !== null && value < min) return false;
        if (max !== null && value > max) return false;
        return true;
      }

      // Filtro normal (text)
      return String(item[col.key] || '')
        .toLowerCase()
        .includes((filters[col.key] || '').toLowerCase());
    });
  });

  const sortedData = [...filteredData].sort((a, b) => {
    const sortKey = Object.keys(sortState)[0];
    const sortOrder = sortState[sortKey];

    if (!sortKey || !sortOrder) return 0;

    const aValue = a[sortKey];
    const bValue = b[sortKey];

    if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  // Cálculo da paginação
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <DataGridContext.Provider
      value={{
        filters,
        setFilters,
        data,
        paginatedData,
        columns,
        totalPages,
        setFilter: (key, value) => {
          setFilters((prev) => ({ ...prev, [key]: value }));
        },
        itemsPerPage,
        setItemsPerPage,
        currentPage,
        setCurrentPage,
        onRowClick,
        sortState,
        setSortState,
      }}
    >
      <div className='w-full p-4 rounded-lg shadow bg-white'>
        {/* Cabeçalho da Tabela */}
        <table className='w-full  rounded-lg overflow-hidden'>
          <TbHeader />
          <TbBody />
        </table>
        <TbFooter />
      </div>
    </DataGridContext.Provider>
  );
}

export default DataGridContext;
