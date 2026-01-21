import { useState, type KeyboardEvent } from "react";
import { useTrapState } from "../../hooks/useTrapState";
import { trapStatusLabel, trapStatusTone } from "../../lib/a11y";
import { IsoTile } from "../iso/IsoTile";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { TrapTile } from "./TrapTile";
import { useTrapContext } from "./TrapProvider";

const nodes = Array.from({ length: 9 }, (_, index) => ({
  id: `node-${index + 1}`,
  label: `Node ${index + 1}`,
}));

const focusPath = [0, 1, 2, 5, 8];

export function TrapFocusPath() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { state, dispatch, reset } = useTrapState();
  const { reducedMotion, setReducedMotion, setActiveTrap } = useTrapContext();

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    dispatch({ type: "TRIGGER", event: "select" });
    setActiveTrap("trap-focus-path");
  };

  const handlePin = () => {
    dispatch({ type: state.status === "pinned" ? "ARM" : "PIN", event: "pin" });
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const row = Math.floor(activeIndex / 3);
    const col = activeIndex % 3;

    let nextIndex = activeIndex;

    switch (event.key) {
      case "ArrowUp":
        nextIndex = row > 0 ? activeIndex - 3 : activeIndex;
        break;
      case "ArrowDown":
        nextIndex = row < 2 ? activeIndex + 3 : activeIndex;
        break;
      case "ArrowLeft":
        nextIndex = col > 0 ? activeIndex - 1 : activeIndex;
        break;
      case "ArrowRight":
        nextIndex = col < 2 ? activeIndex + 1 : activeIndex;
        break;
      default:
        return;
    }

    event.preventDefault();
    setActiveIndex(nextIndex);
  };

  const isPathActive = state.status !== "armed";

  return (
    <TrapTile
      title="Trap Focus Path"
      description="Use arrow keys to traverse the grid. Selecting a node highlights the active isometric path."
      footer={
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setReducedMotion(!reducedMotion)}
          >
            {reducedMotion ? "Enable motion" : "Reduce motion"}
          </Button>
          <Button variant="secondary" size="sm" onClick={handlePin}>
            {state.status === "pinned" ? "Unpin path" : "Pin path"}
          </Button>
          <Button variant="ghost" size="sm" onClick={reset}>
            Reset state
          </Button>
        </div>
      }
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={trapStatusTone[state.status]}>
            {trapStatusLabel(state.status)}
          </Badge>
          <Badge tone={state.status === "pinned" ? "success" : "neutral"}>
            Focused: {nodes[activeIndex].label}
          </Badge>
        </div>
        <div
          role="grid"
          aria-label="Trap focus path grid"
          className="grid gap-3 md:grid-cols-3"
          onKeyDown={handleKeyDown}
        >
          {nodes.map((node, index) => {
            const inPath = focusPath.includes(index);
            const isActive = index === activeIndex;
            const highlight = isPathActive && inPath;

            return (
              <IsoTile
                key={node.id}
                role="gridcell"
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                active={highlight}
                onFocus={() => setActiveIndex(index)}
                onClick={() => handleSelect(index)}
                className={`h-24 ${
                  highlight
                    ? "bg-gradient-to-br from-[color:var(--accent-soft)] via-[color:var(--surface)] to-[color:var(--surface)]"
                    : ""
                }`}
              >
                <span className="text-sm font-semibold text-[color:var(--text-primary)]">
                  {node.label}
                </span>
                <span className="text-[11px] text-[color:var(--text-soft)]">
                  {inPath ? "Path node" : "Idle node"}
                </span>
              </IsoTile>
            );
          })}
        </div>
        <p className="text-xs text-[color:var(--text-soft)]">
          Keyboard: Use arrow keys to move. Click to trigger the path. Pin to
          lock the highlight.
        </p>
      </div>
    </TrapTile>
  );
}
