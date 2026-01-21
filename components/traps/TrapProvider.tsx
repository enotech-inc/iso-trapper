import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";

interface TrapContextValue {
  reducedMotion: boolean;
  setReducedMotion: (value: boolean) => void;
  debug: boolean;
  setDebug: (value: boolean) => void;
  activeTrap: string | null;
  setActiveTrap: (value: string | null) => void;
}

const TrapContext = createContext<TrapContextValue | undefined>(undefined);

export function TrapProvider({ children }: { children: ReactNode }) {
  const systemReducedMotion = useReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(systemReducedMotion);
  const [manualOverride, setManualOverride] = useState(false);
  const [debug, setDebug] = useState(false);
  const [activeTrap, setActiveTrap] = useState<string | null>(null);

  useEffect(() => {
    if (!manualOverride) {
      setReducedMotion(systemReducedMotion);
    }
  }, [manualOverride, systemReducedMotion]);

  const handleSetReducedMotion = (value: boolean) => {
    setManualOverride(true);
    setReducedMotion(value);
  };

  const value = useMemo(
    () => ({
      reducedMotion,
      setReducedMotion: handleSetReducedMotion,
      debug,
      setDebug,
      activeTrap,
      setActiveTrap,
    }),
    [reducedMotion, debug, activeTrap]
  );

  return <TrapContext.Provider value={value}>{children}</TrapContext.Provider>;
}

export function useTrapContext() {
  const context = useContext(TrapContext);
  if (!context) {
    throw new Error("useTrapContext must be used within TrapProvider");
  }
  return context;
}
