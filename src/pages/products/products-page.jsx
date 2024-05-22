import { ListProductsProvider } from "@/providers/products/products-provider";
import Container from "@/components/layout/Container";
import SearchBar from "../../components/products/search";
import { FilterProducts } from "../../components/products/filters";

import ListProducts from "../../components/products/list-products";

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
