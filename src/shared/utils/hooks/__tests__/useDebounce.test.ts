import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useDebounce } from "../useDebounce";

describe("useDebounce", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should return initial value immediately", () => {
    const { result } = renderHook(() => useDebounce("initial", 500));
    expect(result.current).toBe("initial");
  });

  it("should debounce value changes", () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: "initial" },
    });

    rerender({ value: "changed" });
    expect(result.current).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe("changed");
  });

  it("should cancel previous timeout when value changes rapidly", () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: "initial" },
    });

    rerender({ value: "changed1" });
    rerender({ value: "changed2" });
    rerender({ value: "changed3" });

    expect(result.current).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe("changed3");
  });

  it("should handle different delay values", () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 1000), {
      initialProps: { value: "initial" },
    });

    rerender({ value: "changed" });
    expect(result.current).toBe("initial");

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current).toBe("changed");
  });

  it("should handle non-string values", () => {
    const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), { initialProps: { value: 0 } });

    rerender({ value: 1 });
    expect(result.current).toBe(0);

    act(() => {
      vi.advanceTimersByTime(500);
    });
    expect(result.current).toBe(1);
  });

  it("should cleanup timeout on unmount", () => {
    const clearTimeoutSpy = vi.spyOn(window, "clearTimeout");
    const { result, rerender, unmount } = renderHook(({ value }) => useDebounce(value, 500), {
      initialProps: { value: "initial" },
    });

    rerender({ value: "changed" });
    expect(result.current).toBe("initial");

    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalled();
    clearTimeoutSpy.mockRestore();
  });
});
