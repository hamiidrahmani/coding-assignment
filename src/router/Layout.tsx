import { FilmIcon } from "@/icons";
import { AppBarTop, Toolbar } from "@/shared/components/app-bar-top";
import { Badge } from "@/shared/components/badge";
import { Button } from "@/shared/components/button";
import { Icon, IconButton } from "@/shared/components/icon";
import { useFavoriteState, useWatchLaterState } from "@/shared/store";
import clsx from "clsx";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import * as styles from "./Layout.css";

const FAVORITE_PATH = "/favorite";
const WATCH_LATER_PATH = "/watch-later";

export function Layout() {
  const favorite = useFavoriteState((state) => state.favorite);
  const watchLater = useWatchLaterState((state) => state.watchLater);
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className={styles.container}>
      <AppBarTop>
        <Toolbar className={styles.toolbar}>
          <IconButton color="default" onClick={() => navigate("/")} aria-label="Home Logo">
            <Icon size={28} onClick={() => navigate("/")}>
              <FilmIcon />
            </Icon>
          </IconButton>

          <div className={styles.navItemsContainer}>
            <Link
              to={FAVORITE_PATH}
              className={clsx({
                [styles.activeNavItem]: location.pathname === FAVORITE_PATH,
              })}
            >
              <Button
                variant="text"
                color="common.white"
                size="small"
                component="span"
                endIcon={
                  <Badge className={styles.badge} color="common.white">
                    {favorite.length}
                  </Badge>
                }
              >
                Favorite
              </Button>
            </Link>
            <Link
              to={WATCH_LATER_PATH}
              className={clsx({
                [styles.activeNavItem]: location.pathname === WATCH_LATER_PATH,
              })}
            >
              <Button
                variant="text"
                color="common.white"
                size="small"
                component="span"
                endIcon={
                  <Badge className={styles.badge} color="common.white">
                    {watchLater.length}
                  </Badge>
                }
              >
                Watch Later
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBarTop>
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
