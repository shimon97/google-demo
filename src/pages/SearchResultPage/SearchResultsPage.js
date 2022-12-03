import React, { useEffect } from "react";
import Logo from "../../assets/Logo.png";
import { Grid } from "@mui/material";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router-dom";
import styles from "./SearchResultsPage.module.css";
import { SearchInput } from "../../components/Common/SearchInput/SearchInput";
import { searchOptions } from "../../mock/searchOptionsData";
import { ResultItem } from "../../components/SearchResultsPage/ResultItem/ResultItem";
import { ErrorMessage } from "../../components/Common/ErrorMessage/ErrorMessage";

export const SearchResultsPage = () => {
  const history = useHistory();
  const { search } = useLocation();
  const { q: querySearch } = queryString.parse(search);

  // redirect to main page if querySearch is empty
  useEffect(() => {
    if (!querySearch) {
      history.push(`/`);
    }
  }, [history, querySearch]);

  const ResultsItems = () => {
    const startsWithRegex = new RegExp(`^${querySearch}`, "i");

    const filteredResults = searchOptions.filter((searchOption) =>
      startsWithRegex.test(searchOption.title)
    );

    const resultsItems = filteredResults.map((result) => {
      return (<ResultItem key={result.id} result={result} />)
    });

    // if no results found show error message, else show the results list
    if (!resultsItems.length) {
      return (<ErrorMessage error="No Results Found!" />)
    }

    return resultsItems;
  };

  return (
    <Grid container className={styles.containerGrid}>
      <Grid item xs={12} className={styles.logoGrid}>
        <img src={Logo} className={styles.logo} alt="logo" />
        <SearchInput
          searchInputClass={styles.searchInput}
          defaultSearchValue={querySearch}
        />
      </Grid>
      <Grid item xs={12}>
        <h3>results for "{querySearch}":</h3>
      </Grid>
      <ResultsItems />
    </Grid>
  );
};
