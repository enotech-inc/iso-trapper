import { motion } from "framer-motion";
import { useEffect } from "react";
import { useScrollProgress } from "../../hooks/useScrollProgress";
import { useTrapState } from "../../hooks/useTrapState";
import { trapStatusLabel, trapStatusTone } from "../../lib/a11y";
import { fadeUp } from "../../lib/motionPresets";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TrapTile } from "./TrapTile";
import { useTrapContext } from "./TrapProvider";

const steps = [
  "Lock lane on scroll entry",
  "Reveal data packet",
  "Highlight path nodes",
  "Unlock and hand off",
];

export function TrapScrollLockLane() {
  const { ref, progress, inView } = useScrollProgress<HTMLDivElement>({
    offset: 0.3,
  });
  const { state, dispatch, reset } = useTrapState();
  const { reducedMotion, setReducedMotion, setActiveTrap } = useTrapContext();

  useEffect(() => {
    if (inView) {
      dispatch({ type: "TRIGGER", event: "scroll" });
      setActiveTrap("trap-scroll-lock-lane");
    } else {
      dispatch({ type: "ARM" });
    }
  }, [dispatch, inView, setActiveTrap]);

  useEffect(() => {
    if (progress > 0.75) {
      dispatch({ type: "PIN", event: "progress" });
    }
  }, [dispatch, progress]);

  return (
    <TrapTile
      title="Trap Scroll Lock Lane"
      description="Scroll to lock the lane and reveal sequential steps. Progress is mapped to scroll position."
      footer={
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setReducedMotion(!reducedMotion)}
          >
            {reducedMotion ? "Enable motion" : "Reduce motion"}
          </Button>
          <Button variant="ghost" size="sm" onClick={reset}>
            Reset state
          </Button>
        </div>
      }
    >
      <motion.div
        ref={ref}
        initial={reducedMotion ? false : fadeUp.initial}
        whileInView={reducedMotion ? undefined : fadeUp.animate}
        viewport={{ once: true, amount: 0.2 }}
        transition={reducedMotion ? { duration: 0 } : fadeUp.transition}
        className="space-y-4"
      >
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={trapStatusTone[state.status]}>
            {trapStatusLabel(state.status)}
          </Badge>
          <Badge tone="accent">Progress: {Math.round(progress * 100)}%</Badge>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
            <span>Lane sequence</span>
            <span>{inView ? "Locked" : "Idle"}</span>
          </div>
          <div className="mt-4 space-y-3">
            {steps.map((step, index) => {
              const threshold = (index + 1) / steps.length;
              const isActive = progress >= threshold;
              return (
                <div
                  key={step}
                  className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition ${
                    isActive
                      ? "border-indigo-500/60 bg-indigo-500/10 text-white"
                      : "border-slate-800 text-slate-400"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      isActive ? "bg-indigo-400" : "bg-slate-700"
                    }`}
                  />
                  <span>{step}</span>
                </div>
              );
            })}
          </div>
          <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400"
              style={{ width: `${Math.round(progress * 100)}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </motion.div>
    </TrapTile>
  );
}
