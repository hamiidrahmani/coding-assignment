import { describe, expect, it, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { PlayerModal } from "../PlayerModal";
import { useMovieDetails } from "@/api/movie/query";

// Mock the useMovieDetails hook
vi.mock("@/api/movie/query", () => ({
  useMovieDetails: vi.fn(),
}));

// Mock the Player component
vi.mock("@/shared/widgets/player", () => ({
  Player: vi.fn(({ url }) => (
    <div data-testid="trailer-player" data-url={url}>
      Player
    </div>
  )),
}));

// Mock the Modal component
vi.mock("@/shared/components/modal", () => ({
  Modal: vi.fn(({ children, open, onClose }) =>
    open ? (
      <div data-testid="trailer-modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    ) : null,
  ),
}));

describe("PlayerModal", () => {
  const mockMovieId = 123;
  const mockTrailer = {
    key: "abc123",
    type: "Trailer",
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders view trailer button", () => {
    (useMovieDetails as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      data: null,
      isLoading: false,
      isError: false,
      refetch: vi.fn().mockResolvedValue(undefined),
    });

    render(<PlayerModal movieId={mockMovieId} />);
    expect(screen.getByTestId("view-trailer-button")).toBeInTheDocument();
  });

  it("shows error state when trailer fetch fails", async () => {
    const mockRefetch = vi.fn().mockResolvedValue(undefined);
    (useMovieDetails as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      data: null,
      isLoading: false,
      isError: true,
      refetch: mockRefetch,
    });

    render(<PlayerModal movieId={mockMovieId} />);
    const button = screen.getByTestId("view-trailer-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId("trailer-modal")).toBeInTheDocument();
      expect(screen.getByTestId("player-modal")).toBeInTheDocument();
      expect(screen.getByTestId("trailer-error")).toBeInTheDocument();
    });
  });

  it("shows player when trailer is available", async () => {
    const mockRefetch = vi.fn().mockResolvedValue(undefined);
    (useMovieDetails as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      data: { results: [mockTrailer] },
      isLoading: false,
      isError: false,
      refetch: mockRefetch,
    });

    render(<PlayerModal movieId={mockMovieId} />);
    const button = screen.getByTestId("view-trailer-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId("trailer-modal")).toBeInTheDocument();
      expect(screen.getByTestId("player-modal")).toBeInTheDocument();
      expect(screen.getByTestId("trailer-player")).toBeInTheDocument();
      expect(screen.getByTestId("trailer-player")).toHaveAttribute(
        "data-url",
        "https://www.youtube.com/watch?v=abc123",
      );
    });
  });

  it("shows empty state when no trailer is found", async () => {
    const mockRefetch = vi.fn().mockResolvedValue(undefined);
    (useMovieDetails as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      data: { results: [] },
      isLoading: false,
      isError: false,
      refetch: mockRefetch,
    });

    render(<PlayerModal movieId={mockMovieId} />);
    const button = screen.getByTestId("view-trailer-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId("trailer-modal")).toBeInTheDocument();
      expect(screen.getByTestId("player-modal")).toBeInTheDocument();
      expect(screen.getByTestId("trailer-empty")).toBeInTheDocument();
    });
  });

  it("closes modal when close button is clicked", async () => {
    const mockRefetch = vi.fn().mockResolvedValue(undefined);
    (useMovieDetails as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      data: { results: [mockTrailer] },
      isLoading: false,
      isError: false,
      refetch: mockRefetch,
    });

    render(<PlayerModal movieId={mockMovieId} />);
    const button = screen.getByTestId("view-trailer-button");
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByTestId("trailer-modal")).toBeInTheDocument();
    });

    const closeButton = screen.getByText("Close");
    fireEvent.click(closeButton);

    expect(screen.queryByTestId("trailer-modal")).not.toBeInTheDocument();
  });
});
