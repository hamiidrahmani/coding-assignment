import { themeVars } from "@/shared/styles";
import { style, styleVariants } from "@vanilla-extract/css";
import type { ButtonSize } from "./types";

const createButtonSizeStyles = (size: ButtonSize) => {
  const sizeMap = {
    small: {
      fontSize: themeVars.fontSize.sm,
      paddingLeft: themeVars.space.sm,
      paddingRight: themeVars.space.sm,
      paddingTop: themeVars.space.xs,
      paddingBottom: themeVars.space.xs,
      borderRadius: themeVars.borderRadius.sm,
      lineHeight: themeVars.lineHeight.normal,
      fontWeight: themeVars.fontWeight.bold,
    },
    medium: {
      fontSize: themeVars.fontSize.base,
      paddingLeft: themeVars.space.md,
      paddingRight: themeVars.space.md,
      paddingTop: themeVars.space.sm,
      paddingBottom: themeVars.space.sm,
      borderRadius: themeVars.borderRadius.sm,
      lineHeight: themeVars.lineHeight.normal,
      fontWeight: themeVars.fontWeight.bold,
    },
  };
  return sizeMap[size];
};

export const buttonBase = style({
  fontFamily: "inherit",
  display: "inline-flex",
  position: "relative",
  alignItems: "center",
  userSelect: "none",
  verticalAlign: "middle",
  appearance: "none",
  justifyContent: "center",
  textDecoration: "none",
  textAlign: "center",
  minWidth: "64px",
  borderColor: "currentColor",
  transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)",
  cursor: "pointer",

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

export const buttonSizeVariants = styleVariants({
  small: createButtonSizeStyles("small"),
  medium: createButtonSizeStyles("medium"),
});

export const containedButtonVariants = styleVariants({
  primary: {
    color: themeVars.color.common.white,
    backgroundColor: themeVars.color.primary.main,
    border: `1px solid ${themeVars.color.primary.main}`,
  },
  "common.white": {
    color: themeVars.color.primary.main,
    backgroundColor: themeVars.color.common.white,
    border: `1px solid ${themeVars.color.common.white}`,
  },
});

export const outlinedButtonVariants = styleVariants({
  primary: {
    color: themeVars.color.primary.main,
    border: `1px solid ${themeVars.color.primary.main}`,
    background: "none",
  },
  "common.white": {
    color: themeVars.color.common.white,
    border: `1px solid ${themeVars.color.common.white}`,
    background: "none",
  },
});

export const textButtonVariants = styleVariants({
  primary: {
    color: themeVars.color.primary.main,
    border: "none",
    background: "none",
  },
  "common.white": {
    color: themeVars.color.common.white,
    border: "none",
    background: "none",
  },
});

export const fullWidthVariant = style({ width: "100%" });

export const buttonStartIcon = style({
  display: "inherit",
  marginRight: themeVars.space.sm,
  selectors: { "svg&": { marginLeft: themeVars.space.xs } },
});

export const buttonEndIcon = style({
  display: "inherit",
  marginLeft: themeVars.space.sm,
  selectors: { "svg&": { marginLeft: themeVars.space.xs } },
});

export const buttonLabel = style({
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "opacity 200ms cubic-bezier(0.4, 0, 0.2, 1)",
});

export const buttonLabelVisible = style({
  opacity: 1,
});

export const buttonLabelHidden = style({
  opacity: 0,
});

export const buttonSpinner = style({
  position: "absolute",
  display: "flex",
  left: "50%",
  transform: "translate(-50%)",
});
