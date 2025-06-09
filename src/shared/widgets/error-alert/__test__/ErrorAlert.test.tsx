import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ErrorAlert } from "../ErrorAlert";

describe("ErrorAlert", () => {
  it("renders the message correctly", () => {
    const message = "Something went wrong";
    render(<ErrorAlert message={message} onClick={() => {}} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const message = "Something went wrong";
    const customClass = "custom-class";
    render(<ErrorAlert message={message} onClick={() => {}} className={customClass} />);

    const container = screen.getByText(message).parentElement;
    expect(container).toHaveClass(customClass);
  });

  it("calls onClick when button is clicked", () => {
    const message = "Something went wrong";
    const handleClick = vi.fn();
    render(<ErrorAlert message={message} onClick={handleClick} />);

    const button = screen.getByText("Try again");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders the exclamation icon", () => {
    render(<ErrorAlert message="Test" onClick={() => {}} />);

    const icon = document.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("renders the try again button", () => {
    render(<ErrorAlert message="Test" onClick={() => {}} />);

    expect(screen.getByText("Try again")).toBeInTheDocument();
  });
});
