import type { MovieItem } from "@/api/movie/types";
import { Button } from "@/shared/components/button";
import { toggleFavorite, toggleWatchLater, useFavoriteState, useWatchLaterState } from "@/shared/store";
import { MovieCard } from "@/shared/widgets/movie-card";
import type { PropsWithChildren } from "react";
import * as styles from "./MovieCardList.css";
import { PlayerModal } from "./PlayerModal";

interface MovieCardListProps {
  movies: MovieItem[];
}
export function MovieCardList({ movies, children }: PropsWithChildren<MovieCardListProps>) {
  const favorite = useFavoriteState((state) => state.favorite || []);
  const watchLater = useWatchLaterState((state) => state.watchLater || []);

  return (
    <div className={styles.movieCardList} data-testid="movie-card-list">
      {movies.map((movie) => {
        const isStarred = favorite.some((m) => m.id === movie.id);
        const isInWatchLater = watchLater.some((m) => m.id === movie.id);

        return (
          <MovieCard
            key={movie.id.toString()}
            title={movie.title}
            overview={movie.overview}
            releaseDate={movie.release_date}
            starred={isStarred}
            poster={movie.poster_path}
            onStar={() => toggleFavorite(movie)}
            actions={
              <>
                <PlayerModal movieId={movie.id} />
                <Button
                  fullWidth
                  variant="contained"
                  color="common.white"
                  onClick={() => toggleWatchLater(movie)}
                  data-testid={`watch-later-button-${movie.id}`}
                >
                  {isInWatchLater ? "Remove from watch later" : "Watch Later"}
                </Button>
              </>
            }
          />
        );
      })}

      {children}
    </div>
  );
}
