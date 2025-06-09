import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "../Button";
import { buttonLabelHidden } from "../button.css";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });

  describe("Variants", () => {
    it("renders all variants with primary color", () => {
      const { rerender } = render(
        <Button variant="contained" color="primary">
          Contained Primary
        </Button>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();

      rerender(
        <Button variant="outlined" color="primary">
          Outlined Primary
        </Button>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();

      rerender(
        <Button variant="text" color="primary">
          Text Primary
        </Button>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders all variants with white color", () => {
      const { rerender } = render(
        <Button variant="contained" color="common.white">
          Contained White
        </Button>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();

      rerender(
        <Button variant="outlined" color="common.white">
          Outlined White
        </Button>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();

      rerender(
        <Button variant="text" color="common.white">
          Text White
        </Button>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("Sizes", () => {
    it("renders all sizes with different variants", () => {
      const variants: Array<"contained" | "outlined" | "text"> = ["contained", "outlined", "text"];
      const sizes: Array<"small" | "medium"> = ["small", "medium"];

      variants.forEach((variant) => {
        sizes.forEach((size) => {
          const { unmount } = render(
            <Button variant={variant} size={size}>
              {`${variant} ${size}`}
            </Button>,
          );
          expect(screen.getByRole("button")).toBeInTheDocument();
          unmount();
        });
      });
    });
  });

  describe("Icons", () => {
    const StartIcon = () => <span data-testid="start-icon">→</span>;
    const EndIcon = () => <span data-testid="end-icon">←</span>;

    it("renders with start icon only", () => {
      render(<Button startIcon={<StartIcon />}>Start Icon Only</Button>);
      expect(screen.getByTestId("start-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("end-icon")).not.toBeInTheDocument();
    });

    it("renders with end icon only", () => {
      render(<Button endIcon={<EndIcon />}>End Icon Only</Button>);
      expect(screen.getByTestId("end-icon")).toBeInTheDocument();
      expect(screen.queryByTestId("start-icon")).not.toBeInTheDocument();
    });

    it("renders with both icons", () => {
      render(
        <Button startIcon={<StartIcon />} endIcon={<EndIcon />}>
          Both Icons
        </Button>,
      );
      expect(screen.getByTestId("start-icon")).toBeInTheDocument();
      expect(screen.getByTestId("end-icon")).toBeInTheDocument();
    });
  });

  describe("Loading State", () => {
    it("shows loading state with spinner for all variants", () => {
      const variants: Array<"contained" | "outlined" | "text"> = ["contained", "outlined", "text"];

      variants.forEach((variant) => {
        const { unmount } = render(
          <Button variant={variant} loading>
            {`Loading ${variant}`}
          </Button>,
        );
        const button = screen.getByRole("button");
        expect(button).toBeDisabled();
        expect(button.querySelector("svg")).toBeInTheDocument();
        expect(button.querySelector("span")).toHaveClass(buttonLabelHidden);
        unmount();
      });
    });

    it("maintains correct spinner color based on variant and color", () => {
      const { rerender } = render(
        <Button variant="contained" color="primary" loading>
          Loading Contained Primary
        </Button>,
      );
      expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();

      rerender(
        <Button variant="outlined" color="primary" loading>
          Loading Outlined Primary
        </Button>,
      );
      expect(screen.getByRole("button").querySelector("svg")).toBeInTheDocument();
    });
  });

  describe("Interactive States", () => {
    it("handles click events correctly", () => {
      const handleClick = vi.fn();
      render(<Button onClick={handleClick}>Click me</Button>);
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("prevents click events when disabled", () => {
      const handleClick = vi.fn();
      render(
        <Button disabled onClick={handleClick}>
          Disabled Button
        </Button>,
      );
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("prevents click events when loading", () => {
      const handleClick = vi.fn();
      render(
        <Button loading onClick={handleClick}>
          Loading Button
        </Button>,
      );
      fireEvent.click(screen.getByRole("button"));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe("Custom Component", () => {
    it("renders as different HTML elements", () => {
      const { rerender } = render(
        <Button component="a" href="/test">
          Link Button
        </Button>,
      );
      expect(screen.getByRole("link")).toHaveAttribute("href", "/test");

      rerender(
        <Button component="div" role="button">
          Div Button
        </Button>,
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
    });
  });

  describe("Full Width", () => {
    it("applies full width style correctly", () => {
      render(<Button fullWidth>Full Width Button</Button>);
      const button = screen.getByRole("button");
      expect(button).toHaveStyle({ width: "100%" });
    });

    it("combines full width with other props", () => {
      render(
        <Button fullWidth variant="contained" color="primary" size="medium">
          Full Width Contained
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveStyle({ width: "100%" });
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      const customClass = "custom-class";
      render(<Button className={customClass}>Custom Class Button</Button>);
      expect(screen.getByRole("button")).toHaveClass(customClass);
    });

    it("combines custom className with variant classes", () => {
      const customClass = "custom-class";
      render(
        <Button className={customClass} variant="contained" color="primary">
          Custom Class Contained
        </Button>,
      );
      const button = screen.getByRole("button");
      expect(button).toHaveClass(customClass);
    });
  });
});
