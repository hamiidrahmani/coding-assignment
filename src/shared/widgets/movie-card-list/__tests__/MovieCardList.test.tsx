import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MovieCardList } from "../MovieCardList";
import { useFavoriteState, useWatchLaterState } from "@/shared/store";
import type { MovieItem } from "@/api/movie/types";

vi.mock("@/shared/store", () => ({
  useFavoriteState: vi.fn(),
  useWatchLaterState: vi.fn(),
}));

vi.mock("@/shared/widgets/movie-card", () => ({
  MovieCard: vi.fn(({ title, actions }) => (
    <div data-testid="movie-card">
      <h3>{title}</h3>
      {actions}
    </div>
  )),
}));

vi.mock("../PlayerModal", () => ({
  PlayerModal: vi.fn(({ movieId }) => (
    <div data-testid="player-modal" data-movie-id={movieId}>
      Player Modal
    </div>
  )),
}));

describe("MovieCardList", () => {
  const mockMovies: MovieItem[] = [
    {
      id: 1,
      title: "Movie 1",
      overview: "Overview 1",
      release_date: "2024-01-01",
      poster_path: "poster1.jpg",
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      original_language: "en",
      original_title: "Movie 1",
      popularity: 0,
      vote_average: 0,
      vote_count: 0,
      video: false,
    },
    {
      id: 2,
      title: "Movie 2",
      overview: "Overview 2",
      release_date: "2024-01-02",
      poster_path: "poster2.jpg",
      adult: false,
      backdrop_path: "",
      genre_ids: [],
      original_language: "en",
      original_title: "Movie 2",
      popularity: 0,
      vote_average: 0,
      vote_count: 0,
      video: false,
    },
  ];

  beforeEach(() => {
    vi.clearAllMocks();

    (useFavoriteState as unknown as ReturnType<typeof vi.fn>).mockReturnValue([{ id: 1 }]);
    (useWatchLaterState as unknown as ReturnType<typeof vi.fn>).mockReturnValue([{ id: 2 }]);
  });

  it("renders list of movies", () => {
    render(<MovieCardList movies={mockMovies} />);

    expect(screen.getByTestId("movie-card-list")).toBeInTheDocument();
    const movieCards = screen.getAllByTestId("movie-card");
    expect(movieCards).toHaveLength(2);
  });

  it("renders children when provided", () => {
    render(
      <MovieCardList movies={mockMovies}>
        <div data-testid="child">Child Content</div>
      </MovieCardList>,
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("passes correct props to MovieCard", () => {
    render(<MovieCardList movies={mockMovies} />);

    const movieCards = screen.getAllByTestId("movie-card");
    expect(movieCards[0]).toHaveTextContent("Movie 1");
    expect(movieCards[1]).toHaveTextContent("Movie 2");
  });

  it("renders PlayerModal for each movie", () => {
    render(<MovieCardList movies={mockMovies} />);

    const playerModals = screen.getAllByTestId("player-modal");
    expect(playerModals).toHaveLength(2);
    expect(playerModals[0]).toHaveAttribute("data-movie-id", "1");
    expect(playerModals[1]).toHaveAttribute("data-movie-id", "2");
  });

  it("renders watch later button with correct text", () => {
    render(<MovieCardList movies={mockMovies} />);

    const watchLaterButton1 = screen.getByTestId("watch-later-button-1");
    const watchLaterButton2 = screen.getByTestId("watch-later-button-2");

    expect(watchLaterButton1).toHaveTextContent("Watch Later");
    expect(watchLaterButton2).toHaveTextContent("Remove from watch later");
  });
});
