import React, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Alert,
} from "@mui/material";

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
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        flexDirection: "column",
        backgroundColor: "#080f28",
        maxwidth: "100%",
      }}
    >
      <Typography variant="h2" sx={{color:"white", mt:"15px"}}>Películas Favoritas</Typography>
      {favorites.map((movie) => (
        <Card
          key={movie.title}
          style={{ margin: "16px", maxWidth: "400px" }}
        >
          <CardMedia
            component="img"
            height="200"
            src={API_IMG + movie.poster_path}
            alt={movie.title}
          />
          <CardContent>
            <Typography
              variant="h5"
              component="div"
            >
              {movie.title}
            </Typography>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleRemoveFavorite(movie.title)}
            >
              Eliminar
            </Button>
          </CardContent>
        </Card>
      ))}
      {successAlert && (
        <Alert
          onClose={() => setSuccessAlert(false)}
          severity="success"
          style={{ marginTop: "16px" }}
        >
          Película eliminada de Favoritas con éxito
        </Alert>
      )}
    </div>
  );
};
