import type { ServerPaginatedResponse } from "../configs";

export interface MovieItem {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MoviesResponse = {
  response: ServerPaginatedResponse<MovieItem[]>;
  params: { query: string; page: number };
};

export interface MovieDetails {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

export type MovieDetailsResponse = {
  params: { id: number };
  response: {
    id: number;
    results: MovieDetails[];
  };
};
