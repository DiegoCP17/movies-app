import React, { useState, useEffect } from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Alert,
} from "@mui/material";

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
    <div>
      <Typography variant="h2">Películas Favoritas</Typography>
      <List>
        {favorites.map((movie) => (
          <ListItem key={movie.title}>
            <ListItemText primary={movie.title} />
            <Button
              variant="contained"
              color="error"
              onClick={() => handleRemoveFavorite(movie.title)}
            >
              Eliminar
            </Button>
          </ListItem>
        ))}
      </List>
      {successAlert && (
        <Alert
          onClose={() => setSuccessAlert(false)}
          severity="success"
        >
          Película eliminada de Favoritas con exito
        </Alert>
      )}
    </div>
  );
};


