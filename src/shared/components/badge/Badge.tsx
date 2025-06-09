import clsx from "clsx";
import { badge, colors } from "./Badge.css";

export type BadgeColor = "primary" | "secondary" | "common.white";

export interface BadgeProps {
  color?: BadgeColor;
  children: React.ReactNode;
  className?: string;
}

export function Badge({ color = "primary", children, className }: BadgeProps) {
  return <span className={clsx(badge, colors[color], className)}>{children}</span>;
}
