import { useEffect, useRef } from "react";
import { useThrottle } from "./useThrottle";

export const useInfiniteScroll = (fetchNextPage: () => Promise<unknown>) => {
  const observer = useRef<IntersectionObserver | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const isFetchingNextPage = useRef(false);
  const isIntersectionObserverSupported = typeof IntersectionObserver !== "undefined";

  const handleScroll = () => {
    if (!targetRef.current || isFetchingNextPage.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      isFetchingNextPage.current = true;
      fetchNextPage().finally(() => {
        isFetchingNextPage.current = false;
      });
    }
  };

  const throttledHandleScroll = useThrottle(handleScroll, 200);

  useEffect(() => {
    if (isIntersectionObserverSupported) {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isFetchingNextPage.current) {
            isFetchingNextPage.current = true;
            fetchNextPage().finally(() => {
              isFetchingNextPage.current = false;
            });
          }
        });
      });

      if (targetRef.current) {
        observer.current.observe(targetRef.current);
      }
    } else {
      window.addEventListener("scroll", throttledHandleScroll);
      throttledHandleScroll();

      return () => {
        window.removeEventListener("scroll", throttledHandleScroll);
      };
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [fetchNextPage, isIntersectionObserverSupported, throttledHandleScroll]);

  return targetRef;
};
