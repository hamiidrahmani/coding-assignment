import { globalStyle } from "@vanilla-extract/css";
import { themeVars } from "./theme.css";

globalStyle("*", {
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
});

globalStyle("html", {
  fontSize: "16px",
  lineHeight: themeVars.lineHeight.normal,
});

globalStyle("body", {
  fontFamily: "Poppins, sans-serif",
  backgroundColor: themeVars.color.background.default,
  color: themeVars.color.text.primary,
  fontSize: themeVars.fontSize.base,
  fontWeight: themeVars.fontWeight.normal,
  lineHeight: themeVars.lineHeight.normal,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
});

globalStyle("a", {
  color: themeVars.color.primary.main,
  textDecoration: "none",
});

globalStyle("a:hover", {
  color: themeVars.color.primary.main,
  textDecoration: "underline",
});

globalStyle("button", {
  fontFamily: "inherit",
  fontSize: "inherit",
  cursor: "pointer",
  border: "none",
  outline: "none",
});
