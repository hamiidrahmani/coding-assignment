import { forwardRef } from "react";
import * as styles from "./Spinner.css";
import clsx from "clsx";
import type { SpinnerProps } from "./types";

export const Spinner = forwardRef<HTMLDivElement, SpinnerProps>(
  ({ size = "medium", color = "primary", className, ...props }, ref) => {
    const classes = clsx(
      styles.spinnerBase,
      styles.spinnerSizeVariants[size],
      styles.spinnerColorVariants[color],
      className,
    );

    return (
      <div ref={ref} className={classes} {...props}>
        <svg width="100%" height="100%" viewBox="22 22 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle className={styles.spinnerCircle} cx="44" cy="44" r="20.2" fill="none" strokeWidth="3.6" />
        </svg>
      </div>
    );
  },
);
