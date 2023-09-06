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

  return (
    <StyledContainer>
      <SearchContainer>
        <StyledTextField
          type="text"
          value={query}
          onChange={handleInputChange}
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
        onClick={async () => {
          await handleSetMoviesByInput(query);
          setLoadingGetMovies(false);
        }}
      >
        Buscar
      </StyledButton>
    </StyledContainer>
  );
}

export default MovieSearch;
