import clsx from "clsx";
import { forwardRef, useId, useMemo, type ChangeEvent, type HTMLProps } from "react";
import {
  fieldset,
  formControlRoot,
  formControlStateVariants,
  formControlVariants,
  input,
  inputWrapper,
} from "./textfield.css";

interface TextFieldProps extends HTMLProps<HTMLInputElement> {
  fullWidth?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Textfield = forwardRef<HTMLInputElement, TextFieldProps>(function Textfield(props, ref) {
  const { value, defaultValue, placeholder, disabled, fullWidth, className, id, ...restProps } = props;

  const generatedId = useId();
  const fieldId = id ?? generatedId;

  const classNames = useMemo(() => {
    return {
      formControl: clsx(
        formControlRoot,
        formControlVariants[fullWidth ? "fullWidth" : "auto"],
        formControlStateVariants[disabled ? "disabled" : "enabled"],
        className,
      ),
      inputWrapper: clsx(inputWrapper),
      input: clsx(input),
    };
  }, [fullWidth, disabled, className]);

  const ariaAttributes = {
    "aria-required": restProps.required || undefined,
  };

  return (
    <div className={classNames.formControl}>
      <div className={classNames.inputWrapper}>
        <input
          {...restProps}
          ref={ref}
          id={fieldId}
          className={classNames.input}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          {...ariaAttributes}
        />

        <fieldset className={fieldset} />
      </div>
    </div>
  );
});
