import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import logo from "@/assets/athme-logo-mark.png";

export interface NavSection {
  id: string;
  label: string;
}

export const PlaybookSidebar = ({ sections }: { sections: NavSection[] }) => {
  const [active, setActive] = useState(sections[0]?.id);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const offset = window.innerHeight * 0.3;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) {
          current = s.id;
        } else {
          break;
        }
      }
      if (current) setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [sections]);

  const handleClick = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/95 backdrop-blur px-4 py-3">
        <img src={logo} alt="athme" className="h-12 w-auto" />
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {mobileOpen && (
        <nav className="md:hidden sticky top-[57px] z-30 max-h-[70vh] overflow-y-auto border-b border-border bg-background px-4 py-3 space-y-1">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className={cn(
                "block w-full rounded-lg px-3 py-2 text-left text-sm",
                active === s.id
                  ? "bg-gradient-soft font-semibold text-athme-sky"
                  : "text-muted-foreground hover:bg-muted"
              )}
            >
              {s.label}
            </button>
          ))}
        </nav>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex sticky top-0 h-screen w-72 shrink-0 flex-col border-r border-border bg-card/40 backdrop-blur px-6 py-8">
        <div className="flex items-center gap-3 mb-1">
          <img src={logo} alt="athme" className="h-14 w-auto" />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground mt-2">
          City Manager Playbook
        </p>
        <p className="mt-1 text-xs text-muted-foreground">v1.0 · Internal use</p>

        <nav className="mt-8 space-y-0.5 overflow-y-auto pr-2">
          {sections.map((s, i) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleClick(s.id)}
                className={cn(
                  "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition",
                  isActive
                    ? "bg-gradient-soft text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                <span
                  className={cn(
                    "inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[11px] font-display font-bold transition",
                    isActive
                      ? "bg-gradient-brand text-white shadow-brand"
                      : "bg-muted text-muted-foreground group-hover:bg-athme-sky/10 group-hover:text-athme-sky"
                  )}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-tight">{s.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="mt-auto pt-6 text-[11px] text-muted-foreground">
          The Athlete in Me.
        </div>
      </aside>
    </>
  );
};
