import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useThrottle } from "../useThrottle";

describe("useThrottle", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should call callback immediately on first call", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 500));

    act(() => {
      result.current("test");
    });

    expect(callback).toHaveBeenCalledWith("test");
  });

  it("should throttle subsequent calls within delay period", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 500));

    act(() => {
      result.current("test1");
    });
    expect(callback).toHaveBeenCalledWith("test1");

    act(() => {
      result.current("test2");
    });
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(callback).toHaveBeenCalledWith("test2");
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should queue last call if made within delay period", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 500));

    act(() => {
      result.current("test1");
    });
    expect(callback).toHaveBeenCalledWith("test1");

    act(() => {
      result.current("test2");
      result.current("test3");
      result.current("test4");
    });
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(callback).toHaveBeenCalledWith("test4");
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should handle different delay values", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 1000));

    act(() => {
      result.current("test1");
    });
    expect(callback).toHaveBeenCalledWith("test1");

    act(() => {
      result.current("test2");
    });
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(callback).toHaveBeenCalledWith("test2");
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should handle multiple arguments", () => {
    const callback = vi.fn();
    const { result } = renderHook(() => useThrottle(callback, 500));

    act(() => {
      result.current("test1", 1, true);
    });
    expect(callback).toHaveBeenCalledWith("test1", 1, true);

    act(() => {
      result.current("test2", 2, false);
    });
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(callback).toHaveBeenCalledWith("test2", 2, false);
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should maintain throttling across re-renders", () => {
    const callback = vi.fn();
    const { result, rerender } = renderHook(() => useThrottle(callback, 500));

    act(() => {
      result.current("test1");
    });
    expect(callback).toHaveBeenCalledWith("test1");

    rerender();

    act(() => {
      result.current("test2");
    });
    expect(callback).toHaveBeenCalledTimes(1);

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(callback).toHaveBeenCalledWith("test2");
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it("should cleanup timeout on unmount", () => {
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const callback = vi.fn();
    const { result, unmount } = renderHook(() => useThrottle(callback, 500));

    act(() => {
      result.current("test1");
    });

    act(() => {
      result.current("test2");
    });

    expect(clearTimeoutSpy).not.toHaveBeenCalled();

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });
});
