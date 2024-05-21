import { getListCategories } from "@/services/categories";
import { getListProducts } from "@/services/products";
import { createContext, useContext, useMemo } from "react";
import { useQuery } from "react-query";

export const ListProductsContext = createContext({});

export const ListProductsProvider = ({ children }) => {
  const getListProductsQuery = useQuery({
    queryKey: ["get-list-products"],
    queryFn: () => getListProducts(),
    refetchOnMount: true,
  });

  const getListCategoriesQuery = useQuery({
    queryKey: ["get-list-categories"],
    queryFn: () => getListCategories(),
    refetchOnMount: true,
  });

  const value = useMemo(
    () => ({
      getListProductsQuery,
      getListCategoriesQuery,
    }),
    [getListProductsQuery, getListCategoriesQuery]
  );

  return (
    <ListProductsContext.Provider value={value}>
      {children}
    </ListProductsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useListProducts = () => {
  const { getListProductsQuery, getListCategoriesQuery } =
    useContext(ListProductsContext);

  return {
    getListProductsQuery,
    getListCategoriesQuery,
  };
};
