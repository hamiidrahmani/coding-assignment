import { themeVars } from "@/shared/styles/theme.css";
import { keyframes, style, styleVariants } from "@vanilla-extract/css";

const pulseAnimation = keyframes({
  "0%": {
    opacity: 1,
  },
  "50%": {
    opacity: 0.4,
  },
  "100%": {
    opacity: 1,
  },
});

export const skeleton = style({
  display: "block",
  backgroundColor: themeVars.color.line.primary,
  position: "relative",
  overflow: "hidden",
});

export const animations = style({
  animation: `${pulseAnimation} 1.5s ease-in-out infinite`,
});

export const variants = styleVariants({
  text: {
    borderRadius: themeVars.borderRadius.sm,
  },
  rectangular: {
    borderRadius: themeVars.borderRadius.sm,
  },
  rounded: {
    borderRadius: themeVars.borderRadius.lg,
  },
  circular: {
    borderRadius: "50%",
  },
});
