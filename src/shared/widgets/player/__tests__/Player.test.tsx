import { act, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { Player } from "../Player";

vi.mock("react-player", () => ({
  default: vi.fn(({ onReady, ...props }) => (
    <div data-testid="react-player" {...props}>
      <button onClick={onReady}>Ready</button>
    </div>
  )),
}));

vi.mock("@/shared/components/spinner/Spinner", () => ({
  Spinner: ({ className }: { className?: string }) => <div data-testid="spinner" className={className} />,
}));

describe("Player", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders spinner initially", () => {
    render(<Player url="https://example.com/video.mp4" />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });

  it("renders player with correct props", () => {
    const url = "https://example.com/video.mp4";
    render(<Player url={url} />);

    const player = screen.getByTestId("react-player");
    expect(player).toBeInTheDocument();
  });

  it("removes spinner when player is ready", async () => {
    render(<Player url="https://example.com/video.mp4" />);

    expect(screen.getByTestId("spinner")).toBeInTheDocument();

    await act(async () => {
      screen.getByRole("button").click();
    });

    await waitFor(() => {
      expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
    });
  });

  it("passes additional props to ReactPlayer", () => {
    const customProps = {
      url: "https://example.com/video.mp4",
      volume: 0.5,
    };

    render(<Player {...customProps} />);

    const player = screen.getByTestId("react-player");
    expect(player).toBeInTheDocument();
  });
});
