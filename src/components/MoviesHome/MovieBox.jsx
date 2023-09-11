import React, { useState } from "react";
import {
  Card,
  StylePlayCircleOutlineIcon,
  StyledModal,
  StyledPaper,
} from "./MovieBoxElements";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [alreadyInFavoritesAlert, setAlreadyInFavoritesAlert] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleFavorite = () => {
    // Comprueba si la película ya está en favoritos
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Comprueba si la película actual ya está en favoritos comparando el título
    const isAlreadyFavorite = favorites.some((movie) => movie.title === title);

    if (isAlreadyFavorite) {
      // Si la película ya es favorita, muestra una alerta indicando que ya está en favoritos
      setSuccessAlert(false); // Oculta la alerta de éxito (si estaba mostrándose)
      setAlreadyInFavoritesAlert(true); // Muestra la alerta de "ya en favoritos"
    } else {
      // Si la película no es favorita, agrégala a favoritos
      const newFavorite = { title, poster_path, vote_average, release_date };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, newFavorite])
      );
      setAlreadyInFavoritesAlert(false); // Oculta la alerta de "ya en favoritos" (si estaba mostrándose)
      setSuccessAlert(true); // Muestra la alerta de éxito

      // Cambia el estado para indicar que ahora la película es favorita
      setIsFavorite(true);
    }
  };

  return (
    <>
      <Card>
        <img
          src={API_IMG + poster_path}
          alt={title}
          onClick={handleOpen}
        />
        <StylePlayCircleOutlineIcon
          onClick={handleOpen}
          sx={{ fontSize: 70 }}
        />

        <Stack
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
          direction="row"
          spacing={2}
        >
          <StyledModal
            open={open}
            onClose={handleClose}
          >
            <StyledPaper>
              <Stack spacing={2}>
                <img
                  src={API_IMG + poster_path}
                  alt={title}
                  style={{ width: "45vw", height: "500px" }}
                />
                <Typography variant="h4">{title}</Typography>
                <Typography variant="h6">
                  Calificación: {vote_average}
                </Typography>
                <Typography variant="subtitle1">
                  Fecha de lanzamiento: {release_date}
                </Typography>
                <Typography variant="h6">Contexto</Typography>
                <Typography variant="body1">{overview}</Typography>

                <Button
                  variant="contained"
                  color="error"
                  startIcon={<FavoriteIcon />}
                  onClick={handleToggleFavorite}
                  sx={{
                    marginTop: 2,
                    width: "150px",
                    backgroundColor: isFavorite ? "red" : "", // Cambia el color del botón si es favorito
                  }}
                >
                  {isFavorite ? "Eliminar de Favoritas" : "Añadir a Favoritas"}
                </Button>
              </Stack>
            </StyledPaper>
          </StyledModal>
        </Stack>
        {successAlert && (
          <Alert
            onClose={() => setSuccessAlert(false)}
            severity="success"
          >
            Película agregada a favoritas con éxito
          </Alert>
        )}

        {alreadyInFavoritesAlert && (
          <Alert
            onClose={() => setAlreadyInFavoritesAlert(false)}
            severity="info"
          >
            Esta película ya está en tus favoritas
          </Alert>
        )}
      </Card>
    </>
  );
};
