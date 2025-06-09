import { Button } from "@/shared/components/button";
import { useWatchLaterState } from "@/shared/store";
import { EmptyState } from "@/shared/widgets/empty-state";
import { MovieCardList } from "@/shared/widgets/movie-card-list";
import { useNavigate } from "react-router-dom";

export function WatchLater() {
  const watchLater = useWatchLaterState((state) => state.watchLater);
  const navigate = useNavigate();

  if (!watchLater.length) {
    return (
      <EmptyState
        message="There is no movie in watch later!"
        actions={
          <Button variant="outlined" color="primary" fullWidth onClick={() => navigate("/")}>
            Search Movies
          </Button>
        }
      />
    );
  }
  return <MovieCardList movies={watchLater} />;
}
