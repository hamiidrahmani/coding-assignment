import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { MovieItem } from "@/api/movie/types";

interface FavoriteState {
  favorite: MovieItem[];
}

const PERSIST_KEY = "__movie_favorites";
export const useFavoriteState = create<FavoriteState>()(
  persist<FavoriteState>(() => ({ favorite: [] }), { name: PERSIST_KEY }),
);

export const toggleFavorite = (movie: MovieItem) =>
  useFavoriteState.setState((state) => ({
    favorite: state.favorite.some((m) => m.id === movie.id)
      ? state.favorite.filter((m) => m.id !== movie.id)
      : [...state.favorite, movie],
  }));
