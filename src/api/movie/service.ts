import { axios } from "../configs";
import type { MovieDetailsResponse, MoviesResponse } from "./types";

const API_KEY = import.meta.env.VITE_API_KEY;
export const getMovies = ({ query, page }: MoviesResponse["params"]) => {
  return axios
    .get<MoviesResponse["response"]>("/search/movie", {
      params: { query, page, api_key: API_KEY },
    })
    .then(({ data }) => data);
};

export const getMoviesDiscover = (params: Omit<MoviesResponse["params"], "query">) => {
  return axios
    .get<MoviesResponse["response"]>("/discover/movie", {
      params: { api_key: API_KEY, ...params },
    })
    .then(({ data }) => data);
};

export const getMovieDetails = (params: MovieDetailsResponse["params"]) => {
  return axios
    .get<MovieDetailsResponse["response"]>(`/movie/${params.id}/videos`, {
      params: { api_key: API_KEY, append_to_response: "videos" },
    })
    .then(({ data }) => data);
};
