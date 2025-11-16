import { Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 font-headline text-xl font-bold text-primary", className)}>
      <div className="rounded-md bg-accent p-1.5">
        <Leaf className="h-5 w-5 text-accent-foreground" />
      </div>
      <span>Creative Canopy</span>
    </div>
  );
}
