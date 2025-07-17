import { createContext, useEffect } from 'react';
import { useProduct } from './useProduct';

const ProductContext = createContext({
  isLoading: false,
  data: Array(),
  refetch: () => {},
});
export function ProductProvider({ children }) {
  const { products, isLoading, fetchProducts } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <ProductContext.Provider
      value={{ data: products, isLoading, refetch: fetchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}
export default ProductContext;