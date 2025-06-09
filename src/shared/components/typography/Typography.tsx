import clsx from "clsx";
import React, { forwardRef } from "react";
import { baseTypography, typographyColors, typographyVariants } from "./typography.css";

export type TypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";

type HTMLElementType = keyof React.JSX.IntrinsicElements;

const variantMapping: Record<TypographyVariant, HTMLElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "span",
  body2: "span",
};

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  component?: React.ElementType;
  className?: string;
  color?: "primary" | "common.white" | "common.black";
}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "body1", component, className, children, color = "primary", ...props }, ref) => {
    const classes = clsx(baseTypography, typographyVariants[variant], typographyColors[color], className);
    const Component = component || variantMapping[variant] || "span";

    return (
      <Component ref={ref} className={classes} {...props}>
        {children}
      </Component>
    );
  },
);
