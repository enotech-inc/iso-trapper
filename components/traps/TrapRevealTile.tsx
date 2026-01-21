import { motion } from "framer-motion";
import { useTrapState } from "../../hooks/useTrapState";
import { trapStatusLabel, trapStatusTone } from "../../lib/a11y";
import { fadeUp, tiltHover } from "../../lib/motionPresets";
import { IsoTile } from "../iso/IsoTile";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TrapDock } from "./TrapDock";
import { TrapTile } from "./TrapTile";
import { useTrapContext } from "./TrapProvider";

export function TrapRevealTile() {
  const { state, dispatch, reset } = useTrapState();
  const { reducedMotion, setReducedMotion, setActiveTrap } = useTrapContext();
  const isPinned = state.status === "pinned";
  const isTriggered = state.status === "triggered";

  const handleHover = () => {
    if (!isPinned) {
      dispatch({ type: "TRIGGER", event: "hover" });
      setActiveTrap("trap-reveal-tile");
    }
  };

  const handleLeave = () => {
    if (!isPinned) {
      dispatch({ type: "ARM" });
    }
  };

  const handleClick = () => {
    dispatch({ type: isPinned ? "ARM" : "PIN", event: "click" });
    setActiveTrap("trap-reveal-tile");
  };

  return (
    <TrapTile
      title="Trap Reveal Tile"
      description="Hover to tilt and reveal metadata. Click to pin the tile into the docked panel for deeper inspection."
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
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          className="space-y-4"
          initial={reducedMotion ? false : fadeUp.initial}
          whileInView={reducedMotion ? undefined : fadeUp.animate}
          viewport={{ once: true, amount: 0.4 }}
          transition={reducedMotion ? { duration: 0 } : fadeUp.transition}
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone={trapStatusTone[state.status]}>
              {trapStatusLabel(state.status)}
            </Badge>
            <Badge tone={isPinned ? "success" : "neutral"}>
              Dock: {isPinned ? "Occupied" : "Empty"}
            </Badge>
          </div>
          <motion.div
            className="relative"
            initial={tiltHover.initial}
            whileHover={reducedMotion ? undefined : tiltHover.hover}
            transition={tiltHover.transition}
            onHoverStart={handleHover}
            onHoverEnd={handleLeave}
          >
            <IsoTile
              aria-pressed={isPinned}
              onClick={handleClick}
              className="h-40 w-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700"
            >
              <span className="text-sm font-semibold text-white">
                Iso Data Node
              </span>
              <span className="text-xs text-slate-300">
                Hover to reveal. Click to pin.
              </span>
            </IsoTile>
            <motion.div
              className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl border border-slate-700 bg-slate-950/90 p-3 text-xs text-slate-200"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: isTriggered || isPinned ? 1 : 0, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              aria-hidden={!isTriggered && !isPinned}
            >
              <p className="font-semibold text-white">Metadata panel</p>
              <p className="text-[11px] text-slate-400">
                Coordinates locked · Depth layer 02
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <TrapDock
          title="Pinned tile"
          open={isPinned}
          onClose={() => dispatch({ type: "ARM" })}
          reducedMotion={reducedMotion}
        >
          <div className="space-y-3 text-sm text-slate-300">
            <p>
              This docked panel stays visible while the tile is pinned. Use it to
              expose extended data, contextual actions, or detail panels.
            </p>
            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                Pin payload
              </p>
              <p className="mt-2 text-sm text-slate-200">
                Depth 02 · Tile ID #AX-224 · Sync ready
              </p>
            </div>
          </div>
        </TrapDock>
      </div>
    </TrapTile>
  );
}
