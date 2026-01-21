import { Badge } from "../ui/badge";
import { useTrapContext } from "./TrapProvider";

export function TrapDebugHud() {
  const { reducedMotion, debug, activeTrap } = useTrapContext();

  if (!debug) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-2 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-4 text-xs text-[color:var(--text-primary)] shadow-[var(--shadow-card-strong)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
        Debug HUD
      </p>
      <div className="flex flex-wrap gap-2">
        <Badge tone={reducedMotion ? "warning" : "success"}>
          Motion: {reducedMotion ? "Reduced" : "Full"}
        </Badge>
        <Badge tone="accent">
          Active: {activeTrap ? activeTrap : "None"}
        </Badge>
      </div>
    </div>
  );
}
