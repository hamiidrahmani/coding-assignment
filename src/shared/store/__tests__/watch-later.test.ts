import { describe, it, expect, beforeEach, vi } from "vitest";
import { useWatchLaterState, toggleWatchLater } from "../watch-later";
import type { MovieItem } from "@/api/movie/types";

vi.mock("zustand/middleware", () => ({
  persist: (fn: () => { watchLater: MovieItem[] }) => fn,
}));

describe("Watch Later Store", () => {
  const mockMovie1: MovieItem = {
    id: 1,
    title: "Test Movie 1",
    poster_path: "/test1.jpg",
    release_date: "2024-01-01",
    vote_average: 8.5,
    adult: false,
    backdrop_path: "/backdrop1.jpg",
    genre_ids: [1, 2],
    original_language: "en",
    original_title: "Test Movie 1",
    overview: "Test overview",
    popularity: 100,
    video: false,
    vote_count: 1000,
  };

  const mockMovie2: MovieItem = {
    id: 2,
    title: "Test Movie 2",
    poster_path: "/test2.jpg",
    release_date: "2024-01-02",
    vote_average: 7.5,
    adult: false,
    backdrop_path: "/backdrop2.jpg",
    genre_ids: [2, 3],
    original_language: "en",
    original_title: "Test Movie 2",
    overview: "Test overview 2",
    popularity: 90,
    video: false,
    vote_count: 900,
  };

  beforeEach(() => {
    useWatchLaterState.setState({ watchLater: [] });
  });

  describe("Initial State", () => {
    it("should initialize with an empty watch later list", () => {
      const state = useWatchLaterState.getState();
      expect(state.watchLater).toEqual([]);
    });
  });

  describe("toggleWatchLater", () => {
    it("should add a movie to watch later list when not present", () => {
      toggleWatchLater(mockMovie1);
      const state = useWatchLaterState.getState();
      expect(state.watchLater).toEqual([mockMovie1]);
    });

    it("should remove a movie from watch later list when already present", () => {
      toggleWatchLater(mockMovie1);

      toggleWatchLater(mockMovie1);
      const state = useWatchLaterState.getState();
      expect(state.watchLater).toEqual([]);
    });

    it("should maintain other movies when toggling one movie", () => {
      toggleWatchLater(mockMovie1);
      toggleWatchLater(mockMovie2);

      toggleWatchLater(mockMovie1);
      const state = useWatchLaterState.getState();
      expect(state.watchLater).toEqual([mockMovie2]);
    });

    it("should handle multiple toggles correctly", () => {
      toggleWatchLater(mockMovie1);

      toggleWatchLater(mockMovie1);

      toggleWatchLater(mockMovie1);
      const state = useWatchLaterState.getState();
      expect(state.watchLater).toEqual([mockMovie1]);
    });
  });

  describe("State Updates", () => {
    it("should update state immutably", () => {
      const initialState = useWatchLaterState.getState();
      toggleWatchLater(mockMovie1);
      const newState = useWatchLaterState.getState();
      expect(initialState).not.toBe(newState);
      expect(initialState.watchLater).not.toBe(newState.watchLater);
    });

    it("should maintain state between multiple updates", () => {
      toggleWatchLater(mockMovie1);
      toggleWatchLater(mockMovie2);
      const state = useWatchLaterState.getState();
      expect(state.watchLater).toEqual([mockMovie1, mockMovie2]);
    });
  });

  describe("Edge Cases", () => {
    it("should handle toggling the same movie multiple times", () => {
      toggleWatchLater(mockMovie1);
      toggleWatchLater(mockMovie1);
      toggleWatchLater(mockMovie1);
      toggleWatchLater(mockMovie1);
      const state = useWatchLaterState.getState();
      expect(state.watchLater).not.toEqual([mockMovie1]);
    });

    it("should handle movies with same ID but different data", () => {
      const movieWithSameId: MovieItem = {
        ...mockMovie1,
        title: "Different Title",
      };
      toggleWatchLater(mockMovie1);
      toggleWatchLater(movieWithSameId);
      const state = useWatchLaterState.getState();
      expect(state.watchLater).toEqual([]);
    });
  });
});
