import Container from "@/components/layout/Container";
import { CarouselPlugin } from "../components/commons/carrousel-products";
import { ListHomeProvider } from "@/providers/home/home-provider";
import HomeContent from "../components/home/content";
import HomeGreatings from "../components/home/greatings";

export default function HomePage() {
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
