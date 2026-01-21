import type { TrapStatus } from "../hooks/useTrapState";

export const trapStatusTone: Record<TrapStatus, "neutral" | "accent" | "success"> = {
  armed: "neutral",
  triggered: "accent",
  pinned: "success",
};

export function trapStatusLabel(status: TrapStatus) {
  switch (status) {
    case "armed":
      return "Armed";
    case "triggered":
      return "Triggered";
    case "pinned":
      return "Pinned";
    default:
      return "Unknown";
  }
}
