import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "../Badge";
import type { BadgeColor } from "../Badge";
import { badge, colors } from "../Badge.css";

describe("Badge", () => {
  it("renders with default props", () => {
    render(<Badge>Default Badge</Badge>);
    const element = screen.getByText("Default Badge");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass(badge);
    expect(element).toHaveClass(colors.primary);
  });

  describe("Colors", () => {
    const badgeColors: BadgeColor[] = ["primary", "secondary", "common.white"];

    it("renders with all available colors", () => {
      badgeColors.forEach((color) => {
        const { unmount } = render(<Badge color={color}>{`${color} badge`}</Badge>);
        const element = screen.getByText(`${color} badge`);
        expect(element).toHaveClass(badge);
        expect(element).toHaveClass(colors[color]);
        unmount();
      });
    });

    it("defaults to primary color when not specified", () => {
      render(<Badge>Default color badge</Badge>);
      const element = screen.getByText("Default color badge");
      expect(element).toHaveClass(colors.primary);
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      const customClass = "custom-class";
      render(<Badge className={customClass}>Custom class badge</Badge>);
      const element = screen.getByText("Custom class badge");
      expect(element).toHaveClass(customClass);
      expect(element).toHaveClass(badge);
    });

    it("combines custom className with color classes", () => {
      const customClass = "custom-class";
      render(
        <Badge className={customClass} color="secondary">
          Combined classes badge
        </Badge>,
      );
      const element = screen.getByText("Combined classes badge");
      expect(element).toHaveClass(customClass);
      expect(element).toHaveClass(badge);
      expect(element).toHaveClass(colors.secondary);
    });
  });

  describe("Children", () => {
    it("renders text children", () => {
      render(<Badge>Simple text</Badge>);
      expect(screen.getByText("Simple text")).toBeInTheDocument();
    });

    it("renders React node children", () => {
      const ChildComponent = () => <span>Child component</span>;
      render(
        <Badge>
          <ChildComponent />
        </Badge>,
      );
      expect(screen.getByText("Child component")).toBeInTheDocument();
    });

    it("renders multiple children", () => {
      render(
        <Badge>
          <span>First</span>
          <span>Second</span>
        </Badge>,
      );
      expect(screen.getByText("First")).toBeInTheDocument();
      expect(screen.getByText("Second")).toBeInTheDocument();
    });
  });
});
