import { Sparkles } from "lucide-react";
import { ReactNode } from "react";

export const AarhusCallout = ({ children, title = "What we learned in Aarhus" }: { children: ReactNode; title?: string }) => (
  <aside className="my-6 rounded-2xl border border-athme-mint/40 bg-gradient-soft p-5 md:p-6 shadow-soft">
    <div className="flex items-center gap-2 mb-2">
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-brand text-white">
        <Sparkles className="h-4 w-4" />
      </span>
      <p className="font-display font-bold text-sm uppercase tracking-wider text-athme-green">
        {title}
      </p>
    </div>
    <div className="text-sm md:text-base text-foreground/85 leading-relaxed space-y-2">
      {children}
    </div>
  </aside>
);
