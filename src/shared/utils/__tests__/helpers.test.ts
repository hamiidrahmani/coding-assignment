import { describe, it, expect, vi, beforeEach } from "vitest";
import { getScrollbarSize } from "../helpers";

describe("getScrollbarSize", () => {
  let mockDocument: Document;

  beforeEach(() => {
    mockDocument = {
      documentElement: {
        clientWidth: 1000,
      },
    } as unknown as Document;
  });

  it("should return the correct scrollbar size", () => {
    const mockWindow = {
      innerWidth: 1020,
    } as unknown as Window;
    vi.stubGlobal("window", mockWindow);

    const scrollbarSize = getScrollbarSize(mockDocument);
    expect(scrollbarSize).toBe(20);
  });

  it("should return 0 when there is no scrollbar", () => {
    const mockWindow = {
      innerWidth: 1000,
    } as unknown as Window;
    vi.stubGlobal("window", mockWindow);

    const scrollbarSize = getScrollbarSize(mockDocument);
    expect(scrollbarSize).toBe(0);
  });

  it("should handle negative differences correctly", () => {
    const mockWindow = {
      innerWidth: 980,
    } as unknown as Window;
    vi.stubGlobal("window", mockWindow);

    const scrollbarSize = getScrollbarSize(mockDocument);
    expect(scrollbarSize).toBe(20);
  });
});
