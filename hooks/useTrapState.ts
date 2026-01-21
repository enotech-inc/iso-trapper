import { useReducer } from "react";

export type TrapStatus = "armed" | "triggered" | "pinned";

export interface TrapState {
  status: TrapStatus;
  lastEvent?: string;
}

export type TrapAction =
  | { type: "ARM" }
  | { type: "TRIGGER"; event?: string }
  | { type: "PIN"; event?: string }
  | { type: "RESET" };

function trapReducer(state: TrapState, action: TrapAction): TrapState {
  switch (action.type) {
    case "ARM":
      return { status: "armed", lastEvent: action.type };
    case "TRIGGER":
      if (state.status === "pinned") {
        return state;
      }
      return { status: "triggered", lastEvent: action.event ?? action.type };
    case "PIN":
      return { status: "pinned", lastEvent: action.event ?? action.type };
    case "RESET":
      return { status: "armed", lastEvent: action.type };
    default:
      return state;
  }
}

export function useTrapState(initialStatus: TrapStatus = "armed") {
  const [state, dispatch] = useReducer(trapReducer, {
    status: initialStatus,
  });

  const reset = () => dispatch({ type: "RESET" });

  return { state, dispatch, reset };
}
