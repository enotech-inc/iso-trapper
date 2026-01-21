import type { AppProps } from "next/app";
import { useEffect } from "react";
import { TrapProvider } from "../components/traps/TrapProvider";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const storedTheme =
      typeof window !== "undefined"
        ? window.localStorage.getItem("iso-theme")
        : null;
    const prefersDark =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches;
    const theme =
      storedTheme === "light" || storedTheme === "dark"
        ? storedTheme
        : prefersDark
          ? "dark"
          : "light";
    if (typeof document !== "undefined") {
      document.documentElement.dataset.theme = theme;
    }
  }, []);

  return (
    <TrapProvider>
      <Component {...pageProps} />
    </TrapProvider>
  );
}
