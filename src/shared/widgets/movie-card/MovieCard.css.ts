import { themeVars } from "@/shared/styles";
import { style } from "@vanilla-extract/css";

export const movieCard = style({
  padding: 0,
  overflow: "hidden",
  position: "relative",
  transition: "background-color 0.2s ease-in-out",
});

export const movieCardOverlay = style({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  opacity: 0,
  transition: "opacity 0.2s ease-in-out",
  pointerEvents: "none",
  "@media": {
    "screen and (min-width: 768px)": {
      selectors: {
        [`${movieCard}:hover &`]: { opacity: 1, pointerEvents: "auto" },
        [`${movieCard}:focus-within &`]: { opacity: 1, pointerEvents: "auto" },
      },
    },
  },
});

export const movieCardOverlayViewed = style({
  opacity: 1,
  pointerEvents: "auto",
});

export const movieCardViewIcon = style({
  position: "absolute",
  top: themeVars.space.md,
  left: themeVars.space.md,
  zIndex: 1,
  "@media": {
    "screen and (min-width: 768px)": {
      visibility: "hidden",
    },
  },
});

export const movieCardImage = style({
  display: "flex",
  transition: "transform 0.2s ease-in-out",
  "@media": {
    "screen and (min-width: 768px)": {
      selectors: {
        [`${movieCard}:hover &`]: { transform: "scale(1.05)" },
      },
    },
  },
});

export const movieCardContent = style({
  display: "flex",
  flexDirection: "column",
  padding: themeVars.space.md,
  gap: themeVars.space.md,
  height: "100%",
});

export const movieCardTitle = style({
  gap: themeVars.space.sm,
  textAlign: "center",
});

export const movieCardActions = style({
  display: "flex",
  flexDirection: "column",
  gap: themeVars.space.sm,
});

export const movieCardDescription = style({
  textAlign: "left",
  overflowY: "auto",
  flex: 1,
});

export const movieCardHeader = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const movieCardStarIcon = style({
  "@media": {
    "screen and (max-width: 768px)": {
      marginLeft: themeVars.space.xl,
    },
  },
});
