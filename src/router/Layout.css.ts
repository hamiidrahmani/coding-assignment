import { style } from "@vanilla-extract/css";
import { themeVars } from "../shared/styles";

export const container = style({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const toolbar = style({
  maxWidth: themeVars.mixins.maxWidth,
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  gap: themeVars.space.lg,
});

export const main = style({
  width: "100%",
  maxWidth: themeVars.mixins.maxWidth,
  padding: themeVars.space.md,
  margin: "0 auto",
});

export const badge = style({
  minWidth: "24px",
  minHeight: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const navItemsContainer = style({
  display: "flex",
  alignItems: "center",
  gap: themeVars.space.md,
});

export const activeNavItem = style({
  position: "relative",
  selectors: {
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: -12,
      borderTopLeftRadius: themeVars.borderRadius.sm,
      borderTopRightRadius: themeVars.borderRadius.sm,
      left: 0,
      right: 0,
      height: "4px",
      backgroundColor: themeVars.color.common.white,
    },
  },
});
