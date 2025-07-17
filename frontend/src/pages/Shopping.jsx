import { FiPlus } from 'react-icons/fi';
import { CardProduct } from '../components/cardProduct';
import { DataTable } from '../components/dataTable';
import { Divider } from '../components/Divider';
import { FormProduct } from '../components/formProduct';
import { useDialog } from '../context/dialog/useDialog';
import { ProductProvider } from '../context/product';
import { useProduct } from '../context/product/useProduct';

const columns = [
  {
    uniqueId: 'id',
    key: 'id',
    label: 'ID',
    filter: true,
    className: 'w-20',
    filterType: 'text',
  },
  {
    uniqueId: 'name',
    key: 'name',
    label: 'Nome',
    filter: true,
    filterType: 'text',
  },
  {
    uniqueId: 'category',
    key: 'category',
    label: 'Categoria',
    filter: true,
    filterType: 'text',
  },
  {
    uniqueId: 'price',
    key: 'price',
    label: 'Preço',
    filter: true,
    filterType: 'range',
    className: 'w-[20%] min-w-[15vw]',
  },
];
export function ShoppingPage() {
  const { displayDialog, removeDialog } = useDialog();
  const { products, isLoading, fetchProducts } = useProduct();

  function handlerAddProduct() {
    displayDialog({
      dialogId: 'DIALOG-ADD',
      content: (
        <FormProduct
          onClose={() => removeDialog('DIALOG-ADD')}
          refetch={fetchProducts}
        />
      ),
    });
  }
  function handlerDetail(item) {
    displayDialog({
      dialogId: 'SIDE-MENU',
      content: <CardProduct {...item} refetch={fetchProducts} />,
    });
  }
  if (isLoading) return <p>Loading...</p>;
  return (
    <ProductProvider>
      <section>
        <div className='flex w-full justify-end pb-2'>
          <button
            onClick={handlerAddProduct}
            className='bg-primary cursor-pointer flex items-center gap-1 bg-primary-arp hover:bg-primary-hover-arp px-3 py-1.5 rounded-md text-white font-semibold capitalize'
          >
            <FiPlus size={20} />
            add
          </button>
        </div>

        <Divider className={'border-gray-300 pb-4'} />
        <DataTable
          columns={columns}
          data={products || []}
          onRowClick={(row) => handlerDetail(row)}
        />
      </section>
    </ProductProvider>
  );
}
