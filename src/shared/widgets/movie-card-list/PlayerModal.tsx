import { useMovieDetails } from "@/api/movie/query";
import type { MovieDetails } from "@/api/movie/types";
import { Button } from "@/shared/components/button";
import { Modal } from "@/shared/components/modal";
import { Spinner } from "@/shared/components/spinner";
import { EmptyState } from "@/shared/widgets/empty-state";
import { ErrorAlert } from "@/shared/widgets/error-alert";
import { Player } from "@/shared/widgets/player";
import { useMemo, useState } from "react";
import * as styles from "./MovieCardList.css";

interface PlayerModalProps {
  movieId: number;
}

const findTrailer = (results: MovieDetails[]) => {
  return results.find((video) => video.type === "Trailer");
};

export function PlayerModal({ movieId }: PlayerModalProps) {
  const [open, setOpen] = useState(false);
  const { data, isLoading, isError, refetch } = useMovieDetails({ id: movieId }, { enabled: false });

  const trailer = useMemo(() => {
    return findTrailer(data?.results || []);
  }, [data]);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenMovie = () => {
    refetch().finally(() => {
      setOpen(true);
    });
  };

  return (
    <>
      <Button fullWidth loading={isLoading} onClick={handleOpenMovie} data-testid="view-trailer-button">
        View Trailer
      </Button>
      <Modal open={open} onClose={handleClose} data-testid="trailer-modal">
        <div className={styles.playerModal} data-testid="player-modal">
          {isLoading && <Spinner size="XLarge" data-testid="trailer-spinner" />}
          {!trailer && !isLoading && isError && (
            <ErrorAlert message="Failed to load trailer" onClick={handleOpenMovie} data-testid="trailer-error" />
          )}

          {trailer && !isError && !isLoading && (
            <Player url={`https://www.youtube.com/watch?v=${trailer.key}`} data-testid="trailer-player" />
          )}

          {!trailer && !isError && !isLoading && <EmptyState message="No trailer found" data-testid="trailer-empty" />}
        </div>
      </Modal>
    </>
  );
}
