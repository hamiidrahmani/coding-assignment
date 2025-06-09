import clsx from "clsx";
import { forwardRef, type PropsWithChildren } from "react";
import { elevationVariants, paperBase, paperVariants } from "./paper.css";
import type { PaperProps } from "./types";

export const Paper = forwardRef<HTMLDivElement, PropsWithChildren<PaperProps>>(function PaperRoot(
  { children, variant = "outlined", elevation = 0, className, ...restProps },
  ref,
) {
  const getVariantStyles = () => {
    if (variant === "elevation" && elevation >= 0) {
      return elevationVariants[Math.min(elevation, 4) as keyof typeof elevationVariants];
    }
    return paperVariants[variant];
  };

  const classes = clsx(paperBase, getVariantStyles(), className);

  return (
    <div className={classes} ref={ref} {...restProps}>
      {children}
    </div>
  );
});
