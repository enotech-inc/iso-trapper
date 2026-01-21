import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { dockSlide } from "../../lib/motionPresets";
import { Button } from "../ui/button";

interface TrapDockProps {
  title: string;
  open: boolean;
  onClose?: () => void;
  children: ReactNode;
  reducedMotion?: boolean;
}

export function TrapDock({
  title,
  open,
  onClose,
  children,
  reducedMotion = false,
}: TrapDockProps) {
  return (
    <div className="relative min-h-[260px] rounded-3xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 text-[color:var(--text-primary)]">
      {open ? (
        <motion.div
          key="dock"
          initial={reducedMotion ? false : dockSlide.initial}
          animate={reducedMotion ? {} : dockSlide.animate}
          exit={reducedMotion ? {} : dockSlide.exit}
          transition={dockSlide.transition}
          className="space-y-4"
        >
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[color:var(--text-primary)]">
              {title}
            </p>
            {onClose ? (
              <Button variant="ghost" size="sm" onClick={onClose}>
                Close
              </Button>
            ) : null}
          </div>
          {children}
        </motion.div>
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-3 text-sm text-[color:var(--text-soft)]">
          <p>Dock awaiting a pinned trap.</p>
          <p className="text-xs">Click a tile to pin it here.</p>
        </div>
      )}
    </div>
  );
}
