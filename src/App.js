import React, { useState, useEffect } from "react";
import axios from "axios";
import { Home } from "./Pages/Home";
import { SearchAppBar } from "./components/Navbar/Appbar";
import { Navigate, Route, Routes } from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { orange } from "@mui/material/colors";
import { Favoritas } from "./Pages/Favoritas";

function App() {
  const [movies, setMovies] = useState([]);
  const [loadingGetMovies, setLoadingGetMovies] = useState(false);

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const API_BASE = process.env.REACT_APP_API_URL;
    const API_TOP_RATED_MOVIES_URL = `${API_BASE}movie/top_rated?api_key=${API_KEY}&language=es-ES&page=1`;

    axios(API_TOP_RATED_MOVIES_URL)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSetMoviesByInput = async (inputValue) => {
    try {
      setLoadingGetMovies(true);
      const API_KEY = process.env.REACT_APP_API_KEY;
      const API_SEARCH = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${inputValue}`;
      const response = await axios.get(API_SEARCH);
      const data = response.data.results;
      setMovies(data);
      setLoadingGetMovies(false);
    } catch (error) {
      console.error(error);
      setLoadingGetMovies(false);
      setMovies([]);
    }
  };

  const navArrayLinks = [
    {
      title: "Inicio",
      path: "/Inicio",
      icon: <HomeIcon sx={{ color: orange[500] }} />,
    },
    {
      title: "Favoritas",
      path: "/Favoritas",
      icon: <FavoriteIcon sx={{ color: orange[500] }} />,
    },
  ];

  return (
    <>
      <div style={{ backgroundColor: "#080f28", minHeight: "100vh" }}>
        <SearchAppBar
          navArrayLinks={navArrayLinks}
          handleSetMoviesByInput={handleSetMoviesByInput}
          setLoadingGetMovies={setLoadingGetMovies}
          loadingGetMovies={loadingGetMovies}
        />
        <Routes>
          <Route
            path="/"
            element={<Navigate to="/Inicio" />}
          />
          <Route
            path="/Inicio"
            element={<Home movies={movies} />}
          />
          <Route
            path="/Favoritas"
            element={<Favoritas />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
