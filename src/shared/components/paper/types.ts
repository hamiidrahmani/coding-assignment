import type { HTMLProps } from "react";

export type PaperVariant = "elevation" | "outlined";

export interface PaperProps extends Omit<HTMLProps<HTMLDivElement>, "children"> {
  variant?: PaperVariant;
  elevation?: number;
  className?: string;
}
