import { Search } from "lucide-react";
import { Input } from "../ui/input";

export default function SearchBar() {
  return (
    <div className="relative flex-1 md:grow-0">
      <Search className="absolute left-4 top-3 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-10 md:w-[200px] lg:w-[336px]"
      />
    </div>
  );
}
