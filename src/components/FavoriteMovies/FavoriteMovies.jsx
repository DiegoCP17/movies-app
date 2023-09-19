import React, { useState, useEffect } from "react";

import { Typography, CardContent, CardMedia, Alert } from "@mui/material";
import {
  Container,
  DeleteButton,
  MovieCard,
  MoviesContainer,
  TitleTypography,
} from "./StyledFavoriteMovies";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const FavoriteMovies = () => {
  const [favorites, setFavorites] = useState([]);
  const [successAlert, setSuccessAlert] = useState(false);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleRemoveFavorite = (title) => {
    const updatedFavorites = favorites.filter((movie) => movie.title !== title);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    setSuccessAlert(true);
  };

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ mt: "15px", mb: "25px", fontStyle: "italic" }}
      >
        Películas Favoritas
      </Typography>
      {successAlert && (
        <Alert
          onClose={() => setSuccessAlert(false)}
          severity="success"
          style={{ marginTop: "16px" }}
        >
          La película ha sido eliminada de Favoritas con éxito
        </Alert>
      )}
      <MoviesContainer>
        {favorites.map((movie) => (
          <MovieCard key={movie.title}>
            <CardMedia
              component="img"
              height="200"
              src={API_IMG + movie.poster_path}
              alt={movie.title}
            />
            <CardContent>
              <TitleTypography component="div">{movie.title}</TitleTypography>
              <DeleteButton
                variant="contained"
                color="error"
                onClick={() => handleRemoveFavorite(movie.title)}
              >
                Eliminar
              </DeleteButton>
            </CardContent>
          </MovieCard>
        ))}
      </MoviesContainer>
    </Container>
  );
};
