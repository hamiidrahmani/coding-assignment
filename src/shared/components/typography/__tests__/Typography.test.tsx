import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Typography } from "../Typography";
import { baseTypography, typographyVariants, typographyColors } from "../typography.css";

describe("Typography", () => {
  describe("Variants", () => {
    const variants = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2"] as const;

    it("renders all variants with correct HTML elements", () => {
      variants.forEach((variant) => {
        const { unmount } = render(<Typography variant={variant}>{`${variant} text`}</Typography>);
        const element = screen.getByText(`${variant} text`);
        expect(element).toBeInTheDocument();
        unmount();
      });
    });

    it("applies correct variant classes", () => {
      variants.forEach((variant) => {
        const { unmount } = render(<Typography variant={variant}>{`${variant} text`}</Typography>);
        const element = screen.getByText(`${variant} text`);
        expect(element).toHaveClass(baseTypography);
        expect(element).toHaveClass(typographyVariants[variant]);
        unmount();
      });
    });
  });

  describe("Colors", () => {
    const colors = ["primary", "common.white", "common.black"] as const;

    it("renders with all available colors", () => {
      colors.forEach((color) => {
        const { unmount } = render(<Typography color={color}>{`${color} text`}</Typography>);
        const element = screen.getByText(`${color} text`);
        expect(element).toHaveClass(typographyColors[color]);
        unmount();
      });
    });

    it("defaults to primary color when not specified", () => {
      render(<Typography>Default color text</Typography>);
      const element = screen.getByText("Default color text");
      expect(element).toHaveClass(typographyColors.primary);
    });
  });

  describe("Custom Component", () => {
    it("renders with custom component prop", () => {
      render(
        <Typography component="div" variant="h1">
          Custom Component
        </Typography>,
      );
      const element = screen.getByText("Custom Component");
      expect(element.tagName.toLowerCase()).toBe("div");
    });

    it("maintains variant mapping when custom component is not provided", () => {
      const { rerender } = render(<Typography variant="h1">Heading 1</Typography>);
      expect(screen.getByText("Heading 1").tagName.toLowerCase()).toBe("h1");

      rerender(<Typography variant="body1">Body text</Typography>);
      expect(screen.getByText("Body text").tagName.toLowerCase()).toBe("span");
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      const customClass = "custom-class";
      render(<Typography className={customClass}>Custom class text</Typography>);
      const element = screen.getByText("Custom class text");
      expect(element).toHaveClass(customClass);
      expect(element).toHaveClass(baseTypography);
    });

    it("combines custom className with variant and color classes", () => {
      const customClass = "custom-class";
      render(
        <Typography className={customClass} variant="h1" color="primary">
          Combined classes text
        </Typography>,
      );
      const element = screen.getByText("Combined classes text");
      expect(element).toHaveClass(customClass);
      expect(element).toHaveClass(baseTypography);
      expect(element).toHaveClass(typographyVariants.h1);
      expect(element).toHaveClass(typographyColors.primary);
    });
  });

  describe("Props Forwarding", () => {
    it("forwards additional HTML attributes", () => {
      render(
        <Typography data-testid="test-typography" aria-label="Test label" id="test-id">
          Props forwarding test
        </Typography>,
      );
      const element = screen.getByTestId("test-typography");
      expect(element).toHaveAttribute("aria-label", "Test label");
      expect(element).toHaveAttribute("id", "test-id");
    });

    it("forwards event handlers", () => {
      const handleClick = vi.fn();
      render(<Typography onClick={handleClick}>Clickable text</Typography>);
      const element = screen.getByText("Clickable text");
      fireEvent.click(element);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe("Children", () => {
    it("renders text children", () => {
      render(<Typography>Simple text</Typography>);
      expect(screen.getByText("Simple text")).toBeInTheDocument();
    });

    it("renders React node children", () => {
      const ChildComponent = () => <span>Child component</span>;
      render(
        <Typography>
          <ChildComponent />
        </Typography>,
      );
      expect(screen.getByText("Child component")).toBeInTheDocument();
    });

    it("renders multiple children", () => {
      render(
        <Typography>
          <span>First</span>
          <span>Second</span>
        </Typography>,
      );
      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();
    });
  });

  describe("Default Values", () => {
    it("uses body1 as default variant", () => {
      render(<Typography>Default variant text</Typography>);
      const element = screen.getByText("Default variant text");
      expect(element).toHaveClass(typographyVariants.body1);
      expect(element).toHaveClass(baseTypography);
    });

    it("uses span as default element for body1", () => {
      render(<Typography>Default element text</Typography>);
      const element = screen.getByText("Default element text");
      expect(element.tagName.toLowerCase()).toBe("span");
    });
  });
});
