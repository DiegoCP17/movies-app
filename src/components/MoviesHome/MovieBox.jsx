import React, { useState } from "react";
import {
  Card,
  // StyleButton,
  StylePlayCircleOutlineIcon,
  StyledModal,
  StyledPaper,
} from "./MovieBoxElements";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Stack from "@mui/material/Stack";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

export const MovieBox = ({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
        {/* <StyleButton>{release_date}</StyleButton> */}

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
                  sx={{
                    marginTop: 2,
                    width: "150px",
                  }}
                >
                  Añadir a Favoritas
                </Button>
              </Stack>
            </StyledPaper>
          </StyledModal>
        </Stack>
      </Card>
    </>
  );
};
