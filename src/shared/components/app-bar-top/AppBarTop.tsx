import clsx from "clsx";
import React from "react";
import * as styles from "./AppBarTop.css";

export interface AppBarTopProps {
  children?: React.ReactNode;
  className?: string;
}

export function AppBarTop({ children, className }: AppBarTopProps) {
  return <header className={clsx(styles.root, className)}>{children}</header>;
}

export interface ToolbarProps {
  children?: React.ReactNode;
  className?: string;
}

export function Toolbar({ children, className }: ToolbarProps) {
  return <div className={clsx(styles.toolbarInner, className)}>{children}</div>;
}
