import React, { useState } from "react";
import axios from "axios";
import {
  ImageWrapper,
  ImageContainer,
  StyledTextField,
  SearchContainer,
  StyledButton,
  StyledContainer,
} from "./StyleSearchMovies";

function MovieSearch({ setMainMovies, setShowSearchResults }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const searchMovies = async (event) => {
    event.preventDefault();

    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

    try {
      const response = await axios.get(API_SEARCH);
      const data = response.data;
      // Actualiza el estado de las películas principales
      setMainMovies(data.results);
      // Muestra los resultados de la búsqueda
      setShowSearchResults(true);
      // Actualiza el estado de las películas de búsqueda
      setMovies(data.results);
    } catch (error) {
      console.error("Error al buscar películas:", error);
    }
  };

  return (
    <StyledContainer>
      <form
        onSubmit={searchMovies}
        setMainMovies={setMainMovies}
        setShowSearchResults={setShowSearchResults}
      >
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
          <StyledButton
            type="submit"
            variant="contained"
            color="primary"
          >
            Buscar
          </StyledButton>
        </SearchContainer>
      </form>
      <ImageContainer>
        {movies.map((movie) => (
          <ImageWrapper key={movie.id}>
            {movie.poster_path && (
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`Poster de ${movie.title}`}
              />
            )}
          </ImageWrapper>
        ))}
      </ImageContainer>
    </StyledContainer>
  );
}

export default MovieSearch;
