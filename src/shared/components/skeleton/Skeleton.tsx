import { clsx } from "clsx";
import type { CSSProperties } from "react";
import * as styles from "./Skeleton.css";

export interface SkeletonProps {
  variant?: "text" | "rectangular" | "rounded" | "circular";
  width?: string | number;
  height?: string | number;
  className?: string;
}

export function Skeleton({ variant = "text", width, height, className, ...props }: SkeletonProps) {
  const inlineStyles: CSSProperties = {
    ...(width && { width: typeof width === "number" ? `${width}px` : width }),
    ...(height && {
      height: typeof height === "number" ? `${height}px` : height,
    }),
  };

  const classes = clsx(styles.skeleton, styles.variants[variant], styles.animations, className);

  return <span className={classes} style={inlineStyles} {...props} />;
}
