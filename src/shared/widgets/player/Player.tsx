import { Spinner } from "@/shared/components/spinner";
import { useState } from "react";
import ReactPlayer, { type ReactPlayerProps } from "react-player";
import * as styles from "./Player.css";

export function Player(props: ReactPlayerProps) {
  const [isReady, setIsReady] = useState(false);

  const handleReady = () => {
    setIsReady(true);
  };

  return (
    <>
      {!isReady && <Spinner size="XLarge" className={styles.spinner} />}
      <ReactPlayer controls playing width="100%" height="100%" onReady={handleReady} style={{ zIndex: 1 }} {...props} />
    </>
  );
}
