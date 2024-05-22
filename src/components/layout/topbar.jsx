import Logo from "@/components/home/logo";
import Container from "./Container";
import { NavigationMenuDemo } from "@/components/commons/navigation-menu";
import { AvatarDemo } from "@/components/commons/user-content";

export default function TopBar() {
  return (
    <Container
      className={"w-full p-8 h-14 flex-row justify-between items-center"}
    >
      <Logo />
      <NavigationMenuDemo />
      <AvatarDemo />
    </Container>
  );
}
