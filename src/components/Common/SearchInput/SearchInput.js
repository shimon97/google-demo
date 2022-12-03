import React from "react";
import { Autocomplete, InputAdornment, TextField } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import styles from "./SearchInput.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { searchOptions } from "../../../mock/searchOptionsData";

export const SearchInput = ({ searchInputClass, defaultSearchValue = "" }) => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState(defaultSearchValue);
  const [fillteredOptions, setFilteredOptions] = useState([]);
  const searchInputRef = useRef(null);

  // focus search input on page startup (MainPage and SearchResultsPage)
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  // update options on load and on every search input
  useEffect(() => {
    updateFilteredOptions();
  }, [searchValue]);

  const handleOnSubmit = (event) => {
    // prevent default event of refreshing the page on submitting form
    event.preventDefault();

    // only if there is value then search
    if (!!searchValue) {
      history.push(`/search?q=${searchValue}`);
    }
  };

  function updateFilteredOptions() {
    const fillteredOptions = searchOptions.filter((option) =>
      option.title.toLowerCase().startsWith(searchValue?.toLowerCase() || "")
    );
    setFilteredOptions(fillteredOptions.slice(0, 10));
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <Autocomplete
        options={fillteredOptions}
        value={{title: searchValue}}
        className={styles.searchAutocomplete}
        isOptionEqualToValue={(option, value) => option.title === value.title}
        getOptionLabel={(option) => option.title || ""}
        onChange={(e, value) => {
          setSearchValue(value?.title || "");
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            inputRef={searchInputRef}
            value={searchValue}
            variant="outlined"
            className={searchInputClass}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <InputAdornment position="end" onClick={handleOnSubmit} className={styles.searchIcon}>
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </form>
  );
};
