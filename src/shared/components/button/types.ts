import type { ReactNode, HTMLProps } from "react";

export type ButtonVariant = "contained" | "text" | "outlined";
export type ButtonColor = "primary" | "common.white";
export type ButtonSize = "small" | "medium";

export interface ButtonLabelProps {
  visible: boolean;
}

export interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, "size"> {
  size?: ButtonSize;
  variant?: ButtonVariant;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  disabled?: boolean;
  color?: ButtonColor;
  fullWidth?: boolean;
  component?: React.ElementType;
  className?: string;
  loading?: boolean;
}
