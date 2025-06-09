import { style, globalStyle } from "@vanilla-extract/css";
import { themeVars } from "@/shared/styles";

export const modalWrapper = style({
  position: "fixed",
  zIndex: 1300,
  inset: 0,
});

export const modalContainer = style({
  height: "100%",
  outline: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const modal = style({
  padding: themeVars.space.md,
  backgroundColor: themeVars.color.common.white,
  borderRadius: themeVars.borderRadius.md,
  boxShadow: themeVars.shadow.md,
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  position: "relative",
  zIndex: 10,
  margin: "auto 10px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: themeVars.mixins.modalMaxWidth,
});

export const modalHeader = style({
  display: "flex",
  flexWrap: "wrap",
  gap: themeVars.space.sm,
  marginBottom: themeVars.space.sm,
  position: "relative",
  textAlign: "center",
});

export const closeIconWrapper = style({
  background: "none",
  lineHeight: 0,
  border: "none",
  padding: 0,
  cursor: "pointer",
  color: themeVars.color.primary.main,
});

export const backdrop = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 9,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

globalStyle(".modal-enter", {
  opacity: 0,
});

globalStyle(".modal-enter-active", {
  opacity: 1,
  transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
});

globalStyle(".modal-exit", {
  opacity: 1,
});

globalStyle(".modal-exit-active", {
  opacity: 0,
  transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
});
