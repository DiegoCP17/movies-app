import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import {
  StyledTextField,
  SearchContainer,
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
      handleSearchWithDelay();
    }
  };

  const handleSearchWithDelay = async () => {
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
      <LoadingButton
        type="submit"
        variant="contained"
        loading={loadingGetMovies}
        loadingIndicator={<span style={{ color: "grey" }}>Buscando</span>}
        onClick={handleSearchWithDelay}
      >
        Buscar
      </LoadingButton>
    </StyledContainer>
  );
}

export default MovieSearch;
