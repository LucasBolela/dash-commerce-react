import { ListProductsProvider } from "@/providers/products/products-provider";
import Container from "@/layout/Container";
import SearchBar from "./search";
import { FilterProducts } from "./filters";

import ListProducts from "./list-products";

export default function ProductsPage() {
  return (
    <ListProductsProvider>
      <Container className={"w-full p-8 gap-6"}>
        <div className="flex items-center justify-between">
          <SearchBar />
          <FilterProducts />
        </div>
        <ListProducts />
      </Container>
    </ListProductsProvider>
  );
}
