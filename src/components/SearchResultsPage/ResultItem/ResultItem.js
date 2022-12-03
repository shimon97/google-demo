import React from "react";
import { Grid } from "@mui/material";
import styles from "./ResultItem.module.css";

export const ResultItem = ({ result }) => {
  const { title, description, link } = result;

  const onClickTitleLink = () => {
    // need to open result link, as demo opening a query search from stackoverflow
    // window.open(link, "_blank");
    window.open(`https://stackoverflow.com/search?q=${title}`, "_blank");
  };

  const onKeyPressTitleLink = (key) => {
    if (key === "Space" || key === "Enter") {
      onClickTitleLink();
    }
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <h2
          tabIndex={0}
          className={styles.title}
          onKeyPress={(e) => onKeyPressTitleLink(e.code)}
          onClick={onClickTitleLink}
        >
          {title}
        </h2>
      </Grid>
      <Grid item xs={12}>
        <p className={styles.description}>{description}</p>
      </Grid>
    </Grid>
  );
};
