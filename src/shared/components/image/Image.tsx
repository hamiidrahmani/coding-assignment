import notFoundImg from "@/assets/not-found-500X750.jpeg";
import { clsx } from "clsx";
import { useState } from "react";
import { Skeleton } from "../skeleton/Skeleton";
import * as styles from "./Image.css";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  width: string | number;
  height: string | number;
}

export function Image({ src, alt, className, width, height }: ImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
    }
  };

  return (
    <div className={clsx(styles.container, className)}>
      {!isLoaded && <Skeleton variant="rectangular" width={width} height={height} className={styles.imageSkeleton} />}
      <img
        src={hasError ? notFoundImg : src}
        alt={alt}
        className={clsx(styles.image, isLoaded ? styles.imageLoaded : styles.imageLoading)}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        width={width}
        height={height}
        loading="lazy"
      />
    </div>
  );
}
