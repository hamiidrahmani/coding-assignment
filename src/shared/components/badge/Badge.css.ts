import { themeVars } from "@/shared/styles/theme.css";
import { style, styleVariants } from "@vanilla-extract/css";

export const badge = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: `${themeVars.space.xs} ${themeVars.space.sm}`,
  borderRadius: themeVars.borderRadius.lg,
  fontSize: themeVars.fontSize.xs,
  fontWeight: themeVars.fontWeight.medium,
  lineHeight: themeVars.lineHeight.tight,
});

export const colors = styleVariants({
  primary: {
    backgroundColor: themeVars.color.primary.main,
    color: themeVars.color.common.white,
  },
  secondary: {
    backgroundColor: themeVars.color.secondary.main,
    color: themeVars.color.common.white,
  },
  "common.white": {
    backgroundColor: themeVars.color.common.white,
    color: themeVars.color.primary.main,
  },
});
