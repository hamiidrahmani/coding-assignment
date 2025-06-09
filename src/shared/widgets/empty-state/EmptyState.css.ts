import { themeVars } from "@/shared/styles/theme.css";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  maxWidth: 300,
  margin: "0 auto",
  padding: themeVars.space.md,
  gap: themeVars.space.md,
  textAlign: "center",
});
