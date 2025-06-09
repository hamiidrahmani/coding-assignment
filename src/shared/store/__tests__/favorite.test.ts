import { describe, it, expect, beforeEach, vi } from "vitest";
import { useFavoriteState, toggleFavorite } from "../favorite";
import type { MovieItem } from "@/api/movie/types";

vi.mock("zustand/middleware", () => ({
  persist: (fn: () => { favorite: MovieItem[] }) => fn,
}));

describe("Favorite Store", () => {
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
    useFavoriteState.setState({ favorite: [] });
  });

  describe("Initial State", () => {
    it("should initialize with an empty favorites list", () => {
      const state = useFavoriteState.getState();
      expect(state.favorite).toEqual([]);
    });
  });

  describe("toggleFavorite", () => {
    it("should add a movie to favorites list when not present", () => {
      toggleFavorite(mockMovie1);
      const state = useFavoriteState.getState();
      expect(state.favorite).toEqual([mockMovie1]);
    });

    it("should remove a movie from favorites list when already present", () => {
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie1);
      const state = useFavoriteState.getState();
      expect(state.favorite).toEqual([]);
    });

    it("should maintain other movies when toggling one movie", () => {
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie2);
      toggleFavorite(mockMovie1);
      const state = useFavoriteState.getState();
      expect(state.favorite).toEqual([mockMovie2]);
    });

    it("should handle multiple toggles correctly", () => {
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie1);
      const state = useFavoriteState.getState();
      expect(state.favorite).toEqual([mockMovie1]);
    });
  });

  describe("State Updates", () => {
    it("should update state immutably", () => {
      const initialState = useFavoriteState.getState();
      toggleFavorite(mockMovie1);
      const newState = useFavoriteState.getState();
      expect(initialState).not.toBe(newState);
      expect(initialState.favorite).not.toBe(newState.favorite);
    });

    it("should maintain state between multiple updates", () => {
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie2);
      const state = useFavoriteState.getState();
      expect(state.favorite).toEqual([mockMovie1, mockMovie2]);
    });
  });

  describe("Edge Cases", () => {
    it("should handle toggling the same movie multiple times", () => {
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie1);
      toggleFavorite(mockMovie1);
      const state = useFavoriteState.getState();
      expect(state.favorite).not.toEqual([mockMovie1]);
    });

    it("should handle movies with same ID but different data", () => {
      const movieWithSameId: MovieItem = {
        ...mockMovie1,
        title: "Different Title",
      };
      toggleFavorite(mockMovie1);
      toggleFavorite(movieWithSameId);
      const state = useFavoriteState.getState();
      expect(state.favorite).toEqual([]);
    });
  });
});
