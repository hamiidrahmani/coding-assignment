import { Button } from "@/shared/components/button";
import { useFavoriteState } from "@/shared/store";
import { EmptyState } from "@/shared/widgets/empty-state";
import { MovieCardList } from "@/shared/widgets/movie-card-list";
import { useNavigate } from "react-router-dom";

export function Favorite() {
  const favorite = useFavoriteState((state) => state.favorite);
  const navigate = useNavigate();

  if (!favorite.length) {
    return (
      <EmptyState
        message="There is no favorite movies!"
        actions={
          <Button variant="outlined" color="primary" fullWidth onClick={() => navigate("/")}>
            Search Movies
          </Button>
        }
      />
    );
  }
  return <MovieCardList movies={favorite} />;
}
