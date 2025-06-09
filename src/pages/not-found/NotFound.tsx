import { Button } from "@/shared/components/button";
import { Paper } from "@/shared/components/paper";
import { Typography } from "@/shared/components/typography";
import { useNavigate } from "react-router-dom";
import * as styles from "./NotFound.css";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Paper className={styles.errorCard}>
        <div className={styles.content}>
          <Typography variant="h1">404</Typography>
          <Typography variant="h2">Page Not Found</Typography>
          <Typography variant="body1">The page you're looking for doesn't exist.</Typography>
          <div className={styles.actions}>
            <Button onClick={() => navigate("/")}>Go to Home</Button>
            <Button variant="outlined" onClick={() => navigate(-1)}>
              Go Back
            </Button>
          </div>
        </div>
      </Paper>
    </div>
  );
}
