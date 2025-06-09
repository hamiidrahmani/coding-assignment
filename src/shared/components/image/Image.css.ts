import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  width: "100%",
  height: "100%",
});

export const imageSkeleton = style({
  position: "absolute",
  inset: 0,
  selectors: { "&&": { position: "absolute" } },
});

export const image = style({
  objectFit: "cover",
  transition: "opacity 300ms ease-in-out",
});

export const imageLoaded = style({ opacity: 1 });

export const imageLoading = style({ opacity: 0 });
