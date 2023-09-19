import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
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
  const returnContext = {
    movies,
    loadingGetMovies,
    handleSetMoviesByInput,
    setLoadingGetMovies,
  };
  return (
    <MovieContext.Provider value={returnContext}>
      {children}
    </MovieContext.Provider>
  );
};

export { MovieContext };
