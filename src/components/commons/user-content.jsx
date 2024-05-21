import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarDemo() {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm font-semibold">Sr. Ricky</p>
      <Avatar>
        <AvatarImage
          src="https://i.pinimg.com/736x/9d/05/eb/9d05eb8d62a6bfe4e96cac5ecbf823cb.jpg"
          alt="Ricky and Morty"
        />
        <AvatarFallback>Ri</AvatarFallback>
      </Avatar>
    </div>
  );
}
