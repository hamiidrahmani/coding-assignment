import { useInfiniteMoviesList } from "@/api/movie/query";
import { Textfield } from "@/shared/components/textfield";
import { useDebounce, useInfiniteScroll } from "@/shared/utils/hooks";
import { EmptyState } from "@/shared/widgets/empty-state";
import { ErrorAlert } from "@/shared/widgets/error-alert";
import { MovieCardList } from "@/shared/widgets/movie-card-list";
import { MovieCard } from "@/shared/widgets/movie-card/MovieCard";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as styles from "./Home.css";

const DEBOUNCE_TIME = 500;
export function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") ?? "");
  const debouncedSearchQuery = useDebounce(searchQuery, DEBOUNCE_TIME);
  const { data, isLoading, isFetchingNextPage, isError, refetch, hasNextPage, fetchNextPage } = useInfiniteMoviesList({
    query: debouncedSearchQuery,
  });
  const movies = useMemo(() => data?.pages.flatMap((page) => page.results), [data]);

  const targetRef = useInfiniteScroll(fetchNextPage);

  useEffect(() => {
    if (debouncedSearchQuery) {
      setSearchParams({ query: debouncedSearchQuery });
    } else {
      setSearchParams({});
    }
  }, [debouncedSearchQuery, setSearchParams]);

  return (
    <>
      <div className={styles.searchContainer}>
        <Textfield
          placeholder="Search Movies..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          fullWidth
        />
      </div>

      {!data && !isLoading && isError && <ErrorAlert message="Failed to load movies" onClick={() => refetch()} />}
      {movies?.length === 0 && !isLoading && !isError && <EmptyState message="There is no movies found!" />}

      <MovieCardList movies={movies || []}>
        {hasNextPage && <MovieCard ref={targetRef} loading />}
        {(isLoading || isFetchingNextPage) &&
          Array.from({ length: 10 }).map((_, index) => <MovieCard key={index} loading />)}
      </MovieCardList>
    </>
  );
}
