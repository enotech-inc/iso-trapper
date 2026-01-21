import { Badge } from "../ui/badge";
import { useTrapContext } from "./TrapProvider";

export function TrapDebugHud() {
  const { reducedMotion, debug, activeTrap } = useTrapContext();

  if (!debug) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-2 rounded-2xl border border-slate-700 bg-slate-950/90 p-4 text-xs text-slate-200 shadow-[0_20px_40px_rgba(15,23,42,0.45)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
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
