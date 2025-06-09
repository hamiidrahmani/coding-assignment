import { themeVars } from "@/shared/styles";
import { style, styleVariants } from "@vanilla-extract/css";

export const paperBase = style({
  backgroundColor: themeVars.color.common.white,
  borderRadius: themeVars.borderRadius.md,
  padding: themeVars.space.md,
});

export const paperVariants = styleVariants({
  outlined: { border: `1px solid ${themeVars.color.line.primary}` },
  elevation: { boxShadow: themeVars.shadow.md },
});

export const elevationVariants = styleVariants({
  0: {},
  1: {
    boxShadow: themeVars.shadow.sm,
  },
  2: {
    boxShadow: themeVars.shadow.md,
  },
  3: {
    boxShadow: themeVars.shadow.lg,
  },
  4: {
    boxShadow: themeVars.shadow.xl,
  },
});
