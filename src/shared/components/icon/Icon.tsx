import clsx from "clsx";
import React, { type ReactNode, type SVGProps } from "react";
import * as styles from "./Icon.css";

interface BaseIconProps extends SVGProps<SVGSVGElement> {
  children: React.ReactElement;
  width?: number | string;
  height?: number | string;
  size?: number | string;
  color?: "default" | "primary" | "secondary" | "tertiary";
}

export function Icon({ children, size, width, height, color = "default", className, ...props }: BaseIconProps) {
  const iconProps = {
    width: size || width || 24,
    height: size || height || 24,
    className: clsx(styles.base, styles.colors[color], className),
    ...props,
  };

  return React.cloneElement(children, iconProps);
}

interface IconButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color: "default" | "primary" | "secondary" | "tertiary";
}

export function IconButton({ children, color = "default", className, ...props }: IconButton) {
  return (
    <button className={clsx(styles.iconButton, styles.colors[color], className)} {...props}>
      {children}
    </button>
  );
}
