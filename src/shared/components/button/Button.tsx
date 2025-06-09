import clsx from "clsx";
import { forwardRef } from "react";
import {
  buttonBase,
  buttonEndIcon,
  buttonLabel,
  buttonSizeVariants,
  buttonStartIcon,
  containedButtonVariants,
  fullWidthVariant,
  textButtonVariants,
  outlinedButtonVariants,
  buttonLabelHidden,
  buttonSpinner,
} from "./button.css";
import type { ButtonProps } from "./types";
import { Spinner } from "../spinner";

const getSpinnerColor = (variant: ButtonProps["variant"], color: ButtonProps["color"]) => {
  if (variant === "contained") {
    return color === "common.white" ? "primary" : "common.white";
  }
  if (variant === "outlined") {
    return color === "primary" ? "primary" : "common.white";
  }
  return color;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function ButtonRoot(
  {
    children,
    color = "primary",
    disabled,
    endIcon: endIconProp,
    startIcon: startIconProp,
    fullWidth,
    size = "medium",
    variant = "contained",
    className,
    component,
    loading,
    ...restProps
  },
  ref,
) {
  const startIcon = startIconProp && <span className={buttonStartIcon}>{startIconProp}</span>;

  const endIcon = endIconProp && <span className={buttonEndIcon}>{endIconProp}</span>;

  const getVariantStyles = () => {
    switch (variant) {
      case "text":
        return textButtonVariants[color];
      case "outlined":
        return outlinedButtonVariants[color];
      case "contained":
      default:
        return containedButtonVariants[color];
    }
  };

  const getSizeStyles = () => {
    return buttonSizeVariants[size];
  };

  const classes = clsx(buttonBase, getSizeStyles(), getVariantStyles(), fullWidth && fullWidthVariant, className);

  const Component = component || "button";

  return (
    <Component disabled={disabled || loading} className={classes} ref={ref} {...restProps}>
      <span className={clsx(buttonLabel, { [buttonLabelHidden]: loading })}>
        {startIcon}
        {children}
        {endIcon}
      </span>
      {loading && (
        <div className={buttonSpinner}>
          <Spinner size={size} color={getSpinnerColor(variant, color)} />
        </div>
      )}
    </Component>
  );
});
