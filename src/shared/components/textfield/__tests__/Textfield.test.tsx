import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Textfield } from "../Textfield";

describe("Textfield", () => {
  it("renders with default props", () => {
    render(<Textfield />);
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(input).not.toBeDisabled();
    expect(input).not.toBeRequired();
  });

  describe("Props", () => {
    it("renders with value", () => {
      render(<Textfield value="test value" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("test value");
    });

    it("renders with defaultValue", () => {
      render(<Textfield defaultValue="default value" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveValue("default value");
    });

    it("renders with placeholder", () => {
      render(<Textfield placeholder="Enter text" />);
      const input = screen.getByPlaceholderText("Enter text");
      expect(input).toBeInTheDocument();
    });

    it("renders with type", () => {
      render(<Textfield placeholder="Enter password" type="password" />);
      const input = screen.getByPlaceholderText("Enter password");
      expect(input).toHaveAttribute("type", "password");
    });

    it("renders with id", () => {
      render(<Textfield id="test-id" />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("id", "test-id");
    });

    it("generates id when not provided", () => {
      render(<Textfield />);
      const input = screen.getByRole("textbox");
      expect(input).toHaveAttribute("id");
    });
  });

  describe("States", () => {
    it("renders in disabled state", () => {
      render(<Textfield disabled />);
      const input = screen.getByRole("textbox");
      expect(input).toBeDisabled();
    });

    it("renders in required state", () => {
      render(<Textfield required />);
      const input = screen.getByRole("textbox");
      expect(input).toBeRequired();
    });
  });

  describe("Event Handlers", () => {
    it("calls onChange handler", () => {
      const handleChange = vi.fn();
      render(<Textfield onChange={handleChange} />);
      const input = screen.getByRole("textbox");
      fireEvent.change(input, { target: { value: "new value" } });
      expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it("forwards additional HTML attributes", () => {
      render(<Textfield data-testid="test-input" aria-label="Test input" name="test-name" />);
      const input = screen.getByTestId("test-input");
      expect(input).toHaveAttribute("aria-label", "Test input");
      expect(input).toHaveAttribute("name", "test-name");
    });
  });
});
