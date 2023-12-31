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
  const verifyIfMovieIsInFavorites = (movieTitle) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!Array.isArray(favorites)) {
      favorites = [favorites];
    }
    console.log(favorites);
    return favorites.some((movie) => movie.title === movieTitle);
  };

  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    verifyIfMovieIsInFavorites(title)
  );
  const [successAlert, setSuccessAlert] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(true);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const isAlreadyFavorite = verifyIfMovieIsInFavorites(title);

    if (isAlreadyFavorite) {
      if (!Array.isArray(favorites)) {
        favorites = [favorites];
      }
      const updatedFavorites = favorites.filter(
        (movie) => movie.title !== title
      );

      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
      setSuccessAlert(true);
    } else {
      const newFavorite = { title, poster_path, vote_average, release_date };
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favorites, newFavorite])
      );
      setIsFavorite(true);
      setSuccessAlert(true);
    }
  };
  const handleImageLoad = () => {
    setImageLoaded(false);
  };
  return (
    <>
      {imageLoaded && (
        <Card>
          <img
            src={API_IMG + poster_path}
            alt={title}
            onClick={handleOpen}
            onError={handleImageLoad}
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
                    // Establece el evento onLoad
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
                      backgroundColor: isFavorite ? "red" : "",
                    }}
                  >
                    {isFavorite
                      ? "Eliminar de Favoritas"
                      : "Añadir a Favoritas"}
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
              {isFavorite
                ? "Película agregada a Favoritas con éxito"
                : "Película eliminada de Favoritas con éxito"}
            </Alert>
          )}
        </Card>
      )}
    </>
  );
};
