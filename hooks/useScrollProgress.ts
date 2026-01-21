import { useEffect, useRef, useState } from "react";

interface ScrollProgressOptions {
  offset?: number;
}

export function useScrollProgress<T extends HTMLElement>({
  offset = 0.2,
}: ScrollProgressOptions = {}) {
  const ref = useRef<T | null>(null);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: offset }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element) {
        return;
      }
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || 0;
      const scrollRange = windowHeight + rect.height;
      const distance = Math.min(Math.max(windowHeight - rect.top, 0), scrollRange);
      setProgress(Math.min(distance / scrollRange, 1));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [offset]);

  return { ref, progress, inView };
}
