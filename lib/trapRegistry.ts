export interface TrapDefinition {
  trapId: string;
  title: string;
  states: string[];
  events: string[];
  a11yNotes: string;
}

export const trapRegistry: TrapDefinition[] = [
  {
    trapId: "trap-reveal-tile",
    title: "Trap Reveal Tile",
    states: ["armed", "triggered", "pinned"],
    events: ["hover", "focus", "click"],
    a11yNotes:
      "Ensure the tile metadata panel is reachable by keyboard focus and respects reduced motion preferences.",
  },
  {
    trapId: "trap-scroll-lock-lane",
    title: "Trap Scroll Lock Lane",
    states: ["armed", "triggered", "pinned"],
    events: ["scroll", "progress", "reset"],
    a11yNotes:
      "Provide clear progress indicators, avoid trapping scroll focus, and expose step content for screen readers.",
  },
  {
    trapId: "trap-focus-path",
    title: "Trap Focus Path",
    states: ["armed", "triggered", "pinned"],
    events: ["arrow navigation", "select", "reset"],
    a11yNotes:
      "Use roving tabindex for grid navigation and announce selected path changes for assistive tech.",
  },
];
