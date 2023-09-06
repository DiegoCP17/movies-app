import React, { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
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
  const [searching, setSearching] = useState(false);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearchWithDelay();
    }
  };

  const handleSearchWithDelay = async () => {
    setSearching(true); // Mostrar estado de búsqueda

    // Agregar un retraso de 2 segundos antes de realizar la búsqueda
    setTimeout(async () => {
      await handleSetMoviesByInput(query);
      setLoadingGetMovies(false);
      setSearching(false); // Ocultar estado de búsqueda cuando termine
    }, 500); // 2000 milisegundos (2 segundos)
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
        loading={searching || loadingGetMovies}
        loadingIndicator={<span style={{ color: "grey" }}>Buscando</span>}
        onClick={handleSearchWithDelay}
      >
        Buscar
      </LoadingButton>
    </StyledContainer>
  );
}

export default MovieSearch;
