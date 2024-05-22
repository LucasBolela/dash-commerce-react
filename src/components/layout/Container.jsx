import { cn } from "@/lib/utils";

export default function Container({ children, className }) {
  return (
    <div className={cn("mx-auto flex flex-col max-w-7xl", className)}>
      {children}
    </div>
  );
}
