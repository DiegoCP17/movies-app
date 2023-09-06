import React, { useState } from "react";

import {
  StyledTextField,
  SearchContainer,
  StyledButton,
  StyledContainer,
} from "./StyleSearchMovies";

function MovieSearch({
  handleSetMoviesByInput,
  setLoadingGetMovies,
  loadingGetMovies,
}) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearch = async () => {
    await handleSetMoviesByInput(query);
    setLoadingGetMovies(false);
  };

  return (
    <StyledContainer>
      <SearchContainer>
        <StyledTextField
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Buscar películas..."
          inputProps={{
            style: {
              color: "orange",
            },
          }}
          variant="outlined"
          fullWidth
        />
      </SearchContainer>
      <StyledButton
        type="submit"
        variant="contained"
        color="primary"
        loading={loadingGetMovies}
        onClick={handleSearch}
      >
        Buscar
      </StyledButton>
    </StyledContainer>
  );
}

export default MovieSearch;
