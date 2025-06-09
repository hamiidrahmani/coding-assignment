import { themeVars } from "@/shared/styles";
import { style } from "@vanilla-extract/css";

export const root = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  boxSizing: "border-box",
  flexShrink: 0,
  backgroundColor: themeVars.color.primary.main,
  color: themeVars.color.text.primary,
  borderBottom: `1px solid ${themeVars.color.line.primary}`,
  boxShadow: themeVars.shadow.md,
  zIndex: 2,
  position: "sticky",
  top: 0,
});

export const toolbarInner = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  boxSizing: "border-box",
  minHeight: "56px",
  paddingLeft: themeVars.space.lg,
  paddingRight: themeVars.space.lg,
});
