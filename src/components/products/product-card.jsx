import { Link } from "react-router-dom";

// import AddToCart from "./AddToCart";
import { formatCurrency, formatImgUrl, textShrink } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingBagIcon } from "lucide-react";

function ProductCard({
  id,
  title,
  price,
  images,
  category: { name: category },
  description,
}) {
  return (
    <div className="flex flex-col justify-between md:p-4 lg:p-5 p-3 border border-grayshade-50 dark:border-grayshade-300 rounded-xl dark:bg-grayshade-500 w-full h-full justify-items-center justify-self-center">
      <Link to={`${id}`}>
        <img
          className="w-full rounded-lg self-stretch h-72 min-h-52 mb-7 object-cover"
          src={formatImgUrl(images[0])}
          alt=""
        />
      </Link>
      <div className="flex flex-col gap-2 grow justify-between">
        <div className="flex flex-col gap-2 justify-between h-full">
          <p className="font-semibold text-xl mb-2 h-auto">{title}</p>
          <div className="flex flex-col gap-2">
            <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
              {textShrink(description)}
              <Link
                className="font-semibold text-grayshade-100 dark:text-white text-xs ml-1"
                to={`${id}`}
                state={{ some: "value" }}
              >
                Ver mais
              </Link>
            </p>
            <Badge className={"w-fit"}>{category}</Badge>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-grayshade-100 dark:text-grayshade-50 text-xs">
              Preço
            </p>
            <p className="font-semibold text-grayshade-300 dark:text-white text-lg">
              {formatCurrency(price)}
            </p>
          </div>
          <Button className="text-sm">
            <ShoppingBagIcon className="size-4" />
          </Button>
          {/* <AddToCart cartData={{ id, title, price }} /> */}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
