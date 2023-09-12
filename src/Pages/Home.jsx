import { Typography } from "@mui/material";
import { MoviesHome } from "../components/MoviesHome/MoviesHome";
import { Slider } from "../components/Slider/Slider";

export const Home = ({
  movies,
  handleSetMoviesByInput,
  loadingGetMovies,
  setLoadingGetMovies,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#080f28",
        maxwidth: "100%",
      }}
    >
      <Slider />

      <Typography
        variant="h3"
        sx={{
          color: "whitesmoke",
          mt: "40px",
          mb: "40px",
          fontStyle: "italic",
        }}
      >
        Peliculas Mejor Valoradas
      </Typography>
      <br />
      <MoviesHome
        movies={movies}
        handleSetMoviesByInput={handleSetMoviesByInput}
        setLoadingGetMovies={setLoadingGetMovies}
        loadingGetMovies={loadingGetMovies}
      />
    </div>
  );
};
