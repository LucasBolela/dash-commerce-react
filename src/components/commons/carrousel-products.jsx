import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useListHome } from "@/providers/home/home-provider";
import { Loader2Icon } from "lucide-react";
import { Badge } from "../ui/badge";

export function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const { getListProductsQuery } = useListHome();

  if (getListProductsQuery.isLoading) {
    return (
      <div className="m-auto flex h-full items-center justify-center">
        <Loader2Icon className="size-10 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-md sm:max-w-xl lg:max-w-5xl mb-12"
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {getListProductsQuery?.data.data.map((product, index) => (
          <CarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 h-96"
          >
            {product.images.length ? (
              <a
                style={{ backgroundImage: `url('${product.images[0]}')` }}
                className={`flex flex-col justify-between p-0 bg-center bg-cover h-full rounded-lg  cursor-pointer`}
                href={`/product/${product.id}`}
              >
                <div className="flex flex-col justify-between p-6 w-full h-full bg-gradient-to-b from-white/10 to-black/80 hover:bg-black/20 rounded-lg">
                  <Badge className={"font-bold w-fit"}>
                    {product.category.name}
                  </Badge>
                  <div>
                    <p className="text-white font-semibold text-xl">
                      {product.title}
                    </p>
                    <p className="text-white font-medium text-sm truncate">
                      {product.description}
                    </p>
                  </div>
                </div>
              </a>
            ) : (
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg h-60">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            )}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
