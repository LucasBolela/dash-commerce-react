import { useListProducts } from "@/providers/products/products-provider";

import ProductCard from "./product-card";
import { Loader2Icon } from "lucide-react";

export default function ListProducts() {
  const { getListProductsQuery } = useListProducts();

  if (getListProductsQuery.isLoading) {
    return (
      <div className="m-auto flex h-full items-center justify-center">
        <Loader2Icon className="size-10 animate-spin text-primary" />
      </div>
    );
  }

  const products = getListProductsQuery?.data?.data.map((product) => (
    <ProductCard {...product} key={product.id} />
  ));

  return (
    <div className="lg:w-12/12 md:w-12/12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 md:grid-cols-2 lg:gap-7 gap-4 m-auto">
      {products}
    </div>
  );
}
