import React, { useState } from "react";

import MovieSearch from "../SearchMovies/SearchMovie";
import { MoviesHome } from "../MoviesHome/MoviesHome";
import { Navbar } from "../Navbar/Navbar";
import { Slider } from "../Slider/Slider";

export const Home = () => {
  const [mainMovies, setMainMovies] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
        backgroundColor: "#080f28",
      }}
    >
      <Navbar />
      <Slider />
      <MovieSearch
        setMainMovies={setMainMovies}
        setShowSearchResults={setShowSearchResults}
      />
      {showSearchResults ? (
        // Renderiza los resultados de la búsqueda
        <div>{/* Muestra los resultados de la búsqueda */}</div>
      ) : (
        // Renderiza las películas principales
        <MoviesHome movies={mainMovies} />
      )}
    </div>
  );
};
