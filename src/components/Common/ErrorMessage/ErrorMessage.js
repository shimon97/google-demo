import React from "react";
import { Grid } from "@mui/material";

export const ErrorMessage = ({error}) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <h1>{error || "an error has occurred"}</h1>
      </Grid>
    </Grid>
  );
};
