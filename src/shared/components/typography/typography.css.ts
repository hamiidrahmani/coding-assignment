import { style, styleVariants } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles";

export const baseTypography = style({
  margin: 0,
  fontFamily: "Poppins, sans-serif",
});

export const typographyVariants = styleVariants({
  h1: {
    fontSize: themeVars.fontSize["4xl"],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
  },
  h2: {
    fontSize: themeVars.fontSize["3xl"],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
  },
  h3: {
    fontSize: themeVars.fontSize["2xl"],
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
  },
  h4: {
    fontSize: themeVars.fontSize.xl,
    fontWeight: themeVars.fontWeight.bold,
    lineHeight: themeVars.lineHeight.tight,
  },
  h5: {
    fontSize: themeVars.fontSize.lg,
    fontWeight: themeVars.fontWeight.medium,
    lineHeight: themeVars.lineHeight.tight,
  },
  h6: {
    fontSize: themeVars.fontSize.base,
    fontWeight: themeVars.fontWeight.medium,
    lineHeight: themeVars.lineHeight.tight,
  },
  subtitle1: {
    fontSize: themeVars.fontSize.lg,
    fontWeight: themeVars.fontWeight.medium,
    lineHeight: themeVars.lineHeight.normal,
  },
  subtitle2: {
    fontSize: themeVars.fontSize.base,
    fontWeight: themeVars.fontWeight.medium,
    lineHeight: themeVars.lineHeight.normal,
  },
  body1: {
    fontSize: themeVars.fontSize.base,
    fontWeight: themeVars.fontWeight.normal,
    lineHeight: themeVars.lineHeight.relaxed,
  },
  body2: {
    fontSize: themeVars.fontSize.sm,
    fontWeight: themeVars.fontWeight.normal,
    lineHeight: themeVars.lineHeight.relaxed,
  },
});

export const typographyColors = styleVariants({
  primary: {
    color: themeVars.color.text.primary,
  },
  "common.white": {
    color: themeVars.color.common.white,
  },
  "common.black": {
    color: themeVars.color.common.black,
  },
});
