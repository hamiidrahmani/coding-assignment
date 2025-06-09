import { useInfiniteQuery, useQuery, type UseQueryOptions } from "@tanstack/react-query";
import { getMovieDetails, getMovies, getMoviesDiscover } from "./service";
import type { MovieDetailsResponse, MoviesResponse } from "./types";

export const useInfiniteMoviesList = (params: Omit<MoviesResponse["params"], "page">) => {
  return useInfiniteQuery({
    queryKey: ["movies", params],
    queryFn: ({ pageParam = 1 }) =>
      params.query ? getMovies({ ...params, page: pageParam }) : getMoviesDiscover({ page: pageParam }),
    getNextPageParam: (lastPage) => {
      const currentPage = lastPage.page;
      const hasMore = lastPage.total_pages > currentPage;
      const nextPage = currentPage + 1;

      return hasMore ? nextPage : undefined;
    },
    initialPageParam: 1,
  });
};

export const useMovieDetails = (
  params: MovieDetailsResponse["params"],
  options?: Partial<UseQueryOptions<MovieDetailsResponse["response"]>>,
) => {
  return useQuery({
    ...options,
    queryKey: ["movie", params],
    queryFn: () => getMovieDetails(params),
  });
};
