import { ExclamationMarkTriangleFillIcon } from "@/icons";
import { Icon } from "@/shared/components/icon";
import { Typography } from "@/shared/components/typography";
import clsx from "clsx";
import * as styles from "./EmptyState.css";

interface EmptyStateProps {
  message: string;
  className?: string;
  actions?: React.ReactNode;
}
export function EmptyState({ message, className, actions, ...props }: EmptyStateProps) {
  return (
    <div className={clsx(styles.root, className)} {...props}>
      <Icon size={64} color="primary">
        <ExclamationMarkTriangleFillIcon />
      </Icon>
      <Typography variant="body1">{message}</Typography>

      {actions}
    </div>
  );
}
