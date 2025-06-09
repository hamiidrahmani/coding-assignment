import { ExclamationMarkTriangleFillIcon } from "@/icons";
import { Button } from "@/shared/components/button";
import { Icon } from "@/shared/components/icon";
import { Typography } from "@/shared/components/typography";
import clsx from "clsx";
import * as styles from "./ErrorAlert.css";

interface ErrorAlertProps {
  message: string;
  className?: string;
  onClick: () => void;
}

export function ErrorAlert({ message, className, onClick, ...props }: ErrorAlertProps) {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Icon size={64} color="primary">
        <ExclamationMarkTriangleFillIcon />
      </Icon>
      <Typography variant="body1">{message}</Typography>

      <Button onClick={onClick} variant="outlined" fullWidth>
        Try again
      </Button>
    </div>
  );
}
