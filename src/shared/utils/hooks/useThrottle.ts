import { useCallback, useRef, useEffect } from "react";

export const useThrottle = <T extends (...args: unknown[]) => unknown>(callback: T, delay: number): T => {
  const lastRun = useRef<number>(0);
  const timeout = useRef<NodeJS.Timeout>(undefined);
  const lastArgs = useRef<Parameters<T> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  return useCallback(
    ((...args: Parameters<T>) => {
      const now = Date.now();

      if (lastRun.current && now < lastRun.current + delay) {
        lastArgs.current = args;

        if (timeout.current) {
          clearTimeout(timeout.current);
        }

        timeout.current = setTimeout(() => {
          lastRun.current = Date.now();
          if (lastArgs.current) {
            callback(...lastArgs.current);
            lastArgs.current = null;
          }
        }, delay);
        return;
      }

      lastRun.current = now;
      callback(...args);
    }) as T,
    [callback, delay],
  );
};
