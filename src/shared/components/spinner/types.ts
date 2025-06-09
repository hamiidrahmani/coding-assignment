export type SpinnerSize = "small" | "medium" | "large" | "XLarge";
export type SpinnerColor = "primary" | "secondary" | "common.white";

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerColor;
  className?: string;
}
