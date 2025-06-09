import { render, act } from "@testing-library/react";
import { describe, it, vi, beforeEach, expect } from "vitest";
import { useInfiniteScroll } from "../useInfiniteScroll";
import { useEffect } from "react";

class MockIntersectionObserver {
  callback: IntersectionObserverCallback;
  static instance: MockIntersectionObserver;

  constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    MockIntersectionObserver.instance = this;
  }

  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();

  triggerIntersect(isIntersecting: boolean) {
    const entry = [{ isIntersecting, target: {} }] as IntersectionObserverEntry[];
    this.callback(entry, this as unknown as IntersectionObserver);
  }
}
global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;

describe("useInfiniteScroll", () => {
  let fetchNextPage: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    fetchNextPage = vi.fn().mockResolvedValue(undefined);
  });

  const TestComponent = () => {
    const ref = useInfiniteScroll(fetchNextPage);

    useEffect(() => {
      if (ref.current) {
        ref.current.getBoundingClientRect = () => ({
          top: 0,
          bottom: window.innerHeight - 1,
          left: 0,
          right: 0,
          height: 1,
          width: 1,
          x: 0,
          y: 0,
          toJSON: () => "",
        });
      }
    }, [ref]);

    return <div data-testid="target" ref={ref} />;
  };

  it("calls fetchNextPage when target is intersecting", () => {
    render(<TestComponent />);

    act(() => {
      MockIntersectionObserver.instance.triggerIntersect(true);
    });

    expect(fetchNextPage).toHaveBeenCalledTimes(1);
  });

  it("does not call fetchNextPage again while fetching", () => {
    fetchNextPage = vi.fn(() => new Promise((resolve) => setTimeout(resolve, 1000)));

    render(<TestComponent />);

    act(() => {
      MockIntersectionObserver.instance.triggerIntersect(true);
      MockIntersectionObserver.instance.triggerIntersect(true);
    });

    expect(fetchNextPage).toHaveBeenCalledTimes(1);
  });

  it("cleans up observer on unmount", () => {
    const { unmount } = render(<TestComponent />);

    unmount();

    expect(MockIntersectionObserver.instance.disconnect).toHaveBeenCalled();
  });
});
