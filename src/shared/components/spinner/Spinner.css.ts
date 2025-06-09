import { themeVars } from "@/shared/styles";
import { style, keyframes, styleVariants } from "@vanilla-extract/css";

const rotate = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

const circleAnimation = keyframes({
  "0%": {
    strokeDasharray: "1px, 200px",
    strokeDashoffset: "0",
  },
  "50%": {
    strokeDasharray: "100px, 200px",
    strokeDashoffset: "-15px",
  },
  "100%": {
    strokeDasharray: "100px, 200px",
    strokeDashoffset: "-125px",
  },
});

export const spinnerBase = style({
  display: "inline-block",
  animation: `${rotate} 1.4s linear infinite`,
});

export const spinnerSizeVariants = styleVariants({
  small: {
    width: "20px",
    height: "20px",
  },
  medium: {
    width: "24px",
    height: "24px",
  },
  large: {
    width: "28px",
    height: "28px",
  },
  XLarge: {
    width: "32px",
    height: "32px",
  },
});

export const spinnerColorVariants = styleVariants({
  primary: {
    color: themeVars.color.primary.main,
  },
  secondary: {
    color: themeVars.color.secondary.main,
  },
  "common.white": {
    color: themeVars.color.common.white,
  },
});

export const spinnerCircle = style({
  stroke: "currentColor",
  strokeDasharray: "80px, 200px",
  strokeDashoffset: "0",
  animation: `${circleAnimation} 1.4s ease-in-out infinite`,
});
