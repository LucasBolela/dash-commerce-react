import { BellIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useListHome } from "@/providers/home/home-provider";

export default function HomeContent() {
  const { getListProductsQuery } = useListHome();
  return (
    <div className="flex gap-3 items-center">
      <Button>
        <BellIcon className="size-4" />
      </Button>
      <p className="font-medium">
        {getListProductsQuery.isLoading
          ? 0
          : getListProductsQuery?.data.data.length}{" "}
        itens foram encontrados.
      </p>
    </div>
  );
}
