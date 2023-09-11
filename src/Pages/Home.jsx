import React, { useState, useEffect } from "react";
import axios from "axios";
import { MoviesHome } from "../components/MoviesHome/MoviesHome";
import { Slider } from "../components/Slider/Slider";
import { SearchAppBar } from "../components/Navbar/Appbar";

export const Home = () => {
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
      return data;
    } catch (error) {
      console.error(error);
      setLoadingGetMovies(false);
      setMovies([]);
      return [];
    }
  };
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
      {/* <SearchAppBar
        
      /> */}
      <Slider />
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
