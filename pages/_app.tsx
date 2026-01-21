import type { AppProps } from "next/app";
import { TrapProvider } from "../components/traps/TrapProvider";
import "../styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TrapProvider>
      <Component {...pageProps} />
    </TrapProvider>
  );
}
