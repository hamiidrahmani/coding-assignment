import { themeVars } from "@/shared/styles";
import { style } from "@vanilla-extract/css";

export const movieCardList = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(264px, 1fr))",
  gap: themeVars.space.md,
});

export const playerModal = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "70vh",
  width: "100%",
});
