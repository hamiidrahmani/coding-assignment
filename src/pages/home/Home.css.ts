import { themeVars } from "@/shared/styles";
import { style } from "@vanilla-extract/css";

export const searchContainer = style({
  maxWidth: "600px",
  margin: "0 auto",
  marginBottom: themeVars.space.md,
});

export const movieList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(264px, 1fr))",
  justifyContent: "center",
  gap: themeVars.space.md,
});
