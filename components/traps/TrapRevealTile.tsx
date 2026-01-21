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
              className="h-40 w-full bg-gradient-to-br from-[color:var(--surface-strong)] via-[color:var(--surface)] to-[color:var(--surface-strong)]"
            >
              <span className="text-sm font-semibold text-[color:var(--text-primary)]">
                Iso Data Node
              </span>
              <span className="text-xs text-[color:var(--text-muted)]">
                Hover to reveal. Click to pin.
              </span>
            </IsoTile>
            <motion.div
              className="pointer-events-none absolute inset-x-3 bottom-3 rounded-xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-3 text-xs text-[color:var(--text-primary)] shadow-[var(--shadow-card)]"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: isTriggered || isPinned ? 1 : 0, y: 0 }}
              transition={{ duration: reducedMotion ? 0 : 0.2 }}
              aria-hidden={!isTriggered && !isPinned}
            >
              <p className="font-semibold text-[color:var(--text-primary)]">
                Metadata panel
              </p>
              <p className="text-[11px] text-[color:var(--text-soft)]">
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
          <div className="space-y-3 text-sm text-[color:var(--text-muted)]">
            <p>
              This docked panel stays visible while the tile is pinned. Use it to
              expose extended data, contextual actions, or detail panels.
            </p>
            <div className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface-strong)] p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[color:var(--text-soft)]">
                Pin payload
              </p>
              <p className="mt-2 text-sm text-[color:var(--text-primary)]">
                Depth 02 · Tile ID #AX-224 · Sync ready
              </p>
            </div>
          </div>
        </TrapDock>
      </div>
    </TrapTile>
  );
}
