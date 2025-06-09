import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { EmptyState } from "../EmptyState";

describe("EmptyState", () => {
  it("renders the message correctly", () => {
    const message = "No items found";
    render(<EmptyState message={message} />);

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const message = "No items found";
    const customClass = "custom-class";
    render(<EmptyState message={message} className={customClass} />);

    const container = screen.getByText(message).parentElement;
    expect(container).toHaveClass(customClass);
  });

  it("renders actions when provided", () => {
    const message = "No items found";
    const actionText = "Add Item";
    render(<EmptyState message={message} actions={<button>{actionText}</button>} />);

    expect(screen.getByText(actionText)).toBeInTheDocument();
  });

  it("does not render actions when not provided", () => {
    const message = "No items found";
    render(<EmptyState message={message} />);

    const container = screen.getByText(message).parentElement;
    expect(container?.children.length).toBe(2); // Icon and Typography only
  });

  it("renders the exclamation icon", () => {
    render(<EmptyState message="Test" />);

    const icon = document.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});
