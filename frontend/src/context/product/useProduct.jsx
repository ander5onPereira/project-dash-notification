import { useQuery } from "@tanstack/react-query";
import productApi from "../../services/api/requests/product";

export function useProduct() {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ['product-all'],
    queryFn: () => productApi.getItems(),
    staleTime: 60000,
  });
    return ({
      products:data,
      isLoading,
      fetchProducts: refetch
    }
    )
}