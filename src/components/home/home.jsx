import Container from "@/layout/Container";
import { CarouselPlugin } from "../commons/carrousel-products";
import { ListHomeProvider } from "@/providers/home/home-provider";
import HomeContent from "./content";
import HomeGreatings from "./greatings";

export default function Home() {
  return (
    <ListHomeProvider>
      <>
        <HomeGreatings />
        <Container className="flex flex-col gap-12 justify-center items-center">
          <HomeContent />
          <CarouselPlugin />
        </Container>
      </>
    </ListHomeProvider>
  );
}
