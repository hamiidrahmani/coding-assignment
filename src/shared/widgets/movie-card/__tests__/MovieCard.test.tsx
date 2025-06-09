import { describe, expect, it, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MovieCard } from "../MovieCard";

describe("MovieCard", () => {
  const defaultProps = {
    title: "Test Movie",
    overview: "This is a test movie overview",
    releaseDate: "2024-01-01",
    starred: false,
    poster: "test-poster.jpg",
    actions: <button>Test Action</button>,
    onStar: vi.fn(),
  };

  it("renders loading state correctly", () => {
    render(<MovieCard loading />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveStyle({
      width: "100%",
      height: "450px",
    });
  });

  it("renders movie information correctly", () => {
    render(<MovieCard {...defaultProps} />);

    expect(screen.getByText("Test Movie")).toBeInTheDocument();
    expect(screen.getByText("This is a test movie overview")).toBeInTheDocument();
    expect(screen.getByText("2024")).toBeInTheDocument();
    expect(screen.getByAltText("Test Movie")).toHaveAttribute("src", "https://image.tmdb.org/t/p/w500/test-poster.jpg");
  });

  it("handles star button click", () => {
    render(<MovieCard {...defaultProps} />);

    const starButton = screen.getByTestId("star-button");
    fireEvent.click(starButton);

    expect(defaultProps.onStar).toHaveBeenCalledTimes(1);
  });

  it("toggles view state when visibility button is clicked", () => {
    render(<MovieCard {...defaultProps} />);

    const visibilityButton = screen.getByTestId("visibility-button");
    fireEvent.click(visibilityButton);

    expect(screen.getByTestId("VisibilityOffIcon")).toBeInTheDocument();

    fireEvent.click(visibilityButton);
    expect(screen.getByTestId("VisibilityOnIcon")).toBeInTheDocument();
  });

  it("shows correct star icon based on starred prop", () => {
    const { rerender } = render(<MovieCard {...defaultProps} />);

    expect(screen.getByTestId("StarOffIcon")).toBeInTheDocument();

    rerender(<MovieCard {...defaultProps} starred={true} />);
    expect(screen.getByTestId("StarOnIcon")).toBeInTheDocument();
  });

  it("renders custom actions", () => {
    render(<MovieCard {...defaultProps} />);
    expect(screen.getByRole("button", { name: "Test Action" })).toBeInTheDocument();
  });
});
