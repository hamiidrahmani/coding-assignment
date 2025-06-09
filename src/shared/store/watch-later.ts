import { create } from "zustand";
import type { MovieItem } from "@/api/movie/types";
import { persist } from "zustand/middleware";

interface WatchLaterState {
  watchLater: MovieItem[];
}

const PERSIST_KEY = "__movie_watch_later";
export const useWatchLaterState = create<WatchLaterState>()(
  persist<WatchLaterState>(() => ({ watchLater: [] }), { name: PERSIST_KEY }),
);

export const toggleWatchLater = (movie: MovieItem) =>
  useWatchLaterState.setState((state) => ({
    watchLater: state.watchLater.some((m) => m.id === movie.id)
      ? state.watchLater.filter((m) => m.id !== movie.id)
      : [...state.watchLater, movie],
  }));
