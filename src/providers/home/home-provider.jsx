import { getListCategories } from "@/services/categories";
import { getListProducts } from "@/services/products";
import { createContext, useContext, useMemo } from "react";
import { useQuery } from "react-query";

export const ListHomeContext = createContext({});

export const ListHomeProvider = ({ children }) => {
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
    <ListHomeContext.Provider value={value}>
      {children}
    </ListHomeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useListHome = () => {
  const { getListProductsQuery, getListCategoriesQuery } =
    useContext(ListHomeContext);

  return {
    getListProductsQuery,
    getListCategoriesQuery,
  };
};
