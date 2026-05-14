import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export const CheckItem = ({ children }: { children: React.ReactNode }) => {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => setDone((d) => !d)}
      className="group flex w-full items-start gap-3 rounded-xl border border-border bg-card p-4 text-left transition hover:border-athme-sky/60 hover:shadow-soft"
    >
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition",
          done
            ? "bg-gradient-brand text-white"
            : "border-2 border-athme-sky/50 bg-background"
        )}
      >
        {done && <Check className="h-3 w-3" strokeWidth={3} />}
      </span>
      <span
        className={cn(
          "text-sm md:text-base leading-snug",
          done ? "text-muted-foreground line-through" : "text-foreground"
        )}
      >
        {children}
      </span>
    </button>
  );
};
