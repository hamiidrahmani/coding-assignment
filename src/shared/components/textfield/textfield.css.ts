import { themeVars } from "@/shared/styles";
import { style, styleVariants } from "@vanilla-extract/css";

export const formControlRoot = style({
  border: 0,
  margin: 0,
  display: "inline-flex",
  padding: 0,
  position: "relative",
  minWidth: 0,
  flexDirection: "column",
  verticalAlign: "top",
});

export const formControlVariants = styleVariants({
  fullWidth: { width: "100%" },
  auto: { width: "auto" },
});

export const formControlStateVariants = styleVariants({
  disabled: { opacity: 0.5 },
  enabled: { opacity: 1 },
});

export const inputWrapper = style({
  cursor: "text",
  display: "inline-flex",
  fontSize: themeVars.fontSize.sm,
  color: themeVars.color.text.primary,
  boxSizing: "border-box",
  alignItems: "center",
  borderRadius: themeVars.borderRadius.sm,
  lineHeight: "1.1876em",
  letterSpacing: "0.00938em",
  overflow: "hidden",
  position: "relative",
});

export const input = style({
  color: "currentColor",
  width: "100%",
  border: 0,
  minHeight: "24px",
  margin: 0,
  display: "block",
  minWidth: 0,
  background: "none",
  boxSizing: "content-box",
  letterSpacing: "inherit",
  overflow: "hidden",
  borderStyle: "solid",
  padding: themeVars.space.sm,
  selectors: { "&:focus": { outline: "none" } },
});

export const fieldset = style({
  position: "absolute",
  border: "2px solid",
  borderColor: themeVars.color.line.primary,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 0,
  padding: "0 8px",
  overflow: "hidden",
  borderStyle: "solid",
  borderRadius: "inherit",
  pointerEvents: "none",

  selectors: {
    [`${inputWrapper}:focus-within &`]: {
      borderColor: themeVars.color.primary.main,
    },
  },
});
