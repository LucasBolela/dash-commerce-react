import { getListCategories } from "@/services/categories";
import { createContext, useContext, useMemo } from "react";
import { useQuery } from "react-query";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const getListCategoriesQuery = useQuery({
    queryKey: ["get-list-categories"],
    queryFn: () => getListCategories(),
    refetchOnMount: true,
  });

  const value = useMemo(
    () => ({
      getListCategoriesQuery,
    }),
    [getListCategoriesQuery]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppProvider = () => {
  const { getListCategoriesQuery } = useContext(AppContext);

  return {
    getListCategoriesQuery,
  };
};
