import { themeVars } from "@/shared/styles";
import { style } from "@vanilla-extract/css";

export const container = style({
  maxWidth: "600px",
  margin: "0 auto",
  paddingTop: themeVars.space["4xl"],
});

export const errorCard = style({
  padding: themeVars.space.xl,
  textAlign: "center",
});

export const content = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: themeVars.space.md,
});

export const actions = style({
  display: "flex",
  gap: themeVars.space.md,
  justifyContent: "center",
});
