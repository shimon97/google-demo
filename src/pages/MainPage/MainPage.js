import React from "react";
import Logo from "../../assets/Logo.png";
import { SearchInput } from "../../components/Common/SearchInput/SearchInput";
import { Grid } from "@mui/material";
import styles from "./MainPage.module.css";
export const MainPage = () => {
  return (
    <Grid container className={styles.containerGrid}>
      <Grid item xs={12} className={styles.logoGrid}>
        <img src={Logo} className={styles.logo} alt="logo" />
      </Grid>
      <Grid item xs={12} className={styles.searchInputGrid}>
        <SearchInput />
      </Grid>
    </Grid>
  );
};
