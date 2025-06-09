import { StarOffIcon, StarOnIcon, VisibilityOffIcon, VisibilityOnIcon } from "@/icons";
import { IconButton } from "@/shared/components/icon";
import { Image } from "@/shared/components/image";
import { Paper } from "@/shared/components/paper";
import { Skeleton } from "@/shared/components/skeleton";
import { Typography } from "@/shared/components/typography";
import clsx from "clsx";
import { forwardRef, useReducer, type ReactNode } from "react";
import * as styles from "./MovieCard.css";

export interface MovieCardProps {
  title: string;
  overview: string;
  releaseDate: string;
  starred: boolean;
  actions: ReactNode;
  poster: string;
  onStar?: () => void;
}

export type WithLoading<T> = ({ loading: true } & Partial<T>) | ({ loading?: false } & T);

export const MovieCard = forwardRef<HTMLDivElement, WithLoading<MovieCardProps>>(
  ({ title, overview, releaseDate, starred, actions, loading, poster, onStar }, ref) => {
    const [viewed, toggleViewed] = useReducer((state: boolean) => !state, false);
    return (
      <Paper ref={ref} className={styles.movieCard}>
        {loading ? (
          <Skeleton data-testid="skeleton" variant="rectangular" width="100%" height="450px" />
        ) : (
          <>
            <IconButton
              color="secondary"
              onClick={toggleViewed}
              className={styles.movieCardViewIcon}
              data-testid="visibility-button"
              aria-label="Toggle viewed"
            >
              {!viewed ? (
                <VisibilityOnIcon data-testid="VisibilityOnIcon" />
              ) : (
                <VisibilityOffIcon data-testid="VisibilityOffIcon" />
              )}
            </IconButton>
            <Image
              className={styles.movieCardImage}
              src={`https://image.tmdb.org/t/p/w500/${poster}`}
              alt={title}
              width="100%"
              height="450px"
            />

            <div
              className={clsx(styles.movieCardOverlay, {
                [styles.movieCardOverlayViewed]: viewed,
              })}
            >
              <div className={styles.movieCardContent}>
                <div className={styles.movieCardHeader}>
                  <IconButton
                    color="secondary"
                    onClick={onStar}
                    className={styles.movieCardStarIcon}
                    data-testid="star-button"
                    aria-label="Toggle starred"
                  >
                    {starred ? <StarOnIcon data-testid="StarOnIcon" /> : <StarOffIcon data-testid="StarOffIcon" />}
                  </IconButton>

                  {releaseDate && (
                    <Typography color="common.white" variant="subtitle1">
                      {new Date(releaseDate).getFullYear()}
                    </Typography>
                  )}
                </div>
                <div className={styles.movieCardTitle}>
                  <Typography color="common.white" variant="h6">
                    {title}
                  </Typography>
                </div>
                <div className={styles.movieCardDescription}>
                  <Typography color="common.white" variant="body2" component="p">
                    {overview}
                  </Typography>
                </div>

                <div className={styles.movieCardActions}>{actions}</div>
              </div>
            </div>
          </>
        )}
      </Paper>
    );
  },
);
