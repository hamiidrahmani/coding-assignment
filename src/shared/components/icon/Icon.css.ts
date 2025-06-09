import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles";

export const base = style({
  display: "inline-block",
  userSelect: "none",
});

export const colors = styleVariants({
  default: {
    color: themeVars.color.common.white,
  },
  primary: {
    color: themeVars.color.primary.main,
  },
  secondary: {
    color: themeVars.color.secondary.main,
  },
  tertiary: {
    color: themeVars.color.tertiary.main,
  },
});

export const iconButton = style({
  background: "none",
  border: "none",
  padding: themeVars.space.xs,
  cursor: "pointer",
  width: "fit-content",
  display: "inline-flex",
  selectors: {
    "&:not([disabled])": {
      cursor: "pointer",
    },
    "&[disabled]": {
      cursor: "not-allowed",
      pointerEvents: "none",
      opacity: 0.5,
    },
    "&:hover:not([disabled])": {
      opacity: 0.8,
    },
    "&:active:not([disabled])": {
      opacity: 0.6,
    },
  },
});

export const sizes = styleVariants({
  sm: {
    width: 16,
    height: 16,
  },
  md: {
    width: 24,
    height: 24,
  },
  lg: {
    width: 32,
    height: 32,
  },
});
